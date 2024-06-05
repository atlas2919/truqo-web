import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const FooterContent = () => {
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 borde-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
        
                <Button
                    variant="secondary"
                    size="lg"
                >
                    
                    <Link href="/guia">
                        Back
                    </Link>
                </Button>

            </div>
        </footer>
    );
};