import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

export default ({ children }) => (
  <React.Fragment>
    <div>
      <Head>
        <title>BasicBlock</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#01579B" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
      <CssBaseline />
      {children}
    </div>
  </React.Fragment>
);
