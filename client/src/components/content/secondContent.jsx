import Agenda from "./agenda";

export default function SecondContent() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-mainWidth h-[767px] flex flex-row justify-between">
                <Agenda />
                <div className="w-[740px] bg-red-400">2</div>
                <div className="w-[310px] bg-blue-400">3</div>
            </div>
        </div>
    );
}