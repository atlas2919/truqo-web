"use client";

import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number, courseTitle: string) => {
        if (pending) return;

        const guideRoute = getGuideRoute(courseTitle);

        if (id === activeCourseId) {
            return router.push(guideRoute);
        }

        // Actualizar el progreso del usuario en segundo plano
        startTransition(() => {
            upsertUserProgress(id)
                .then(() => {
                    router.push(guideRoute);
                })
                .catch(() => {
                    toast.error("Something went wrong");
                    router.push(guideRoute);
                });
        });
    };

    const getGuideRoute = (courseTitle: string) => {
        switch (courseTitle.toLowerCase()) {
            case 'agricultura':
                return '/guia/agricultura';
            case 'finanzas':
                return '/guia/finanzas';
            default:
                return '/guia';
        }
    };

    return (
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {courses.map((course) => (
                <Card 
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={() => onClick(course.id, course.title)}
                    disabled={pending}
                    active={course.id === activeCourseId}
                />
            ))}
        </div>
    );
};
