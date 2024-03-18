import Link from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Pagina de inicio</h1>
       <Link href="/about">
        Sobre
      </Link>
    </div>
  );
}
