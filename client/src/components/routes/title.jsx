import PropTypes from "prop-types";

export default function Title({ size }) {
    Title.propTypes = {
        size: PropTypes.string.isRequired
    };

    return (
        <h1 className={`${size} uppercase font-bold italic tracking-wider`}>Portal Sportiv Moldovenesc</h1>
    );
}