"use client";

import MobileHeaderunit2 from "./mobile-header-unit-2";
import { Sidebarunit2AG } from "./sidebarunit2AG";
import { useEffect } from "react";

const Contenido = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <MobileHeaderunit2 />
            <Sidebarunit2AG className="hidden lg:flex" />

            <main className="flex-grow container mx-auto px-4 py-6 flex flex-col items-center mt-[50px] lg:mt-0 lg:ml-[256px]">
                <div className="w-full max-w-3xl mb-6 text-center">
                    <section className="mb-8">
                        <h2 id="introduction1" className="text-2xl font-bold">Introduction</h2>
                        <p className="mt-2 text-lg">
                            Welcome to the quests section. Here you can find various tasks to complete and earn points.
                        </p>

                        <div className="mt-6">
                            <h2 className="text-2xl font-bold">Tutorial Video</h2>
                            <div className="flex justify-center mt-2">
                                <video className="w-full max-w-xl" controls>
                                    <source src="/tutorial.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 id="introduction2" className="text-2xl font-bold">Introduction2</h2>
                        <p className="mt-2 text-lg">
                            Welcome to the quests section. Here you can find various tasks to complete and earn points.
                        </p>

                        <div className="mt-6">
                            <h2 className="text-2xl font-bold">Tutorial Video</h2>
                            <div className="flex justify-center mt-2">
                                <video className="w-full max-w-xl" controls>
                                    <source src="/tutorial.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Contenido;

