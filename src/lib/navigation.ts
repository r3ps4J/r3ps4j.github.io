export function getSection(path: string) {
    const segments = path.split("/");
    const dir = segments[segments.indexOf("docs") + 1];
    if (!dir) {
        return undefined;
    }
    return {
        r3_servicesmanager: "r3_servicesmanager",
    }[dir];
}
