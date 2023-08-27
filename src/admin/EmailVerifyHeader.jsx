import Alert from "../components/Alert";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
const EmailVerifyHeader = () => {
  const { verifyEmail, authUser } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Email is sent Check your inbox");
    verifyEmail();
  };
  return (
    <>
      <Alert
        type={"danger"}
        text={"Your email is not verified. Please verify your email first."}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default EmailVerifyHeader;
