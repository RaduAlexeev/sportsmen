import PropTypes from "prop-types";
import line from "../../img/sports-info/line.png";

export default function CardInfo({ head, text, logo }) {

    CardInfo.propTypes = {
        head: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
    };

    return (
        <div className="w-80 h-28 flex flex-row cursor-pointer hover:shadow-innerR hover:shadow-[#383838]">
            <div className="w-20 flex justify-center items-center">
                <img className="relative top-3 right-2" src={logo} alt="icon" />
            </div>
            <div className="w-64 leading-4 space-y-1 flex flex-col justify-center">
                <h1 className="text-[17px] text-mainRed font-semibold tracking-wide">{head}</h1>
                <img className="relative right-1.5 h-[1px]" src={line} alt="line" />
                <p className=" text-[14px] text-white">{text}</p>
            </div>
        </div>
    );
}