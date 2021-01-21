import Link from "next/link";

import { siteTitle } from "../../components/constants";

export default function Header() {
  return (
    <header style={{ backgroundColor: "orange" }}>
      <h1>
        <Link href="/">
          <a>{siteTitle}</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/scrap">
            <a>Scrap</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
