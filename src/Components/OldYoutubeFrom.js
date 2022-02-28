import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email));
//   {
//     errors.email = "Invalid email format";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  email: Yup.string().email("Invalid email format !").required("Required !"),
  channel: Yup.string().required("Required !"),
});

function OldYoutubeFrom() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });

  console.log("Visited fields", formik.touched);
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>

          <div className="col-sm-10">
            <input
              type="name"
              className="form-control"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
        </div>
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
        </div>
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Channel
          </label>
          <div className="col-sm-10">
            <input
              type="channel"
              className="form-control"
              id="channel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channel}
            />
          </div>
        </div>
        {formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default OldYoutubeFrom;
