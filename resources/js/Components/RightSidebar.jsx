export default function RightSidebar() {
    return (
        <>
            <div class="min-h-screen  border-l border-zinc-700  min-w-sm max-w-sm">
                <div class="border border-zinc-700 p-4 my-2 ml-8 rounded-2xl">
                    <p class="text-xl font-bold">New to Twatter?</p>
                    <p class="text-sm text-zinc-500 py-2">
                        Sign up now to get your own personalized timeline!
                    </p>
                    <div class="flex flex-col gap-2">
                        <button class="flex items-center justify-center bg-white text-black  py-2 rounded-full border  w-full">
                            <img width="18" src="/img/g-logo.png" />
                            <span class="px-2">Sign up with Google</span>
                        </button>
                        <button class="flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-bold py-2 rounded-full border w-full">
                            <img width="18" src="/img/g-logo.png" />
                            <span class="px-2">Sign up with Apple</span>
                        </button>
                        <button class="bg-white text-black hover:bg-zinc-200 font-bold py-2 rounded-full border w-full">
                            Create account
                        </button>
                    </div>
                    <span class=" text-xs text-zinc-500">
                        By signing up, you agree to the{" "}
                        <span class="text-blue-400">Terms of Service</span> and{" "}
                        <span class="text-blue-400">Privacy Policy</span>,
                        including <span class="text-blue-400">Cookie Use</span>.
                    </span>
                </div>
            </div>
        </>
    );
}
