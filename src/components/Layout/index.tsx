import React from "react";
import Link from "next/link";

import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import styles from "../../styles/layout.module.css";

interface LayoutProps {
  children: React.FC;
  home: boolean;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, home, pageTitle } = props;

  return (
    <div className={styles.container}>
      <SEO home={home} pageTitle={pageTitle} />
      <Header />
      <Content children={children} />
      <Footer />
    </div>
  );
}
