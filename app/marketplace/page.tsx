import { FeedWrapper } from "@/components/feed-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";


const marketplace = async() => {

    const UserProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
    const leaderboardData = getTopTenUsers();

    const [
        userProgress,
        userSubscription,
        leaderboard,
    ] = await Promise.all([
        UserProgressData,
        userSubscriptionData,
        leaderboardData,
    ]);

    const isPro = !!userSubscription?.isActive;

    
    // return(
    //     <div>
    //         <div className="w-full flex flex-col items-center">
    //             {leaderboard.map((userProgress, index) => (
    //                 <div 
    //                     key={userProgress.userId}
    //                     className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/5"
    //                 >  

    //                     <p className="font-bold text-neutral-800 flex-1">
    //                         {userProgress.userName} {/* user name */}
    //                     </p>

    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // ); 

    return(
        <div>
            marketplace
        </div>
    );


};

export default marketplace;
