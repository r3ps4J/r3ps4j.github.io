import { DefaultTemplateString, TemplateString } from "next/dist/lib/metadata/types/metadata-types";

function resolveTitleTemplate(template: string | null | undefined, title: string) {
    return template ? template.replace(/%s/g, title) : title;
}

type TitleMetadata = null | string | TemplateString | undefined;

export function resolveTitleMetadata(parentTitle: TitleMetadata, title: string | DefaultTemplateString): TitleMetadata {
    if (!parentTitle || typeof parentTitle == "string" || !("template" in parentTitle) || typeof title == "string") {
        return title;
    }
    return {
        template: resolveTitleTemplate(parentTitle.template, title.template),
        default: resolveTitleTemplate(parentTitle.template, title.default),
    };
}
