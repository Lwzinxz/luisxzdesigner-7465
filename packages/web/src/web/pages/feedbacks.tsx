import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight, BadgeCheck, Menu, X, Clock3 } from "lucide-react";
import { FeedbackCard } from "../components/feedback-gallery";
import { feedbacks, feedbackTopics, isVerifiedFeedback } from "../lib/feedbacks";

export default function FeedbacksPage() {
  const [topic, setTopic] = useState("Todos");
  const [menu, setMenu] = useState(false);
  const filtered = feedbacks.filter(f => topic === "Todos" || f.topic === topic);
  const verifiedCount = feedbacks.filter(isVerifiedFeedback).length;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = "Feedbacks — Luis Otávio";
    return () => { document.title = "Luis Otávio — Designer Gráfico & Web Designer"; };
  }, []);
  return <>
    <a href="#todos-feedbacks" className="skip-link">Pular para os feedbacks</a>
    <header className="header wrap"><Link href="/" className="wordmark" aria-label="Luis Otávio, início">luis otávio<i /></Link><nav className={`navigation ${menu ? "open" : ""}`} aria-label="Navegação principal"><Link href="/">Home</Link><Link href="/portfolio">Portfólio</Link><Link href="/feedbacks" className="blue" onClick={() => setMenu(false)}>Feedbacks</Link><a href="/#sobre">Sobre</a><a className="mobile-contact" href="/#contato">Vamos conversar <ArrowUpRight size={16} /></a></nav><a className="header-contact" href="/#contato">Vamos conversar <ArrowUpRight size={17} /></a><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <X /> : <Menu />}</button></header>
    <main className="wrap feedback-page">
      <Link href="/" className="back-home text-link"><ArrowLeft size={15} /> Voltar para a Home</Link>
      <div className="gallery-page-heading"><div><div className="eyebrow">FEEDBACKS / LUIS OTÁVIO</div><h1>Feedbacks, com<br /><span className="blue">transparência.</span></h1></div><p>Qualidade, profissionalismo e comunicação.<br />Um espaço para compartilhar experiências.</p></div>
      <aside className="verification-policy"><BadgeCheck size={21} strokeWidth={1.5} /><div><h2>Comentários verificados por Luis</h2><p>Estes 10 comentários de clientes foram fornecidos e confirmados por Luis e recebem o selo “Comentário verificado pelo LuisXz Designer”.</p></div><span>{verifiedCount} {verifiedCount === 1 ? "verificado" : "verificados"}</span></aside>
      <section id="todos-feedbacks" className="all-feedbacks" aria-labelledby="all-feedbacks-title">
        <div className="feedback-list-heading"><div><div className="eyebrow">LEIA COM CALMA</div><h2 id="all-feedbacks-title">Todos os comentários<span className="blue">.</span></h2></div><span aria-live="polite">{filtered.length} comentários</span></div>
        <fieldset className="feedback-filters" aria-label="Filtrar feedbacks por assunto">{["Todos", ...feedbackTopics].map(value => <button key={value} onClick={() => setTopic(value)} className={topic === value ? "selected" : ""} aria-pressed={topic === value}>{value}<span>{value === "Todos" ? feedbacks.length : feedbacks.filter(f => f.topic === value).length}</span></button>)}</fieldset>
        <div className="feedback-grid">{filtered.map(f => <FeedbackCard key={f.id} feedback={f} number={feedbacks.indexOf(f) + 1} />)}</div>
      </section>
      <section className="gallery-cta"><div><div className="eyebrow">SUA IDEIA MERECE ATENÇÃO.</div><h2>Vamos conversar sobre <span className="blue">seu projeto?</span></h2></div><a className="button" href={`https://wa.me/5522992343638?text=${encodeURIComponent("Olá, Luis! Vim pela página de feedbacks do seu site e gostaria de conversar sobre meu projeto.")}`} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight size={18} /></a></section>
    </main>
    <footer className="footer wrap"><div className="footer-bottom"><span>© {new Date().getFullYear()} Luis Otávio. Todos os direitos reservados.</span><span className="gallery-hours"><Clock3 size={13} /> Atendimento das 10h às 18h</span><Link href="/" className="text-link">Voltar à Home <ArrowUpRight size={14} /></Link></div></footer>
  </>;
}