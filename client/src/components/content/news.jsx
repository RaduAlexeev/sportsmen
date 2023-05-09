import CardNews from "./cardNews";

export default function News() {
    return (
        <div className="w-[740px]">
            <div className="w-full h-[75px] text-white bg-mainRed flex flex-col justify-center items-center rounded-t-lg">
                <h2 className="relative top-3 text-fontHeader mb-1">Stiri</h2>
                <div className="relative left-[200px] space-x-12 text-sm font-medium">
                    <a href="#">Toate</a>
                    <a className="text-black" href="#">Selecteaza sportul</a>
                </div>
            </div>

            <div className="w-full h-[692px] bg-white px-12 py-8 space-y-4">
                <CardNews />
                <CardNews />
                <CardNews />
                <CardNews />
            </div>
        </div>
    );
}