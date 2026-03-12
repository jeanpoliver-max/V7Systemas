import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, Shield, Users, Zap, ChevronDown, CheckCircle2, 
  ArrowRight, Menu, X, Command, Copy, MessageSquare, MonitorSmartphone,
  Truck, Map, BookOpen, Briefcase, Search, Timer
} from 'lucide-react';

const CFG = {
  email: 'contato@v7systemas.com.br',
  whatsapp: '5517997176084',
  instagram: 'https://instagram.com/v7systemas',
  linkedin: 'https://linkedin.com/company/v7systemas',
  facebook: 'https://www.facebook.com/profile.php?id=61582186772161',
  whatsappText: 'Olá! Gostaria de saber mais sobre as soluções da V7 Systemas.'
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCmdPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') setCmdPaletteOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CFG.email);
    showToast('E-mail copiado para a área de transferência!');
    setCmdPaletteOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(CFG.whatsappText)}`, '_blank');
    setCmdPaletteOpen(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setCmdPaletteOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-slate-200 selection:bg-brand-primary selection:text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="https://i.imgur.com/1VPW9Hy.png" 
              alt="V7 Systemas" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo('solucoes')} className="hover:text-brand-secondary transition-colors">Soluções</button>
            <button onClick={() => scrollTo('como-funciona')} className="hover:text-brand-secondary transition-colors">Como funciona</button>
            <button onClick={() => scrollTo('prova')} className="hover:text-brand-secondary transition-colors">Resultados</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-brand-secondary transition-colors">FAQ</button>
            <button onClick={() => scrollTo('contato')} className="hover:text-brand-secondary transition-colors">Contato</button>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setCmdPaletteOpen(true)}
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white bg-white/5 px-3 py-1.5 rounded-md border border-white/10 transition-colors"
            >
              <Search size={14} />
              <span>Buscar</span>
              <kbd className="ml-2 font-mono bg-white/10 px-1.5 py-0.5 rounded text-[10px]">⌘K</kbd>
            </button>
            <button onClick={() => scrollTo('contato')} className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg shadow-brand-primary/25">
              Solicitar demo
            </button>
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-brand-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg">
              <button onClick={() => scrollTo('solucoes')} className="text-left border-b border-white/10 pb-4">Soluções</button>
              <button onClick={() => scrollTo('como-funciona')} className="text-left border-b border-white/10 pb-4">Como funciona</button>
              <button onClick={() => scrollTo('prova')} className="text-left border-b border-white/10 pb-4">Resultados</button>
              <button onClick={() => scrollTo('faq')} className="text-left border-b border-white/10 pb-4">FAQ</button>
              <button onClick={() => scrollTo('contato')} className="text-left border-b border-white/10 pb-4">Contato</button>
              <button onClick={() => scrollTo('contato')} className="bg-brand-primary text-white px-5 py-3 rounded-lg font-medium mt-4">
                Solicitar demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-medium mb-6">
                <Zap size={16} />
                <span>O futuro da gestão em saúde</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Tecnologia sob medida para uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">saúde pública mais ágil.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                A ponte definitiva entre o presente burocrático e o futuro eficiente. Reduza filas, integre dados e facilite a vida de profissionais e pacientes com um sistema feito para a realidade da saúde pública.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button onClick={() => scrollTo('contato')} className="cursor-pointer bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-primary/25 flex items-center justify-center gap-2">
                  Solicitar demonstração <ArrowRight size={18} />
                </button>
                <button onClick={openWhatsApp} className="cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                  <MessageSquare size={18} /> Falar com especialista
                </button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent" />
                  <span>400+ unidades atendidas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-accent" />
                  <span>Tecnologia sob medida</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Abstract Hero Visual - The "Bridge" */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-surface to-brand-bg-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Dashboard Mock */}
                  <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-4 h-[calc(100%-3rem)]">
                    <div className="rounded-lg bg-white/5 border border-white/5 p-3 sm:p-4 flex flex-col justify-between gap-2">
                      <div className="w-8 h-8 rounded bg-brand-primary/20 flex items-center justify-center"><Users size={16} className="text-brand-primary" /></div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">1.2k</div>
                        <div className="text-[10px] sm:text-xs text-slate-500 leading-tight">Pacientes hoje</div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 border border-white/5 p-3 sm:p-4 flex flex-col justify-between gap-2">
                      <div className="w-8 h-8 rounded bg-brand-secondary/20 flex items-center justify-center"><Timer size={16} className="text-brand-secondary" /></div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">3,5 min</div>
                        <div className="text-[10px] sm:text-xs text-slate-500 leading-tight">Espera para Triagem</div>
                      </div>
                    </div>
                    <div className="col-span-2 rounded-lg bg-white/5 border border-white/5 p-3 sm:p-4 flex flex-col justify-between gap-2">
                      <div className="w-8 h-8 rounded bg-brand-accent/20 flex items-center justify-center"><Timer size={16} className="text-brand-accent" /></div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-white">30 min</div>
                        <div className="text-[10px] sm:text-xs text-slate-500 leading-tight">Tempo de Espera para Atendimento Médico</div>
                      </div>
                    </div>
                    <div className="col-span-2 rounded-lg bg-white/5 border border-white/5 p-3 sm:p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-brand-primary/20 flex items-center justify-center shrink-0">
                        <Activity size={20} className="text-brand-primary" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-medium text-white leading-tight">Monitor de Atendimentos</div>
                        <div className="text-xs sm:text-sm text-slate-400 mt-1">Taxa de permanência de pacientes e número de atendimentos</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 -top-6 bg-brand-surface border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Prontuário Integrado</div>
                      <div className="text-xs text-slate-400">Atualizado agora</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section id="para-quem" className="py-20 bg-brand-bg-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Feito para quem faz a saúde acontecer</h2>
            <p className="text-slate-400">Nossas soluções conectam todos os pontos da rede pública, garantindo que a informação certa chegue à pessoa certa, na hora certa.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase />, title: 'Gestores Públicos', desc: 'Visão macro, indicadores em tempo real e previsibilidade para tomada de decisão estratégica.' },
              { icon: <Activity />, title: 'Unidades de Saúde', desc: 'Fluxos otimizados, redução de filas e processos digitais que eliminam o papel.' },
              { icon: <Users />, title: 'Equipes Médicas', desc: 'Prontuários integrados, histórico acessível e mais tempo focado no paciente.' }
            ].map((item, i) => (
              <div key={i} className="bg-brand-surface/50 border border-white/5 p-8 rounded-2xl hover:bg-brand-surface transition-colors">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você resolve */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O fim do caos operacional na saúde pública</h2>
              <p className="text-slate-400 mb-8 text-lg">Substituímos processos manuais e sistemas fragmentados por uma plataforma única e fluida.</p>
              
              <div className="space-y-6">
                {[
                  'Filas intermináveis e agendamentos confusos',
                  'Perda de histórico clínico de pacientes',
                  'Falta de dados confiáveis para gestão',
                  'Desperdício de recursos e medicamentos',
                  'Comunicação falha entre unidades'
                ].map((dor, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-brand-accent" />
                    </div>
                    <p className="text-slate-300 font-medium">{dor}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-brand-surface border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <div className="text-lg font-bold text-white">Antes da V7</div>
                  <div className="text-lg font-bold text-brand-secondary">Com a V7</div>
                </div>
                <div className="space-y-6">
                  {[
                    { a: 'Papel e planilhas', b: '100% Digital e em nuvem' },
                    { a: 'Dados isolados', b: 'Rede integrada' },
                    { a: 'Decisões no escuro', b: 'Dashboards em tempo real' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="text-slate-500 line-through text-sm">{item.a}</div>
                      <ArrowRight size={16} className="text-slate-600" />
                      <div className="text-white font-medium text-sm bg-white/5 px-3 py-1 rounded-md border border-white/5">{item.b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 bg-brand-bg-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A jornada para a eficiência</h2>
            <p className="text-slate-400">Implementação ágil e sem dor de cabeça. Nós cuidamos da tecnologia para você cuidar das pessoas.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-primary/50 to-brand-secondary/50"></div>
            
            {[
              { step: '01', title: 'Diagnóstico', desc: 'Avaliamos a realidade do seu município e desenhamos o fluxo ideal.' },
              { step: '02', title: 'Implantação', desc: 'Configuramos os módulos necessários e integramos com sistemas legados.' },
              { step: '03', title: 'Capacitação', desc: 'Treinamos sua equipe para extrair o máximo da ferramenta desde o dia 1.' }
            ].map((item, i) => (
              <div key={i} className="relative pt-8 md:pt-0">
                <div className="w-16 h-16 mx-auto bg-brand-surface border-2 border-brand-primary rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 relative z-10 shadow-lg shadow-brand-primary/20">
                  {item.step}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Módulos que transformam a gestão</h2>
            <p className="text-slate-400">Um ecossistema completo e modular. Contrate o que precisa agora, expanda quando quiser.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MonitorSmartphone />, title: 'Gestão Integrada', desc: 'Prontuário eletrônico, agendamentos, farmácia e faturamento SUS num só lugar.' },
              { icon: <MessageSquare />, title: 'Comunicação', desc: 'Avisos automatizados para pacientes e chat seguro entre equipes médicas.' },
              { icon: <Truck />, title: 'Transporte', desc: 'Gestão de frota da saúde, rotas otimizadas e controle de viagens de pacientes.' },
              { icon: <Map />, title: 'Território', desc: 'Mapeamento epidemiológico e gestão de agentes comunitários de saúde.' },
              { icon: <BookOpen />, title: 'Capacitações', desc: 'Plataforma EAD para treinamento contínuo dos profissionais da rede.' },
              { icon: <Shield />, title: 'Consultoria', desc: 'Apoio especializado para otimização de repasses e adequação a normativas.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-brand-surface border border-white/10 flex items-center justify-center text-brand-secondary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova e Confiança */}
      <section id="prova" className="py-20 bg-brand-primary/10 border-y border-brand-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tecnologia testada e aprovada na prática</h2>
              <p className="text-slate-300 mb-8 text-lg">Não somos aventureiros. Nascemos na saúde pública e entendemos a complexidade do SUS melhor que ninguém.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-brand-surface/80 border border-white/10 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-brand-secondary mb-2">400+</div>
                  <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Unidades Atendidas</div>
                </div>
                <div className="bg-brand-surface/80 border border-white/10 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-brand-accent mb-2">99%</div>
                  <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Uptime do Sistema</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Shield size={18} className="text-brand-primary" />
                <span>Suporte técnico especializado em horário estendido.</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { quote: "A implantação foi surpreendentemente rápida. Em poucas semanas, eliminamos as filas de madrugada nos postos.", author: "Secretário de Saúde" },
                { quote: "O prontuário integrado mudou a rotina dos nossos médicos. A informação agora flui entre as unidades sem perda de dados.", author: "Diretora Clínica" }
              ].map((item, i) => (
                <div key={i} className="bg-brand-surface border border-white/10 p-8 rounded-2xl relative">
                  <div className="text-brand-primary/20 absolute top-4 left-4 text-6xl font-serif">"</div>
                  <p className="text-slate-300 relative z-10 italic mb-4">"{item.quote}"</p>
                  <div className="text-brand-secondary font-medium text-sm">— {item.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-slate-400">Tudo o que você precisa saber antes de dar o próximo passo.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Como funciona a implantação?', a: 'Nossa equipe realiza um diagnóstico presencial ou remoto, mapeia os fluxos atuais e configura o sistema. O processo é faseado para não interromper o atendimento à população.' },
              { q: 'O sistema integra com o e-SUS e outros sistemas do governo?', a: 'Sim. A V7 Systemas possui integração nativa com as principais bases de dados governamentais, garantindo que os repasses não sejam prejudicados.' },
              { q: 'Como é feito o treinamento da equipe?', a: 'Oferecemos capacitação in loco para multiplicadores e acesso contínuo à nossa plataforma EAD com trilhas de aprendizagem para cada perfil de usuário.' },
              { q: 'E se ficarmos sem internet?', a: 'Nossos módulos críticos possuem contingência offline, permitindo o registro dos atendimentos e sincronização automática assim que a conexão for restabelecida.' },
              { q: 'É possível personalizar módulos para nossa realidade?', a: 'Sim. Entendemos que cada município tem suas particularidades. Nosso sistema é altamente parametrizável.' },
              { q: 'Como funciona o suporte técnico?', a: 'Oferecemos suporte via chat, telefone e chamados, com SLAs rigorosos e equipe especializada em saúde pública.' }
            ].map((faq, i) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <ChevronDown size={20} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 text-slate-400 text-sm"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final / Contato */}
      <section id="contato" className="py-24 bg-brand-surface border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Pronto para modernizar a saúde do seu município?</h2>
              <p className="text-slate-400 mb-8 text-lg">Fale com um de nossos especialistas e descubra como a V7 Systemas pode se adaptar à sua realidade.</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">WhatsApp</div>
                    <button onClick={openWhatsApp} className="cursor-pointer text-white font-medium hover:text-brand-secondary transition-colors">
                      Falar agora
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                    <Copy size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">E-mail</div>
                    <button onClick={copyEmail} className="text-white font-medium hover:text-brand-primary transition-colors">
                      {CFG.email}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-bg-dark border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Solicitar demonstração</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const subject = 'Solicitação de Demonstração - V7 Systemas';
                  const body = `Nome: ${formData.get('nome')}%0D%0ACargo: ${formData.get('cargo')}%0D%0AÓrgão/Unidade: ${formData.get('orgao')}%0D%0A%0D%0AMensagem:%0D%0A${formData.get('mensagem')}`;
                  window.location.href = `mailto:${CFG.email}?subject=${subject}&body=${body}`;
                  
                  // Limpa o formulário após o envio
                  form.reset();
                  
                  // Exibe um feedback visual
                  showToast('Abrindo seu aplicativo de e-mail...');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Nome completo</label>
                    <input required name="nome" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Cargo</label>
                    <input required name="cargo" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Órgão / Unidade de Saúde</label>
                  <input required name="orgao" type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">E-mail profissional</label>
                  <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Como podemos ajudar?</label>
                  <textarea required name="mensagem" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-3 rounded-lg font-medium transition-colors mt-2">
                  Enviar solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://i.imgur.com/1VPW9Hy.png" 
                alt="V7 Systemas" 
                className="h-8 w-auto opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex gap-6 text-sm text-slate-400">
              <a href={CFG.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href={CFG.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href={CFG.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} V7 Systemas. Todos os direitos reservados.</p>
            <p>Tecnologia sob medida para uma saúde pública mais ágil.</p>
          </div>
        </div>
      </footer>

      {/* Command Palette */}
      <AnimatePresence>
        {cmdPaletteOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setCmdPaletteOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-brand-surface border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-4 border-b border-white/10 flex items-center gap-3 text-slate-400">
                <Command size={18} />
                <input 
                  autoFocus 
                  type="text" 
                  placeholder="O que você procura?" 
                  className="bg-transparent border-none outline-none w-full text-white placeholder:text-slate-500"
                  readOnly
                />
                <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono">ESC</kbd>
              </div>
              <div className="p-2">
                <div className="text-xs font-medium text-slate-500 px-3 py-2 uppercase tracking-wider">Ações Rápidas</div>
                <button onClick={() => scrollTo('contato')} className="cursor-pointer w-full flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-lg text-left text-white transition-colors">
                  <ArrowRight size={16} className="text-brand-primary" /> Solicitar demonstração
                </button>
                <button onClick={openWhatsApp} className="cursor-pointer w-full flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-lg text-left text-white transition-colors">
                  <MessageSquare size={16} className="text-brand-accent" /> Falar no WhatsApp
                </button>
                <button onClick={copyEmail} className="cursor-pointer w-full flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-lg text-left text-white transition-colors">
                  <Copy size={16} className="text-brand-secondary" /> Copiar e-mail de contato
                </button>
                <button onClick={() => scrollTo('solucoes')} className="cursor-pointer w-full flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-lg text-left text-white transition-colors">
                  <MonitorSmartphone size={16} className="text-slate-400" /> Ver módulos do sistema
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white w-14 h-14 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] flex items-center justify-center z-40 transition-transform hover:scale-110 cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </button>

      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-brand-surface border border-white/10 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2"
          >
            <CheckCircle2 size={18} className="text-brand-accent" />
            <span className="text-sm font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
