
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type Props = {
    courseName?: string;
};

export const MobileSidebar = ({ courseName }: Props) => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar courseName={courseName}/>
            </SheetContent>
        </Sheet>
    );
};