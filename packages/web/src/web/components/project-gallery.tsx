import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "wouter";
import { ArrowUpRight, X, Pause, Play } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const categories = [
  { slug: "rodeio", label: "Rodeio" },
  { slug: "eleicoes-2026", label: "Eleições 2026" },
  { slug: "casamento", label: "Casamento" },
  { slug: "supermercado", label: "Supermercado" },
  { slug: "studio-tattoo", label: "Studio Tattoo" },
  { slug: "futebol-atleta", label: "Futebol/Atleta" },
  { slug: "religiao", label: "Religião" },
  { slug: "retratos", label: "Retratos" },
  { slug: "games", label: "Games" },
  { slug: "cinema-arte-ficticia", label: "Cinema / Arte fictícia" },
];
export const projects = [
  { id: 1, title: "A força do rodeio", category: "rodeio", type: "Rodeio", subtitle: "Fotomontagem · Universo country", image: "/images/rodeio.webp", alt: "Composição artística de rodeio com touros, cavaleiro, caminhonete e fogos, criada por Luis Otávio", description: "Uma composição que reúne o universo country em uma única cena. Camadas, recortes e tratamento de cor criam profundidade e uma atmosfera marcante." },
  { id: 2, title: "Brasil em composição", category: "eleicoes-2026", type: "Eleições 2026", subtitle: "Fotomontagem · Arte temática", image: "/images/brasil.webp", alt: "Fotomontagem temática brasileira com bandeira do Brasil, figuras políticas, caminhão e cavalo, criada por Luis Otávio", description: "Uma arte temática construída com múltiplos elementos visuais. A composição explora contraste, escala e integração de imagens em uma narrativa gráfica." },
  { id: 3, title: "A Reviravolta", category: "cinema-arte-ficticia", type: "Cinema / Arte fictícia", subtitle: "Pôster conceitual · Filme fictício", image: "/images/cinema-reviravolta.webp", alt: "Pôster fictício A Reviravolta com figuras políticas, soldados e cenário cinematográfico", description: "Pôster conceitual de um filme fictício, como indicado na própria arte. A fotomontagem explora atmosfera cinematográfica, contraste e tipografia de impacto. Não representa um filme real nem um acontecimento noticioso." },
  { id: 4, title: "Jesus — luz e caminho", category: "religiao", type: "Religião", subtitle: "Fotomontagem · Arte religiosa", image: "/images/religiao-jesus.webp", alt: "Composição religiosa de Jesus com mão estendida, estrada e paisagem ao pôr do sol", description: "Uma composição religiosa que combina a figura de Jesus, um caminho e a luz do pôr do sol. Sobreposições e tons dourados constroem uma atmosfera contemplativa." },
  { id: 5, title: "Uma união em composição", category: "casamento", type: "Casamento", subtitle: "Fotomontagem · Noivos e alianças", image: "/images/casamento-aliancas.webp", alt: "Fotomontagem de casamento com noivos, mãos com alianças, flores e livro aberto", description: "Noivos, alianças e flores reunidos em uma composição de casamento. A integração das imagens e a luz quente destacam os símbolos da união." },
  { id: 6, title: "Retrato em camadas", category: "retratos", type: "Retratos", subtitle: "Fotomontagem · Retrato artístico", image: "/images/retrato-crissxz.webp", alt: "Retrato artístico feminino com diferentes enquadramentos, texturas e tipografia manuscrita", description: "Um retrato artístico composto por diferentes enquadramentos da mesma pessoa. Texturas, sombras e tipografia manuscrita dão unidade à composição." },
  { id: 7, title: "Rodeio — energia brasileira", category: "rodeio", type: "Rodeio", subtitle: "Fotomontagem · Cultura country", image: "/images/rodeio-brasil.webp", alt: "Arte de rodeio com touro, cavaleiros, caminhonete, bandeira brasileira e fogos", description: "Uma nova composição do universo country com cavaleiros, touro, caminhonete e bandeira brasileira. Os tons quentes e os fogos reforçam a energia visual da cena." },
  { id: 8, title: "Minecraft — universo em blocos", category: "games", type: "Games", subtitle: "Fotomontagem · Universo Minecraft", image: "/images/games-minecraft.webp", alt: "Composição inspirada em Minecraft com castelo, personagens em blocos e cena do jogo", description: "Uma arte inspirada no universo de Minecraft. Castelo, personagens e uma cena do jogo são integrados em uma paisagem com luz cinematográfica." },
];
export type Project = typeof projects[number];

