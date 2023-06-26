import Tweet from "./Tweet";

export default function FeedComponent() {
    return <>
    <div class="min-h-screen w-3/12">
                    <div class="h-16 px-4 flex items-center">
                        <p class="flex-grow font-bold text-xl">Explore</p>
                        <p>
                            <i class="fa fa-gear" />
                        </p>
                    </div>
                    <div class="overflow-y-visible">
                        {/* Single Tweet */}
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                    </div>
                </div>
    </>
}