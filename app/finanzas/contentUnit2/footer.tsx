import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FooterContent = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
                <Link href="/guia/finanzas" legacyBehavior>
                    <a>
                        <Button variant="secondary" size="lg">
                            Back
                        </Button>
                    </a>
                </Link>
            </div>
        </footer>
    );
};