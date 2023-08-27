import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import Alert from "../components/Alert";
const UserTable = () => {
  const { getUsers, userList, loading } = useAuthContext();
  useEffect(() => {
    getUsers();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleString(); // Format the date as a readable string
  };

  return (
    <>
      <text className="font-weight-bold lead">Registered User</text>
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Added By</th>
                <th>Added on</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loader color={"black"} />
              ) : userList.length === 0 ? (
                <Alert type={"info"} text={"User List is available"} />
              ) : (
                userList.length !== 0 &&
                userList.map((data, idx) => (
                  <tr key={data.id}>
                    <td>{idx + 1}</td>
                    <td>{`${data.firstName} ${data.lastName}`}</td>
                    <td>{data.email}</td>
                    <td>{data.addedBy}</td>
                    <td>{formatDate(data.addedOn.seconds)}</td>
                  </tr>
                ))
              )}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
