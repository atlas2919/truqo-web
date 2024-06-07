import { MobileSidebarUnit1 } from "./mobile-sidebar-unit-1";

export const MobileHeaderunit1 = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-blue-400 border-b fixed top-0 w-full z-50">
            <MobileSidebarUnit1 />
        </nav>
    );
};

export default MobileHeaderunit1;
