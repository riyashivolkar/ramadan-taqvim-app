import TaqvimTable from "@/app/components/TaqvimTable";

export default function FullTaqvim () {
    return <div
        style={{backgroundImage: 'url(/taqvim-app-wallpaper.webp)'}}
        className="pt-14 bg-top bg-no-repeat bg-contain"
    >
        <TaqvimTable />
    </div>
}