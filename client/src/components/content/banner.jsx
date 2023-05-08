import leftVector from "../../img/banner/vector-left.png";
import rightVector from "../../img/banner/vector-right.png";
import CardSportsmen from "./cardSportsmen";

export default function Banner() {
    return (
        <div className="w-banner h-banner flex flex-col">
            <h1 className="uppercase text-3xl mt-8 relative left-14">Top sportsmen</h1>
            <div className="flex flex-row">
                <div className="h-full flex items-center">
                    <button><img src={leftVector} alt="vector-left" /></button>
                </div>

                <div className="w-[928px] h-[388px] mx-8 bg-white grid grid-cols-4 gap-x-6 gap-y-2 py-2 px-10">
                    <CardSportsmen />
                    <CardSportsmen />
                    <CardSportsmen />
                    <CardSportsmen />
                    <CardSportsmen />
                    <CardSportsmen />
                    <CardSportsmen />
                    <CardSportsmen />
                </div>

                <div className="h-full flex items-center">
                    <button><img src={rightVector} alt="vector-right" /></button>
                </div>
            </div>

        </div>
    );
}