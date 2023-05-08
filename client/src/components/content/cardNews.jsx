import image from "../../img/second-content/for-news.png";

export default function CardNews() {
    return (
        <div className="w-[646px] h-[148px] flex flex-row ">
            <img className="p-0.5" src={image} alt="news" />
            <div className="relative w-[440px] left-6 text-sm flex flex-col justify-center leading-4">
                <h3 className="text-mainRed">OFICIAL FUTSAL: Antonio Conte este noul antrenor al echipei Chelsea Londra</h3>
                <p className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consectetur ipsum, sunt perspiciatis exercitationem maiores magnam culpa ad repellat nemo, necessitatibus provident in dicta fugiat quaerat ut repudiandae libero.</p>
            </div>
        </div>
    );
}