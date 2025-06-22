import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary">
        <div className="container flex flex-col md:flex-row gap-y-15 md:gap-y-0 justify-between text-center py-20 text-white">
          <div className="flex-1">
            <h4 className="mb-2 text-xl font-semibold">LOCATION</h4>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="flex-1">
            <h4 className="mb-2 text-xl font-semibold">AROUND THE WEB</h4>
            <ul className="flex gap-2 justify-center">
              <li className="circle">
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="circle">
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li className="circle">
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="circle">
                <a href="">
                  <FaGlobe />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="mb-2 text-xl font-semibold">About Freelancer</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </footer>
    </>
  );
}
