import Link from "next/link";

export default function Menu() {
  return (
    <nav>
        <ul className="menu menu-horizontal px-1">
            <li><Link className="link-hover" href="/">Home</Link></li>
            <li><Link className="link-hover" href="/relatorio">Gerar Relatório</Link></li>
            <li><Link className="link-hover" href="/equipe">Equipe</Link></li>
        </ul>
    </nav>
  )
}
