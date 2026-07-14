import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import { docsContentRoute, docsImageRoute, docsRoute } from "./shared";
import { services } from "@/app/docs/r3_servicesmanager/services/services";
import { Folder } from "fumadocs-core/page-tree";
import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
    baseUrl: docsRoute,
    source: docs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
});

// Adding services to sidebar
const servicesmanagerItems = (source.getPageTree().children.find((node) => node.name == "r3_servicesmanager") as Folder)
    .children;
const serviceItems = services.map((service) => ({
    type: "page" as const,
    name: service.label,
    url: "/docs/r3_servicesmanager/services/" + service.key,
    icon: service.icon,
}));
servicesmanagerItems.splice(
    servicesmanagerItems.findIndex((node) => node.type == "separator" && node.name == "Services") + 1,
    0,
    ...serviceItems,
);

export function getPageImage(page: (typeof source)["$inferPage"]) {
    const segments = [...page.slugs, "image.png"];

    return {
        segments,
        url: `${docsImageRoute}/${segments.join("/")}`,
    };
}

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
    const segments = [...page.slugs, "content.md"];

    return {
        segments,
        url: `${docsContentRoute}/${segments.join("/")}`,
    };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
    const processed = await page.data.getText("processed");

    return `# ${page.data.title} (${page.url})

${processed}`;
}
