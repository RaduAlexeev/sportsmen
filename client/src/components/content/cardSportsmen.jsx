import PropTypes from "prop-types";

export default function CardSportsmen({ logo, text }) {

    CardSportsmen.propTypes = {
        logo: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

    return (
        <div className="w-card h-card flex flex-col justify-center items-center">
            <h1 className="text-sm uppercase text-mainRed font-black tracking-wider">{text}</h1>
            <img className="w-[165px] h-[102px]" src={logo} alt="player" />
            <p className="text-sm p-2 relative left-0.5 leading-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint qui do.</p>
        </div>
    );
}