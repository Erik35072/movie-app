import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen ">
        <div className="max-width-limit m-auto">{children}</div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
