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
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="mb-10 text-center space-y-4">
            <h1 className="text-4xl font-heading font-bold text-[var(--foreground)]">Vagas para Juniores</h1>
            <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
              Encontre a oportunidade perfeita para dar o start na sua carreira. Filtre por stack, modelo de trabalho e nível.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-[var(--card-bg)] p-4 rounded-xl shadow-sm border border-[var(--card-border)] mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground opacity-50 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por cargo, empresa ou tecnologia..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="w-full md:w-auto flex items-center gap-2 h-12 px-6">
              <Filter className="w-4 h-4" /> Filtros Avançados
            </Button>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="hover:border-[var(--color-brand-accent)] transition-all cursor-pointer group">
                    <CardHeader className="pb-3 flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-heading text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-dark)] transition-colors mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground)] opacity-80">
                          <span className="flex items-center gap-1 font-medium"><Building2 className="w-4 h-4" /> {job.company}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location} ({job.type})</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.contract}</span>
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.postedAt}</span>
                        </div>
                      </div>
                      <Badge variant="accent" className="w-fit">{job.level}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--foreground)] opacity-70 text-sm line-clamp-2 mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between items-center border-t border-[var(--card-border)] pt-4 mt-2">
                      <div className="text-sm font-medium text-[var(--foreground)]">
                        {job.salary ? job.salary : "Salário a combinar"}
                      </div>
                      <Button variant="default" className="shadow-[0_0_10px_rgba(232,185,35,0)] group-hover:shadow-[0_0_15px_rgba(232,185,35,0.4)]">
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
