import { MobileSidebarUnit2 } from "./mobile-sidebar-unit-2";

export const MobileHeaderunit2 = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-blue-400 border-b fixed top-0 w-full z-50">
            <MobileSidebarUnit2 />
        </nav>
    );
};

export default MobileHeaderunit2;
