import PropTypes from "prop-types";

export default function SecondHeaderBox({ children }) {
    SecondHeaderBox.propTypes = {
        children: PropTypes.string.isRequired
    };

    return (
        <div className="bg-white w-full h-[60px] flex justify-center">
            <div className="w-mainWidth flex flex-row justify-between items-center text-black">
                {children}
            </div>
        </div>
    );
}