import { useDataContext } from "../context/DataContext";
import { CiMobile1 } from "react-icons/ci";
const Cta = () => {
  const { displayNo } = useDataContext();
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="cta-item bg-white p-5 rounded">
                <span className="h6 text-color">We care for you</span>
                <h2 className="mt-2 mb-4">
                  Entrust Your Project to Our Best Team of Professionals Workers
                </h2>
                <p className="lead mb-4">
                  Have any project on mind? For immidiate support :
                </p>
                <h3>
                  <i className="ti-mobile  text-color">
                    <CiMobile1 className="mb-1 mr-1 " size={40} />
                  </i>
                  {displayNo.inputNo ? `+${displayNo.inputNo}` : "+925154454"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
