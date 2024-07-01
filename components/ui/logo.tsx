import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="schola">
      <b className="font-serif text-white">schola</b>    </Link>
  );
}
