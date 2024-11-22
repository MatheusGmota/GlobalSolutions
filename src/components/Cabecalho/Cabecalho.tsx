import Image from "next/image";
import fotoLogo from "@/img/logo-BE_Fore.png"
import Menu from "../Menu/Menu";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="navbar bg-base-100 border border-gray-800 rounded-lg shadow-lg p-4">
        <figure className="flex-1">
            <Link href="/"><Image src={fotoLogo} width={100} height={100} alt="Logo BE Fore" className="h-auto w-auto select-none"/></Link>
        </figure>
        <Menu />
    </header>
  )
}
