import { HeaderContent } from "./header";
import { FooterContent } from "./footer";

const Contenido = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderContent />

            <main className="flex-grow container mx-auto px-4 py-6 flex flex-col items-center">
                <div className="w-full max-w-3xl mb-6 text-center">
                    <h2 className="text-2xl font-bold">
                        Introduction 3
                    </h2>
                    <p className="mt-2 text-lg">
                        Welcome to the quests section. Here you can find various tasks to complete and earn points.
                    </p>
                </div>

                <div className="w-full max-w-3xl mb-6 text-center">
                    <h2 className="text-2xl font-bold">Tutorial Video</h2>
                    <div className="flex justify-center mt-2">
                        <video className="w-full max-w-xl" controls>
                            <source src="/tutorial.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </main>

            <FooterContent />
        </div>
    );
};

export default Contenido;
