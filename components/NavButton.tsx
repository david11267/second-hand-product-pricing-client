import React from "react";

interface Props {
  active: boolean;
  innerText: string;
}

export default function NavButton({ active, innerText }: Props) {
  if (active) {
    return (
      <button
        className={"cursor-pointer rounded-full p-4 bg-stone-800 text-white "}>
        {innerText}
      </button>
    );
  } else {
    return (
      <button
        className={
          "cursor-pointer rounded-full p-4 text-stone-800 hover:underline decoration-dashed underline-offset-14 "
        }>
        {innerText}
      </button>
    );
  }
}
