import withAuth from "../hoc/ProtectedRoutes";

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to certain roles.</p>
    </div>
  );
};

export default withAuth(ProtectedPage, ["admin", "editor"]);
