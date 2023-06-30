import CookiesPopup from "@/Components/CookiesPopup";
import FooterPopup from "@/Components/FooterPopup";
import { Head } from "@inertiajs/react";

export default function Homepage() {
    return (
        <>
            <Head title="Twitter. It's what's happening." />
            <div class="flex flex-col w-full h-screen">
                <div class="flex h-full">
                    <div
                        class=" bg-blue-400 items-center justify-center flex flex-1"
                        style={{
                            "background-image": "url(img/lohp_en_1302x955.png)",
                            "background-repeat": "none",
                        }}
                    >
                        <i class="fa fa-cloud text-[20rem] text-white" />
                    </div>
                    <div class="flex flex-col flex-1 bg-black text-white p-[36px] min-w-[45vw] max-w-[760px] justify-center">
                        <div>
                            <i class="fa fa-cloud text-5xl" />
                            <p class="text-7xl font-bold pb-10 pt-16">
                                Happening now
                            </p>
                            <p class="text-3xl font-bold">
                                Join Twatter today.
                            </p>

                            <div class="flex flex-col gap-4 pb-4 mr-4 max-w-xs pt-8">
                                <button class="flex items-center justify-center bg-white text-black  rounded-full py-[0.4rem]  w-full">
                                    <img width="18" src="/img/g-logo.png" />
                                    <span class="px-2 text-sm">
                                        Sign up with Google
                                    </span>
                                </button>
                                <button class="flex items-center justify-center bg-white text-black hover:bg-zinc-200 py-[0.4rem] font-bold rounded-full w-full">
                                    <img width="18" src="/img/g-logo.png" />
                                    <span class="px-2">Sign up with Apple</span>
                                </button>
                                <div class="flex flex-row items-center gap-2">
                                    <div class="h-0 w-full border-b border-zinc-800" />
                                    <span class="text-sm">or</span>
                                    <div class="h-0 w-full border-b border-zinc-800" />
                                </div>
                                <button class="bg-blue-400 text-white hover:bg-blue-500 font-bold rounded-full  w-full py-[0.4rem]">
                                    Create account
                                </button>
                                <div class="w-full text-zinc-500 text-xs">
                                    By signing up, you agree to the{" "}
                                    <span class="text-blue-400">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span class="text-blue-400">
                                        Privacy Policy
                                    </span>
                                    , including{" "}
                                    <span class="text-blue-400">
                                        Cookie Use
                                    </span>
                                    .
                                </div>

                                <p class="font-bold pt-10">
                                    Already have an account?
                                </p>
                                <button class="bg-black border border-zinc-500 text-blue-500  font-bold rounded-full  w-full py-[0.4rem]">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-red-400">
                    <div class="w-full h-10 bg-black flex justify-center items-center text-zinc-500 text-sm">
                        <div class="flex justify-center items-center gap-4 z-10">
                            <div>About</div>
                            <div>Help center</div>
                            <div>Terms of Service</div>
                            <div>Privacy Policy</div>
                            <div>Cookie Policy</div>
                            <div>Accessibility</div>
                            <div>Ads info</div>
                            <div>Blog</div>
                            <div>Status</div>
                            <div>Carrers</div>
                            <div>Brand Resources</div>
                            <div>Advertising</div>
                            <div>Marketing</div>
                            <div>Twitter for Business</div>
                            <div>Developers</div>
                            <div>Directory</div>
                            <div>Settings</div>
                            <div>© 2023 XYZ Corp.</div>
                        </div>
                    </div>
                    {/* <CookiesPopup /> */}
                </div>
            </div>
        </>
    );
}
