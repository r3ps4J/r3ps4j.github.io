import { Github } from "lucide-react";
import { Cards } from "nextra/components";

export default function RepositoryButton({ user, repo }: { user: string; repo: string }) {
    return (
        <Cards.Card
            icon={<Github />}
            title="Repository"
            href={`https://github.com/${user}/${repo}`}
            arrow
            // @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
        />
    );
}
