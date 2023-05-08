import React from "react";
import Header from "./components/header/header";
import SecondHeader from "./components/header/secondHeader";
import Content from "./components/content/content";
import SecondContent from "./components/content/secondContent";

export default function App() {
  return (
    <div className="bg-gray-300 w-full h-full flex flex-col justify-start items-center ">
      <Header />
      <SecondHeader />
      <Content />
      <SecondContent />
    </div>
  );
}