import React from "react";
import { useTranslation } from "react-i18next";

export default function Divider() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row items-center gap-2">
            <div className="h-0 w-full border-b border-zinc-800" />
            <span className="text-sm">{t("or")}</span>
            <div className="h-0 w-full border-b border-zinc-800" />
        </div>
    );
}
