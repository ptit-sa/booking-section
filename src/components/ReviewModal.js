import React from "react";

export default function ReviewModal(props) {
  const { booking } = props;
  return (
    <React.Fragment>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Coach Review</h3>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio molestias nobis amet vel consequatur dolore cupiditate
            magni eveniet dicta!{" "}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
