import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="lg:block w-full border-t-2 border-slate-200 py-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full gap-8">
                <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
                    <Image 
                        src="/USFQ.svg" 
                        alt="USFQ" 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
                    <Image 
                        src="/ministerio.svg" 
                        alt="ministerio" 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
                    <Image 
                        src="/miNegocio.svg" 
                        alt="Mi Negocio" 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
                    <Image 
                        src="/paqtana.png" 
                        alt="Paqtana" 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
