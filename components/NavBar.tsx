import React from "react";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="bg-white p-1 rounded-full inline-flex items-stretch">
      <div>
        <NavButton innerText="Dashboard" active={true}></NavButton>
        <NavButton innerText="All Products" active={false}></NavButton>
      </div>
    </div>
  );
}
