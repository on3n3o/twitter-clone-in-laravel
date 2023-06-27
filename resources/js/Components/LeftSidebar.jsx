export default function LeftSidebar() {
    return (
        <>
            <div class="min-h-screen border-zinc-700 border-r overflow-hidden w-2/5 max-w-[275px] text-xl p-4 flex flex-col gap-2">
                <div class="w-full hover:bg-zinc-900 rounded-full p-2">
                    <i class="fa fa-cloud" />
                </div>
                <div class="w-full hover:bg-zinc-900 rounded-full p-2">
                    <i class="fa fa-search" />
                    <span class="pl-4 font-bold">Explore</span>
                </div>
                <div class="w-full hover:bg-zinc-900 rounded-full p-2">
                    <i class="fa fa-cog" />
                    <span class="pl-4">Settings</span>
                </div>
            </div>
        </>
    );
}
