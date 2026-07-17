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
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="mb-12 text-center space-y-4">
            <h1 className="text-4xl font-heading font-bold text-[var(--foreground)]">O Ninho da Comunidade</h1>
            <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
              Conecte-se com outros juniores, compartilhe suas conquistas e evolua nas trilhas de aprendizado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Mural de Conquistas */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                <Trophy className="text-[var(--color-brand-accent)]" /> Mural de Eclosões
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Ana Silva", role: "Dev Frontend Jr na TechNova", time: "Há 2 horas" },
                  { name: "Carlos Mendes", role: "Estagiário Backend na FinCloud", time: "Ontem" },
                  { name: "Juliana Costa", role: "Analista de Dados Jr na DataMinds", time: "Há 2 dias" },
                ].map((item, i) => (
                  <Card key={i} className="bg-[var(--card-bg)]">
                    <CardHeader className="pb-2 flex flex-row items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-brand-neutral)] flex items-center justify-center font-bold text-[var(--color-brand-text)]">
                        {item.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.name} conseguiu o primeiro emprego!</CardTitle>
                        <p className="text-sm text-muted-foreground opacity-80">{item.time}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--foreground)] opacity-90">
                        Nova posição: <span className="font-semibold text-[var(--color-brand-primary)]">{item.role}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full">Ver mais conquistas</Button>
            </div>

            {/* Gamification Sidebar */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                <Star className="text-[var(--color-brand-accent)]" /> Suas Badges
              </h2>
              <Card>
                <CardContent className="pt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-neutral)] dark:bg-[#4d3623] flex items-center justify-center border-2 border-[var(--color-brand-accent)]">
                      <BookOpen className="text-[var(--color-brand-primary)]" />
                    </div>
                    <span className="text-xs font-medium">Primeiro Passo</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help" title="Participe de 3 eventos">
                    <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <Users className="text-slate-500" />
                    </div>
                    <span className="text-xs font-medium">Networker</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help" title="Contribua no Open Source">
                    <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <GitPullRequest className="text-slate-500" />
                    </div>
                    <span className="text-xs font-medium">Contribuinte</span>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-heading font-bold mt-8">Trilhas Recomendadas</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Frontend Essencial</span>
                      <span className="text-[var(--color-brand-primary)]">60%</span>
                    </div>
                    <div className="w-full bg-[var(--card-border)] rounded-full h-2">
                      <div className="bg-[var(--color-brand-primary)] h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Carreira & LinkedIn</span>
                      <span className="text-[var(--color-brand-primary)]">15%</span>
                    </div>
                    <div className="w-full bg-[var(--card-border)] rounded-full h-2">
                      <div className="bg-[var(--color-brand-primary)] h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  <Button variant="link" className="w-full mt-2 p-0">Ver todas as trilhas</Button>
                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
