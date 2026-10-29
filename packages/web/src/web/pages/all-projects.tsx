import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ArrowRight, Clock3, Grid2X2, Menu, X } from "lucide-react";
import { categories, projects, ProjectCard, ProjectModal } from "../components/project-gallery";

export default function AllProjects() {
  const { category: slug } = useParams<{ category?: string }>();
  const category = categories.find(c => c.slug === slug);
  const [active, setActive] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);
  const reduced = useReducedMotion();
  const filtered = slug ? projects.filter(p => p.category === slug) : projects;
  const unknown = !!slug && !category;
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  useEffect(() => {
    document.title = `${category?.label ?? (unknown ? "Categoria não encontrada" : "Portfólio")} — Luis Otávio`;
    return () => { document.title = "Luis Otávio — Designer Gráfico & Web Designer"; };
  }, [category, unknown]);
  const message = encodeURIComponent(`Olá, Luis! Vi seu portfólio${category ? ` de ${category.label}` : ""} e gostaria de solicitar um orçamento. Podemos conversar?`);
  return <>
    <a href="#projetos" className="skip-link">Pular para os projetos</a>
    <header className="header wrap">
      <Link href="/" className="wordmark" aria-label="Luis Otávio, início">luis otávio<i /></Link>
      <nav className={`navigation ${menu ? "open" : ""}`} aria-label="Navegação principal"><Link href="/">Home</Link><Link href="/portfolio" className="blue" onClick={() => setMenu(false)}>Portfólio</Link><a href="/#servicos">Serviços</a><a href="/#sobre">Sobre</a><a href="/#contato" className="mobile-contact">Vamos conversar <ArrowUpRight size={16} /></a></nav>
      <a className="header-contact" href={`https://wa.me/5522992343638?text=${message}`} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={17} /></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <X /> : <Menu />}</button>
    </header>
    <main id="projetos" className="wrap gallery-page">
      <Link href="/" className="back-home text-link"><ArrowLeft size={15} /> Voltar para a Home</Link>
      <div className="gallery-page-heading"><div><div className="eyebrow">PORTFÓLIO / LUIS OTÁVIO</div><h1>Design em cada<br /><span className="blue">possibilidade.</span></h1></div><p>Explore os projetos por universo.<br />Cada ideia, uma nova forma de comunicar.</p></div>
      <nav className="category-filters" aria-label="Categorias do portfólio">
        <Link href="/portfolio" className={`category-filter ${!slug ? "selected" : ""}`} aria-current={!slug ? "page" : undefined}>Todos os projetos <span>{String(projects.length).padStart(2, "0")}</span></Link>
        {categories.map(c => { const count = projects.filter(p => p.category === c.slug).length; return <Link key={c.slug} href={`/portfolio/${c.slug}`} aria-current={slug === c.slug ? "page" : undefined} className={`category-filter ${slug === c.slug ? "selected" : ""}`}>{c.label}<span>{count ? String(count).padStart(2, "0") : "Em breve"}</span></Link>; })}
      </nav>
      <motion.section key={slug ?? "todos"} className="category-view" aria-labelledby="category-title" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
        <div className="category-view-heading"><div><span className="eyebrow">{category ? "UNIVERSO CRIATIVO" : "VISÃO GERAL"}</span><h2 id="category-title">{category?.label ?? (unknown ? "Categoria não encontrada" : "Todos os projetos")}<span className="blue">.</span></h2></div><p aria-live="polite">{filtered.length ? `${String(filtered.length).padStart(2, "0")} ${filtered.length === 1 ? "projeto selecionado" : "projetos selecionados"}` : unknown ? "Explore as categorias disponíveis" : "Novas criações estão por vir"}</p></div>
        {filtered.length > 0 ? <div className="projects-grid category-projects">{filtered.map(p => <ProjectCard key={p.id} project={p} onOpen={setActive} />)}</div> : <div className="coming-soon"><div className="coming-soon-symbol"><Grid2X2 size={35} strokeWidth={1} /><span /></div><span className="eyebrow">{category?.label ?? "PORTFÓLIO"}</span><h3>{unknown ? "Um novo caminho?" : "Em breve"}</h3><p>{unknown ? "Essa categoria não está disponível. Escolha um dos universos acima para conhecer meus trabalhos." : `Este espaço está reservado para os projetos de ${category?.label}. Novas ideias vão ganhar forma por aqui.`}</p>{unknown ? <Link className="text-link" href="/portfolio">Ver todos os projetos <ArrowRight size={17} /></Link> : <a href={`https://wa.me/5522992343638?text=${message}`} target="_blank" rel="noopener noreferrer" className="text-link">Vamos criar seu projeto? <ArrowUpRight size={17} /></a>}</div>}
        {!slug && <div className="upcoming-categories"><div className="upcoming-heading"><h3>Outros universos. Novas ideias.</h3><span className="eyebrow">EM BREVE</span></div><div className="upcoming-links">{categories.filter(c => !projects.some(p => p.category === c.slug)).map(c => <Link key={c.slug} href={`/portfolio/${c.slug}`}><span>{c.label}</span><span className="upcoming-status">Em breve <ArrowUpRight size={17} /></span></Link>)}</div></div>}
      </motion.section>
      <section className="gallery-cta"><div><span className="eyebrow">SUA IDEIA PODE SER A PRÓXIMA.</span><h2>Vamos criar algo <span className="blue">único?</span></h2></div><a className="button" href={`https://wa.me/5522992343638?text=${message}`} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight size={18} /></a></section>
    </main>
    <footer className="footer wrap"><div className="footer-bottom"><span>© {new Date().getFullYear()} Luis Otávio. Todos os direitos reservados.</span><span className="gallery-hours"><Clock3 size={13} /> Atendimento das 10h às 18h</span><Link href="/" className="text-link">Voltar à Home <ArrowUpRight size={14} /></Link></div></footer>
    <ProjectModal active={active} onClose={() => setActive(null)} />
  </>;
}