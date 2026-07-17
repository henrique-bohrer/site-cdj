import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--card-border)] bg-[var(--card-bg)] py-8 md:py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
          <Link href="/" className="font-heading font-bold text-[var(--color-brand-primary)] text-xl mb-4">
            Casa de Juniors
          </Link>
          <p className="text-sm text-muted-foreground opacity-80">
            Acolhendo talentos em formação e ajudando-os a eclodir rumo ao primeiro emprego ou transição de carreira.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground">Plataforma</h4>
            <Link href="/vagas" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Vagas</Link>
            <Link href="/eventos" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Eventos</Link>
            <Link href="/comunidade" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Comunidade</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground">Institucional</h4>
            <Link href="/sobre" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Sobre nós</Link>
            <Link href="/parceiros" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Empresas Parceiras</Link>
            <Link href="/contato" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Contato</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <Link href="/termos" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Termos de Uso</Link>
            <Link href="/privacidade" className="text-muted-foreground hover:text-[var(--color-brand-primary)] transition-colors opacity-80">Privacidade</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-[var(--card-border)] text-center text-sm text-muted-foreground opacity-60">
        &copy; {new Date().getFullYear()} Casa de Juniors. Todos os direitos reservados.
      </div>
    </footer>
  )
}
