import SideNav from "./SideNav";
const HeaderCard = ({ setNavState }) => {
  return (
    <>
      <div className="card bg-glass" style={{ zIndex: 10 }}>
        <div className="card-body ">
          <SideNav setNavState={setNavState} />
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
