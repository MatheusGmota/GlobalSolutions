import Image from "next/image";
import fotoLogo from "@/img/logo-BE_Fore-white.png"
import MenuMidias from "../MenuMidias/MenuMidias";

export default function Rodape() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
        <aside>
            <figure>
                <Image src={fotoLogo} width={100} height={100} alt="Logo BE Fore" className="select-none"/>
            </figure>
            <p>FIAP &copy; {new Date().getFullYear()} - Todos direitos reservados pelo grupo BE Fore</p>
        </aside>
        <MenuMidias/>
    </footer>
  )
}
