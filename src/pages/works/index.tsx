import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Works</h1>
    </>
  );
}
export const getServerSideProps = async (context) => ({
  props: {
    pageTitle: "Works",
  },
});
