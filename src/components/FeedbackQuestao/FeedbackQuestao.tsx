import { TipoFeedbackQuestao } from "@/types";
import Image from "next/image";
import imgEmissaoCarbono from "@/img/img-emissao-carnono.jpg"
import imgEolica from "@/img/img-eolica.jpg"
import imgPaineisSolares from "@/img/img-paineis-solares.jpg"

const images = [imgEolica, imgPaineisSolares, imgEmissaoCarbono]

export default function FeedbackQuestao({feedbackQuestao}: {feedbackQuestao: TipoFeedbackQuestao}) {
    return (
        <article className="grid lg:grid-cols-2 gap-5 lg:gap-10 p-6 mb-5">
            <section className="flex flex-col gap-2 lg:gap-5 max-w-[80%]">
                <h1 className="text-white text-base lg:text-xl">{feedbackQuestao.questao}</h1>
                <h3 className="text-green-500 text-sm lg:text-base">{feedbackQuestao.resposta}</h3>
                <p className="text-sm lg:text-base">{feedbackQuestao.feedback}</p>
            </section>
            <section className="flex items-center justify-center lg:justify-end">
                <figure>
                    <Image src={images[feedbackQuestao.idQuestao-1]}
                    className="h-auto w-auto lg:h-80 aspect-video object-cover"
                    alt="Imagem de fonte de energia renovavel"/>
                </figure>
            </section>
        </article>
    )
}
