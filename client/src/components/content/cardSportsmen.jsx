import player from "../../img/banner/image.png";

export default function CardSportsmen() {
    return (
        <div className="w-card h-card flex flex-col justify-center items-center">
            <h1 className="text-sm uppercase text-mainRed font-bold">Sport</h1>
            <img src={player} alt="player" />
            <p className="text-xs p-2 relative left-0.5 leading-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint qui do.</p>
        </div>
    );
}