import Head from "next/head";
import Link from "next/link";

import { siteTitle } from "../components/constants";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <img
          src="/nukopy-icon.png"
          className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
          alt="nukopy's icon"
        />
        <h1 className={utilStyles.heading2Xl}>nukopy</h1>
      </div>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm software developer.</p>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => ({
  props: {
    pageTitle: "kkkkkk",
    home: true,
  },
});
