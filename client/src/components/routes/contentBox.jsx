import PropTypes from "prop-types";

export default function ContentBox({ children }) {
    ContentBox.propTypes = {
        children: PropTypes.string.isRequired
    };

    return (
        <div className="w-full h-[1400px] flex justify-center">
            <div className="w-mainWidth flex flex-row justify-center items-center bg-violet-900">
                {children}
            </div>
        </div>
    );
}