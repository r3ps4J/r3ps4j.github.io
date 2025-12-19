import { Download } from "lucide-react";
import { Cards } from "nextra/components";

export default function DownloadLatestButton({ user, repo, file }: { user: string; repo: string; file: string }) {
    return (
        <Cards.Card
            icon={<Download />}
            title="Download latest release"
            href={`https://github.com/${user}/${repo}/releases/latest/download/${file}`}
            arrow
            // @ts-ignore
            target="_blank"
            rel="noopener noreferrer"
        />
    );
}
