export default function CardAgenda() {
    return (
        <div className="w-full h-[86px] flex flex-row p-4 justify-between items-center">
            <div className="flex flex-col w-12 h-12 p-2 bg-mainRed font-bold uppercase justify-center items-center leading-none">
                <p className="relative top-1.5">APR</p>
                <h3 className="relative bottom-0.5 text-3xl">01</h3>
            </div>
            <div className="flex flex-col leading-4 text-xs">
                <h4 className="relative top-0.5 left-6 font-black uppercase">Sambo</h4>
                <p className="relative left-1">Campionatul Republicii Moldova la sambo, seniori</p>
            </div>
        </div>
    );
}