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
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="mb-12 text-center space-y-4">
            <h1 className="text-4xl font-heading font-bold text-[var(--foreground)]">Eventos da Comunidade</h1>
            <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
              Participe de workshops, meetups e mentorias. Aprenda, faça networking e acelere sua evolução.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="accent">{event.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-heading text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-dark)] transition-colors line-clamp-2">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-3">
                    <p className="text-sm text-[var(--foreground)] opacity-70 mb-2 flex-1">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm font-medium text-[var(--foreground)] opacity-80">
                      <div className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-[var(--color-brand-primary)]" /> {event.date}</div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--color-brand-primary)]" /> {event.time}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[var(--color-brand-primary)]" /> {event.format}</div>
                      <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[var(--color-brand-primary)]" /> {event.attendees} vagas preenchidas</div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-[var(--card-border)] pt-4 mt-4">
                    <Button className="w-full">Garantir Vaga</Button>
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
