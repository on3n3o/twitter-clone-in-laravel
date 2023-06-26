import FooterPopup from "@/Components/FooterPopup";
import LeftSidebar from "@/Components/LeftSidebar";
import RightSidebar from "@/Components/RightSidebar";
import FeedComponent from "@/Components/FeedComponent";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Feed() {
    return (
        <>
            <Head title="Explore" />
            <div class="min-h-screen flex sm:justify-center items-center pt-6 sm:pt-0 bg-black text-white">
                {/* Here starts left sidebar */}
                <LeftSidebar />
                {/* Here starts feed*/}
                <FeedComponent />
                {/* Here starts right sidebar */}
                <RightSidebar />
            </div>

            {/* <FooterPopup /> */}
        </>
    );
}
