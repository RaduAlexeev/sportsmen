import PropTypes from "prop-types";

export default function FooterBox({ children }) {
    FooterBox.propTypes = {
        children: PropTypes.string.isRequired
    };

    return (
        <div className="bg-forFooter w-full h-footer flex justify-center">
            <div className="w-mainWidth flex flex-row justify-between items-center bg-black">
                {children}
            </div>
        </div>
    );
}