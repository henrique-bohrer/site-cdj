"use client";

import { Mascot } from "@/components/Mascot"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, CheckCircle, Users, Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full pt-28 pb-32 md:pt-40 md:pb-48 bg-gradient-to-b from-[var(--background)] to-[var(--color-brand-bg-light)] dark:to-[#312015] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <motion.div
              className="flex-1 text-center lg:text-left space-y-10"
              initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-[var(--foreground)] leading-[1.1]">
                Do ninho ao seu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)]">primeiro emprego</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A Casa de Juniors é a comunidade que acolhe talentos em formação e os ajuda a eclodir na área de tecnologia. Encontre vagas, eventos e mentorias focadas no seu crescimento.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Button size="lg" asChild className="w-full sm:w-auto shadow-[0_8px_30px_rgba(193,98,43,0.3)] hover:shadow-[0_15px_40px_rgba(232,185,35,0.4)] transition-all duration-500 hover:-translate-y-1">
                  <Link href="/vagas">Ver vagas abertas <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                  <Link href="/eventos">Próximos eventos</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center items-center relative"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
               {/* Glowing background effect for Mascot */}
              <div className="absolute w-72 h-72 bg-[var(--color-brand-accent)] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
              <Mascot expression="neutral" interactive className="w-72 h-72 md:w-96 md:h-96 relative z-10" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-20 bg-[var(--card-bg)] border-y border-[var(--card-border)] relative z-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
              {[
                { number: "500+", label: "Vagas Publicadas", icon: Briefcase },
                { number: "120", label: "Eventos Realizados", icon: Calendar },
                { number: "5k+", label: "Membros Ativos", icon: Users },
                { number: "85%", label: "Taxa de Contratação", icon: CheckCircle }
              ].map((stat, i) => (
                <motion.div
                  key={i} className="space-y-3"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-heading font-black text-[var(--color-brand-primary)] drop-shadow-sm">{stat.number}</div>
                  <div className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                    <stat.icon className="w-4 h-4 opacity-70"/> {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full py-32 bg-[var(--background)]">
           <div className="container mx-auto px-6 max-w-7xl">
              <motion.div
                className="text-center mb-20 space-y-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              >
                <h2 className="text-4xl md:text-5xl font-heading font-black text-[var(--foreground)] tracking-tight">Como funciona a eclosão</h2>
                <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto leading-relaxed">Um passo a passo simples para você sair da casca e conquistar sua primeira oportunidade no mercado de tecnologia.</p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Entre no Ninho", desc: "Cadastre-se na plataforma e junte-se à nossa comunidade ativa no Discord.", step: "01" },
                  { title: "Aprenda e Participe", desc: "Acesse trilhas de estudo, participe de eventos ao vivo e conecte-se com mentores.", step: "02" },
                  { title: "Aplique para Vagas", desc: "Encontre oportunidades perfeitamente mapeadas para o seu nível de experiência.", step: "03" },
                  { title: "Conquiste o Emprego", desc: "Celebre sua contratação com toda a comunidade no nosso mural de conquistas!", step: "04" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative p-8 bg-[var(--card-bg)] rounded-3xl border-[1.5px] border-[var(--card-border)] hover:border-[var(--color-brand-accent)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                     <div className="text-7xl font-heading font-black text-[var(--color-brand-primary)] opacity-[0.08] absolute top-6 right-6 group-hover:opacity-20 transition-opacity duration-300 group-hover:scale-110">{item.step}</div>
                     <h3 className="text-2xl font-heading font-bold text-[var(--foreground)] mb-4 mt-8 relative z-10 leading-tight">{item.title}</h3>
                     <p className="text-[var(--muted-foreground)] relative z-10 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full py-32 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-dark)] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-6 max-w-4xl text-center space-y-10 relative z-10">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6">Pronto para dar o próximo passo?</h2>
               <p className="text-white/90 max-w-2xl mx-auto text-xl font-light leading-relaxed mb-10">Receba as melhores vagas para juniores e convites para eventos exclusivos diretamente no seu e-mail, toda semana.</p>
               <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                 <input type="email" placeholder="Seu melhor e-mail" className="flex-1 px-6 py-4 rounded-xl text-lg text-[var(--foreground)] bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-accent)]/50 transition-shadow" required />
                 <Button type="button" size="lg" className="bg-[var(--color-brand-bg-dark)] text-white hover:bg-[#1a100a] shadow-xl hover:shadow-[0_0_25px_rgba(232,185,35,0.4)] px-10 py-4 h-auto text-lg rounded-xl">Assinar</Button>
               </form>
             </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
