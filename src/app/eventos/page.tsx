"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const mockEvents = [
  {
    id: "1",
    title: "Workshop: Seu Primeiro PR no Open Source",
    date: "15 de Outubro, 2023",
    time: "19:00 - 21:00",
    format: "Online",
    category: "Workshop",
    attendees: 120,
    description: "Aprenda na prática como contribuir para projetos Open Source. Do fork ao pull request, vamos guiar você passo a passo.",
  },
  {
    id: "2",
    title: "Meetup Casa de Juniors SP",
    date: "22 de Outubro, 2023",
    time: "14:00 - 18:00",
    format: "Presencial - São Paulo, SP",
    category: "Networking",
    attendees: 50,
    description: "Encontro presencial da comunidade para networking, troca de experiências e palestras rápidas com convidados especiais.",
  },
  {
    id: "3",
    title: "Mentoria em Grupo: Currículo e LinkedIn",
    date: "05 de Novembro, 2023",
    time: "20:00 - 21:30",
    format: "Online",
    category: "Mentoria",
    attendees: 30,
    description: "Sessão de mentoria focada em otimizar seu perfil profissional para atrair recrutadores e se destacar nas vagas.",
  }
];

export default function EventosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-bg-light)] dark:bg-[var(--background)] py-12">
        <div className="container mx-auto px-6 max-w-6xl py-8">

          <motion.div
            className="mb-16 text-center space-y-6"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-heading font-black tracking-tight text-[var(--foreground)]">Eventos da Comunidade</h1>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto leading-relaxed">
              Participe de workshops, meetups e mentorias. Aprenda, faça networking e acelere sua evolução na área.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                className="h-full"
              >
                <Card className="h-full flex flex-col group hover:border-[var(--color-brand-accent)]">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="accent" className="px-3 py-1 font-medium">{event.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-dark)] transition-colors line-clamp-2 leading-tight">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-6">
                    <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-2 flex-1 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="space-y-3 text-sm font-medium text-[var(--muted-foreground)]">
                      <div className="flex items-center gap-3"><CalendarIcon className="w-4 h-4 text-[var(--color-brand-accent)]" /> {event.date}</div>
                      <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-[var(--color-brand-accent)]" /> {event.time}</div>
                      <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[var(--color-brand-accent)]" /> {event.format}</div>
                      <div className="flex items-center gap-3"><Users className="w-4 h-4 text-[var(--color-brand-accent)]" /> {event.attendees} vagas preenchidas</div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-[var(--card-border)] pt-6 mt-auto">
                    <Button className="w-full" size="lg">Garantir Vaga</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
