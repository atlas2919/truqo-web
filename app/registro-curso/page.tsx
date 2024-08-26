import { Button } from "@/components/ui/button";
import { getCourses, getUserProgress } from "@/db/queries";
import { courses } from "@/db/schema";
import Image from "next/image";
import Link from "next/link";

const registro_curso = async () => {
    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Selecciona una de las siguientes opciones
            </h1>
        
            <div className="flex justify-center gap-4 mt-6">
                <Link href="/registro">
                    <Button className="flex flex-col items-center justify-center h-auto w-[150px] p-4" variant="default2">
                        <div className="w-[90px] h-[90px] flex items-center justify-center">
                            <Image
                                src="/finanzas.svg"
                                alt="Finanzas"
                                width={90}
                                height={90}
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                        <div className="mt-3 text-neutral-700 text-center font-bold">
                            Registro
                        </div>
                    </Button>
                </Link>

                <Link href="/courses">
                    <Button className="flex flex-col items-center justify-center h-auto w-[150px] p-4" variant="default2">
                        <div className="w-[90px] h-[90px] flex items-center justify-center">
                            <Image
                                src="/agricultura.svg"
                                alt="Agricultura"
                                width={90}
                                height={90}
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                        <div className="mt-3 text-neutral-700 text-center font-bold">
                            curso
                        </div>
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default registro_curso;

