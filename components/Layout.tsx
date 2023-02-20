import { NextPage } from "next";
import React, { Fragment } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactChild }) {
  return (
    <Fragment>
      <Sidebar />
      {children}
    </Fragment>
  );
}
