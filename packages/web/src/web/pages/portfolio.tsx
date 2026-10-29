import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ProjectCarousel, ProjectModal } from "../components/project-gallery";
import { FeedbackSection } from "../components/feedback-gallery";
import EmailContact from "../components/email-contact";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowDown, Plus, Minus, Menu, X, Instagram, Check, Globe2, PenTool, Monitor, Layers, Clock3 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const instagram = "https://www.instagram.com/luisxz.designer/";
const whatsapp = (service?: string) => `https://wa.me/5522992343638?text=${encodeURIComponent(`Olá, Luis! Vim pelo seu portfólio e gostaria de solicitar um orçamento${service ? ` para ${service}` : " para o meu projeto"}. Podemos conversar?`)}`;
const services = [
  { title: "Design gráfico", desc: "Peças que comunicam com clareza e fazem sua marca ser lembrada. Do digital ao impresso.", tags: "Materiais gráficos / Campanhas / Artes digitais", icon: PenTool },
  { title: "Web design", desc: "Sites com personalidade, navegação intuitiva e uma experiência pensada para cada tela.", tags: "Sites institucionais / Landing pages / Portfólios", icon: Monitor },
  { title: "Identidade visual", desc: "Uma linguagem visual consistente para traduzir a essência e o posicionamento do seu negócio.", tags: "Logotipo / Paleta de cores / Direção visual", icon: Layers },
  { title: "Design para redes sociais", desc: "Conteúdo visual com intenção. Uma presença digital que se destaca e conversa com seu público.", tags: "Posts / Carrosséis / Criativos", icon: Instagram },
];
const questions = [
  ["Como solicito um orçamento?", "É só clicar em “Solicitar orçamento”. Você será direcionado ao meu WhatsApp com uma mensagem pronta. Conte um pouco sobre o que precisa para conversarmos sobre o escopo do seu projeto."],
  ["Você atende clientes de outras cidades e países?", "Sim. O atendimento é online, para clientes de todo o Brasil e da América Latina. Podemos alinhar os detalhes e compartilhar os materiais digitalmente."],
  ["Qual é o prazo para entrega?", "O prazo depende do tipo de serviço, da complexidade e dos materiais necessários. A previsão de entrega é combinada antes de iniciarmos o projeto."],
  ["Como funciona o processo de criação?", "Começamos com uma conversa para entender sua ideia e seus objetivos. Depois, alinhamos a direção visual, desenvolvemos o projeto e revisamos os detalhes conforme o escopo combinado."],
  ["Em quais horários você atende?", "Meu horário de atendimento é das 10h às 18h. Você pode enviar sua mensagem fora desse período; responderei durante o atendimento."],
];

