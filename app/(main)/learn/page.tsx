import { Header } from "./header";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
import { get } from "http";
import { lessons, units as unitsSchema } from "@/db/schema";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { FaCheckCircle } from "react-icons/fa";
import { quests } from "@/constants";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const LearnPage = async () => {
    const UserProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription();

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
        userSubscription,
    ] = await Promise.all([
        UserProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userSubscriptionData,
    ]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    if(!courseProgress) {

        redirect("/courses");
    }

    const isPro = !!userSubscription?.isActive;
 
    return(

        <div className="flex flex-row-reverse gap-[48px] px-6">

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
                <Header title={userProgress.activeCourse.title} />

                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit 
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                                unit: typeof unitsSchema.$inferSelect;
                            } | undefined}
                            activeLessonPercentage={lessonPercentage}
                        /> 
                    </div>
                ))}

            </FeedWrapper>

        </div>

    );
};

export default LearnPage;