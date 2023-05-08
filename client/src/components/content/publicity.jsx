import firstImg from "../../img/second-content/juridic.png";
import secondImg from "../../img/second-content/casco.png";

export default function Publicity() {
    return (
        <div className="w-[310px] h-[767px] flex flex-col justify-between items-center">
            <img className="h-[374px] cursor-pointer" src={firstImg} alt="juridic" />
            <img className="h-[374px] cursor-pointer" src={secondImg} alt="casco" />
        </div>
    );
}