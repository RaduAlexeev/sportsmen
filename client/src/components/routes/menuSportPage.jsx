export default function MenuSportPage() {
    const itemsMenu = [
        { text: "Principal", link: "/", shapeStatus: true },
        { text: "Politica de colaborare", link: "/", shapeStatus: true },
        { text: "Despre noi", link: "/", shapeStatus: true },
        { text: "Contacte", link: "/", shapeStatus: false }
    ];

    const shape = (
        <svg width="30px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path id="Vector" d="M12 21V3" stroke="#000000" strokeWidth="0.36" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );

    const rectangle = (
        <div className="ml-4 mr-2 w-0.5 h-[44px] bg-black shadow-shadow-line -skew-x-30 opacity-60">
        </div>
    );

    return (
        <div className="font-menuFont text-[14px] flex flex-row items-center uppercase">
            {itemsMenu.map(el => (
                <a className="flex flex-row items-center tracking-wider" key={el.text} href={el.link}>
                    {el.text}
                    {(el.shapeStatus) ? shape : rectangle}
                </a>
            ))}
        </div>
    );
}