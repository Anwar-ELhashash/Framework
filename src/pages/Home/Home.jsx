import avatar from "./../../assets/imgs/avatar.svg";
import Heading from "../../components/Heading/Heading.jsx";

export default function Home() {
  return (
    <>
      <section className="flex mt-[80px] justify-center items-center bg-main text-white py-15">
        <div className="container ">
          <div className="img flex justify-center mb-7">
            <img src={avatar} className="w-64" alt="" />
          </div>
          <Heading text="Start Framework" circleBg="bg-main" lineBg="bg-white" color="text-white" />
          <p className="text-center mt-10">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
