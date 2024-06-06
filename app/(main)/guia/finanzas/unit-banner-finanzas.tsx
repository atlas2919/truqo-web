import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    unitId: number;
};

export const UnitBannerGuideFinanzas = ({
    title,
    description,
    unitId,
}: Props) => {
    return (
        <div className="w-full rounded-xl bg-blue-500 p-5 text-white flex items-center justify-between">
            <div className="space-y-2.5">
                <h3 className="text-xl font-bold">
                    {title}
                </h3>

                <p className="text-lg">
                    {description}
                </p>
            </div>

            {unitId === 1 && (
                <Link href="/finanzas/contentUnit1">
                    <Button
                        size="lg"
                        variant="secondaryUnit"
                        className="border-2 border-b-4 active:border-b-2"
                    >
                        <NotebookText className="mr-2" />
                        Continue
                    </Button>
                </Link>
            )}

            {unitId === 2 && (
                <Link href="/finanzas/contentUnit2">
                    <Button
                        size="lg"
                        variant="secondaryUnit"
                        className="border-2 border-b-4 active:border-b-2"
                    >
                        <NotebookText className="mr-2" />
                        Continue
                    </Button>
                </Link>
            )}

            {unitId === 3 && (
                <Link href="/finanzas/contentUnit3">
                    <Button
                        size="lg"
                        variant="secondaryUnit"
                        className="border-2 border-b-4 active:border-b-2"
                    >
                        <NotebookText className="mr-2" />
                        Continue
                    </Button>
                </Link>
            )}

            {unitId === 4 && (
                <Link href="/finanzas/contentUnit4">
                    <Button
                        size="lg"
                        variant="secondaryUnit"
                        className="border-2 border-b-4 active:border-b-2"
                    >
                        <NotebookText className="mr-2" />
                        Continue
                    </Button>
                </Link>
            )}
        </div>
    );
};
