export default function CookiesPopup() {
    return (
        <>
            <div class="w-full bg-blue-400 text-white flex flex-col justify-center align-middle">
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
