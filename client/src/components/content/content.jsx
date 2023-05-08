import Navigation from "../header/navigation";
import Banner from "./banner";

export default function Content() {
    return (
        <div className="h-content w-full flex justify-center">
            <div className="w-mainWidth h-full bg-slate-100 flex flex-row justify-between">
                <div className="relative right-3">
                    <Navigation />
                </div>
                <div>
                    <Banner />
                </div>
            </div>
        </div>
    );
}