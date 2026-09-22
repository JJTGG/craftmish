import Link from "next/link";

const navigation = [
  { label: "Explore", href: "/explore" },
  { label: "Learn", href: "/roadmaps" },
  { label: "Build", href: "/projects" },
  { label: "Community", href: "/community" }
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          className="site-brand"
          href="/"
          aria-label="Craftmish home"
        >
          Craftmish
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}