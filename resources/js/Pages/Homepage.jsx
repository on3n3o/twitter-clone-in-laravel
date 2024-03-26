import CookiesPopup from "@/Components/CookiesPopup";
import FooterPopup from "@/Components/FooterPopup";
import { Head, usePage } from "@inertiajs/react";

export default function Homepage({ children }) {
    const { appName } = usePage().props;
    return (
        <>
            <Head>
                <title>. It's what's happening</title>
            </Head>
            <div className="flex flex-col w-full h-screen">
                <div className="flex h-full">
                    <div
                        className=" bg-blue-400 items-center justify-center flex flex-1"
                        style={{
                            "backgroundImage": "url(img/background-sebastiaan-stam.jpg)",
                            "backgroundRepeat": "none",
                            "backgroundSize": "cover",
                        }}
                    >
                        {/* <i className="fa fa-cloud text-[20rem] text-white" /> */}
                    </div>
                    <div className="flex flex-col flex-1 bg-black text-white p-[36px] min-w-[45vw] max-w-[760px] justify-center">
                        <div>
                            {/* <i className="fa fa-cloud text-5xl" /> */}
                            <p className="text-7xl font-bold pb-10 pt-16">
                                Happening now
                            </p>
                            <p className="text-3xl font-bold">
                                Join { appName } today.
                            </p>

                            <div className="flex flex-col gap-4 pb-4 mr-4 max-w-xs pt-8">
                                <button className="flex items-center justify-center bg-white text-black  rounded-full py-[0.4rem]  w-full">
                                    <img width="18" src="/img/g-logo.png" />
                                    <span className="px-2 text-sm">
                                        Sign up with Google
                                    </span>
                                </button>
                                <button className="flex items-center justify-center bg-white text-black hover:bg-zinc-200 py-[0.4rem] font-bold rounded-full w-full">
                                    <img width="18" src="/img/g-logo.png" />
                                    <span className="px-2">Sign up with Apple</span>
                                </button>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="h-0 w-full border-b border-zinc-800" />
                                    <span className="text-sm">or</span>
                                    <div className="h-0 w-full border-b border-zinc-800" />
                                </div>
                                <button className="bg-blue-400 text-white hover:bg-blue-500 font-bold rounded-full  w-full py-[0.4rem]">
                                    Create account
                                </button>
                                <div className="w-full text-zinc-500 text-xs">
                                    By signing up, you agree to the{" "}
                                    <span className="text-blue-400">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span className="text-blue-400">
                                        Privacy Policy
                                    </span>
                                    , including{" "}
                                    <span className="text-blue-400">
                                        Cookie Use
                                    </span>
                                    .
                                </div>

                                <p className="font-bold pt-10">
                                    Already have an account?
                                </p>
                                <button className="bg-black border border-zinc-500 text-blue-500  font-bold rounded-full  w-full py-[0.4rem]">
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-red-400">
                    <div className="w-full h-10 bg-black flex justify-center items-center text-zinc-500 text-sm">
                        <div className="flex justify-center items-center gap-4 z-10">
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
