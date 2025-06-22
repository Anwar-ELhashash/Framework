import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import port1 from "./../../assets/imgs/port1.png";
import port2 from "./../../assets/imgs/port2.png";
import port3 from "./../../assets/imgs/port3.png";

export default function LandingP() {
  return (
    <>
      <section className="min-h-landing mt-15 bg-white py-15">
        <div className="container text-secondary">
          <Heading
            text="Portfolio Component"
            circleBg="bg-white"
            lineBg="bg-secondary"
            color="text-secondary"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
            <Card src={port1} />
            <Card src={port2} />
            <Card src={port3} />
            <Card src={port1} />
            <Card src={port2} />
            <Card src={port3} />
          </div>
        </div>
      </section>
    </>
  );
}
