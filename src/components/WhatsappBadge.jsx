import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
const WhatsappBadge = () => {
  const { whatsAppNo } = useDataContext();
  return (
    <>
      <div id="scroll-to-top" className="scroll-to-top">
        <Link
          to={`https://wa.me/${
            whatsAppNo.inputNo ? whatsAppNo.inputNo : "971522176898"
          }`}
          className="text-white w-50% p-3 text-center"
        >
          <BsWhatsapp size={30} color="white" />
        </Link>
      </div>
    </>
  );
};

export default WhatsappBadge;
