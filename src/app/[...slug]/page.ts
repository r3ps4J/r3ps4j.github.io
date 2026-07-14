import { source } from "@/lib/source";
import { notFound, redirect } from "next/navigation";

/**
 * Catch all redirect for old docs links which did not start with /docs.
 */
export default async function DocsRedirect({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;
    if (!slug || !slug[0]) {
        notFound();
    }
    const page = source.getPage(slug);
    if (!page) {
        notFound();
    }
    redirect(["/docs", ...slug].join("/"));
}

export async function generateStaticParams() {
    return source.generateParams();
}
