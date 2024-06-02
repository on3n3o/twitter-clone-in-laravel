import { Head, Link, usePage } from "@inertiajs/react";
import Footer from "./Homepage/Footer";
import { useTranslation } from "react-i18next";
import LoginModal from "./Homepage/LoginModal";
import { useState } from "react";
import RegisterModal from "./Homepage/RegisterModal";
import LeftSidebarWithImage from "./Homepage/LeftSidebarWithImage";
import RightSidebar from "./Homepage/RightSidebar";
import Header from "./Homepage/RightSidebar/Header";
import SignUp from "./Homepage/SignUp";
import SignIn from "./Homepage/SignIn";

export default function Homepage({ appName, siteUrl }) {
    const { t } = useTranslation();

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    return (
        <>
            <Head>
                <title inertia>It's what's happening</title>
            </Head>
            <div className="flex flex-col w-full h-screen">
                <div className="flex h-full">
                    <LeftSidebarWithImage />
                    {/* 
                    RightSidebar
                        - header
                        - sign up
                        - sign in
                    */}
                    <RightSidebar>
                        <Header
                            title={t("Happening now")}
                            subtitle={t("Join today.")}
                        />
                        <div className="flex flex-col gap-4 pb-4 mr-4 max-w-xs pt-8">
                            <SignUp
                                setShowRegisterModal={setShowRegisterModal}
                            />
                            <SignIn setShowLoginModal={setShowLoginModal} />
                        </div>
                    </RightSidebar>
                </div>
                <LoginModal
                    appName={appName}
                    show={showLoginModal}
                    setShow={(value) => setShowLoginModal(value)}
                />
                <RegisterModal
                    show={showRegisterModal}
                    setShow={(value) => setShowRegisterModal(value)}
                />
                <Footer appName={appName} />
            </div>
        </>
    );
}
