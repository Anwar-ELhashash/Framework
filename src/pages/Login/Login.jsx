import * as yup from "yup";
import { useFormik } from "formik";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Heading from "../../components/Heading/Heading.jsx";
import { useState } from "react";

// <FaRegEye />
// <FaRegEyeSlash />

export default function Login() {
  const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const [passShow, setPassShow] = useState(false);
  const schema = yup.object({
    email: yup.string().required("Email Is Required").email("Write A Valid Email"),
    password: yup
      .string()
      .required("Password Filed Is Required")
      .matches(passReg, "Write A Valid Password"),
  });

  function signup() {
    console.log("Done");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: signup,
  });

  return (
    <>
      <section className="mt-[80px] bg-white py-15">
        <div className="text-secondary">
          <Heading
            text="Login Section"
            circleBg="bg-white"
            lineBg="bg-secondary"
            color="text-secondary"
          />
        </div>
        <div className="container py-7">
          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            <div>
              <input
                className="w-full px-2 py-3 border-b border-gray-300 outline-0 caret-main"
                type="email"
                name="email"
                placeholder="User Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="py-1 px-2 bg-red-400 text-red-700 rounded-md mt-2">
                  *{formik.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="relative">
                <input
                  className="w-full px-2 py-3 border-b border-gray-300 outline-0 caret-main"
                  type={passShow ? "text" : "password"}
                  name="password"
                  autoComplete="true"
                  placeholder="User Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FaRegEyeSlash
                  className={`${
                    passShow ? "hidden" : ""
                  } absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer`}
                  onClick={() => {
                    setPassShow(!passShow);
                  }}
                />
                <FaRegEye
                  className={`${
                    passShow ? "" : "hidden"
                  } absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer`}
                  onClick={() => {
                    setPassShow(!passShow);
                  }}
                />
              </div>

              {formik.errors.password && formik.touched.password ? (
                <p className="py-1 px-2 bg-red-400 text-red-700 rounded-md mt-2">
                  *{formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="bg-main transition-all cursor-pointer duration-300 rounded-md px-3 py-2 text-white enabled:hover:bg-[#16aa8d] disabled:cursor-not-allowed disabled:opacity-75"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
