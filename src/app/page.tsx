import { Mascot } from "@/components/Mascot"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, CheckCircle, Users, Briefcase, Calendar } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-[var(--color-brand-bg-light)] dark:bg-[var(--color-brand-bg-dark)] relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 text-center md:text-left space-y-8">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-[var(--foreground)] leading-tight">
                Do ninho ao seu <br />
                <span className="text-[var(--color-brand-primary)]">primeiro emprego</span>
              </h1>
              <p className="text-lg text-[var(--foreground)] opacity-80 max-w-xl mx-auto md:mx-0">
                A Casa de Juniors é a comunidade que acolhe talentos em formação e os ajuda a eclodir na área de tecnologia. Encontre vagas, eventos e mentorias.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto shadow-[0_0_15px_rgba(193,98,43,0.3)] hover:shadow-[0_0_20px_rgba(232,185,35,0.5)] transition-all">
                  <Link href="/vagas">Ver vagas abertas <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                  <Link href="/eventos">Próximos eventos</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative">
               {/* Glowing background effect for Mascot */}
              <div className="absolute w-64 h-64 bg-[var(--color-brand-accent)] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
              <Mascot expression="neutral" interactive className="w-64 h-64 md:w-80 md:h-80 relative z-10" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 bg-[var(--card-bg)] border-y border-[var(--card-border)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-heading font-bold text-[var(--color-brand-primary)]">500+</div>
                <div className="text-sm font-medium text-[var(--foreground)] opacity-70 uppercase tracking-wider flex items-center justify-center gap-2"><Briefcase className="w-4 h-4"/> Vagas Publicadas</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-heading font-bold text-[var(--color-brand-primary)]">120</div>
                <div className="text-sm font-medium text-[var(--foreground)] opacity-70 uppercase tracking-wider flex items-center justify-center gap-2"><Calendar className="w-4 h-4"/> Eventos Realizados</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-heading font-bold text-[var(--color-brand-primary)]">5k+</div>
                <div className="text-sm font-medium text-[var(--foreground)] opacity-70 uppercase tracking-wider flex items-center justify-center gap-2"><Users className="w-4 h-4"/> Membros Ativos</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-heading font-bold text-[var(--color-brand-primary)]">85%</div>
                <div className="text-sm font-medium text-[var(--foreground)] opacity-70 uppercase tracking-wider flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4"/> Taxa de Contratação</div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full py-24 bg-[var(--color-brand-bg-light)] dark:bg-[var(--color-brand-bg-dark)]">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--foreground)]">Como funciona a eclosão</h2>
                <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">Um passo a passo simples para você sair da casca e conquistar sua primeira oportunidade.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Entre no Ninho", desc: "Cadastre-se e junte-se à nossa comunidade no Discord.", step: "01" },
                  { title: "Aprenda e Participe", desc: "Acesse trilhas, eventos e conecte-se com mentores.", step: "02" },
                  { title: "Aplique para Vagas", desc: "Encontre oportunidades perfeitas para o seu nível.", step: "03" },
                  { title: "Conquiste o Emprego", desc: "Celebre sua contratação com a comunidade!", step: "04" },
                ].map((item, i) => (
                  <div key={i} className="relative p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] hover:border-[var(--color-brand-accent)] transition-all hover:scale-105 shadow-sm hover:shadow-md group">
                     <div className="text-5xl font-heading font-black text-[var(--color-brand-primary)] opacity-20 absolute top-4 right-4 group-hover:opacity-40 transition-opacity">{item.step}</div>
                     <h3 className="text-xl font-heading font-semibold text-[var(--foreground)] mb-3 mt-4 relative z-10">{item.title}</h3>
                     <p className="text-[var(--foreground)] opacity-70 relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full py-20 bg-[var(--color-brand-primary)] text-white">
          <div className="container mx-auto px-4 text-center space-y-8">
             <h2 className="text-3xl md:text-4xl font-heading font-bold">Pronto para dar o próximo passo?</h2>
             <p className="text-white/90 max-w-xl mx-auto text-lg">Receba as melhores vagas para juniores e convites para eventos exclusivos diretamente no seu e-mail.</p>
             <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
               <input type="email" placeholder="Seu melhor e-mail" className="flex-1 px-4 py-3 rounded-md text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)]" required />
               <Button type="button" className="bg-[var(--color-brand-bg-dark)] text-white hover:bg-[var(--color-brand-bg-dark)]/90 hover:shadow-[0_0_15px_rgba(232,185,35,0.4)] px-8 py-3 h-auto">Assinar</Button>
             </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
