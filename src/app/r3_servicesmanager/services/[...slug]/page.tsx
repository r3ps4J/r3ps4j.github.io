import { notFound } from "next/navigation";
import { compileMdx } from "nextra/compile";
import { Callout, Tabs } from "nextra/components";
import { evaluate } from "nextra/evaluate";
import { convertToPageMap, mergeMetaWithPageMap, normalizePageMap } from "nextra/page-map";
import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";
import { $NextraMetadata, Folder, MdxFile, PageMapItem } from "nextra";
import { services } from "../services";

const user = "r3ps4J";
const repo = "r3_servicesmanager";
const branch = "v0.2.0";
const docsPath = "api/";
const filePaths: string[] = services.map((service) => service.key);

const { mdxPages, pageMap: _pageMap } = convertToPageMap({
    filePaths,
    basePath: "r3_servicesmanager/services",
});

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props) {
    const params = await props.params;
    const service = services.find((service) => service.key == params.slug);
    return {
        title: service.label,
    };
}

// `mergeMetaWithPageMap` is used to change sidebar order and title
const eslintPageMap = mergeMetaWithPageMap(_pageMap[0]!, {
    services: {
        items: Object.fromEntries(
            services.map((service) => [
                service.key,
                <div className="flex gap-2 items-center">
                    <service.icon size={14} /> {service.label}
                </div>,
            ])
        ),
    },
});

const pageMap: Folder<PageMapItem> = normalizePageMap(eslintPageMap);
export const childrenPageMap = (
    pageMap.children.find((value) => value["name"] == "services") as Folder<
        MdxFile<$NextraMetadata> & { title: string }
    >
).children;

const { wrapper: Wrapper, ...components } = getMDXComponents({
    $Tabs: Tabs,
    Callout,
});

type PageProps = Readonly<{
    params: Promise<{
        slug?: string[];
    }>;
}>;

export default async function Page(props: PageProps) {
    const params = await props.params;
    const route = params.slug?.join("/") ?? "";
    const filePath = mdxPages[route];

    if (!filePath) {
        notFound();
    }
    const response = await fetch(
        `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${docsPath}${filePath}/${filePath}.md`
    );
    // Replace relative links to definition files
    const data = (await response.text()).replaceAll(
        "(./definitions/",
        `(https://github.com/${user}/${repo}/blob/${branch}/${docsPath}${filePath}/definitions/`
    );
    const rawJs = await compileMdx(data, { filePath, mdxOptions: { format: "md" } });
    const { default: MDXContent, toc, metadata } = evaluate(rawJs, components);

    return (
        <Wrapper toc={toc} metadata={metadata} sourceCode={rawJs}>
            <MDXContent />
        </Wrapper>
    );
}

export function generateStaticParams() {
    const params = Object.keys(mdxPages).map((route) => ({
        slug: route.split("/"),
    }));

    return params;
}
