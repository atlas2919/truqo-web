import { MobileSidebarUnit3 } from "./mobile-sidebar-unit-3";

export const MobileHeaderunit3 = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-blue-400 border-b fixed top-0 w-full z-50">
            <MobileSidebarUnit3 />
        </nav>
    );
};

export default MobileHeaderunit3;
