import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Articles</h1>
    </>
  );
}

export const getServerSideProps = async (context) => ({
  props: {
    pageTitle: "Blog",
  },
});
