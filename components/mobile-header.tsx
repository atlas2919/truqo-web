import { getUserProgress, getUserSubscription } from "@/db/queries";
import { MobileSidebar } from "./mobile-sidebar";


export const MobileHeader = async() => {

    const UserProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const [
        userProgress,
        userSubscription,
    ] = await Promise.all([
        UserProgressData,
        userSubscriptionData,
    ]);

    const activeCourse = userProgress?.activeCourse?.title.toLowerCase();

    return(
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-blue-400 border-b fixed top-0 w-full z-50">
            <MobileSidebar courseName={activeCourse}/>
        </nav>
    );
};