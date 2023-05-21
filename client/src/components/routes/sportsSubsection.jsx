import PropTypes from "prop-types";
import { useState } from "react";

export default function SportsSubsection({ typesOfSport, leagues }) {
    SportsSubsection.propTypes = {
        typesOfSport: PropTypes.string.isRequired,
        leagues: PropTypes.string.isRequired
    };
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        if (!clicked) {
            setClicked(true);
        } else {
            setClicked(false);
        }
    }

    const arrayOfSports = typesOfSport.split(",");
    const arrayOfLeague = leagues.split(",");

    const subsection = (
        <div className="relative">
            <div className="absolute top-[60px] -right-[144px] w-[700px] h-[90px] bg-[#b0b5c0] flex justify-around items-center flex-wrap">
                {arrayOfLeague.map(el => (
                    <button key={el} className="w-[170px] text-white h-20px font-medium tracking-wide bg-gradient-to-b from-[#959ba2] from-50% to-[#747b84] to-50% text-sm border border-[#aaafb7] hover:text-black hover:bg-gradient-to-b hover:from-[#f8f7e5] hover:from-50% hover:to-[#e0da87] hover:to-50%">{el}</button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="inline-flex">
            <div className="w-[412px] h-[60px] flex justify-between items-center ">
                {arrayOfSports.map(el => (
                    <button key={el} className="bg-white font-bold w-[100px] h-full lowercase tracking-wider hover:shadow-black hover:shadow-inner" onClick={handleClick}>{el}</button>
                ))}
            </div>
            {clicked ? subsection : null}
        </div>
    );
}