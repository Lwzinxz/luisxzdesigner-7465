export const feedbackTopics = ["Qualidade do design", "Profissionalismo", "Resultado comercial"] as const;
export type FeedbackTopic = typeof feedbackTopics[number];
export type Feedback = {
  id: string;
  name: string;
  profession: string;
  title: string;
  text: string;
  topic: FeedbackTopic;
  rating: 5;
  kind: "real";
  verifiedByLuis: true;
};

// Supplied by Luis as real client feedback and explicitly approved by him
// for his personal verification badge. Text, names and ratings are verbatim.
const supplied: Omit<Feedback, "id" | "kind" | "verifiedByLuis" | "rating">[] = [
  { name: "Carlos Mendes", profession: "Empreendedor", title: "Identidade visual profissional", topic: "Qualidade do design", text: "Gostei muito do resultado! A identidade visual ficou profissional e transmitiu exatamente a imagem que eu queria para minha empresa. O trabalho superou minhas expectativas." },
  { name: "Mariana Oliveira", profession: "Dona de loja", title: "Divulgação nas redes sociais", topic: "Resultado comercial", text: "Os designs ficaram muito bonitos e chamaram bastante atenção nas minhas redes sociais. Ficou tudo mais organizado e com uma aparência muito mais profissional." },
  { name: "Rafael Souza", profession: "Comerciante", title: "Banner para empresa", topic: "Qualidade do design", text: "Precisava de um banner que destacasse meu negócio, e o resultado ficou excelente. O design ficou moderno, organizado e com todos os detalhes bem trabalhados." },
  { name: "Lucas Ferreira", profession: "Barbeiro", title: "Design para barbearia", topic: "Qualidade do design", text: "O banner ficou incrível! Os preços e os serviços ficaram bem destacados, e o visual combinou perfeitamente com minha barbearia. Recomendo muito!" },
  { name: "Fernanda Costa", profession: "Empreendedora", title: "Divulgação de serviços", topic: "Resultado comercial", text: "Eu precisava divulgar meus serviços de uma forma mais profissional. O design ficou limpo, bonito e objetivo, exatamente como eu imaginava." },
  { name: "Pedro Henrique", profession: "Pequeno empresário", title: "Identidade para pequeno negócio", topic: "Qualidade do design", text: "Meu negócio precisava de uma identidade visual melhor, e o trabalho fez toda a diferença na apresentação da marca. Gostei muito da atenção aos detalhes." },
  { name: "Juliana Martins", profession: "Criadora de conteúdo", title: "Artes para Instagram", topic: "Qualidade do design", text: "As artes ficaram modernas e muito bem organizadas. Agora meu perfil tem uma aparência mais profissional e combina melhor com o estilo do meu trabalho." },
  { name: "Gabriel Almeida", profession: "Comerciante", title: "Divulgação de promoções", topic: "Resultado comercial", text: "Fiquei muito satisfeito com o resultado. A arte destacou as informações mais importantes sem ficar carregada de texto. Ficou bonita e profissional." },
  { name: "Beatriz Rodrigues", profession: "Empreendedora", title: "Design personalizado", topic: "Profissionalismo", text: "O que mais gostei foi o cuidado com os detalhes e a preocupação em entender o que eu queria. O resultado ficou personalizado e com uma ótima apresentação." },
  { name: "André Lima", profession: "Empresário", title: "Experiência com o designer", topic: "Profissionalismo", text: "Excelente trabalho! O design ficou bem elaborado, moderno e profissional. Gostei do resultado e da forma como a ideia foi transformada em uma arte de qualidade." },
];

export const feedbacks: Feedback[] = supplied.map((feedback, index) => ({
  ...feedback, id: `client-${String(index + 1).padStart(2, "0")}`,
  rating: 5, kind: "real", verifiedByLuis: true,
}));
export const isVerifiedFeedback = (feedback: Feedback) => feedback.kind === "real" && feedback.verifiedByLuis === true;