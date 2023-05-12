import menu from "../../img/second-header/menu.png";
import shape from "../../img/second-header/shape.png";
import search from "../../img/second-header/search.png";
import vector from "../../img/second-header/vector.png";

export default function SecondHeader() {
    return (
        <div className="w-full flex justify-center items-center h-11 bg-mainRed">
            <div className="w-mainWidth h-full text-white flex flex-row justify-between items-center">
                {/* for All Sports */}
                <div className="w-56 h-12 mt-1 relative bg-black rounded-b-lg -skew-x-30 shadow-shadow-x-black left-[14px]">
                    <a className="flex flex-row items-center skew-x-30" href="#">
                        <img className="ml-3" src={menu} alt="" />
                        <p className="text-[22px] tracking-wider font-black uppercase">All Sports</p>
                    </a>
                </div>

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
                <button className="bg-burgundy h-full w-9 text-lg flex flex-col justify-center items-center">
                    <p>Ro</p>
                    <img src={vector} alt="vector" />
                    <div className="absolute w-[88px] h-[60px] bg-burgundy top-[140px] right-[268px]">
                        <p>Русский</p>
                        <p>English</p>
                    </div>
                </button>
            </div>
        </div >
    );
}