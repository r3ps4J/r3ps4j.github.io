import {
    ArrowUpDown,
    Backpack,
    BellRing,
    Braces,
    BriefcaseBusiness,
    Eye,
    IdCard,
    Landmark,
    LoaderCircle,
    LucideIcon,
    Package,
    PiggyBank,
    Pointer,
    RectangleEllipsis,
    SquareMenu,
    UserCheck,
} from "lucide-react";

export interface Service {
    key: string;
    label: string;
    icon: LucideIcon;
}

export const services = [
    { key: "banking", label: "Banking", icon: Landmark },
    { key: "callback", label: "Callback", icon: ArrowUpDown },
    { key: "contextMenu", label: "Context menu", icon: SquareMenu },
    { key: "economy", label: "Economy", icon: PiggyBank },
    { key: "employment", label: "Employment", icon: BriefcaseBusiness },
    { key: "identity", label: "Identity", icon: IdCard },
    { key: "inventory", label: "Inventory", icon: Backpack },
    { key: "metadata", label: "Metadata", icon: Braces },
    { key: "notification", label: "Notification", icon: BellRing },
    { key: "playerState", label: "Player state", icon: UserCheck },
    { key: "progress", label: "Progress", icon: LoaderCircle },
    { key: "stash", label: "Stash", icon: Package },
    { key: "target", label: "Target", icon: Eye },
    { key: "textUI", label: "Text UI", icon: RectangleEllipsis },
    { key: "usableItems", label: "Usable items", icon: Pointer },
];
