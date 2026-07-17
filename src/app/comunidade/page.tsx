"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, BookOpen, GitPullRequest, Users } from "lucide-react";

export default function ComunidadePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-bg-light)] dark:bg-[var(--background)] py-12">
        <div className="container mx-auto px-6 max-w-6xl py-8">

          <div className="mb-16 text-center space-y-6">
            <h1 className="text-5xl font-heading font-black tracking-tight text-[var(--foreground)]">O Ninho da Comunidade</h1>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto leading-relaxed">
              Conecte-se com outros juniores, compartilhe suas conquistas e evolua nas trilhas de aprendizado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Mural de Conquistas */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
                <Trophy className="text-[var(--color-brand-accent)] w-8 h-8" /> Mural de Eclosões
              </h2>
              <div className="space-y-6">
                {[
                  { name: "Ana Silva", role: "Dev Frontend Jr na TechNova", time: "Há 2 horas" },
                  { name: "Carlos Mendes", role: "Estagiário Backend na FinCloud", time: "Ontem" },
                  { name: "Juliana Costa", role: "Analista de Dados Jr na DataMinds", time: "Há 2 dias" },
                ].map((item, i) => (
                  <Card key={i} className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2 flex flex-row items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] flex items-center justify-center font-bold text-white text-xl shadow-inner">
                        {item.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl leading-tight">{item.name} <span className="font-normal text-[var(--muted-foreground)]">conseguiu o primeiro emprego!</span></CardTitle>
                        <p className="text-sm text-[var(--muted-foreground)] mt-1">{item.time}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--foreground)] text-lg">
                        Nova posição: <span className="font-semibold text-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10 px-2 py-1 rounded-md">{item.role}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" size="lg" className="w-full">Ver mais conquistas</Button>
            </div>

            {/* Gamification Sidebar */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-heading font-bold flex items-center gap-3 mb-6">
                  <Star className="text-[var(--color-brand-accent)] w-8 h-8" /> Suas Badges
                </h2>
                <Card>
                  <CardContent className="pt-8 grid grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center gap-3 group">
                      <div className="w-16 h-16 rounded-full bg-[var(--color-brand-neutral)] dark:bg-[#4d3623] flex items-center justify-center border-[3px] border-[var(--color-brand-accent)] shadow-[0_0_15px_rgba(232,185,35,0.4)] transition-transform group-hover:scale-110">
                        <BookOpen className="text-[var(--color-brand-primary)] w-7 h-7" />
                      </div>
                      <span className="text-sm font-semibold">Primeiro Passo</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help group" title="Participe de 3 eventos">
                      <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-2 border-transparent transition-transform group-hover:scale-110">
                        <Users className="text-slate-500 w-7 h-7 group-hover:text-[var(--color-brand-primary)]" />
                      </div>
                      <span className="text-sm font-medium">Networker</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help group" title="Contribua no Open Source">
                      <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-2 border-transparent transition-transform group-hover:scale-110">
                        <GitPullRequest className="text-slate-500 w-7 h-7 group-hover:text-[var(--color-brand-primary)]" />
                      </div>
                      <span className="text-sm font-medium">Contribuinte</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Trilhas Recomendadas</h2>
                <Card>
                  <CardContent className="pt-8 space-y-6">
                    <div>
                      <div className="flex justify-between text-base font-semibold mb-2">
                        <span>Frontend Essencial</span>
                        <span className="text-[var(--color-brand-primary)]">60%</span>
                      </div>
                      <div className="w-full bg-[var(--card-border)] rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] h-full rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-base font-semibold mb-2">
                        <span>Carreira & LinkedIn</span>
                        <span className="text-[var(--color-brand-primary)]">15%</span>
                      </div>
                      <div className="w-full bg-[var(--card-border)] rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] h-full rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <Button variant="link" className="w-full mt-4 p-0 text-base">Ver todas as trilhas</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
