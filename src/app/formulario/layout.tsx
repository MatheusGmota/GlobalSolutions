export default function AlunoLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
            <main className="mt-52 md:grid md:content-center md:w-full md:p-6 md:mt-0">
                {children}
            </main>
    );
}