import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LoginModal({ show = false, setShow  }) {
    const { t } = useTranslation();


    return (
        <Modal
            show={show}
            closeable={true}
            maxWidth="md"
            styles={{ backgroundColor: "black" }}
        >
            <DangerButton onClick={() => setShow(false)}>X</DangerButton>
            <p className="text-3xl font-bold">{t("Create your account")}</p>
        </Modal>
    );
}
