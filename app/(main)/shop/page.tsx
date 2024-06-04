import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./items";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

import { FaCheckCircle } from "react-icons/fa";
import { quests } from "@/constants";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

const ShopPage = async () => {

    const UserProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const [
        userProgress,
        userSubscription,
    ] = await Promise.all([
        UserProgressData,
        userSubscriptionData
    ]);

    if(!userProgress || !userProgress.activeCourse){
        redirect("/courses");
    }

    const isPro = !!userSubscription?.isActive;

    return(
        <div className="flex flex-row-reverse pag-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                />

                {!isPro && (
                    <Promo />
                )}

                <div className="w-full border rounded-lg p-4 bg-white shadow-md mt-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">
                            Quests
                        </h2>
                        <div className="text-sky-500 hover:bg-slate-100">
                            <Link href="/quests">
                                VIEW ALL
                            </Link>
                        </div>
                    </div>
                    <ul className="w-full">
                        {quests
                            .filter((quest) => (userProgress.points / quest.value) * 100 < 100) // Filtrar quests incompletos
                            .slice(0, 2) // Mostrar solo los primeros dos
                            .map((quest) => {
                                const progress = (userProgress.points / quest.value) * 100;

                                return (
                                    <div
                                        className="flex items-center w-full py-2 gap-x-4 border-t last:border-b"
                                        key={quest.title}
                                    >
                                        <Image
                                            src="/points.svg"
                                            alt="Points"
                                            height={40}
                                            width={40}
                                        />

                                        <div className="flex flex-col gap-y-2 w-full">
                                            <p className="text-neutral-700 text-sm font-bold">
                                                {quest.title}
                                            </p>

                                            {progress >= 100 ? (
                                                <FaCheckCircle className="text-green-500 h-6 w-6" />
                                            ) : (
                                                <Progress value={progress} className="h-2" />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </ul>
                </div>
            </StickyWrapper>

            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src="/shop.svg"
                        alt="Shop"
                        height={90}
                        width={90}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                        Shop
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Spend your points on cool stuff.
                    </p>
                    <Items
                        hearts={userProgress.hearts}
                        points={userProgress.points}
                        hasActiveSubscription={isPro}
                    />
                </div>
            </FeedWrapper>
        </div>
    );
};

export default ShopPage;