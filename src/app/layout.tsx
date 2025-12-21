import "../globals.css";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { childrenPageMap } from "./r3_servicesmanager/services/[...slug]/page";
import "nextra-theme-docs/style.css";
import { Folder, PageMapItem } from "nextra";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        template: "%s | r3ps4J Docs",
        default: "r3ps4J Docs",
    },
};

const pageMap = [...(await getPageMap())];
const servicesManagerApiItem = (
    pageMap.find((value) => value["name"] == "r3_servicesmanager") as Folder<PageMapItem>
).children.find((value) => value["name"] == "services") as Folder<PageMapItem>;
servicesManagerApiItem.children = childrenPageMap;

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
    <Navbar
        logo={
            <div className="flex gap-2 items-center">
                <Image src="/space_rounded_256.png" alt="R3" width={35} height={35} />
                <b>r3ps4J Docs</b>
            </div>
        }
        projectLink="https://github.com/r3ps4J/r3ps4j.github.io"
        chatLink="https://discord.gg/CTSsMuyu55"
    />
);
const footer = <Footer>r3ps4J</Footer>;

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="R3 Docs" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <body>
                <Layout
                    // banner={banner}
                    navbar={navbar}
                    pageMap={pageMap}
                    docsRepositoryBase="https://github.com/r3ps4j/r3ps4j.github.io"
                    footer={footer}
                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
