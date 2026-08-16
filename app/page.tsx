'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle, Code2, Zap, Eye, Sparkles, Package, Menu, X } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' };
      setTime(now.toLocaleTimeString('pt-BR', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const whatsappLink = "https://wa.me/5573988960070?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Web%20Est%C3%BAdio%20BR%20e%20quero%20um%20or%C3%A7amento.";
  const instagramLink = "https://instagram.com/web.estudio.br";

  const projects = [
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
      id: 6,
      name: 'Guga Designer',
      category: 'Branding',
      description: 'Branding e identidade visual premium. Visual escuro com acento em verde neon, portfólio em cards que abrem o detalhe do projeto e captação direta por WhatsApp.',
      url: 'https://gugadesigner.vercel.app/',
      year: '2026',
      stack: ['HTML', 'CSS', 'JavaScript'],
      destaque: 'Portfólio com modal',
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
  const filteredProjects = activeFilter === 'Todos' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
        
        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-serif-italic { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Fraunces', serif; }
        
        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease-out forwards; }
        
        .hover-lift { transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .hover-lift:hover { transform: translateY(-4px); }
        
        .link-underline {
          position: relative;
          display: inline-block;
        }
        .link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease;
        }
        .link-underline:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>

      <div className="grain"></div>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-medium tracking-tight">
            Web Estúdio <span className="font-serif-italic text-amber-700">BR</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#trabalho" className="link-underline">Trabalho</a>
            <a href="#sobre" className="link-underline">Sobre</a>
            <a href="#processo" className="link-underline">Processo</a>
            <a href="#contato" className="link-underline">Contato</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="font-mono text-xs text-stone-500">Brasil · {time}</span>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm hover:bg-amber-700 transition-colors duration-300">
              <MessageCircle size={14} />
              Conversar
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-6 space-y-4">
            <a href="#trabalho" onClick={() => setMenuOpen(false)} className="block font-display text-2xl">Trabalho</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="block font-display text-2xl">Sobre</a>
            <a href="#processo" onClick={() => setMenuOpen(false)} className="block font-display text-2xl">Processo</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="block font-display text-2xl">Contato</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-3 rounded-full text-sm mt-4">
              <MessageCircle size={14} /> Conversar no WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 fade-up">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-stone-600">Disponível para projetos · 2026</span>
          </div>

          <h1 className="font-display text-[12vw] md:text-[9vw] leading-[0.95] tracking-tighter mb-8 fade-up">
            Sites que<br/>
            <span className="font-serif-italic font-light text-amber-700">traduzem</span> sua<br/>
            marca em<br/>
            conversão<span className="text-amber-700">.</span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 mt-16 fade-up" style={{animationDelay: '0.2s'}}>
            <div className="md:col-span-5 md:col-start-7">
              <p className="font-body text-xl md:text-2xl leading-snug text-stone-700">
                Somos o <span className="font-serif-italic">Web Estúdio BR</span> — design e código na mesma mesa. Criamos sites completos, rápidos e pensados para cada nicho, da indústria à estética.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-stone-900 text-stone-50 px-7 py-4 rounded-full hover-lift">
                  <MessageCircle size={18} />
                  <span className="font-body">Começar um projeto</span>
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                </a>
                <a href="#trabalho" className="flex items-center gap-2 px-7 py-4 rounded-full border border-stone-300 hover:border-stone-900 transition-colors">
                  <span className="font-body">Ver trabalhos</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 border-y border-stone-300 py-6 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 font-display text-4xl md:text-6xl pr-12">
                <span>Next.js</span>
                <span className="font-serif-italic text-amber-700">design</span>
                <span>React</span>
                <span className="font-serif-italic text-amber-700">performance</span>
                <span>TypeScript</span>
                <span className="font-serif-italic text-amber-700">UX</span>
                <span>Vercel</span>
                <span className="font-serif-italic text-amber-700">código limpo</span>
                <span>Tailwind</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6 md:px-12 bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500">(01) Sobre</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-10 tracking-tight">
              Não somos só quem <span className="font-serif-italic text-amber-500">programa</span> — somos quem também <span className="font-serif-italic text-amber-500">desenha</span> a experiência.
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-stone-300 font-body text-lg leading-relaxed">
              <p>
                A maior parte dos sites que existem por aí são feitos por duas pessoas: um designer que pensa a interface e um dev que tenta replicar no código. O resultado quase sempre perde alguma coisa no meio do caminho.
              </p>
              <p>
                Aqui isso não acontece. Cada decisão é pensada como designer e como desenvolvedor ao mesmo tempo — o que torna o processo mais rápido, o código mais coerente e a entrega mais refinada. Da sinalização viária à área médica estética, cada projeto recebe a mesma atenção.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-stone-700">
              <div>
                <div className="font-display text-5xl text-amber-500">10</div>
                <div className="font-mono text-xs uppercase tracking-widest text-stone-400 mt-2">Projetos no ar</div>
              </div>
              <div>
                <div className="font-display text-5xl text-amber-500">100<span className="text-2xl">%</span></div>
                <div className="font-mono text-xs uppercase tracking-widest text-stone-400 mt-2">Feito sob medida</div>
              </div>
              <div>
                <div className="font-display text-5xl text-amber-500">6</div>
                <div className="font-mono text-xs uppercase tracking-widest text-stone-400 mt-2">Nichos atendidos</div>
              </div>
              <div>
                <div className="font-display text-5xl text-amber-500">24h</div>
                <div className="font-mono text-xs uppercase tracking-widest text-stone-400 mt-2">Retorno médio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRABALHO */}
      <section id="trabalho" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500">(02) Trabalhos</span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
                Seleção de projetos<br/>
                <span className="font-serif-italic text-amber-700">recentes.</span>
              </h2>
            </div>
          </div>

          {/* FILTROS */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-stone-900 text-stone-50 border-stone-900'
                    : 'border-stone-300 hover:border-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white border border-stone-200 rounded-2xl p-8 hover-lift overflow-hidden ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 bg-amber-700 text-stone-50 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
                    <Sparkles size={12} /> Em destaque
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-stone-500">{project.category} · {project.year}</span>
                    <h3 className="font-display text-3xl md:text-4xl mt-2 tracking-tight">{project.name}</h3>
                  </div>
                  <ArrowUpRight size={24} className="text-stone-400 group-hover:text-amber-700 group-hover:rotate-12 transition-all" />
                </div>

                <p className="font-body text-stone-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.featured && (
                  <div className="my-8 aspect-video bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/30 rounded-lg relative overflow-hidden border border-stone-700">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 25% 30%, #f59e0b 0%, transparent 40%), radial-gradient(circle at 75% 60%, #ef4444 0%, transparent 40%), radial-gradient(circle at 50% 80%, #10b981 0%, transparent 40%)'
                    }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package size={48} className="text-amber-500/60" />
                    </div>
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-stone-400 uppercase tracking-wider">
                      Catálogo navegável · Painel administrativo · Captação de leads
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={tech} className="font-mono text-xs text-stone-500">
                        {i > 0 && <span className="text-stone-300 mr-2">·</span>}{tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <Zap size={12} className="text-emerald-600" />
                    <span className="text-stone-700">{project.destaque}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE TÉCNICO */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-stone-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700">(03) Capacidade técnica</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mt-4 mb-6">
                Quando o desafio vai <span className="font-serif-italic text-amber-700">além</span> do visual.
              </h2>
              <p className="font-body text-lg text-stone-700 leading-relaxed mb-8">
                A <strong>Le Unic Brand</strong> não é uma página só: é um catálogo navegável dividido por seções, com seleção de produtos pelo visitante, orçamento montado no WhatsApp e um painel administrativo para acompanhar os leads. É o tipo de projeto que mostra que entregamos bem mais do que páginas bonitas — resolvemos problemas reais de operação.
              </p>
              <a href="https://www.leunicbrand.com.br/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body border-b border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">
                Acessar o projeto <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="md:col-span-7">
              <div className="bg-stone-900 rounded-2xl p-1 shadow-2xl">
                <div className="bg-stone-950 rounded-xl aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}></div>
                  {/* grade de produtos do catálogo */}
                  <div className="absolute inset-0 px-6 pt-14 pb-12 grid grid-cols-4 grid-rows-3 gap-3">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-md border border-stone-800 bg-stone-900/80 flex items-center justify-center"
                        style={{ animation: `fadeUp 0.6s ease-out ${i * 0.05}s both` }}
                      >
                        <div className={`w-1/2 h-1/2 rounded-sm ${i % 5 === 0 ? 'bg-amber-500/70' : 'bg-stone-700/70'}`}></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-stone-400">
                    <span>leunicbrand.com.br/biblioteca</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> live</span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-xs text-stone-500">
                    12 seções · catálogo navegável
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500">(04) Processo</span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
                Como <span className="font-serif-italic text-amber-700">trabalhamos.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {num: '01', title: 'Conversa', desc: 'Entendemos seu negócio, público e objetivos. Sem enrolação.'},
              {num: '02', title: 'Design', desc: 'Protótipo visual com identidade coerente com seu nicho.'},
              {num: '03', title: 'Desenvolvimento', desc: 'Código limpo, responsivo e otimizado para performance.'},
              {num: '04', title: 'Entrega', desc: 'Deploy na Vercel, SEO configurado e suporte pós-entrega.'},
            ].map((step) => (
              <div key={step.num} className="border-t border-stone-900 pt-6">
                <div className="font-mono text-sm text-amber-700 mb-4">{step.num}</div>
                <h3 className="font-display text-2xl mb-3">{step.title}</h3>
                <p className="font-body text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-24 px-6 md:px-12 bg-stone-900 text-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #92400e 0%, transparent 50%), radial-gradient(circle at 80% 80%, #78350f 0%, transparent 50%)'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-500">(05) Contato</span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tight mb-12">
                Pronto para tirar<br/>
                seu projeto<br/>
                <span className="font-serif-italic text-amber-500">do papel?</span>
              </h2>

              <p className="font-body text-xl text-stone-300 max-w-2xl mb-12 leading-relaxed">
                Chame no WhatsApp ou mande uma DM. Em até <strong className="text-stone-50">24 horas</strong> você recebe uma proposta personalizada para o seu projeto.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-amber-600 text-stone-50 px-8 py-5 rounded-full hover:bg-amber-500 transition-colors">
                  <MessageCircle size={20} />
                  <span className="font-body text-lg">(73) 98896-0070</span>
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 border border-stone-700 text-stone-50 px-8 py-5 rounded-full hover:border-stone-50 transition-colors">
                  <InstagramIcon />
                  <span className="font-body text-lg">@web.estudio.br</span>
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-stone-800">
                <div>
                  <Code2 className="text-amber-500 mb-3" size={24} />
                  <h4 className="font-display text-lg mb-2">Código + Design</h4>
                  <p className="font-body text-sm text-stone-400">O mesmo cuidado no visual e no código.</p>
                </div>
                <div>
                  <Zap className="text-amber-500 mb-3" size={24} />
                  <h4 className="font-display text-lg mb-2">Performance real</h4>
                  <p className="font-body text-sm text-stone-400">Sites que carregam em menos de 2 segundos.</p>
                </div>
                <div>
                  <Eye className="text-amber-500 mb-3" size={24} />
                  <h4 className="font-display text-lg mb-2">Entrega completa</h4>
                  <p className="font-body text-sm text-stone-400">Do protótipo ao deploy, sem dor de cabeça.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-12 bg-stone-950 text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>© 2026 Web Estúdio BR · Todos os direitos reservados</div>
          <div className="flex items-center gap-6">
            <span>Feito com Next.js + Tailwind</span>
            <span>·</span>
            <span>Hospedado na Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
