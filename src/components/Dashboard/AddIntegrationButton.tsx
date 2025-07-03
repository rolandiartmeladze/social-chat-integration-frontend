"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "../ui/button";

type AddIntegrationButtonProps = {
    href?: string;
    label?: string;
    icon?: React.ReactNode;
    className?: string;
} & VariantProps<typeof buttonVariants>;

export default function AddIntegrationButton({
    href = "/add/platform",
    label = "Add New Integrations",
    icon = <Icons.add className="size-4" />,
    variant,
    className,
}: AddIntegrationButtonProps) {
    return (
        <Button asChild variant={variant} className={cn("gap-2 text-foreground", className)}>
            <Link href={href}>
                {icon}
                <span>{label}</span>
            </Link>
        </Button>
    );
}
