import { Link } from "@inertiajs/react";
import FooterItem from "./FooterItem";

export default function Footer({ appName }) {
    var footerItems = [
        {url: "about", name: "About"},
        {url: "help", name: "Help center"},
        {url: "terms", name: "Terms of Service"},
        {url: "privacy", name: "Privacy Policy"},
        {url: "cookie", name: "Cookie Policy"},
        {url: "accessibility", name: "Accessibility"},
        {url: "ads", name: "Ads info"},
        {url: "blog", name: "Blog"},
        {url: "status", name: "Status"},
        {url: "carrers", name: "Carrers"},
        {url: "brand", name: "Brand Resources"},
        {url: "advertising", name: "Advertising"},
        {url: "marketing", name: "Marketing"},
        {url: "business", name: appName + " for Business"},
        {url: "developers", name: "Developers"},
        {url: "directory", name: "Directory"},
        {url: "settings", name: "Settings"},
    ];

    return (
        <div className="bg-red-400">
            <div className="w-full h-10 bg-black flex justify-center items-center text-zinc-500 text-sm">
                <div className="flex justify-center items-center gap-4 z-10">
                    {footerItems.map((item, index) => {
                        return <FooterItem key={index} url={item.url} name={item.name} />;
                    })}
                    <div>© 2023 XYZ Corp.</div>
                </div>
            </div>
            {/* <CookiesPopup /> */}
        </div>
    );
}
