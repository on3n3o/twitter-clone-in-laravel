import React from "react";

export default function Header({ title, subtitle }) {
    return (
        <div>
            <p className="text-7xl font-bold pb-10 pt-16">{title}</p>
            <p className="text-3xl font-bold">{subtitle}</p>
        </div>
    );
}
