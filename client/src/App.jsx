import React from "react";
import Header from "./components/header/header";
import SecondHeader from "./components/header/secondHeader";
import Content from "./components/content/content";
import SecondContent from "./components/content/secondContent";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="bg-gray-300 w-full h-full flex flex-col justify-start items-center font-mainFont">
      <Header />
      <SecondHeader />
      <Content />
      <SecondContent />
      <Footer />
    </div>
  );
}