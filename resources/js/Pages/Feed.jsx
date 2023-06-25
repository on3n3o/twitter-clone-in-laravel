import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Feed() {
    return (
        <>
            <Head title="Explore" />
            <div class="min-h-screen flex sm:justify-center items-center pt-6 sm:pt-0 bg-black text-white">
                {/* Here starts left sidebar */}
                <div class="min-h-screen  border-r border-zinc-700">
                    Sidebar left
                </div>

                {/* Here starts content*/}
                <div class="min-h-screen w-3/12">
                    <div class="h-16 px-4 flex items-center">
                        <p class="flex-grow font-bold text-xl">Explore</p>
                        <p>
                            <i class="fa fa-gear" />
                        </p>
                    </div>
                    <div class="snap-y">
                        {/* Single Tweet */}
                        <div class="">
                            <div class="m-4">
                                <video
                                    class="rounded-2xl"
                                    controls
                                    autoplay
                                    loop
                                >
                                    <source
                                        src="/video/test.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Here starts right sidebar */}
                <div class="min-h-screen border-l border-zinc-700">
                    <div class="border border-zinc-700 p-4 m-4 rounded-2xl w-full">
                        <p class="text-xl font-bold">New to Twatter?</p>
                        <p class="text-sm text-zinc-500 py-2">
                            Sign up to get your own personalized timeline!
                        </p>
                        <div class="flex flex-col gap-2">
                            <button class="flex items-center justify-center bg-white text-black  py-2 rounded-full border px-20 w-full">
                                <img width="18" src="/img/g-logo.png" />
                                <span class="px-2">Sign up with Google</span>
                            </button>
                            <button class="flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-bold py-2 rounded-full border px-20 w-full">
                                <img width="18" src="/img/g-logo.png" />
                                <span class="px-2">Sign up with Apple</span>
                            </button>
                            <button class="bg-white text-black hover:bg-zinc-200 font-bold py-2 rounded-full border px-20 w-full">
                                Create account
                            </button>
                        </div>
                        <span class="text-sm text-zinc-500">
                            By signing up, you agree to the{" "}
                            <span class="text-blue-400">Terms of Service</span>{" "}
                            and{" "}
                            <span class="text-blue-400">Privacy Policy</span>,
                            including{" "}
                            <span class="text-blue-400">Cookie Use</span>.
                        </span>
                    </div>
                </div>
            </div>

            <div class="w-full bg-blue-400 text-white absolute bottom-0 left-0 flex flex-col justify-center align-middle">
                <div class="w-full h-16 flex justify-center align-middle text-center">
                    <div class="w-4/12 flex collapse sm:visible">
                        <div>
                            <h1 class="text-2xl font-medium">
                                Don't miss what's happening
                            </h1>
                            <h3 class="text-lg">
                                Robots on Twatter are the first to know.
                            </h3>
                        </div>
                    </div>
                    <div class="justify-center items-center flex">
                        <button class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-1 px-4 rounded-full border mr-4">
                            Log in
                        </button>
                        <button class="bg-white hover:bg-gray-300 text-black font-bold py-1 px-4 rounded-full">
                            Sign up
                        </button>
                    </div>
                </div>
                <div class="h-48 bg-white text-black flex md:flex-row flex-col justify-center items-center">
                    <div class="md:w-4/12 w-full">
                        <p class="text-base font-semibold">
                            Did someone say … cock ies? gulp!?
                        </p>
                        <p class="text-sm">
                            Twatter and its partners use cock to provide you
                            with a better, safer and faster service and to
                            support our business. Some cookies are necessary to
                            use our services, improve our services, and make
                            sure they work properly. Show more about your
                            choices.
                        </p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <button class="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 rounded-full border px-20 w-full">
                            Accept all cookies
                        </button>
                        <button class="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 rounded-full border px-20 w-full">
                            Refuse non-essential cookies
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
