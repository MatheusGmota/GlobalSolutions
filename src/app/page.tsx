import Image from "next/image";
import foto from "@/img/imagem-ilustrativa.jpg";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="main">
				<section className="section-futuro">
					<div className="left-side">
						<h2 className="title-home">
							Energia para um Futuro Sustentável
						</h2>
						<p className="text-home">
							Essa é uma plataforma digital e inovadora para o cadastro e monitoramento do consumo de energia por empresas de diferentes setores. A solução oferece uma maneira centralizada e simples para que as empresas possam registrar, analisar e otimizar seus gastos energéticos. Além disso, a plataforma proporciona relatórios personalizados com insights estratégicos para reduzir custos e promover práticas sustentáveis.
						</p>
					</div>
					<div className="right-side">
						<Image src={foto} width={1100} height={1100} alt={'foto ilustrativa de energia eolica'} className='w-auto h-auto rounded-md'/>
					</div>
				</section>
				<section className="section-desafio">
					<h2 className="title-home">
						Desafio/justificativa
					</h2>
					<p className="text-home">
						A crescente necessidade das empresas de reduzir seus custos operacionais e, ao mesmo tempo, atender a exigências regulatórias de sustentabilidade apresenta um grande desafio. Muitas empresas enfrentam dificuldades para monitorar e otimizar o consumo de energia de maneira eficaz, devido à falta de ferramentas acessíveis e intuitivas. Além disso, há uma pressão crescente para que as empresas adotem práticas mais responsáveis do ponto de vista ambiental, o que implica na necessidade de soluções que permitam monitoramento contínuo e uma gestão mais eficiente dos recursos energéticos.
					</p>
				</section>
				<section className="section-objetivo">
					<h2 className="title-home">
						Objetivos
					</h2>
					<div className="textos-home">
						<p className="text-home">
							<strong>1.</strong> Desenvolver uma plataforma acessível e intuitiva: Criar uma solução que permita empresas de diferentes portes, principalmente pequenas e médias, monitorar e otimizar seu consumo energético de forma simples e prática.
						</p>
						<p className="text-home">
							<strong>2.</strong> Gerar insights acionáveis: Fornecer relatórios personalizados e dados analíticos que ajudem as empresas a identificar padrões de consumo, reduzir desperdícios e tomar decisões mais informadas sobre o uso de energia.
						</p>
						<p className="text-home">
							<strong>3.</strong> Promover sustentabilidade e eficiência energética: Apoiar as empresas no cumprimento de suas metas de sustentabilidade e na redução da pegada de carbono, alinhando-as com exigências regulatórias e promovendo práticas mais responsáveis.
						</p>
					</div>
				</section>
				<section className="section-relatorio">
					<h2 className="title-home">
						Relatório para Eficiência Energética
					</h2>
					<div className="textos-home">
						<p className="text-home">
							Nossa plataforma digital oferece relatórios personalizados para o monitoramento e otimização do consumo de energia, ajudando as empresas a reduzir custos e cumprir as exigências regulatórias. Com análises precisas e insights acionáveis, facilita a identificação de desperdícios e a implementação de melhorias para um uso mais eficiente da energia.
						</p>
						<p className="text-home">
							Oferecemos uma solução acessível e flexível, ideal para empresas de todos os tamanhos, com um modelo de assinatura escalável e fácil de usar. A plataforma é a ferramenta ideal para quem busca economia e sustentabilidade no consumo energético.
						</p>
					</div>
					<div>
					<Link href="/relatorio" className="btn btn-active text-white">
          				Gerar Relatório
        			</Link>
					</div>
				</section>
			</main>
		</>
	);
}
