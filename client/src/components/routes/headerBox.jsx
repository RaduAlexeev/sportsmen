import PropTypes from "prop-types";

export default function HeaderBox({ children }) {
    HeaderBox.propTypes = {
        children: PropTypes.string.isRequired
    };

    return (
        <div className="bg-mainRed w-full flex justify-center">
            <div className="w-mainWidth flex flex-row justify-between items-center text-white">
                {children}
            </div>
        </div>
    );
}