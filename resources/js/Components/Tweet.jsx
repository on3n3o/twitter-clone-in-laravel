export default function Tweet() {
    return (
        <>
            <div class="w-full flex flex-row">
                <div class="pl-4">
                    <img
                        class="rounded-full"
                        width="64"
                        height="64"
                        src="/img/avatar_400x400.jpg"
                    />
                </div>
                <div class="mx-4">
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
                        <video class="rounded-2xl" controls autoplay loop>
                            <source src="/video/test.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
}
