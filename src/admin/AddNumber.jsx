import { useState } from "react";
import { toast } from "react-toastify";
import { useDataContext } from "../context/DataContext";
import Loader from "../components/Loader";
import Model from "../components/Model";
const AddNumber = ({ title, handleSubmit }) => {
  const [inputNo, setInputNo] = useState("");
  const [isModalOpen, setIsModelOpen] = useState(false);
  const phoneRegex = /^\+\d{1,3}\d{9,}$/;

  const { loading, getLatestDisplay, getLatestWhatsAppNumber } =
    useDataContext();

  const submitNumber = (e) => {
    e.preventDefault();
    if (!inputNo) {
      setIsModelOpen(false);
      toast.error("Phone number is not provided");
      return;
    } else if (phoneRegex.test(inputNo)) {
      toast.error("Please enter a valid number with country code");
    } else {
      setIsModelOpen(false);
      handleSubmit(inputNo);
      getLatestWhatsAppNumber();
      getLatestDisplay();
      toast.success("Phone No added");
      setInputNo("");
    }
  };
  return (
    <div className="row align-center mx-auto">
      {isModalOpen && (
        <Model
          isModalOpen={isModalOpen}
          closeModal={() => setIsModelOpen(false)}
          title={"Change No"}
          description={"Are You Sure You want to change No"}
          handleSubmit={submitNumber}
        />
      )}
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
            onClick={() => setIsModelOpen(true)}
          >
            {loading ? <Loader color={"black"} /> : "Add Number"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNumber;