export function ProjectCard({ project: p, onOpen }: { project: Project; onOpen: (id: number) => void }) {
  return <article className="project">
    <button className="project-image" onClick={() => onOpen(p.id)} aria-label={`Ver projeto ${p.title}`}>
      <img src={p.image} alt={p.alt} loading="lazy" />
      <span className="project-corner">0{p.id} / {p.type}</span>
      <span className="view-project">Explorar projeto <ArrowUpRight size={20} /></span>
    </button>
    <div className="project-info"><div><h3><button onClick={() => onOpen(p.id)}>{p.title}</button></h3><p>{p.subtitle}</p></div><button className="round-arrow" aria-label={`Abrir ${p.title}`} onClick={() => onOpen(p.id)}><ArrowUpRight size={21} /></button></div>
  </article>;
}

export function ProjectModal({ active, onClose }: { active: number | null; onClose: () => void }) {
  const modal = useRef<HTMLDialogElement>(null);
  const project = projects.find(p => p.id === active);
  useEffect(() => {
    if (active !== null) { modal.current?.showModal(); document.body.style.overflow = "hidden"; }
    else { modal.current?.close(); document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [active]);
  return <dialog ref={modal} className="project-modal" onCancel={onClose} aria-labelledby="project-title">
    {project && <><button autoFocus className="modal-close" onClick={onClose} aria-label="Fechar projeto"><X size={23} /></button><div className="modal-layout"><img src={project.image} alt={project.alt} /><div className="modal-info"><div className="eyebrow">PROJETO 0{project.id} / {project.type}</div><h2 id="project-title">{project.title}</h2><p>{project.description}</p><a className="button" href={`https://wa.me/5522992343638?text=${encodeURIComponent(`Olá, Luis! Vim pelo seu portfólio e gostaria de um orçamento para um projeto de ${project.type}. Podemos conversar?`)}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={17} />Quero um projeto assim<ArrowUpRight size={19} /></a></div></div></>}
  </dialog>;
}

export function ProjectCarousel({ onOpen }: { onOpen: (id: number) => void }) {
  const [paused, setPaused] = useState(false);
  const loopProjects = projects.length < 4 ? [...projects, ...projects] : projects;
  const loopStyle = { "--project-loop-duration": `${loopProjects.length * 14}s`, "--project-loop-mobile-duration": `${loopProjects.length * 12}s` } as CSSProperties;
  return <div className="home-carousel">
    <div className="carousel-toolbar"><span className="eyebrow">{String(projects.length).padStart(2, "0")} PROJETOS / IDEIAS EM MOVIMENTO</span><button className="carousel-control" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Reproduzir carrossel" : "Pausar carrossel"}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? "Reproduzir" : "Pausar"}</span></button></div>
    <section className={`carousel-window ${paused ? "is-paused" : ""}`} aria-label="Carrossel de projetos selecionados">
      <div className="carousel-track" style={loopStyle}>
        {[0, 1].map(group => <div key={group} className={`carousel-group ${group === 1 ? "carousel-clone" : ""}`} aria-hidden={group === 1 ? true : undefined}>
          {loopProjects.map((p, i) => <div key={`${group}-${i}`} className={i >= projects.length ? "carousel-extra" : ""} aria-hidden={group === 1 || i >= projects.length ? true : undefined}>
            {group === 0 && i < projects.length ? <ProjectCard project={p} onOpen={onOpen} /> : <article className="project carousel-duplicate"><Link href={`/portfolio/${p.category}`} tabIndex={-1} className="project-image" aria-label={`Categoria ${p.type}`}><img src={p.image} alt="" loading="lazy" /><span className="project-corner">0{p.id} / {p.type}</span><span className="view-project">Ver categoria <ArrowUpRight size={20} /></span></Link><div className="project-info"><div><h3>{p.title}</h3><p>{p.subtitle}</p></div><span className="round-arrow"><ArrowUpRight size={21} /></span></div></article>}
          </div>)}
        </div>)}
      </div>
    </section>
    <div className="carousel-footer"><p>Um recorte do meu universo criativo.</p><Link className="button all-projects-button" href="/portfolio">Ver todos os projetos <ArrowUpRight size={18} /></Link></div>
  </div>;
}