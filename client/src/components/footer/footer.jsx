import FooterInfo from "./footerInfo";

export default function Footer() {
    return (
        <div className="bg-forFooter w-full h-footer mt-28 flex justify-center">
            <div className="w-mainWidth h-full bg-slate-500">
                <FooterInfo />
            </div>
        </div>
    );
}