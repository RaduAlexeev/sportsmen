import logo from "../../img/header/logo.png";
import login from "../../img/header/login.png";
import favorite from "../../img/header/favorite.png";

export default function Header() {
    return (
        <div className="w-full flex justify-center items-center bg-white">
            <div className="w-mainWidth h-24 flex justify-between items-center font-sans">
                <div className="flex flex-row items-center justify-around">
                    <img src={logo} alt="" />
                    <h1 className="text-fontHeader uppercase italic font-bold ml-7">Portal sportiv moldovenesc</h1>
                </div>
                <div className="flex flex-row mr-8 w-80 item-center justify-between h-8 text-[20px] text-mainRed">
                    <a className="flex flex-row" href="#" >
                        <img className="mr-2" src={favorite} alt="image favorite" />
                        <p>Favorite</p>
                    </a>

                    <a className="flex flex-row" href="#">
                        <img className="mr-2" src={login} alt="image login" />
                        <p className="w-28">Contul meu</p>
                    </a>
                </div>
            </div>
        </div>
    );
}