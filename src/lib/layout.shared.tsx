import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { discordInvite, gitConfig } from "./shared";
import { Logo } from "@/components/Logo";
import { Book } from "lucide-react";
import { SiKofi, SiDiscord } from "@icons-pack/react-simple-icons";

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            // JSX supported
            title: (
                <>
                    <Logo />
                    <span className="font-medium max-md:hidden">r3ps4J Docs</span>
                </>
            ),
            url: "/docs",
        },
        githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
        links: [
            {
                type: "main",
                text: "Documentation",
                url: "/docs",
                icon: <Book />,
                on: "nav",
            },
            {
                type: "icon",
                label: "Support me",
                icon: <SiKofi />,
                text: "Support me",
                url: "https://ko-fi.com/r3ps4j",
            },
            {
                type: "icon",
                label: "Discord",
                icon: <SiDiscord />,
                text: "Discord",
                url: discordInvite,
            },
        ],
    };
}
