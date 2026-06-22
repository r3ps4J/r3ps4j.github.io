import { Github } from "lucide-react";
import LinkButton from "./LinkButton";

export default function RepositoryButton({ user, repo }: { user: string; repo: string }) {
    return (
        <LinkButton href={`https://github.com/${user}/${repo}`} target="_blank" rel="noopener noreferrer">
            <Github />
            Repository
        </LinkButton>
    );
}
