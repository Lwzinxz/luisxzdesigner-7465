import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, BadgeCheck, Pause, Play, Star } from "lucide-react";
import { feedbacks, isVerifiedFeedback, type Feedback } from "../lib/feedbacks";

export function FeedbackCard({ feedback, number }: { feedback: Feedback; number: number }) {
  const initials = feedback.name.split(" ").slice(0, 2).map(part => part[0]).join("");
  return <article className="feedback-card" data-feedback-kind={feedback.kind} data-feedback-id={feedback.id}>
    <div className="feedback-card-top"><span className="feedback-topic">{feedback.topic}</span><span className="feedback-index">{String(number).padStart(2, "0")}</span></div>
    <div className="feedback-stars"><span className="sr-only">Avaliação: 5 de 5 estrelas</span>{Array.from({ length: feedback.rating }, (_, i) => <Star key={i} size={15} fill="currentColor" strokeWidth={1} aria-hidden="true" />)}</div>
    <h3 className="feedback-title">{feedback.title}</h3>
    <blockquote><p>{feedback.text}</p></blockquote>
    <div className="feedback-author"><span className="feedback-avatar" aria-hidden="true">{initials}</span><div><h4>{feedback.name}</h4><span>{feedback.profession}</span></div></div>
    {isVerifiedFeedback(feedback) && <div className="feedback-verified"><BadgeCheck size={16} /> <span>Comentário verificado pelo LuisXz Designer</span></div>}
  </article>;
}

export function FeedbackSection() {
  const [paused, setPaused] = useState(false);
  return <section id="feedbacks" className="section wrap feedback-section" aria-labelledby="home-feedback-title">
    <div className="section-heading"><div><div className="eyebrow">04 / ESPAÇO DE FEEDBACKS</div><h2 id="home-feedback-title">Cada experiência<br /><span className="blue">merece ser ouvida.</span></h2></div><span className="small-note">DESIGN. COLABORAÇÃO.<br />COMUNICAÇÃO.</span></div>
    <div className="feedback-toolbar"><span className="eyebrow">{feedbacks.length} FEEDBACKS / EXPERIÊNCIAS REAIS</span><button className="carousel-control" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Reproduzir carrossel de feedbacks" : "Pausar carrossel de feedbacks"}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? "Reproduzir" : "Pausar"}</span></button></div>
    <div className={`feedback-window ${paused ? "is-paused" : ""}`}>
      <div className="feedback-track">{[0, 1].map(group => <div className={`feedback-group ${group ? "feedback-clone" : ""}`} key={group} aria-hidden={group === 1 ? true : undefined}>{feedbacks.map((feedback, i) => <FeedbackCard key={`${group}-${feedback.id}`} feedback={feedback} number={i + 1} />)}</div>)}</div>
    </div>
    <div className="feedback-outro"><p>10 experiências de clientes, conferidas por Luis.</p><Link className="button" href="/feedbacks">Ver todos os meus feedbacks <ArrowUpRight size={18} /></Link></div>
  </section>;
}