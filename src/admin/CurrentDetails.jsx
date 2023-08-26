import { useDataContext } from "../context/DataContext";

const CurrentDetails = () => {
  const { displayNo, whatsAppNo } = useDataContext();

  return (
    <>
      <div className="card-body pt-1">
        <text>WhatsApp Number</text> <br />
        <text>{whatsAppNo.inputNo}</text> <br />
        {/* <text className="small">Last Modified: -----</text> */}
      </div>
      <div className="card-body pt-0 pb-0">
        <text>Display Number</text> <br />
        <text>{displayNo.inputNo}</text> <br />
        {/* <text className="small">Last Modified: -----</text> */}
      </div>
    </>
  );
};

export default CurrentDetails;
