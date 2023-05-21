import logo from "../../img/header/logo.png";

export default function Logo() {
    return (
        <div className="flex items-center">
            <img src={logo} alt="logo" />
        </div>
    );
}