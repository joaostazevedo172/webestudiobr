'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle, Code2, Gauge, PackageCheck, Menu, X } from 'lucide-react';

/*
  Todas as cores, espaços, raios, sombras e curvas vêm dos tokens em app/globals.css.
  Tipografia: use só as classes .t-label / .t-small / .t-nav / .t-body / .t-lead / .t-h3 / .t-h2 / .t-h1.
  Espaçamento Tailwind permitido (escala de 8): 2 (8px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px).
*/

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
  url: string;
  year: string;
  stack: string[];
  destaque: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    name: 'Le Unic Brand',
    category: 'Catálogo',
    description: 'Presskits e brindes corporativos. Biblioteca navegável com o catálogo dividido por seções, seleção de itens pelo visitante, orçamento montado no WhatsApp e painel administrativo para acompanhar os leads.',
    url: 'https://www.leunicbrand.com.br/',
    year: '2026',
    stack: ['Next.js', 'Tailwind', 'GSAP', 'Postgres'],
    destaque: 'Catálogo + painel admin',
    featured: true,
  },
  {
    id: 2,
    name: 'Ciclo Tintas',
    category: 'Indústria',
    description: 'Site institucional e catálogo para indústria de sinalização viária. Cada produto abre com ficha técnica completa e o formulário de orçamento chega organizado no WhatsApp da consultora.',
    url: 'https://ciclo-tintas.vercel.app/',
    year: '2026',
    stack: ['HTML', 'CSS', 'JavaScript'],
    destaque: 'Orçamento em 3 etapas',
  },
  {
    id: 3,
    name: 'Via Selco',
    category: 'Indústria',
    description: 'Site institucional para empresa de sinalização horizontal com mais de duas décadas de estrada. Apresentação de serviços e captação de orçamentos com linguagem técnica e direta.',
    url: 'https://viaselco.vercel.app/',
    year: '2026',
    stack: ['Next.js', 'Tailwind'],
    destaque: 'Institucional + orçamento',
  },
  {
    id: 4,
    name: 'Agência Dune',
    category: 'Branding',
    description: 'Criação de identidade visual com os planos, a tabela de itens avulsos e os prazos de entrega da agência. Cada plano leva direto ao WhatsApp já com o pacote escolhido na mensagem.',
    url: 'https://www.duneagencia.com.br/',
    year: '2026',
    stack: ['HTML', 'CSS', 'JavaScript'],
    destaque: 'Planos e itens avulsos',
  },
  {
    id: 5,
    name: 'Seu Logotipo',
    category: 'Branding',
    description: 'Identidade visual para advogados e empresas. Portfólio com quinze marcas aplicadas em fachadas e recepções, e brief em três etapas que chega pronto no WhatsApp.',
    url: 'https://seulogotipo.vercel.app/',
    year: '2026',
    stack: ['HTML', 'CSS', 'JavaScript'],
    destaque: 'Brief em 3 etapas',
  },
  {
    id: 7,
    name: 'Agência Lumina',
    category: 'Branding',
    description: 'Design gráfico e marketing visual. Paleta clara e monocromática que deixa o trabalho falar, com portfólio de monogramas e logotipos em destaque.',
    url: 'https://lumina-khaki-eight.vercel.app/',
    year: '2026',
    stack: ['HTML', 'CSS', 'JavaScript'],
    destaque: 'Portfólio de monogramas',
  },
  {
    id: 8,
    name: 'Dra. Kamila Azevedo',
    category: 'Saúde',
    description: 'Harmonização facial em Seropédica. Galeria de antes e depois, pré-avaliação em etapas com envio de foto e assistente virtual para as dúvidas iniciais.',
    url: 'https://drakamilaazevedo.com.br/',
    year: '2026',
    stack: ['Next.js', 'Tailwind', 'IA'],
    destaque: 'Pré-avaliação + assistente',
  },
  {
    id: 9,
    name: 'Nexus Sentinel',
    category: 'Sistemas',
    description: 'Plataforma de inteligência climática global, com foco em visualização de dados e leitura de informações em escala. Projeto de produto, não de site institucional.',
    url: 'https://nexus-sentinel-gs-2026-1.vercel.app/',
    year: '2026',
    stack: ['Next.js', 'Dados', 'Dashboard'],
    destaque: 'Visualização de dados',
  },
  {
    id: 10,
    name: 'Kaio Augusto',
    category: 'Esporte',
    description: 'Consultoria fitness premium. Planos de acompanhamento, método em quatro etapas e um módulo dedicado à preparação para testes físicos militares.',
    url: 'https://kaio-personal.vercel.app/',
    year: '2026',
    stack: ['Next.js', 'Tailwind'],
    destaque: 'Planos + preparação TAF',
  },
];

