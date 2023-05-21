import PropTypes from "prop-types";

export default function Sport({ name }) {
    Sport.propTypes = {
        name: PropTypes.string.isRequired
    };

    return (
        <div className="w-[254px] h-full flex justify-center items-center">
            <p className="italic font-sans uppercase font-bold tracking-widest text-[30px]">{name}</p>
        </div>
    );
}