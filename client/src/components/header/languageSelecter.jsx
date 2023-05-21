import { useState } from "react";

export default function LanguageSelecter() {
    const [clicked, setClicked] = useState(false);
    const noRotate = "rotate-0";
    const rotate = "rotate-180";
    const [vectorClass, setVectorClass] = useState(noRotate);
    const languages = {
        ru: "Русский",
        ro: "Romana",
        en: "English"
    };

    function handleClick() {
        if (!clicked) {
            setClicked(true);
            setVectorClass(vectorClass.replace(noRotate, rotate));
        } else {
            setClicked(false);
            setVectorClass(vectorClass.replace(rotate, noRotate));
        }
    }

    function changeLanguage(event) {
        const value = event.target.textContent;

        if (value == languages.ru) {
            document.getElementById("first-lang").innerHTML = (value.slice(0, 2));
            document.getElementById("second-lang").innerHTML = languages.en;
            document.getElementById("third-lang").innerHTML = languages.ro;
        }

        if (value == languages.ro) {
            document.getElementById("first-lang").innerHTML = (value.slice(0, 2));
            document.getElementById("second-lang").innerHTML = languages.en;
            document.getElementById("third-lang").innerHTML = languages.ru;
        }

        if (value == languages.en) {
            document.getElementById("first-lang").innerHTML = (value.slice(0, 2));
            document.getElementById("second-lang").innerHTML = languages.ru;
            document.getElementById("third-lang").innerHTML = languages.ro;
        }

        setClicked(false);
        setVectorClass(vectorClass.replace(rotate, noRotate));
    }

    const vector = (
        <svg id="vector" className={`relative bottom-1 w-4 h-4 ${vectorClass}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#ffffff" stroke="white" strokeWidth="0.5" />
            </g>
        </svg>
    );

    const languageDropdown = (
        <div className="relative">
            <div className="absolute bg-burgundy mt-[42px] w-[88px] h-[60px] right-0 z-10 flex flex-col justify-center items-center" onClick={changeLanguage}>
                <button id="second-lang">Русский</button>
                <button id="third-lang">English</button>
            </div>
        </div>
    );

    return (
        <div className="inline-flex">
            <button className="bg-burgundy w-[34px] h-[44px] text-lg flex flex-col justify-around items-center" onClick={handleClick}>
                <p id="first-lang">{languages.ro.slice(0, 2)}</p>
                {vector}
            </button>
            {clicked ? languageDropdown : null}
        </div>
    );
}