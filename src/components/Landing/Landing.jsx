import Heading from "../Heading/Heading";
import avatar from "./../../assets/imgs/avatar.svg";

export default function Landing() {
  return (
    <>
      <section className="h-landing mt-15 flex justify-center items-center bg-main text-white">
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
