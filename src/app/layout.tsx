import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

export const metadata: Metadata = {
  title: "BE-Fore",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" data-theme="business">
			<body>
				<Cabecalho/>
				{children}
				<Rodape />
			</body>
		</html>
	);
}
