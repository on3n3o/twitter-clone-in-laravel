import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from "i18next-http-backend"
import { StrictMode } from "react";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} / ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        i18n
        .use(XHR)
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next).init({
            fallbackLng: "en",
            interpolation: {
                escapeValue: false,
            },
        });

        root.render(<StrictMode><App {...props}  /></StrictMode>);
    },
    progress: {
        color: "#4B5563",
    },
});
