import CardAgenda from "./cardAgenda";
import shape from "../../img/second-content/shape.png";

export default function Agenda() {
    return (
        <div className="w-56 bg-white">
            <div className="w-full h-[75px] text-white bg-mainRed flex flex-col justify-center items-center">
                <h2 className="text-fontHeader mb-1">Agenda</h2>
                <div className="w-full flex flex-row justify-around text-sm font-medium">
                    <a href="#">Toate</a>
                    <a className="text-black" href="#">Selecteaza sportul</a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <CardAgenda />
                <img src={shape} alt="shape" />
                <CardAgenda />
                <img src={shape} alt="shape" />
                <CardAgenda />
                <img src={shape} alt="shape" />
                <CardAgenda />
                <img src={shape} alt="shape" />
                <CardAgenda />
                <img src={shape} alt="shape" />
                <CardAgenda />
                <img src={shape} alt="shape" />
                <CardAgenda />
                <img src={shape} alt="shape" />
                <CardAgenda />
            </div>
        </div>
    );
}