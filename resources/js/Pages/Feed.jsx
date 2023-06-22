import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Feed() {
    return (
        <>
            <Head title="Explore" />
            <div class="min-h-screen flex sm:justify-center items-center pt-6 sm:pt-0 bg-black text-white">
                <div class="min-h-screen w-4/12 border-r border-zinc-700">
                    Sidebar left
                </div>
                <div class="min-h-screen w-3/12">Content</div>
                <div class="min-h-screen w-5/12 border-l border-zinc-700">
                    Sidebar right
                </div>
            </div>
            <div class="h-20 w-full bg-blue-400 text-white absolute bottom-0 left-0 flex justify-center">
                <div>
                    <h1 class="text-3xl font-medium">Don't miss what's happening</h1>
                    <h3 class="text-lg">
                        Robots on Twatter are the first to know.
                    </h3>
                </div>
                <div class="p-4 flex">
                    <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border">Log in</button>
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">Sign up</button>
                </div>
            </div>
        </>
    );
}
