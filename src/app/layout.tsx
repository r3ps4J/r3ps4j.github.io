import { Geist, JetBrains_Mono } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import { Body } from "./layout.client";
import { Metadata } from "next";

const geist = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const mono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="R3 Docs" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </head>
            <Body>
                <Provider>{children}</Provider>
            </Body>
        </html>
    );
}

export const metadata: Metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        template: "%s | r3ps4J Docs",
        default: "r3ps4J Docs",
    },
};
