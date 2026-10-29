import { ArrowUpRight, Mail } from "lucide-react";

const recipient = "luisxzdesigner@gmail.com";
const subject = "Solicitação de orçamento — LuisXz Designer";
const body = [
  "Olá, Luis Otávio! Tudo bem?",
  "",
  "Gostaria de entrar em contato para conversar sobre um projeto e solicitar um orçamento.",
  "",
  "Nome:",
  "Empresa (opcional):",
  "Serviço desejado:",
  "Detalhes do projeto:",
  "Prazo desejado:",
  "",
  "Aguardo seu retorno!",
].join("\r\n");
const emailLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function EmailContact() {
  return <div className="email-contact">
    <a className="button button-dark email-contact-button" href={emailLink} aria-describedby="email-response-time"><Mail size={17} /><span>Entrar em contato por e-mail</span><ArrowUpRight size={19} /></a>
    <p id="email-response-time">Prazo estimado de resposta: até 48 horas</p>
  </div>;
}