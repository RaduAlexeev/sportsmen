import { useState } from "react";

import PropTypes from "prop-types";
import football from "../../img/nav/football.png";
import lupteMartiale from "../../img/nav/lupte.png";
import lupteLibere from "../../img/nav/lupte-libere.png";
import handbal from "../../img/nav/handbal.png";
import volei from "../../img/nav/volei.png";
import baschet from "../../img/nav/bascket.png";
import haltere from "../../img/nav/haltere.png";
import rugby from "../../img/nav/rugby.png";
import tenis from "../../img/nav/tenis.png";
import box from "../../img/nav/box.png";
import ciclism from "../../img/nav/ciclism.png";
import sah from "../../img/nav/sah.png";
import dame from "../../img/nav/dame.png";
import auto from "../../img/nav/auto.png";
import dans from "../../img/nav/dans.png";
import inot from "../../img/nav/inot.png";
import atletism from "../../img/nav/atletism.png";
import moto from "../../img/nav/moto.png";
import SportsInfo from "../header/sportsInfo";

const db = [{ name: "Fotbal", logo: football }, { name: "Lupte martiale", logo: lupteMartiale }, { name: "Lupte libere", logo: lupteLibere }, { name: "Handball", logo: handbal }, { name: "Volei", logo: volei }, { name: "Baschet", logo: baschet }, { name: "Haltere", logo: haltere }, { name: "Rugby", logo: rugby }, { name: "Tenis", logo: tenis }, { name: "Box", logo: box }, { name: "Ciclism", logo: ciclism }, { name: "Sah", logo: sah }, { name: "Dame", logo: dame }, { name: "Automobilism", logo: auto }, { name: "Dans sportiv", logo: dans }, { name: "Inot", logo: inot }, { name: "Atletism", logo: atletism }, { name: "Motocros", logo: moto }];



export default function DropdownMenu() {
    const [clicked, setClicked] = useState(false);
    const [vectorClass, setVectorClass] = useState("rotate-0");
    const [showInfoBanner, setShowInfoBanner] = useState(false);

    function handleClick() {
        const noRotate = "rotate-0";
        const rotate = "rotate-180";


        if (!clicked) {
            setClicked(true);
            setVectorClass(vectorClass.replace(noRotate, rotate));
        } else {
            setClicked(false);
            setVectorClass(vectorClass.replace(rotate, noRotate));
        }
    }

    function mouseEnter() {
        setShowInfoBanner(true);
    }

    function mouseLeave() {
        setShowInfoBanner(false);
    }

    return (
        <div className="inline-flex">
            <a
                href="#"
                className="w-[240px] h-[44px] ml-[14px] space-x-1.5 z-20 bg-black text-white -skew-x-30 text-[22px] tracking-wider font-sans font-bold uppercase flex flex-row justify-center items-center" onClick={handleClick}
            >
                <span className="w-full h-full flex items-center justify-end">
                    <svg className="skew-x-12 w-[22px] h-[30px] relative top-[1.35px]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" fill="none" width="20" height="20" />
                        <g>
                            <path d="M20 5V2H0v3h20zm0 6V8H0v3h20zm0 6v-3H0v3h20z" fill="red" stroke="red" strokeWidth="0.5" />
                        </g>
                    </svg>
                </span>

                <span className="w-full h-full flex items-center justify-center">
                    <p className="w-[140px] skew-x-30">All Sports</p>
                </span>

                <span className="w-full h-full flex items-center justify-start">
                    <svg id="vector" className={`${vectorClass} skew-x-30 w-6 h-6 relative right-2 top-[1.5px]`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#ffffff" stroke="white" strokeWidth="0.5" />
                        </g>
                    </svg>
                </span>
            </a>

            {/* --------- */}
            <div className="relative">
                <div className="absolute mt-[41px] mr-[12.5px] top-[2px] right-0 z-10 w-60 origin-top-right shadow-lg first:border-t first:border-red-600">
                    <div>
                        {clicked ?
                            db.map(el => (
                                <a
                                    key={el.name}
                                    id={el.name}
                                    href={el.name}
                                    onMouseEnter={mouseEnter}
                                    onMouseLeave={mouseLeave}
                                    className="w-full h-6 flex flex-row justify-center items-center text-sm bg-white text-black  border-r border-l border-b border-black hover:w-[246px] hover:border-none hover:border-black hover:bg-[#3d3d3d] hover:text-white"
                                >
                                    <span className="w-10 h-full flex justify-center items-center">
                                        <img src={el.logo} alt={el.name} />
                                    </span>
                                    <span className="w-1/2 relative left-4 text-[17px] font-medium">{el.name}</span>
                                </a>
                            )) : null}
                    </div>
                </div>
            </div>
            {/* --------- */}

            <div className="relative" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <div className="absolute mt-[43px] mr-[12.5px] top-[1px]">
                    {showInfoBanner ? <SportsInfo /> : null}
                </div>
            </div>

        </div>
    );
}