import { Tag } from "lucide-react";
import { Cards } from "nextra/components";

export default function ReleasesButton({ user, repo }: { user: string; repo: string }) {
    return (
        <Cards.Card
            icon={<Tag />}
            title="Releases"
            href={`https://github.com/${user}/${repo}/releases`}
            arrow
            // @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
        />
    );
}
