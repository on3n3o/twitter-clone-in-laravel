import React from "react";
import { useTranslation } from "react-i18next";

export default function SignIn({ setShowLoginModal }) {
    const { t } = useTranslation();

    return (
        <div>
            <p className="font-bold pt-10">{t("Already have an account")}?</p>
            <button
                onClick={() => setShowLoginModal(true)}
                className="bg-black border border-zinc-500 text-blue-500  font-bold rounded-full  w-full py-[0.4rem]"
            >
                {t("Sign in")}
            </button>
        </div>
    );
}
