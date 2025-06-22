import { useFormik } from "formik";
import Heading from "../Heading/Heading";
import * as yup from "yup";

export default function LandingL() {
  const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

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
      <section className="min-h-landing mt-15 bg-white py-10">
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
              <input
                className="w-full px-2 py-3 border-b border-gray-300 outline-0 caret-main"
                type="password"
                name="password"
                autoComplete="true"
                placeholder="User Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
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
