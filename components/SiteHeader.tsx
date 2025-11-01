import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="brand">TEAM_PROJECT</Link>
        <nav className="nav">
          <Link href="/">Курс</Link>
          <a href="mailto:hello@example.com">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

