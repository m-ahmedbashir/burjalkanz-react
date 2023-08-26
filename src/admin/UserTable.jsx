const UserTable = () => {
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
              <tr>
                <td>1</td>
                <td>John</td>
                <td>john@example.com</td>
                <td>Doe</td>
                <td>18, June</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
