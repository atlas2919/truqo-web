
import { Menu } from "lucide-react";
import { Sidebarunit4FN } from "./sidebarunit4FN";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
    courseName?: string;
};

export const MobileSidebarUnit4 = ({ courseName }: Props) => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebarunit4FN />
            </SheetContent>
        </Sheet>

        
    );
};