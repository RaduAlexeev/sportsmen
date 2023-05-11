import CardInfo from "./cardInfo";
import logoOne from "../../img/sports-info/istoricul.png";
import logoTwo from "../../img/sports-info/tabel.png";
import logoThree from "../../img/sports-info/stiri.png";
import logoFour from "../../img/sports-info/pioneri.png";
import logoFive from "../../img/sports-info/sportivi.png";
import logoSix from "../../img/sports-info/competitii.png";
import CardTopPlayer from "./cardTopPlayer";
import logoPlayer from "../../img/sports-info/valeriu.png";


export default function SportsInfo() {
    const text = "Clubul Chelsea Londra a anunţat pe site-ul oficial numirea lui Antonio Conte in functia de manager pentru";
    const head = [
        "Istoricul fotbalului in RM",
        "Tabel competitii + grafice",
        "Stiri & Multimedia",
        "Pioneri Antrenori",
        "Sportivi",
        "Competitii internationale"
    ];

    const player = {
        name: "Baesu Valeriu",
        sport: "Futsal",
        goal: 53,
        logo: logoPlayer
    };

    const logo = [
        logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix
    ];

    return (
        <div className="w-[1130px] relative right-[px] z-20 h-[432px] bg-[#3d3d3d] flex flex-row">
            <div className="w-1/3 flex flex-col justify-center items-center space-y-5">
                <CardInfo head={head[0]} text={text} logo={logo[0]} />
                <CardInfo head={head[1]} text={text} logo={logo[1]} />
                <CardInfo head={head[2]} text={text} logo={logo[2]} />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center space-y-5">
                <CardInfo head={head[3]} text={text} logo={logo[3]} />
                <CardInfo head={head[4]} text={text} logo={logo[4]} />
                <CardInfo head={head[5]} text={text} logo={logo[5]} />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
                <CardTopPlayer name={player.name} sport={player.sport} goal={player.goal} logo={player.logo} />
            </div>
        </div>
    );
}