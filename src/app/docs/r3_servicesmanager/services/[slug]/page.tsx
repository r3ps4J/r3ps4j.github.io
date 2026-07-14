import { createCompiler } from "@fumadocs/mdx-remote";
import { DocsBody, DocsPage, DocsTitle, MarkdownCopyButton, ViewOptionsPopover } from "@/layouts/docs/page";
import { getMDXComponents } from "@/components/mdx";
import { services } from "../services";
import { notFound } from "next/navigation";

const user = "r3ps4J";
const repo = "r3_servicesmanager";
const branch = "v1.0.0";
const docsPath = "api/";

const compiler = createCompiler({
    // options
});

export default async function Page({ params }: PageProps<"/docs/r3_servicesmanager/services/[slug]">) {
    const { slug: service } = await params;
    if (!services.some((element) => element.key == service)) {
        notFound();
    }
    const markdownUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${docsPath}${service}/${service}.md`;
    const response = await fetch(markdownUrl);
    // Replace relative links to definition files
    let content = (await response.text()).replaceAll(
        "(./definitions/",
        `(https://github.com/${user}/${repo}/blob/${branch}/${docsPath}${service}/definitions/`,
    );
    // Remove the title as
    const lines = content.split("\n");
    const title = lines[0].replaceAll("#", "").trim();
    content = lines.slice(1).join("\n");
    const { toc, body: MdxContent } = await compiler.compile({
        source: content,
    });

    return (
        <DocsPage toc={toc}>
            <DocsTitle>{title}</DocsTitle>
            <div className="flex flex-row gap-2 items-center border-b pb-6">
                <MarkdownCopyButton markdownUrl={markdownUrl} />
                <ViewOptionsPopover
                    markdownUrl={markdownUrl}
                    githubUrl={`https://github.com/${user}/${repo}/blob/${branch}/${docsPath}${service}/${service}.md`}
                />
            </div>
            <DocsBody>
                <MdxContent components={getMDXComponents()} />
            </DocsBody>
        </DocsPage>
    );
}

export function generateStaticParams() {
    const params = services.map((service) => ({
        slug: service.key,
    }));

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return {
        title: services.find((service) => service.key == slug)?.label,
    };
}