const categories = ['Todos', 'Branding', 'Indústria', 'Catálogo', 'Saúde', 'Sistemas', 'Esporte'];

// Os números da seção "Sobre" saem dos próprios dados — adicionar ou remover um projeto já atualiza.
const nichos = new Set(projects.map(p => p.category)).size;

const steps = [
  { num: '01', title: 'Conversa', desc: 'Entendemos seu negócio, público e objetivos. Sem enrolação.' },
  { num: '02', title: 'Design', desc: 'Protótipo visual com identidade coerente com seu nicho.' },
  { num: '03', title: 'Desenvolvimento', desc: 'Código limpo, responsivo e otimizado para performance.' },
  { num: '04', title: 'Entrega', desc: 'Deploy na Vercel, SEO configurado e suporte pós-entrega.' },
];

const navLinks = [
  { href: '#trabalho', label: 'Trabalho' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' };
      setTime(new Date().toLocaleTimeString('pt-BR', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    // Reveal: fade + subida de 32px quando o bloco entra na tela
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const whatsappLink = "https://wa.me/5573988960070?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Web%20Est%C3%BAdio%20BR%20e%20quero%20um%20or%C3%A7amento.";
  const instagramLink = "https://instagram.com/web.estudio.br";

  const filteredProjects = activeFilter === 'Todos' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen text-ink">
      <a href="#conteudo" className="skip-link t-small">Pular para o conteúdo</a>

      {/* NAV */}
      <nav className={`nav fixed top-0 left-0 right-0 z-50 ${scrolled || menuOpen ? 'nav--scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-6">
          <a href="#top" className="logo link">Web Estúdio BR</a>

          <div className="hidden md:flex items-center gap-8 t-nav">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="link">{l.label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {time && <span className="t-small text-muted">Brasil, {time}</span>}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta cta--sm">
              Conversar
              <MessageCircle size={16} className="icon" aria-hidden="true" />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-12 h-12 -mr-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div id="menu-mobile" className="md:hidden px-6 pb-8 pt-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="t-h2 link">{l.label}</a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta self-start mt-4">
              Conversar no WhatsApp
              <MessageCircle size={16} className="icon" aria-hidden="true" />
            </a>
          </div>
        )}
      </nav>

      <main id="conteudo">
        {/* HERO */}
        <section id="top" className="pt-40 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="t-label text-muted mb-8 reveal">Disponível para projetos em 2026</p>

            <h1 className="t-h1 text-ink max-w-3xl reveal reveal-d1">
              Sites que traduzem sua marca em conversão.
            </h1>

            <div className="grid md:grid-cols-12 gap-8 mt-12">
              <div className="md:col-span-6 md:col-start-7 reveal reveal-d2">
                <p className="t-lead text-ink-soft measure">
                  Somos o Web Estúdio BR: design e código na mesma mesa. Criamos sites completos, rápidos e pensados para cada nicho, da indústria à estética.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta">
                    Começar um projeto
                    <ArrowUpRight size={16} className="icon" aria-hidden="true" />
                  </a>
                  <a href="#trabalho" className="btn-ghost">Ver trabalhos</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 pt-16 rule">
            <div className="md:col-span-3">
              <h2 className="t-label text-muted">Sobre</h2>
            </div>
            <div className="md:col-span-9">
              <p className="t-h2 text-ink mb-8 max-w-3xl reveal">
                Não somos só quem programa. Somos quem também desenha a experiência.
              </p>
              <div className="grid md:grid-cols-2 gap-8 t-body text-muted reveal reveal-d1">
                <p>
                  A maior parte dos sites que existem por aí são feitos por duas pessoas: um designer que pensa a interface e um dev que tenta replicar no código. O resultado quase sempre perde alguma coisa no meio do caminho.
                </p>
                <p>
                  Aqui isso não acontece. Cada decisão é pensada como designer e como desenvolvedor ao mesmo tempo, o que torna o processo mais rápido, o código mais coerente e a entrega mais refinada. Da sinalização viária à área médica estética, cada projeto recebe a mesma atenção.
                </p>
              </div>

              <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 rule reveal reveal-d2">
                <div className="flex flex-col-reverse gap-2">
                  <dt className="t-small text-muted">Projetos no ar</dt>
                  <dd className="t-stat text-ink">{projects.length}</dd>
                </div>
                <div className="flex flex-col-reverse gap-2">
                  <dt className="t-small text-muted">Feito sob medida</dt>
                  <dd className="t-stat text-ink">100%</dd>
                </div>
                <div className="flex flex-col-reverse gap-2">
                  <dt className="t-small text-muted">Nichos atendidos</dt>
                  <dd className="t-stat text-ink">{nichos}</dd>
                </div>
                <div className="flex flex-col-reverse gap-2">
                  <dt className="t-small text-muted">Retorno médio</dt>
                  <dd className="t-stat text-ink">24h</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* TRABALHO */}
        <section id="trabalho" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 pt-16 rule">
              <div className="md:col-span-3">
                <p className="t-label text-muted">Trabalhos</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="t-h2 text-ink reveal">Seleção de projetos recentes.</h2>
              </div>
            </div>

            {/* FILTROS */}
            <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar projetos por categoria">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={activeFilter === cat}
                  className="chip"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-6 reveal">
              {filteredProjects.map(project => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card group ${project.featured ? 'card--lg md:col-span-2' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="t-label text-muted">{project.category}, {project.year}</span>
                        {project.featured && <span className="tag">Em destaque</span>}
                      </div>
                      <h3 className="t-h3 text-ink mt-2">{project.name}</h3>
                    </div>
                    <ArrowUpRight size={24} className="card-arrow shrink-0" aria-hidden="true" />
                  </div>

                  <p className={`t-body text-muted mb-6 ${project.featured ? 'measure' : ''}`}>
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 rule flex flex-wrap items-center justify-between gap-2">
                    <span className="t-small text-muted">{project.stack.join(', ')}</span>
                    <span className="t-small text-ink">{project.destaque}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* DESTAQUE TÉCNICO */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center pt-16 rule">
            <div className="md:col-span-5 reveal">
              <p className="t-label text-muted">Capacidade técnica</p>
              <h2 className="t-h2 text-ink mt-4 mb-6">Quando o desafio vai além do visual.</h2>
              <p className="t-body text-muted mb-8 measure">
                A Le Unic Brand não é uma página só: é um catálogo navegável dividido por seções, com seleção de produtos pelo visitante, orçamento montado no WhatsApp e um painel administrativo para acompanhar os leads. É o tipo de projeto que mostra que entregamos bem mais do que páginas bonitas: resolvemos problemas reais de operação.
              </p>
              <a href="https://www.leunicbrand.com.br/" target="_blank" rel="noopener noreferrer" className="link link--accent t-body inline-flex items-center gap-2">
                Acessar a Le Unic Brand <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="md:col-span-7 reveal reveal-d1">
              <figure className="mock" aria-label="Ilustração do catálogo da Le Unic Brand">
                <div className="mock-bar flex items-center gap-2 px-4 py-4">
                  <span className="w-2 h-2 rounded-full bg-muted-inverse opacity-40" />
                  <span className="w-2 h-2 rounded-full bg-muted-inverse opacity-40" />
                  <span className="w-2 h-2 rounded-full bg-muted-inverse opacity-40" />
                  <span className="t-small text-muted-inverse ml-4">leunicbrand.com.br/biblioteca</span>
                </div>
                <div className="grid grid-cols-4 gap-2 md:gap-4 p-4 md:p-6" aria-hidden="true">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`mock-tile aspect-square flex items-end p-2 ${i === 5 ? 'mock-tile--accent' : ''}`}>
                      <span className="block w-1/2 h-2 rounded-full bg-muted-inverse opacity-30" />
                    </div>
                  ))}
                </div>
                <figcaption className="t-small text-muted-inverse px-4 md:px-6 pb-4">
                  12 seções no catálogo navegável
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 pt-16 rule">
              <div className="md:col-span-3">
                <p className="t-label text-muted">Processo</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="t-h2 text-ink reveal">Como trabalhamos.</h2>
              </div>
            </div>

            <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <li key={step.num} className={`pt-6 border-t border-ink reveal ${i ? `reveal-d${Math.min(i, 3)}` : ''}`}>
                  <span className="t-h3 text-subtle block mb-4" aria-hidden="true">{step.num}</span>
                  <h3 className="t-h3 text-ink mb-2">{step.title}</h3>
                  <p className="t-body text-muted">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      {/* CONTATO + RODAPÉ — a única superfície escura do site */}
      <div className="bg-surface-dark text-paper">
        <section id="contato" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 pt-16">
            <div className="md:col-span-3">
              <p className="t-label text-muted-inverse">Contato</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="t-h1 mb-8 max-w-3xl reveal">Pronto para tirar seu projeto do papel?</h2>

              <p className="t-lead text-muted-inverse measure mb-12 reveal reveal-d1">
                Chame no WhatsApp ou mande uma DM. Em até 24 horas você recebe uma proposta personalizada para o seu projeto.
              </p>

              <div className="flex flex-wrap gap-4 mb-16 reveal reveal-d2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta cta--accent">
                  <MessageCircle size={16} className="icon" aria-hidden="true" />
                  (73) 98896-0070
                </a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-ghost--inverse">
                  <InstagramIcon />
                  Instagram
                  <span className="sr-only">@web.estudio.br</span>
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-8 pt-12 rule-inverse">
                <div>
                  <Code2 className="text-muted-inverse mb-4" size={24} aria-hidden="true" />
                  <h3 className="t-lead mb-2">Código e design</h3>
                  <p className="t-small text-muted-inverse">O mesmo cuidado no visual e no código.</p>
                </div>
                <div>
                  <Gauge className="text-muted-inverse mb-4" size={24} aria-hidden="true" />
                  <h3 className="t-lead mb-2">Feitos para carregar rápido</h3>
                  <p className="t-small text-muted-inverse">Páginas leves, imagens otimizadas e deploy na Vercel.</p>
                </div>
                <div>
                  <PackageCheck className="text-muted-inverse mb-4" size={24} aria-hidden="true" />
                  <h3 className="t-lead mb-2">Entrega completa</h3>
                  <p className="t-small text-muted-inverse">Do protótipo ao deploy, sem dor de cabeça.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 md:px-12 pb-8">
          <div className="max-w-7xl mx-auto pt-8 rule-inverse flex flex-col md:flex-row items-start md:items-center justify-between gap-4 t-small text-muted-inverse">
            <p>© 2026 Web Estúdio BR. Todos os direitos reservados.</p>
            <p>Feito com Next.js e Tailwind, hospedado na Vercel.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
