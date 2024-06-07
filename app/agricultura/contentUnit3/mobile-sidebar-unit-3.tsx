
import { Menu } from "lucide-react";
import { Sidebarunit3AG } from "./sidebarunit3AG";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
    courseName?: string;
};

export const MobileSidebarUnit3 = ({ courseName }: Props) => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebarunit3AG />
            </SheetContent>
        </Sheet>

        
    );
};