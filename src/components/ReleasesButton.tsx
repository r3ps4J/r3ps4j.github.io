import { Tag } from "lucide-react";
import LinkButton from "./LinkButton";

export default function ReleasesButton({ user, repo }: { user: string; repo: string }) {
    return (
        <LinkButton
            href={`https://github.com/${user}/${repo}/releases`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Tag/>
            Releases
        </LinkButton>
    );
}
