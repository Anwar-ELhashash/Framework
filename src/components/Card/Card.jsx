import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Card({ src }) {
  const [overlay, setOverlay] = useState(false);

  function show() {
    setOverlay(!overlay);
  }

  return (
    <>
      <div className="card relative rounded-md overflow-hidden" onClick={show}>
        <div className="imag-cover">
          <img src={src} alt="" />
        </div>
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-[#14a286cf] transition-all duration-500 opacity-0 hover:opacity-100 text-white text-4xl">
          <FaPlus />
        </div>
      </div>

      <div
        onClick={show}
        className={`${
          overlay ? "flex" : "hidden"
        } overlay w-full h-screen fixed top-0 left-0 z-20 bg-[rgb(0,0,0,50%)] justify-center items-center`}
      >
        <div className="img-overlay transition-all duration-300 px-2 sm:w-1/2 sm:px-0">
          <img src={src} className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}
