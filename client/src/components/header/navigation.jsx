import React, { useState } from "react";
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

const db = [{ name: "Fotbal", logo: football }, { name: "Lupte martiale", logo: lupteMartiale }, { name: "Lupte libere", logo: lupteLibere }, { name: "Handball", logo: handbal }, { name: "Volei", logo: volei }, { name: "Baschet", logo: baschet }, { name: "Haltere", logo: haltere }, { name: "Rugby", logo: rugby }, { name: "Tenis", logo: tenis }, { name: "Box", logo: box }, { name: "Ciclism", logo: ciclism }, { name: "Sah", logo: sah }, { name: "Dame", logo: dame }, { name: "Automobilism", logo: auto }, { name: "Dans sportiv", logo: dans }, { name: "Inot", logo: inot }, { name: "Atletism", logo: atletism }, { name: "Motocros", logo: moto }];

export default function Navigation(props) {
    const [show, setShow] = useState(false);

    Navigation.propTypes = {
        onChange: PropTypes.func.isRequired
    };

    return (
        <ul className="flex flex-col">
            {db.map(el => (
                <li key={el.name} className="w-56 h-6 bg-white text-black flex flex-row justify-center items-center hover:bg-[#3d3d3d]  hover:text-white hover:relative hover:w-[236px] cursor-pointer hover:border-none border-r border-l border-b border-black z-30" onMouseOver={() => {
                    setShow(true);
                    props.onChange(show);
                    console.log(show);
                }} onMouseLeave={() => {
                    setShow(false);
                    props.onChange(show);
                    console.log(show);
                }} >
                    <div className="w-10 h-full flex justify-center items-center">
                        <img src={el.logo} alt="" />
                    </div>
                    <div className="w-1/2">
                        <p className="relative left-4 text-[17px] font-medium">{el.name}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
