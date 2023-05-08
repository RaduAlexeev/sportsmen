import Navigation from "../header/navigation";
import Banner from "./banner";

export default function Content() {
    return (
        <div className="h-content w-full flex justify-center">
            <div className="w-mainWidth h-full flex flex-row justify-between">
                <div className="relative top-1">
                    <Navigation />
                </div>
                <div>
                    <Banner />
                </div>
            </div>
        </div>
    );
}