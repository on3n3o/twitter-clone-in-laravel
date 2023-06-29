import Tweet from "./Tweet";

export default function FeedComponent() {
    return (
        <>
            <div class="max-h-screen overflow-y-scroll max-w-[37rem] relative w-full">
                <div style={{
                    'background': 'rgba(0, 0, 0, 0.7)',
                    'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
                    'backdrop-filter': 'blur(8px)',
                    '-webkit-backdrop-filter': 'blur(8px)',
                }} class="h-14 px-4 flex items-center fixed top-0 w-[590px] bg-black">
                    <p class="flex-grow font-semibold text-xl text-zinc-300">Explore</p>
                    <p>
                        <i class="fa fa-gear" />
                    </p>
                </div>
                <div class="overflow-y-visible mt-16">
                    {/* Single Tweet */}
                    <Tweet
                        createdAt="5h"
                        creatorAlias="fabio_alonso_12"
                        creatorName="Fabio Alonso"
                        creatorImg="/img/avatar_400x400.jpg"
                        content="mood"
                        mediaVideo="/video/test.mp4"
                        mediaVideoFormat="video/mp4"
                    />
                    <Tweet
                        createdAt="15h"
                        creatorAlias="IAmSteveHarvey"
                        creatorName="Steve Harvey"
                        creatorImg="https://pbs.twimg.com/profile_images/1623706635616268288/vNCjCOpT_400x400.jpg"
                        content="Success doesn't come to those who wait, it comes to those who hustle 💯"
                    />
                    <Tweet
                        createdAt="Jun 26"
                        creatorAlias="sginal"
                        creatorName="ABC"
                        creatorImg="/img/avatar_400x400.jpg"
                        mediaVideo="/video/test.mp4"
                        mediaVideoFormat="video/mp4"
                    />
                    <Tweet
                        createdAt="Jul 24"
                        creatorAlias="male12"
                        creatorName="What"
                        creatorImg="/img/avatar_400x400.jpg"
                        mediaVideo="/video/test.mp4"
                        mediaVideoFormat="video/mp4"
                    />
                </div>
            </div>
        </>
    );
}
