import { Download } from "lucide-react";
import LinkButton from "./LinkButton";

export default function DownloadLatestButton({ user, repo, file }: { user: string; repo: string; file: string }) {
    return (
        <LinkButton
            href={`https://github.com/${user}/${repo}/releases/latest/download/${file}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Download />
            Download latest release
        </LinkButton>
    );
}
