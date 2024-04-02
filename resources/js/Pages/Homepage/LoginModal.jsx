import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LoginModal({ show = false, setShow }) {
    const { t } = useTranslation();

    return (
        <Modal show={show} closeable={true} maxWidth="xl" style={{
            maxHeight: "90vh",
            height: "600px",
            minHeight: "600px",
        }}>
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
                <div className="w-full form-group flex flex-col gap-8 pt-8">
                    <input
                        className="form-control form-control-lg w-full rounded bg-black"
                        type="text"
                        placeholder="Imię"
                        name="name"
                    />
                    <input
                        className="form-control form-control-lg w-100 rounded bg-black"
                        type="text"
                        placeholder="E-mail"
                        name="surname"
                    />
                </div>
            </div>
            <div className="px-16 pt-8">
                <p className="font-bold">Date of birth</p>
                <p className="text-sm text-gray-500">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
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
