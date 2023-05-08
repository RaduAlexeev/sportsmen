import React from "react";
import Header from "./components/header/header";
import SecondHeader from "./components/header/secondHeader";

export default function App() {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col justify-start items-center ">
      <Header />
      <SecondHeader />
    </div>
  );
}