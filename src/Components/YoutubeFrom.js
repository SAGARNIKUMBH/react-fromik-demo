import React from "react";
import { useFormik } from "formik";

function YoutubeFrom() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  //   console.log("Form values", formik.values);
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
              value={formik.values.name}
            />
          </div>
        </div>
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
              value={formik.values.email}
            />
          </div>
        </div>
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
              value={formik.values.channel}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* <form onSubmit={formik.handleSubmit}>
        <label htmlhtmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlhtmlFor="email">E-mail : </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlhtmlFor="channel">Channel : </label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default YoutubeFrom;
