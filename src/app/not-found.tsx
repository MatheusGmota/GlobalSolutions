import Link from "next/link";

export default function Example() {
    return (
      <>
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-green-500">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Página não encontrada
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium sm:text-xl/8">
              Não foi possivel encontrar a página que estava procurando.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="btn btn-ghost link"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  