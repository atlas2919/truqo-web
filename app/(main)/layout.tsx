import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { getUserProgress, getUserSubscription } from "@/db/queries";

type Props = {
    children: React.ReactNode;
};

const MainLayout = async({
    children,
}: Props) => {

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
        <>
        <MobileHeader />
            <Sidebar className="hidden lg:flex" courseName={activeCourse}/>
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                <div className="max-w-[1056px] mx-auto pt-6  h-full">
                    {children}
                </div>
            </main>
        </>
    );
};

export default MainLayout;