import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader, User } from "lucide-react";

type Props = {
    className?: string;
    courseName?: string;
};

export const Sidebar = ({ className, courseName }: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 pt-8 border-r-2 flex-col", className)}>
            <Link href="/">
                <div className="flex justify-center mb-10">
                    <Image src="/mascot.svg" height={150} width={150} alt="Mascot" />
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                    label="Marketplace"
                    href="/marketplace" 
                    iconSrc="/marketplace.svg"
                />
                <SidebarItem 
                    label="Contenido"
                    href={`/guia/${courseName}`}
                    iconSrc="/guia.svg"
                />
                <SidebarItem 
                    label="Challenge"
                    href="/learn" 
                    iconSrc="/learn.svg"
                />
                <SidebarItem 
                    label="Leaderboard"
                    href="/leaderboard"  
                    iconSrc="/leaderboard.svg"
                />
                <SidebarItem 
                    label="Quests"
                    href="/quests" 
                    iconSrc="/quests.svg"
                />
                <SidebarItem 
                    label="Shop"
                    href="/shop" 
                    iconSrc="/shop.svg"
                />
            </div>

            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
};
