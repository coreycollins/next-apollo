import Link from "next/link";
import { useRouter } from "next/router";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./styles";

const Header = () => {
  const router = useRouter();
  // Have to check if router exists until this issue is resolved
  // https://github.com/zeit/next.js/issues/6042
  if (router) {
    const { pathname } = router;
    return (
      <div>
        <Link prefetch href="/">
          <a>Root</a>
        </Link>

        <Link href="https://github.com/ads1018/next-apollo-example">
          <a>Github</a>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default withStyles(styles)(Header);
