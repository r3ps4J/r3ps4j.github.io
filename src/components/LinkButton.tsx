import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function LinkButton({ ...props }) {
    return (
        <a
            {...props}
            className={cn(
                buttonVariants({
                    color: "secondary",
                    size: "sm",
                    className: "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground",
                }),
                props.className,
                "no-underline",
            )}
        >
            {props.children}
        </a>
    );
}
