import PropTypes from "prop-types";

export default function Container({ children }) {
    Container.propTypes = {
        children: PropTypes.string.isRequired
    };

    return (
        <div className="bg-gray-300 w-full h-screen flex flex-col justify-start items-center font-mainFont">
            {children}
        </div>
    );
}