function Seal() { return <span className="seal" title="Selo azul visual" aria-label="Selo azul decorativo"><Check size={10} strokeWidth={3} /></span>; }
function WhatsAppButton({ className = "", label = "Solicitar orçamento", service }: { className?: string; label?: string; service?: string }) {
  return <a className={`button ${className}`} href={whatsapp(service)} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={17} /><span>{label}</span><ArrowUpRight size={19} /></a>;
}
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: .65, delay }}>{children}</motion.div>;
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [faq, setFaq] = useState<number | null>(0);
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const nav = [["Trabalhos", "portfolio"], ["Serviços", "servicos"], ["Sobre", "sobre"], ["Feedbacks", "feedbacks"], ["FAQ", "faq"]];
  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <header className="header wrap">
      <a href="#inicio" className="wordmark" aria-label="Luis Otávio, início">luis otávio<i /></a>
      <nav className={`navigation ${menu ? "open" : ""}`} aria-label="Navegação principal">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}<a className="mobile-contact" href="#contato" onClick={() => setMenu(false)}>Vamos conversar <ArrowUpRight size={16} /></a></nav>
      <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="header-contact">Vamos conversar <ArrowUpRight size={17} /></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <X /> : <Menu />}</button>
    </header>

    <main id="conteudo">
      <section id="inicio" className="hero wrap">
        <div className="hero-copy">
          <Reveal><div className="eyebrow availability"><span /> DISPONÍVEL PARA NOVOS PROJETOS</div></Reveal>
          <Reveal delay={.08}><h1>Design que<br />conecta.<br /><span>Marcas que<br />se destacam.</span></h1></Reveal>
          <Reveal delay={.16}><p className="intro">Sou <strong>Luis Otávio.</strong> Designer gráfico e web designer.<br className="desktop-break" /> Há 4 anos, transformando ideias em presença.</p></Reveal>
          <Reveal delay={.24} className="hero-actions"><WhatsAppButton /><a className="text-link" href="#portfolio">Conheça meu trabalho <ArrowDown size={16} /></a></Reveal>
          <Reveal delay={.27}><Link href="/para-empresas" className="business-home-cta">Sou uma empresa <ArrowUpRight size={16} /></Link></Reveal>
          <Reveal delay={.3}><a href={instagram} target="_blank" rel="noopener noreferrer" className="instagram-link"><Instagram size={15} /> @luisxz.designer <Seal /><ArrowUpRight size={14} /></a></Reveal>
        </div>
        <Reveal className="hero-visual" delay={.12}>
          <div className="portrait-frame"><img src="/images/luis-original.jpg" alt="Luis Otávio em um estúdio de podcast" fetchPriority="high" /><div className="portrait-label"><span>CRIATIVIDADE COM PROPÓSITO</span><ArrowUpRight size={22} /></div></div>
          <div className="photo-caption"><span>LUIS OTÁVIO <span className="blue">/</span> DESIGNER</span><span>BRASIL · AMÉRICA LATINA</span></div>
          <div className="vertical-note">IDEIAS BOAS MERECEM DESIGN À ALTURA.</div>
        </Reveal>
      </section>

      <Reveal className="stats wrap">
        <div className="stats-intro"><Globe2 size={25} /><p>Design sem fronteiras.<br /><span>Conexões que vão além da tela.</span></p></div>
        <div className="stat"><strong>+2.500<span>↗</span></strong><p>clientes no Brasil</p></div>
        <div className="stat"><strong>+250<span>↗</span></strong><p>clientes na América Latina</p></div>
        <div className="stat last"><strong>4<span> anos</span></strong><p>criando com propósito</p></div>
      </Reveal>

      <section id="portfolio" className="section wrap work-section">
        <Reveal className="section-heading"><div><div className="eyebrow">01 / PORTFÓLIO SELECIONADO</div><h2>Ideias que ganharam forma<span className="blue">.</span></h2></div><span className="small-note">MENOS DO MESMO.<br />MAIS PERSONALIDADE.</span></Reveal>
        <ProjectCarousel onOpen={setActive} />
        <Reveal className="portfolio-outro"><p>Mais ideias, processos e trabalhos no meu Instagram.</p><a href={instagram} target="_blank" rel="noopener noreferrer" className="text-link">Explore @luisxz.designer <Seal /><ArrowUpRight size={17} /></a></Reveal>
      </section>

      <section id="servicos" className="section wrap services-section">
        <Reveal className="section-heading"><div><div className="eyebrow">02 / O QUE POSSO CRIAR PARA VOCÊ</div><h2>Seu próximo passo,<br /><span className="muted">com o design certo.</span></h2></div><p className="section-description">Da primeira ideia ao último detalhe.<br />Soluções visuais para marcas que<br />querem ir além do comum.</p></Reveal>
        <div className="services">{services.map((s, i) => <Reveal key={s.title}><a className="service-row" href={whatsapp(s.title)} target="_blank" rel="noopener noreferrer"><span className="service-index">0{i + 1}</span><div className="service-name"><s.icon size={24} strokeWidth={1.3} /><h3>{s.title}</h3></div><div className="service-desc"><p>{s.desc}</p><span>{s.tags}</span></div><span className="service-arrow"><ArrowUpRight size={26} strokeWidth={1.4} /></span></a></Reveal>)}</div>
      </section>

      <section id="sobre" className="section wrap about-section">
        <Reveal className="about-image"><img src="/images/luis-original.jpg" alt="Retrato original de Luis Otávio" loading="lazy" /><span className="about-image-tag">POR TRÁS DO DESIGN <ArrowUpRight size={17} /></span></Reveal>
        <Reveal className="about-copy"><div className="eyebrow">03 / MUITO PRAZER, LUIS</div><h2>Um olhar criativo.<br /><span className="blue">Mil possibilidades.</span></h2><p>Sou Luis Otávio, designer gráfico e web designer há 4 anos. Acredito que um bom design não é só sobre estética: é sobre comunicar, conectar e dar personalidade a cada ideia.</p><p>Meu trabalho já chegou a mais de 2.500 clientes no Brasil e mais de 250 na América Latina. Em cada projeto, o objetivo é o mesmo: criar algo que tenha a sua essência e faça a diferença.</p><div className="about-signature">Luis Otávio <Seal /><span>DESIGNER GRÁFICO & WEB DESIGNER</span></div><a className="text-link" href={instagram} target="_blank" rel="noopener noreferrer">Acompanhe meu universo criativo <Instagram size={17} /><ArrowUpRight size={17} /></a></Reveal>
      </section>

      <FeedbackSection />

      <section id="faq" className="section wrap faq-section">
        <Reveal className="faq-title"><div className="eyebrow">05 / ANTES DE COMEÇAR</div><h2>Vamos tirar<br /><span className="muted">suas dúvidas.</span></h2><p>Não encontrou o que precisava?<br />Me chama. A gente conversa.</p><a className="text-link" href={whatsapp()} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <ArrowUpRight size={17} /></a></Reveal>
        <Reveal className="faq-list">{questions.map(([q, a], i) => <div className={`faq-item ${faq === i ? "expanded" : ""}`} key={q}><h3><button id={`question-${i}`} aria-expanded={faq === i} aria-controls={`answer-${i}`} onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span>{faq === i ? <Minus size={18} /> : <Plus size={18} />}</button></h3><section id={`answer-${i}`} aria-labelledby={`question-${i}`} hidden={faq !== i}><p>{a}</p></section></div>)}</Reveal>
      </section>

      <section id="contato" className="contact-section">
        <div className="wrap contact-inner"><Reveal><div className="eyebrow">SEU PRÓXIMO PROJETO COMEÇA COM UMA CONVERSA.</div><h2>Vamos criar algo<br /><span>extraordinário?</span><ArrowUpRight className="contact-big-arrow" strokeWidth={1} /></h2><div className="contact-bottom"><div className="contact-actions"><WhatsAppButton className="button-dark" label="Vamos falar do seu projeto" /><EmailContact /></div><div className="contact-hours"><Clock3 size={17} /><span>Atendimento das 10h às 18h<br /><a href={whatsapp()} target="_blank" rel="noopener noreferrer">(22) 99234-3638</a></span></div></div></Reveal></div>
      </section>
    </main>
    <footer className="footer wrap"><div className="footer-top"><a href="#inicio" className="wordmark">luis otávio<i /></a><p>Design com intenção. Presença com personalidade.</p><a className="instagram-link" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17} /> @luisxz.designer <Seal /><ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Luis Otávio. Todos os direitos reservados.</span><span>FEITO PARA CONECTAR.</span><a href="#inicio">Voltar ao topo <ArrowUpRight size={14} /></a></div></footer>
    <ProjectModal active={active} onClose={() => setActive(null)} />
  </>;
}