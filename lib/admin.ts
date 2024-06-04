import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2ftgdMHcsUi3JNkfTkizIbuIv5J",
    "user_2h4wqnWFAHFje9fjVTVar3pOJQa",
];

export const isAdmin = () => {
    const { userId } = auth();

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};