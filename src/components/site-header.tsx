import Link from "next/link";

const navigation = [
  { label: "Explore", href: "/explore" },
  { label: "Learn", href: "/roadmaps" },
  { label: "Build", href: "/projects" },
  { label: "Community", href: "/community" }
];

export default function SiteHeader() {
  return (
    <header>
      <div>
        <Link href="/" aria-label="Craftmish home">
          Craftmish
        </Link>

        <nav aria-label="Primary navigation">
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