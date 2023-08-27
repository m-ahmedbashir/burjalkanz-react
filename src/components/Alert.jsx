const Alert = ({ type, text, handleSubmit }) => {
  return (
    <>
      <div className={`alert alert-${type}`} role="alert">
        {text}
        {handleSubmit && (
          <button
            className="btn btn-primary pl-2 pt-1 pb-1 ml-2  pr-2"
            onClick={handleSubmit}
          >
            <span className="small">Verify email</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Alert;
