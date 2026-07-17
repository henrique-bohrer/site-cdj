"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockJobs } from "@/lib/mock-data";
import { MapPin, Building2, Clock, Briefcase, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function VagasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = mockJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-brand-bg-light)] dark:bg-[var(--background)] py-12">
        <div className="container mx-auto px-6 max-w-5xl py-8">

          <motion.div
            className="mb-16 text-center space-y-6"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-heading font-black tracking-tight text-[var(--foreground)]">Vagas para Juniores</h1>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto leading-relaxed">
              Encontre a oportunidade perfeita para dar o start na sua carreira. Filtre por stack, modelo de trabalho e nível.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            className="bg-[var(--card-bg)] p-5 rounded-2xl shadow-sm border-[1.5px] border-[var(--card-border)] mb-12 flex flex-col md:flex-row gap-5 items-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por cargo, empresa ou tecnologia..."
                className="w-full pl-12 pr-6 py-4 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] transition-all text-[var(--foreground)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="lg" className="w-full md:w-auto flex items-center gap-2 px-8">
              <Filter className="w-5 h-5" /> Filtros Avançados
            </Button>
          </motion.div>

          {/* Job List */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                >
                  <Card className="hover:border-[var(--color-brand-accent)] cursor-pointer group">
                    <CardHeader className="pb-4 flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div>
                        <CardTitle className="text-2xl font-heading font-bold text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-dark)] transition-colors mb-4">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--muted-foreground)] font-medium">
                          <span className="flex items-center gap-2"><Building2 className="w-4 h-4 opacity-70" /> {job.company}</span>
                          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 opacity-70" /> {job.location} ({job.type})</span>
                          <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 opacity-70" /> {job.contract}</span>
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4 opacity-70" /> {job.postedAt}</span>
                        </div>
                      </div>
                      <Badge variant="accent" className="w-fit text-sm px-4 py-1">{job.level}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--muted-foreground)] text-base leading-relaxed line-clamp-2 mb-6">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {job.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="font-medium px-3 py-1">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between items-center border-t border-[var(--card-border)] pt-6 mt-2">
                      <div className="text-base font-semibold text-[var(--foreground)]">
                        {job.salary ? job.salary : "Salário a combinar"}
                      </div>
                      <Button variant="default">
                        Ver Detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
                <p className="text-lg text-[var(--foreground)] opacity-60">Nenhuma vaga encontrada para &quot;{searchTerm}&quot;.</p>
              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
