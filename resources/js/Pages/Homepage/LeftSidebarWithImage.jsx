import React from "react";

export default function LeftSidebarWithImage() {
    return (
        <div
            className=" bg-black items-center justify-center flex flex-1"
            style={{
                backgroundImage: "url(img/background-sebastiaan-stam.jpg)",
                backgroundRepeat: "none",
                backgroundSize: "cover",
            }}
        ></div>
    );
}
