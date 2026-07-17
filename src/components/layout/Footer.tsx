import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--card-border)] bg-[var(--card-bg)] py-16 md:py-20 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left space-y-6">
          <Link href="/" className="font-heading font-black tracking-tight text-[var(--foreground)] text-2xl hover:text-[var(--color-brand-primary)] transition-colors">
            Casa de Juniors
          </Link>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            O ninho que acolhe talentos em formação e os ajuda a eclodir rumo ao primeiro emprego ou transição de carreira na tecnologia.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16 text-sm">
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-[var(--foreground)] text-base tracking-wide">Plataforma</h4>
            <Link href="/vagas" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Vagas</Link>
            <Link href="/eventos" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Eventos</Link>
            <Link href="/comunidade" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Comunidade</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-[var(--foreground)] text-base tracking-wide">Institucional</h4>
            <Link href="/sobre" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Sobre nós</Link>
            <Link href="/parceiros" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Empresas Parceiras</Link>
            <Link href="/contato" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Contato</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-semibold text-[var(--foreground)] text-base tracking-wide">Legal</h4>
            <Link href="/termos" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Termos de Uso</Link>
            <Link href="/privacidade" className="text-[var(--muted-foreground)] hover:text-[var(--color-brand-primary)] hover:translate-x-1 transition-all">Privacidade</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl mt-16 pt-8 border-t border-[var(--card-border)] text-center text-sm text-[var(--muted-foreground)]">
        &copy; {new Date().getFullYear()} Casa de Juniors. Todos os direitos reservados.
      </div>
    </footer>
  )
}
