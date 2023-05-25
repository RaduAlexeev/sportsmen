import PropTypes from "prop-types";

export default function CardTopPlayer({ logo, title, text }) {
    CardTopPlayer.propTypes = {
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

    return (
        <div className="w-[173px] h-[177px] my-2 flex flex-col justify-center space-y-1 items-center">
            <h1 className="uppercase text-base font-black font-menuFont text-mainRed">{title}</h1>
            <img className="w-[166px] h-[104px]" src={logo} alt="logo" />
            <p className="text-xs break-words leading-none line-clamp-3 px-1.5 font-bold mb-0.5">{text}</p>
        </div>
    );
}