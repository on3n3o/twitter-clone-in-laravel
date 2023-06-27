export default function Tweet() {
    return (
        <>
            <div class="flex flex-row border-b border-b-zinc-600 pt-2 ">
                <div class="pl-4">
                    <img
                        class="rounded-full"
                        width="128"
                        height="128"
                        src="/img/avatar_400x400.jpg"
                    />
                </div>
                <div class="px-4">
                    <div>
                        <span>Fabio Esparanzo </span>
                        <span class="text-blue-400">
                            <i class="fa-solid fa-square-check"></i>{" "}
                        </span>
                        <span class="text-zinc-600">@FabrizioRomano · 5h</span>
                    </div>
                    <span class="leading-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce vehicula placerat sodales. Duis varius, magna a
                        pellentesque fermentum, enim arcu pharetra leo, vitae
                        elementum metus tortor sed justo. Pellentesque rutrum
                        vulputate est ut blandit. Suspendisse pharetra sapien eu
                        nec.
                    </span>

                    <div class="">
                        <video class="rounded-2xl" controls autoPlay loop>
                            <source src="/video/test.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div class="flex flex-grow py-2">
                        <div class="w-1/6 text-zinc-600">
                            <i class="fa-regular fa-comment" />
                            <span class="pl-2">666</span>
                        </div>
                        <div class="w-1/6 text-zinc-600">
                            <i class="fa-solid fa-repeat" />
                            <span class="pl-2">9,996</span>
                        </div>
                        <div class="w-1/6 text-zinc-600">
                            <i class="fa-regular fa-heart" />
                            <span class="pl-2">37.9k</span>
                        </div>
                        <div class="w-1/6 text-zinc-600">
                            <i class="fa-solid fa-chart-simple" />
                            <span class="pl-2">499.1k</span>
                        </div>
                        <div class="w-1/6 text-zinc-600">
                            <i class="fa-solid fa-upload" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
