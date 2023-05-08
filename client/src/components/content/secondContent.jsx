import Agenda from "./agenda";
import News from "./news";

export default function SecondContent() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-mainWidth h-[767px] flex flex-row justify-between">
                <Agenda />
                <News />
                <div className="w-[310px] bg-blue-400">3</div>
            </div>
        </div>
    );
}