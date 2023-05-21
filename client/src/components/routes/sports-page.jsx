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
import Title from "./title";

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

            </ContentBox>

            <FooterBox>
                {/* <Footer /> */}
            </FooterBox>

        </Container>
    );
}