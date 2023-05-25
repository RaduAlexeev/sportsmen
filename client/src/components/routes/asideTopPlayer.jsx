import logo from "../../img/top-sportsmeni/fotbal.jpg";
import CardTopPlayer from "./itemTopPlayer";


const topPlayer = [
    { logo, title: "Football", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et at odit corrupti magni sunt magnam adipisci deleniti eligendi nemo sed, dicta error iusto harum veniam. Rerum animi illum iure earum." },
    { logo, title: "Football", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et at odit corrupti magni sunt magnam adipisci deleniti eligendi nemo sed, dicta error iusto harum veniam. Rerum animi illum iure earum." },
    { logo, title: "Football", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et at odit corrupti magni sunt magnam adipisci deleniti eligendi nemo sed, dicta error iusto harum veniam. Rerum animi illum iure earum." },
    { logo, title: "Football", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et at odit corrupti magni sunt magnam adipisci deleniti eligendi nemo sed, dicta error iusto harum veniam. Rerum animi illum iure earum." }
];

export default function AsideTopPlayer() {
    return (
        <div className="w-[290px] flex flex-col justify-start items-center bg-white">
            <h1 className="uppercase text-[30px] mt-5">Top sportsmen</h1>
            {
                topPlayer.map((el, index) => (
                    <CardTopPlayer key={index} logo={el.logo} title={el.title} text={el.text} />
                ))
            }
        </div>
    );
}