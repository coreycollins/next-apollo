import Main from "../lib/layout";
import Login from "../components/Login";
import withData from "../lib/apollo";

export default props => {
  return (
    <Main>
      <Login />
    </Main>
  );
};
