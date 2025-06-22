import Heading from "../Heading/Heading";
export default function LandingA() {
  return (
    <>
      <section className="h-landing mt-15 flex justify-center items-center bg-main text-white">
        <div className="container">
          <Heading text="About Component" circleBg="bg-main" lineBg="bg-white" color="text-white" />
          <div className="flex flex-col text-center mt-10 gap-4 text-sm md:flex-row md:text-start">
            <p className="flex-1">
              Freelancer is a free bootstrap theme created by Route. The download includes the
              complete source files including HTML, CSS, and JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
            <p className="flex-1">
              Freelancer is a free bootstrap theme created by Route. The download includes the
              complete source files including HTML, CSS, and JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
