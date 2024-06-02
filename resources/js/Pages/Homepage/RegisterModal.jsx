import Modal from "@/Components/Modal";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";

export default function RegisterModal({ show = false, setShow }) {
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
            <div className="px-16 pt-8">
                <p className="text-3xl font-bold">{t("Create your account")}</p>
            </div>
            <div className="px-16 pt-8">
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
                        Imię
                    </label>
                </div>
            </div>

            <div className="px-16 pt-8">
                <div className="relative">
                    <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        autoFocus
                    />
                    <label
                        for="floating_filled"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        E-mail
                    </label>
                </div>
            </div>

            <div className="px-16 pt-8">
                <p className="font-bold">Date of birth</p>
                <p className="text-sm text-gray-500">
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                </p>
                <div className="w-full form-group flex flex-col gap-8 pt-8">
                    <input
                        className="form-control form-control-lg w-full rounded bg-black"
                        type="date"
                        name="dob"
                    />
                </div>
            </div>
            <div className="p-6 px-20">
                <button className="border border-zinc-500 bg-gray-400 text-black font-bold rounded-full  w-full py-3">
                    {t("Next")}
                </button>
            </div>
        </Modal>
    );
}
