import LeagueSubsection from "./leagueSubsection";
import { useState } from "react";

const databaseLeague = [
    { title: "Divizia Nationala", subsection: ["1", "2", "3"] },
    { title: "Divizia A", subsection: ["1", "2", "3"] },
    { title: "Divizia B", subsection: ["1", "2", "3"] },
    { title: "Fotbalul de copii si juniori", subsection: ["1"] },
    { title: "Cupa Moldovei ORANGE", subsection: ["1", "2"] },
    { title: "Supercupa Moldovei ORANGE", subsection: ["1", "2", "3"] },
    { title: "Fotbal femenin", subsection: ["1", "2", "3"] },
    { title: "Veterani", subsection: ["1", "2", "3"] },
    { title: "Echipa Nationala", subsection: ["1", "2", "3"] },
    { title: "Selectionata U-21", subsection: ["1", "2", "3"] },
    { title: "Selectionata U-19", subsection: ["1", "2", "3"] },
    { title: "Selectionata U-18", subsection: ["1", "2", "3"] },
    { title: "Selectionata U-17", subsection: ["1", "2", "3"] },
    { title: "Selectionata U-16", subsection: ["1", "2", "3"] },
    { title: "Selectionata U-15", subsection: ["1", "2", "3"] },
    { title: "Echipa Nationala femenina", subsection: ["1", "2", "3"] },
    { title: "Selectionata femenina U-19", subsection: ["1", "2", "3"] },
    { title: "Selectionata femenina U-17", subsection: ["1", "2", "3"] },
    { title: "Selectionata femenina U-15", subsection: ["1", "2", "3"] },
    { title: "Selectionata de futsal", subsection: ["1", "2", "3"] },
    { title: "Selectionata de futsal U-21", subsection: ["1", "2", "3"] }
];


export default function AsideLeague() {
    const [clickedIndex, setClickedIndex] = useState(null);

    function handleClick(index) {
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
        }

    }

    return (
        <div>
            {
                databaseLeague.map((el, index) => (
                    <div key={index} >
                        <button onClick={() => handleClick(index)} className="relative left-4 w-[251px] h-[36px] bg-[#656d79] border border-b-3 border-[#4d5460] text-white font-menuFont font-semibold tracking-widest flex items-center text-sm">
                            <p className="relative left-8">{el.title}</p>
                        </button>
                        {clickedIndex === index && <LeagueSubsection subsection={el.subsection} />}
                    </div>
                ))
            }

        </div>
    );
}