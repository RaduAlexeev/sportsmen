import Footer from "../footer/footer";
import LanguageSelecter from "../header/languageSelecter";
import Container from "./container";
import ContentBox from "./contentBox";
import DropdownMenu from "./dropdownMenu";
import FooterBox from "./footerBox";
import HeaderBox from "./headerBox";
import IconNav from "./iconNav";
import Logo from "./logo";
import MenuSportPage from "./menuSportPage";
import SecondHeaderBox from "./secondHeaderBox";
import Sport from "./sport";
import SportsSubsection from "./sportsSubsection";
import Table from "./table";
import Title from "./title";

const clubs = [
    { place: 1, color: "bg-[#81d6ac]", name: "Barcelona", game: 35, win: 27, draw: 4, lost: 4, scoredGoal: 65, concededGoal: 15, point: 85 },
    { place: 2, color: "bg-[#81d6ac]", name: "Atletico Madrid", game: 35, win: 22, draw: 6, lost: 7, scoredGoal: 63, concededGoal: 27, point: 72 },
    { place: 3, color: "bg-[#81d6ac]", name: "Real Madrid", game: 35, win: 22, draw: 6, lost: 8, scoredGoal: 70, concededGoal: 33, point: 71 },
    { place: 4, color: "bg-[#b5e7ce]", name: "Real Cociedad", game: 35, win: 19, draw: 8, lost: 8, scoredGoal: 47, concededGoal: 32, point: 65 },
    { place: 5, color: "bg-[#b2bfd0]", name: "Villareal", game: 35, win: 18, draw: 6, lost: 11, scoredGoal: 54, concededGoal: 36, point: 60 },
    { place: 6, color: "bg-[#b2bfd0]", name: "Real Betis", game: 35, win: 16, draw: 8, lost: 11, scoredGoal: 43, concededGoal: 38, point: 56 },
    { place: 7, color: "bg-white", name: "Atletic", game: 35, win: 14, draw: 8, lost: 13, scoredGoal: 46, concededGoal: 39, point: 50 },
    { place: 8, color: "bg-white", name: "Girona", game: 35, win: 13, draw: 9, lost: 13, scoredGoal: 55, concededGoal: 50, point: 48 },
    { place: 9, color: "bg-white", name: "Sevilla", game: 35, win: 13, draw: 9, lost: 13, scoredGoal: 44, concededGoal: 49, point: 48 },
    { place: 10, color: "bg-white", name: "Osasuna", game: 35, win: 13, draw: 8, lost: 14, scoredGoal: 32, concededGoal: 39, point: 47 },
    { place: 11, color: "bg-white", name: "Rayo Valecano", game: 35, win: 12, draw: 10, lost: 13, scoredGoal: 42, concededGoal: 47, point: 46 },
    { place: 12, color: "bg-white", name: "Mallorca", game: 35, win: 12, draw: 8, lost: 15, scoredGoal: 33, concededGoal: 40, point: 44 },
    { place: 13, color: "bg-white", name: "Valencia", game: 35, win: 11, draw: 7, lost: 17, scoredGoal: 39, concededGoal: 41, point: 40 },
    { place: 14, color: "bg-white", name: "Almeria", game: 35, win: 11, draw: 6, lost: 18, scoredGoal: 46, concededGoal: 61, point: 39 },
    { place: 15, color: "bg-white", name: "Celta", game: 35, win: 10, draw: 9, lost: 16, scoredGoal: 40, concededGoal: 50, point: 39 },
    { place: 16, color: "bg-white", name: "Cadis", game: 35, win: 9, draw: 11, lost: 15, scoredGoal: 28, concededGoal: 50, point: 38 },
    { place: 17, color: "bg-white", name: "Hetafe", game: 35, win: 8, draw: 11, lost: 16, scoredGoal: 31, concededGoal: 44, point: 35 },
    { place: 18, color: "bg-[#ff7f84]", name: "Valladolid", game: 35, win: 10, draw: 5, lost: 20, scoredGoal: 30, concededGoal: 62, point: 35 },
    { place: 19, color: "bg-[#ff7f84]", name: "Espanol", game: 35, win: 8, draw: 10, lost: 17, scoredGoal: 44, concededGoal: 61, point: 34 },
    { place: 20, color: "bg-[#ff7f84]", name: "Elche", game: 35, win: 4, draw: 8, lost: 23, scoredGoal: 27, concededGoal: 65, point: 20 }
];

export default function SportsPage() {
    return (
        <Container>

            <HeaderBox>
                <DropdownMenu />
                <Title size="text-fontMenu" />
                <MenuSportPage />
                <IconNav />
                <LanguageSelecter />
            </HeaderBox>

            <SecondHeaderBox>
                <Sport name="Fotbal" />
                <SportsSubsection typesOfSport="Fotbal, Futsal, Fotbal Plaja, Fotbal Tenis" leagues="Лига Футзал, Лига Kelme A, Национальная Сборная, Дивизия B, Кубок Молдовы, Суперкубок Молдовы, Чемпионат среди детей, Детский кубок Молдовы, Лига Kelme, Двизия E, Дивизия С, Золотой матч 2013/14" />
                <Logo />
            </SecondHeaderBox>

            <ContentBox>
                <Table statistics={clubs} />
            </ContentBox>

            <FooterBox>
                {/* <Footer /> */}
            </FooterBox>

        </Container>
    );
}