import { useDataContext } from "../context/DataContext";

const CurrentDetails = () => {
  const { displayNo, whatsAppNo } = useDataContext();

  return (
    <>
      <div className="card-body pt-1">
        <text className="font-weight-bold">WhatsApp Number</text> <br />
        <text>{whatsAppNo.inputNo}</text> <br />
        {/* <text className="small">Last Modified: </text> */}
      </div>
      <div className="card-body pt-0 pb-0">
        <text className="font-weight-bold">Display Number</text> <br />
        <text>{displayNo.inputNo}</text> <br />
        {/* <text className="small">Last Modified: -----</text> */}
      </div>{" "}
      <div className="card-body pb-0">
        <text className="font-weight-bold">Email</text> <br />
        <text>info@burjalkanz.com</text> <br />
        {/* <text className="small">Last Modified: -----</text> */}
      </div>
    </>
  );
};

export default CurrentDetails;
