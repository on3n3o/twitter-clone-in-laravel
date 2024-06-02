import React from "react";
import { useTranslation } from "react-i18next";
import Divider from "./Divider";

export default function SignUp({ setShowRegisterModal }) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center bg-white text-black  rounded-full py-[0.4rem]  w-full">
                <img width="18" src="/img/g-logo.png" />
                <span className="px-2 text-sm">{t("Sign up with Google")}</span>
            </button>
            <button className="flex items-center justify-center bg-white text-black hover:bg-zinc-200 py-[0.4rem] font-bold rounded-full w-full">
                <img width="18" src="/img/g-logo.png" />
                <span className="px-2">{t("Sign up with Apple")}</span>
            </button>
            <Divider />
            <button
                onClick={() => setShowRegisterModal(true)}
                className="bg-blue-400 text-white hover:bg-blue-500 font-bold rounded-full  w-full py-[0.4rem]"
            >
                {t("Create account")}
            </button>
            <div className="w-full text-zinc-500 text-xs">
                {t("By signing up, you agree to the")}{" "}
                <span className="text-blue-400">{t("Terms of Service")}</span>{" "}
                {t("and")}{" "}
                <span className="text-blue-400">{t("Privacy Policy")}</span>,{" "}
                {t("including")}{" "}
                <span className="text-blue-400">{t("Cookie Use")}</span>.
            </div>
        </div>
    );
}
