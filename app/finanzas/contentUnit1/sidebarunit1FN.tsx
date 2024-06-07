import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItemContent } from "@/components/sidebar-item-content";
import { Button } from "@/components/ui/button";

type Props = {
    className?: string;
};

export const Sidebarunit1FN = ({ className }: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 pt-8 border-r-2 flex-col", className)}>
            <Link href="/">
                <div className="flex justify-center mb-10">
                    <Image src="/mascot.svg" height={150} width={150} alt="Mascot" />
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItemContent
                    label="1.1  Introduction"
                    href="#introduction1" 
                    iconSrc="/introduction.svg"
                />

                <SidebarItemContent 
                    label="1.2  Introduction2"
                    href="#introduction2" 
                    iconSrc="/introduction.svg"
                />
            </div>

            <footer className="flex h-20 w-full border-t-2 border-slate-200 p-2 items-center justify-center">
                <Link href="/guia/finanzas" legacyBehavior>
                    <a>
                        <Button variant="secondary" size="lg">
                            Back
                        </Button>
                    </a>
                </Link>
            </footer>
        </div>
    );
};
