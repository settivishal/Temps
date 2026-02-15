"use client"; // If it has interactivity

import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f0f0f0" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/test">Test</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
