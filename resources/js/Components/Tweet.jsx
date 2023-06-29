export default function Tweet({
    creatorImg,
    creatorName,
    creatorAlias,
    createdAt,
    content,
    mediaImg,
    mediaVideo = null,
    mediaVideoFormat = null,
}) {
    return (
        <>
            <div class="flex flex-row border-b border-b-zinc-800 pt-2 ">
                <div class="pl-4">
                    <img
                        class="rounded-full"
                        width="48"
                        height="48"
                        src={creatorImg}
                    />
                </div>
                <div class="px-4 w-full">
                    <div class="flex ">
                        <div class="text-sm flex-1">
                            <span class="font-medium">{creatorName} </span>
                            <span class="text-blue-400">
                                <i class="fa-solid fa-square-check"></i>{" "}
                            </span>
                            <span class="text-zinc-500">
                                @{creatorAlias} · {createdAt}
                            </span>
                        </div>
                        <i class="text-zinc-500 fa fa-ellipsis" />
                    </div>
                    <span class="leading-none">{content}</span>

                    {mediaVideo && (
                        <div class="mt-2">
                            <video class="rounded-2xl" controls autoPlay loop>
                                <source
                                    src={mediaVideo}
                                    type={mediaVideoFormat}
                                />
                            </video>
                        </div>
                    )}

                    <div class="flex flex-grow py-2">
                        <div class=" flex-1 text-zinc-600 hover:text-blue-400 hover:cursor-pointer transition delay-100 duration-100">
                            <i class="fa-regular fa-comment hover:bg-blue-950 rounded-full p-2 transition delay-100 duration-100" />
                            <span class="text-sm pl-2">666</span>
                        </div>
                        <div class=" flex-1 text-zinc-600 hover:text-green-400 hover:cursor-pointer transition delay-100 duration-100">
                            <i class="fa-solid fa-repeat hover:bg-green-950 rounded-full p-2 transition delay-100 duration-100" />
                            <span class="text-sm pl-2">9,996</span>
                        </div>
                        <div class=" flex-1 text-zinc-600 hover:text-red-400 hover:cursor-pointer transition delay-100 duration-100">
                            <i class="fa-regular fa-heart hover:bg-red-950 rounded-full p-2 transition delay-100 duration-100" />
                            <span class="text-sm pl-2">37.9k</span>
                        </div>
                        <div class=" flex-1 text-zinc-600 hover:text-blue-400 hover:cursor-pointer transition delay-100 duration-100">
                            <i class="fa-solid fa-chart-simple hover:bg-blue-950 rounded-full p-2 transition delay-100 duration-100" />
                            <span class="text-sm pl-2">499.1k</span>
                        </div>
                        <div class=" flex-1 text-zinc-600 hover:text-blue-400 hover:cursor-pointer transition delay-100 duration-100">
                            <i class="fa-solid fa-upload hover:bg-blue-950 rounded-full p-2 transition delay-100 duration-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
