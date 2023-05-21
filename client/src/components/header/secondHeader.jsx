import menu from "../../img/second-header/menu.png";
import shape from "../../img/second-header/shape.png";
import search from "../../img/second-header/search.png";
import vector from "../../img/second-header/vector.png";
import DropdownMenu from "../routes/dropdownMenu";
import LanguageSelecter from "./languageSelecter";

export default function SecondHeader() {
    return (
        <div className="w-full flex justify-center items-center h-11 bg-mainRed">
            <div className="w-mainWidth h-full text-white flex flex-row justify-between items-center">
                <DropdownMenu />
                {/* for nav */}
                <div className="ml-8">
                    <ul className="flex flex-row space-x-4 uppercase text-sm font-menuFont">
                        <li><a href="#">Acasa</a></li>
                        <img src={shape} alt="|" />
                        <li><a href="#">Agenda Sportiva</a></li>
                        <img src={shape} alt="|" />
                        <li><a href="#">Stiri</a></li>
                        <img src={shape} alt="|" />
                        <li><a href="#">Politica de colaborare</a></li>
                        <img src={shape} alt="|" />
                        <li><a href="#">Despre Noi</a></li>
                        <img src={shape} alt="|" />
                        <li><a href="#">Contacte</a></li>
                    </ul>
                </div>

                {/* rectangle */}
                <div className="w-0.5 h-full bg-black shadow-shadow-line -skew-x-30 opacity-50">
                </div>

                {/* for cautare */}
                <div>
                    <form className="">
                        <input className="text-left pl-2 placeholder-right w-[235px]" type="text" placeholder="Cautare" /* value="" onChange="" */ />
                        <button className="relative right-6" type="submit"><img src={search} alt="search" /></button>
                    </form>
                </div>

                {/* for language */}
                <LanguageSelecter />
            </div>
        </div >
    );
}