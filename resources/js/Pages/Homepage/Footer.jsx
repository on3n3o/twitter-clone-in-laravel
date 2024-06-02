import { Link } from "@inertiajs/react";
import FooterItem from "./FooterItem";

export default function Footer({ appName }) {
    var footerItems = [
        { url: "about", name: "About" },
        { url: "app", name: "Download the " + appName + " app" },
        { url: "help", name: "Help center" },
        { url: "terms", name: "Terms of Service" },
        { url: "privacy", name: "Privacy Policy" },
        { url: "cookie", name: "Cookie Policy" },
        { url: "accessibility", name: "Accessibility" },
        { url: "ads", name: "Ads info" },
        { url: "blog", name: "Blog" },
        { url: "carrers", name: "Carrers" },
        { url: "brand", name: "Brand Resources" },
        { url: "advertising", name: "Advertising" },
        { url: "marketing", name: "Marketing" },
        { url: "business", name: appName + " for Business" },
        { url: "developers", name: "Developers" },
        { url: "directory", name: "Directory" },
        { url: "settings", name: "Settings" },
    ];

    return (
        <div>
            <div className="w-full flex justify-center items-center text-zinc-500 text-xs bg-black pb-4">
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {footerItems.map((item, index) => {
                        return (
                            <FooterItem
                                className="whitespace-nowrap h-full "
                                key={index}
                                url={item.url}
                                name={item.name}
                            />
                        );
                    })}
                    <div>© {new Date().getFullYear()} XYZ Corp.</div>
                </div>
            </div>
            {/* <CookiesPopup /> */}
        </div>
    );
}
