import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",

  Social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers1: "",
  phoneNumbers2: "",
  phNumbers: [""],
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
  name: Yup.string().required("Required "),
  email: Yup.string().email("Invalid email format ").required("Required "),
  channel: Yup.string().required("Required "),
  comments: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  // facebook: Yup.string().required("Required"),
  phoneNumbers1: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number is not valid")
    .required("Required"),
  phoneNumbers2: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number is not valid")
    .required("Required"),
});

function YoutubeFrom() {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  //   // validate,
  // });

  // console.log("Visited fields", formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      <Form className="container">
        <div className="row mb-3 ">
          <label htmlFor="text" className="col-sm-2 col-form-label">
            Name
          </label>

          <div className="col-sm-10">
            <Field type="text" className="form-control" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component={TextError} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Channel
          </label>
          <div className="col-sm-10">
            <Field
              type="text"
              className="form-control"
              id="channel"
              name="channel"
              placeholder="Enter Your Youtube Channel Name"
            />
            <ErrorMessage name="channel" component={TextError} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="comments" className="col-sm-2 col-form-label">
            Comments
          </label>
          <div className="col-sm-10 ">
            <Field
              as="textarea"
              className="form-control"
              placeholder="Add a comment here"
              id="comments"
              name="comments"
            />
            <ErrorMessage name="comments" component={TextError} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10 ">
            <Field
              as="textarea"
              className="form-control"
              placeholder="Add Address here"
              id="address"
              name="address"
            />
            <ErrorMessage name="address" component={TextError} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="facebook" className="col-sm-2 col-form-label">
            FaceBook Profile
          </label>
          <div className="col-sm-10 ">
            <Field
              as="textarea"
              className="form-control"
              placeholder="FaceBook"
              id="facebook"
              name="social.facebook"
            />
            <ErrorMessage name="facebook" component={TextError} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="twitter" className="col-sm-2 col-form-label">
            Twitter Profile
          </label>
          <div className="col-sm-10 ">
            <Field
              as="textarea"
              className="form-control"
              placeholder="Twitter"
              id="twitter"
              name="social.twitter"
            />
            <ErrorMessage name="twitter" component={TextError} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="primaryPh" className="col-sm-2 col-form-label">
            Primary Phone Number
          </label>
          <div className="col-sm-3 ">
            <Field
              type="text"
              className="form-control"
              placeholder="Phone Number"
              id="primaryPh"
              name="phoneNumbers1"
            />
            <ErrorMessage name="phoneNumbers1" component={TextError} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="secondaryPh" className="col-sm-2 col-form-label">
            Secondary Phone Number
          </label>
          <div className="col-sm-3 ">
            <Field
              type="text"
              className="form-control"
              placeholder="Phone Number"
              id="secondaryPh"
              name="phoneNumbers2"
            />
            <ErrorMessage name="phoneNumbers2" component={TextError} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="phNumbers" className="col-sm-2 col-form-label">
            List of phone numbers
          </label>
          <div className="col-sm-3 ">
            <FieldArray
              name="phNumbers"
              type="text"
              className="form-control"
              placeholder="Phone Number"
              id="secondaryPh"
            >
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                // console.log("fieldArrayProps", fieldArrayProps);
                // console.log("Form errors", form.errors);
                return (
                  <div className="row-sm-3 ">
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  </div>
                );
              }}
            </FieldArray>
          </div>
        </div>
        <input className="btn btn-primary " type="reset" value="Reset" />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default YoutubeFrom;
