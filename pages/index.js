import Main from "../lib/layout";
import Header from "../components/Header";
import withData from "../lib/apollo";

export default withData(props => {
  return (
    <Main>
      <Header />
    </Main>
  );
});
