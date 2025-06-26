import { Link } from "react-router";

export default function Notfound() {
  return (
    <>
      <div className="bg-red-200">
        <div className="container h-screen w-full flex justify-center items-center ">
          <div className="content text-center space-y-5">
            <p className=" text-red-700 font-semibold uppercase">
              Page You Are Looking For Is Not Found!
            </p>
            <Link
              className="px-3 py-2 bg-white text-blue-500 font-semibold rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white"
              to="/home"
            >
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
