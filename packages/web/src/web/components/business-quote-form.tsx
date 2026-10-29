import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check, Clock3, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const segmentOptions = ["Comércio e varejo", "Serviços", "Alimentação", "Saúde e bem-estar", "Educação", "Tecnologia", "Eventos e entretenimento", "Indústria", "Outro"];
const serviceOptions = ["Design Gráfico", "Web Design"];
const today = () => {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};

export default function BusinessQuoteForm() {
  const [company, setCompany] = useState("");
  const [responsible, setResponsible] = useState("");
  const [segment, setSegment] = useState("");
  const [otherSegment, setOtherSegment] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [budgetUnknown, setBudgetUnknown] = useState(false);
  const [deadline, setDeadline] = useState("");
  const [deadlineUnknown, setDeadlineUnknown] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedUrl, setPreparedUrl] = useState("");

  const clearPrepared = () => { setPreparedUrl(""); };
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors: Record<string, string> = {};
    if (company.trim().length < 2) nextErrors.company = "Informe o nome da empresa.";
    if (responsible.trim().length < 2) nextErrors.responsible = "Informe o nome do responsável.";
    if (!segment) nextErrors.segment = "Selecione o segmento da empresa.";
    if (segment === "Outro" && otherSegment.trim().length < 2) nextErrors.otherSegment = "Descreva o segmento da empresa.";
    if (!services.length) nextErrors.services = "Selecione pelo menos um serviço.";
    if (!budgetUnknown && (!budget || !Number.isFinite(Number(budget)) || Number(budget) < 0.01 || Number(budget) > 999999999)) nextErrors.budget = "Informe um valor entre R$ 0,01 e R$ 999.999.999 ou marque Ainda não definido.";
    if (!deadlineUnknown && (!deadline || deadline < today() || deadline > "2100-12-31")) nextErrors.deadline = "Escolha uma data a partir de hoje, até 2100, ou marque Prazo a combinar.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const name = Object.keys(nextErrors)[0];
      const control = form.querySelector<HTMLElement>(`[name="${name}"]`);
      control?.focus();
      return;
    }
    const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
    const deadlineText = deadlineUnknown ? "A combinar" : deadline.split("-").reverse().join("/");
    const message = [
      "Olá, Luis! Vim pela área Para Empresas do seu site e gostaria de solicitar um orçamento.",
      "", "*SOLICITAÇÃO CORPORATIVA*", "",
      `*Empresa:* ${company.trim()}`,
      `*Responsável:* ${responsible.trim()}`,
      `*Segmento:* ${segment === "Outro" ? otherSegment.trim() : segment}`,
      `*Serviços desejados:* ${services.join(" + ")}`,
      `*Orçamento estimado:* ${budgetUnknown ? "A definir" : currency.format(Number(budget))}`,
      `*Prazo desejado:* ${deadlineText}`, "",
      "Podemos conversar sobre o escopo e os próximos passos?",
    ].join("\n");
    const url = `https://wa.me/5522992343638?text=${encodeURIComponent(message)}`;
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const errorText = (key: string) => errors[key] ? <p className="business-field-error" id={`error-${key}`}>{errors[key]}</p> : null;
  return <form className="business-form" onSubmit={submit} onChange={clearPrepared} noValidate>
    <div className="business-form-title"><span className="eyebrow">BRIEFING INICIAL</span><h3>Conte sobre sua empresa.</h3><p>Preencha os detalhes e continue a conversa pelo WhatsApp.</p></div>
    <div className="business-fields">
      <div className="business-field"><label htmlFor="company">Nome da empresa <span>*</span></label><input aria-label="Nome da empresa" id="company" name="company" autoComplete="organization" maxLength={120} required value={company} onChange={e => setCompany(e.target.value)} placeholder="Como se chama sua empresa?" aria-invalid={!!errors.company} aria-describedby={errors.company ? "error-company" : undefined} />{errorText("company")}</div>
      <div className="business-field"><label htmlFor="responsible">Responsável <span>*</span></label><input aria-label="Responsável" id="responsible" name="responsible" autoComplete="name" maxLength={100} required value={responsible} onChange={e => setResponsible(e.target.value)} placeholder="Seu nome" aria-invalid={!!errors.responsible} aria-describedby={errors.responsible ? "error-responsible" : undefined} />{errorText("responsible")}</div>
      <div className="business-field full"><label htmlFor="segment">Segmento da empresa <span>*</span></label><select id="segment" name="segment" required value={segment} onChange={e => setSegment(e.target.value)} aria-invalid={!!errors.segment} aria-describedby={errors.segment ? "error-segment" : undefined}><option value="" disabled>Selecione seu segmento</option>{segmentOptions.map(option => <option key={option}>{option}</option>)}</select>{errorText("segment")}</div>
      {segment === "Outro" && <div className="business-field full"><label htmlFor="otherSegment">Qual é o segmento? <span>*</span></label><input aria-label="Qual é o segmento?" id="otherSegment" name="otherSegment" maxLength={100} required value={otherSegment} onChange={e => setOtherSegment(e.target.value)} placeholder="Descreva a área de atuação" aria-invalid={!!errors.otherSegment} aria-describedby={errors.otherSegment ? "error-otherSegment" : undefined} />{errorText("otherSegment")}</div>}
      <fieldset className="business-service-fields full" aria-describedby={errors.services ? "error-services" : undefined}><legend>Serviços desejados <span>*</span></legend><p>Você pode selecionar mais de uma opção.</p><div className="business-service-options">{serviceOptions.map(service => <label className={`business-service-option ${services.includes(service) ? "checked" : ""}`} key={service}><input aria-label={service} name="services" type="checkbox" value={service} checked={services.includes(service)} onChange={e => setServices(current => e.target.checked ? [...current, service] : current.filter(s => s !== service))} aria-invalid={!!errors.services} /><span>{service}</span></label>)}</div>{errorText("services")}</fieldset>
      <div className="business-field"><label htmlFor="budget">Orçamento estimado <span>*</span></label><div className={`currency-input ${budgetUnknown ? "disabled" : ""}`}><span>R$</span><input aria-label="Orçamento estimado" id="budget" name="budget" type="number" inputMode="decimal" min="0.01" max="999999999" step="0.01" disabled={budgetUnknown} required={!budgetUnknown} value={budget} onChange={e => setBudget(e.target.value)} placeholder="0,00" aria-invalid={!!errors.budget} aria-describedby={errors.budget ? "error-budget" : "budget-help"} /></div><label className="business-check-label"><input aria-label="Ainda não definido" type="checkbox" checked={budgetUnknown} onChange={e => { setBudgetUnknown(e.target.checked); setErrors(current => ({ ...current, budget: "" })); }} />Ainda não definido</label><p className="business-field-help" id="budget-help">Sua estimativa, não um preço do serviço.</p>{errorText("budget")}</div>
      <div className="business-field"><label htmlFor="deadline">Prazo desejado <span>*</span></label><input aria-label="Prazo desejado" id="deadline" name="deadline" type="date" min={today()} max="2100-12-31" disabled={deadlineUnknown} required={!deadlineUnknown} value={deadline} onChange={e => setDeadline(e.target.value)} aria-invalid={!!errors.deadline} aria-describedby={errors.deadline ? "error-deadline" : "deadline-help"} /><label className="business-check-label"><input aria-label="Prazo a combinar" type="checkbox" checked={deadlineUnknown} onChange={e => { setDeadlineUnknown(e.target.checked); setErrors(current => ({ ...current, deadline: "" })); }} />Prazo a combinar</label><p className="business-field-help" id="deadline-help">Disponibilidade a confirmar com Luis.</p>{errorText("deadline")}</div>
    </div>
    {Object.values(errors).some(Boolean) && <p className="business-form-error" role="alert">Revise os campos indicados antes de continuar.</p>}
    <div className="business-form-submit"><button type="submit" className="button"><FaWhatsapp size={18} />Solicitar orçamento pelo WhatsApp<ArrowUpRight size={18} /></button><p><ShieldCheck size={14} />Seus dados não são armazenados neste site. Você confirma o envio no WhatsApp.</p></div>
    {preparedUrl && <output className="business-form-ready"><Check size={19} /><div><strong>Sua mensagem está pronta.</strong><p>Confira as informações e confirme o envio no WhatsApp. Se a nova aba não abriu, use o link abaixo.</p><a href={preparedUrl} target="_blank" rel="noopener noreferrer">Abrir mensagem no WhatsApp <ArrowUpRight size={16} /></a></div></output>}
    <div className="business-form-hours"><Clock3 size={14} /> Atendimento das 10h às 18h · (22) 99234-3638</div>
  </form>;
}