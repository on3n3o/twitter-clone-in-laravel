import CookiesPopup from "@/Components/CookiesPopup";
import FooterPopup from "@/Components/FooterPopup";
import { Head, Link, usePage } from "@inertiajs/react";
import Footer from "./Homepage/Footer";
import { useTranslation } from "react-i18next";
import LoginModal from "./Homepage/LoginModal";
import { useState } from "react";

export default function Homepage({ appName, siteUrl }) {
    const { t } = useTranslation();
    const [showLoginModal, setShowLoginModal] = useState(true);
    return (
        <>
            <Head>
                <title inertia>It's what's happening</title>
            </Head>
            <div className="flex flex-col w-full h-screen">
                <div className="flex h-full">
                    <div
                        className=" bg-black items-center justify-center flex flex-1"
                        style={{
                            backgroundImage:
                                "url(img/background-sebastiaan-stam.jpg)",
                            backgroundRepeat: "none",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <div className="flex flex-col flex-1 bg-black text-white p-[36px] min-w-[45vw] max-w-[760px] justify-center">
                        <div>
                            <p className="text-7xl font-bold pb-10 pt-16">
                                {t("Happening now")}
                            </p>
                            <p className="text-3xl font-bold">
                                {t("Join today.")}
                            </p>

                            <div className="flex flex-col gap-4 pb-4 mr-4 max-w-xs pt-8">
                                <button className="flex items-center justify-center bg-white text-black  rounded-full py-[0.4rem]  w-full">
                                    <img width="18" src="/img/g-logo.png" />
                                    <span className="px-2 text-sm">
                                        {t("Sign up with Google")}
                                    </span>
                                </button>
                                <button className="flex items-center justify-center bg-white text-black hover:bg-zinc-200 py-[0.4rem] font-bold rounded-full w-full">
                                    <img width="18" src="/img/g-logo.png" />
                                    <span className="px-2">
                                        {t("Sign up with Apple")}
                                    </span>
                                </button>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="h-0 w-full border-b border-zinc-800" />
                                    <span className="text-sm">{t("or")}</span>
                                    <div className="h-0 w-full border-b border-zinc-800" />
                                </div>
                                <button onClick={() => setShowLoginModal(true)} className="bg-blue-400 text-white hover:bg-blue-500 font-bold rounded-full  w-full py-[0.4rem]">
                                    {t("Create account")}
                                </button>
                                <div className="w-full text-zinc-500 text-xs">
                                    {t("By signing up, you agree to the")}{" "}
                                    <span className="text-blue-400">
                                        {t("Terms of Service")}
                                    </span>{" "}
                                    {t("and")}{" "}
                                    <span className="text-blue-400">
                                        {t("Privacy Policy")}
                                    </span>
                                    , {t("including")}{" "}
                                    <span className="text-blue-400">
                                        {t("Cookie Use")}
                                    </span>
                                    .
                                </div>

                                <p className="font-bold pt-10">
                                    {t("Already have an account")}?
                                </p>
                                <button className="bg-black border border-zinc-500 text-blue-500  font-bold rounded-full  w-full py-[0.4rem]">
                                    {t("Sign in")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginModal show={showLoginModal} setShow={(value) => setShowLoginModal(value)}/>
                <Footer appName={appName} />
            </div>
        </>
    );
}
