import FooterMenu from "./footerMenu";
import Map from "./map";
import FooterInfo from "./footerInfo";

export default function Footer() {
    return (
        <div className="bg-forFooter w-full h-footer mt-28 flex justify-center">
            <div className="w-mainWidth h-full flex flex-col justify-around text-white">
                <div className="flex flex-row tracking-tight">
                    <FooterMenu />
                    <Map />
                </div>
                <FooterInfo />
            </div>
        </div>
    );
}