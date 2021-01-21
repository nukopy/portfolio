import Link from "next/link";

export default function Scrap() {
  // 中で scrapbox の API 叩いてスクラップボックスの記事をカード形式で可視化する
  return (
    <>
      <h1>Scrap</h1>
    </>
  );
}

export const getServerSideProps = async (context) => ({
  props: {
    pageTitle: "Scrap",
  },
});
