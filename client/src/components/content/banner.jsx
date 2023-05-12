import leftVector from "../../img/banner/vector-left.png";
import rightVector from "../../img/banner/vector-right.png";
import CardSportsmen from "./cardSportsmen";
import atletism from "../../img/top-sportsmeni/atletism.jpg";
import fotbal from "../../img/top-sportsmeni/fotbal.jpg";
import box from "../../img/top-sportsmeni/box.jpg";
import inot from "../../img/top-sportsmeni/inot.jpg";
import lupta from "../../img/top-sportsmeni/lupta.jpg";
import baschet from "../../img/top-sportsmeni/baschet.jpg";
import sah from "../../img/top-sportsmeni/sah.jpg";
import auto from "../../img/top-sportsmeni/auto.jpg";

const imgSport = [
    atletism, fotbal, box, inot, lupta, baschet, sah, auto
];

export default function Banner() {
    return (
        <div className="w-banner h-banner flex flex-col">
            <h1 className="uppercase text-3xl mt-4 mb-2 relative left-14">Top sportsmen</h1>
            <div className="flex flex-row">
                <div className="h-full flex items-center">
                    <button><img src={leftVector} alt="vector-left" /></button>
                </div>

                <div className="w-[928px] h-[388px] mx-8 bg-white grid grid-cols-4 gap-x-6 gap-y-2 py-2 px-10">
                    <CardSportsmen logo={imgSport[0]} text="Atletism" />
                    <CardSportsmen logo={imgSport[1]} text="Fotbal" />
                    <CardSportsmen logo={imgSport[2]} text="Box" />
                    <CardSportsmen logo={imgSport[3]} text="Inot" />
                    <CardSportsmen logo={imgSport[4]} text="Lupta" />
                    <CardSportsmen logo={imgSport[5]} text="Baschet" />
                    <CardSportsmen logo={imgSport[6]} text="Sah" />
                    <CardSportsmen logo={imgSport[7]} text="Automobilism" />
                </div>

                <div className="h-full flex items-center">
                    <button><img src={rightVector} alt="vector-right" /></button>
                </div>
            </div>

        </div>
    );
}