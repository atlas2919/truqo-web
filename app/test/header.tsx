import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const Header = () => {
    return (
        <header className="h-20 w-full borderr-b-2 border-slate-300 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Link href="/registro-curso">
                        <Image src="/mascot.svg" height={200} width={200} alt="Mascot" />
                    </Link>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 texxt-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton 
                            afterSignOutUrl="/"
                        />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton 
                            mode = "modal"
                            afterSignInUrl = "/learn"
                            afterSignUpUrl = "/learn"
                        >
                            <Button size="lg" variant="ghost">
                                Login
                            </Button>

                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
        );
};