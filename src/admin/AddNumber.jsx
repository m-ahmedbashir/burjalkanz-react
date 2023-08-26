import { useState } from "react";

const AddNumber = ({ title, handleSubmit }) => {
  const [inputNo, setInputNo] = useState("");

  const submitNumber = (e) => {
    e.preventDefault();
    handleSubmit(inputNo);
  };
  return (
    <div className="row align-center mx-auto">
      <div className="col-md-6 m-1 border mx-auto p-4 ">
        <text className="font-weight-bold lead">{title}</text>
        <form className="mt-3">
          <div className="form-outline mb-4">
            <input
              type="number"
              id="number"
              name="number"
              value={inputNo}
              className="form-control"
              placeholder="+910034xxxxxxxxx"
              onChange={(e) => setInputNo(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={submitNumber}
          >
            Add Number
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNumber;
