import PropTypes from "prop-types";

export default function CardTopPlayer({ name, sport, goal, logo }) {

    CardTopPlayer.propTypes = {
        name: PropTypes.string.isRequired,
        sport: PropTypes.string.isRequired,
        goal: PropTypes.number.isRequired,
        logo: PropTypes.string.isRequired
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[302px] h-[288px]">
                <img src={logo} alt="top-player" />
            </div>
            <div className="text-white font-bold text-xl mt-2">
                <p className="leading-6 text-center tracking-wider" style={{ wordSpacing: "5px" }}>{name} <span className="uppercase font-black text-mainRed">{sport}</span> <br />
                    Cel mai bun atacant <br />
                    sezonul 2011-2012 <br />
                    {goal} goluri marcate</p>
            </div>
        </div>
    );
}