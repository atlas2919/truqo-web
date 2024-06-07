import { MobileSidebarUnit4 } from "./mobile-sidebar-unit-4";

export const MobileHeaderunit4 = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-blue-400 border-b fixed top-0 w-full z-50">
            <MobileSidebarUnit4 />
        </nav>
    );
};

export default MobileHeaderunit4;
