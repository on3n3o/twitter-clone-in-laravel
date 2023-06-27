export default function FooterPopup() {
    return (
        <>
            <div class="w-full bg-blue-400 text-white absolute bottom-0 left-0 flex flex-col justify-center align-middle">
                <div class="w-full h-16 flex justify-center align-middle text-center">
                    <div class="w-2/12 flex collapse sm:visible">
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
                <div class="h-40 bg-white text-black flex md:flex-row flex-col justify-center items-center">
                    <div class="md:w-6/12 w-full">
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
