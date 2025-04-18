import React from "react";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="flex justify-between ">
      <div className="text-black font-extrabold">LOGO</div>
      <div className="bg-white p-1 rounded-full inline-flex items-stretch">
        <NavButton innerText="Dashboard" active={true}></NavButton>
        <NavButton innerText="All Products" active={false}></NavButton>
        <NavButton innerText="Settings" active={false}></NavButton>
        <NavButton innerText="Profile" active={false}></NavButton>
      </div>
    </div>
  );
}
