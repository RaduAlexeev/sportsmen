import PropTypes from "prop-types";

export default function LeagueSubsection({ subsection }) {
    LeagueSubsection.propTypes = {
        subsection: PropTypes.array.isRequired
    };

    return (
        <div className="block">
            {
                subsection.map((el, index) => (
                    <button key={index} className="relative left-8 w-[220px] h-[36px] bg-white border border-b-2 border-[#d7d7d7] text-black font-menuFont font-semibold tracking-widest flex items-center">
                        <p className="relative left-8">{el}</p>
                    </button>
                ))}
        </div>
    );
}