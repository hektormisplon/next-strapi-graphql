import React from "react";
import nextCookie from "next-cookies";
import { withAuthSync } from "../auth";

import Layout from "../components/Layout";
import DocumentsList from "../components/Documents";
import Dropzone from "../components/Dropzone";

const Documents = props => (
  <Layout>
    <h1>Documenten</h1>
    <div className="list-overview">
      <DocumentsList />
    </div>
    <Dropzone />
    <style jsx>{`
      .list-overview {
        flex: 1;
      }
    `}</style>
  </Layout>
);

Documents.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  return token;
};

export default withAuthSync(Documents);