import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import { Metadata } from "next";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

type Props = {
    params: Promise<{ mdxPath: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const { metadata } = await importPage(params.mdxPath);
    if (params.mdxPath && params.mdxPath.length > 1) {
        const { metadata: parentMetadata } = await importPage([params.mdxPath[0]]);
        metadata.title = `${metadata.title} - ${parentMetadata.title}`
    }
    return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props) {
    const params = await props.params;
    const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath);
    return (
        <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    );
}
