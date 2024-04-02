import Modal from "@/Components/Modal";
import { useTranslation } from "react-i18next";

export default function LoginModal({ show = false, setShow, appName }) {
    const { t } = useTranslation();

    return (
        <Modal
            show={show}
            closeable={true}
            maxWidth="xl"
            style={{
                maxHeight: "90vh",
                height: "600px",
                minHeight: "600px",
            }}
        >
            <div className="flex flex-row">
                <div className="flex-1 bg-black">
                    <button
                        className="btn bg-black btn-rounded p-4 pl-5"
                        onClick={() => setShow(false)}
                    >
                        <i className="fa fa-close text-white" />
                    </button>
                </div>
                <div className="pt-4">
                    <i className="fa fa-cloud text-[2rem] text-white" />
                </div>
                <div className="flex-1 bg-black"></div>
            </div>
            <div className="px-32 pt-8">
                <p className="text-3xl font-bold">
                    {t("Sign in to ") + appName}
                </p>
            </div>
            <div className="px-32 pt-8">
                <button className="flex items-center justify-center bg-white text-black  rounded-full py-[0.4rem]  w-full">
                    <img width="18" src="/img/g-logo.png" />
                    <span className="px-2 text-sm">
                        {t("Sign up with Google")}
                    </span>
                </button>
            </div>

            <div className="px-32 pt-8">
                <button className="flex items-center justify-center bg-white text-black hover:bg-zinc-200 py-[0.4rem] font-bold rounded-full w-full">
                    <img width="18" src="/img/g-logo.png" />
                    <span className="px-2">{t("Sign up with Apple")}</span>
                </button>
            </div>

            <div className="px-32 pt-8 flex flex-row items-center gap-2">
                <div className="h-0 w-full border-b border-zinc-800" />
                <span className="text-sm">{t("or")}</span>
                <div className="h-0 w-full border-b border-zinc-800" />
            </div>

            <div className="px-32 pt-8 pb-4">
                <div className="relative">
                    <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        for="floating_filled"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Phone, email, or username
                    </label>
                </div>
            </div>

            <div className="py-3 px-32">
                <button className="border border-zinc-500 bg-white text-black font-bold rounded-full  w-full p-1">
                    {t("Next")}
                </button>
            </div>
            <div className="pb-6 px-32">
                <button className="border border-zinc-500 bg-black text-white font-bold rounded-full w-full p-1">
                    {t("Forgot password")}?
                </button>
            </div>

            <div className="pb-6 px-32 text-sm">
                <span className="text-gray-500">Dont have an account?</span>{" "}
                <span className="text-blue-500">Sign up</span>
            </div>
        </Modal>
    );
}
