import Tweet from "./Tweet";

export default function FeedComponent() {
    return (
        <>
            <div class="max-h-screen overflow-y-scroll max-w-xl relative w-full">
                <div
                    class="h-16 px-4 flex items-center absolute top-0 bg-green-300 w-full"
                >
                    <p class="flex-grow font-bold text-xl">Explore</p>
                    <p>
                        <i class="fa fa-gear" />
                    </p>
                </div>
                <div class="overflow-y-visible mt-16">
                    {/* Single Tweet */}
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
            </div>
        </>
    );
}
