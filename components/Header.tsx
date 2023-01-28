import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <h2>Dev Blog</h2>
        </Link>
      </div>
    </header>
  );
}
