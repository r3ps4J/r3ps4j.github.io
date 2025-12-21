import { Metadata } from "next";

// This takes care of the title for the service pages
export const metadata: Metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        template: "%s - R3 Servicesmanager",
        default: "R3 Servicesmanager",
    },
};

export default function ServicesManagerLayout({ children }) {
    return children;
}
