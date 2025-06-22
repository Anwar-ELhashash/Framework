import { useFormik } from "formik";
import Heading from "../Heading/Heading";
import * as yup from "yup";

export default function LandingC() {
  const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const ageReg = /^(?:1[01][0-9]|120|[1-9][0-9]?)$/;

  const schema = yup.object({
    name: yup
      .string()
      .required("Name Filed Is Required")
      .min(3, "Name Must Be More Than Three Letters")
      .max(20, "Name Must Be Less Than 20 Letters"),
    age: yup.string().required("Age Filed Is Required").matches(ageReg, "Right A Valid Age"),
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
      name: "",
      age: "",
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
            text="Contact Section"
            circleBg="bg-white"
            lineBg="bg-secondary"
            color="text-secondary"
          />
        </div>
        <div className="container py-7">
          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            <div className="">
              <input
                className="w-full px-2 py-3 border-b border-gray-300 outline-0 caret-main"
                type="text"
                name="name"
                placeholder="User Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <p className="py-1 px-2 bg-red-400 text-red-700 rounded-md mt-2">
                  *{formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="">
              <input
                className="w-full px-2 py-3 border-b border-gray-300 outline-0 caret-main"
                type="number"
                name="age"
                placeholder="User Age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.age && formik.touched.age ? (
                <p className="py-1 px-2 bg-red-400 text-red-700 rounded-md mt-2">
                  *{formik.errors.age}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="">
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
            <div className="">
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
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
