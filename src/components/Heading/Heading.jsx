import { FaStar } from "react-icons/fa6";
export default function Heading({ text, circleBg, lineBg, color }) {
  return (
    <>
      <div className="relative">
        <h2 className="uppercase text-3xl text-center font-bold mb-5">{text}</h2>
        <span className={`line absolute left-1/2 -translate-1/2 w-1/3 h-0.5 ${lineBg}`}></span>
        <span
          className={`star absolute size-9 rounded-full ${color} ${circleBg} flex justify-center items-center left-1/2 -translate-1/2`}
        >
          <FaStar className="size-5" />
        </span>
      </div>
    </>
  );
}
