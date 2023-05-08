import Agenda from "./agenda";
import News from "./news";
import Publicity from "./publicity";

export default function SecondContent() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-mainWidth h-[767px] flex flex-row justify-between">
                <Agenda />
                <News />
                <Publicity />
            </div>
        </div>
    );
}