# Luis Otávio — Design


Portfólio web editorial premium baseado na referência aprovada: fundo preto, retrato original à direita, tipografia impactante, respiro generoso e obras originais em destaque. Conteúdo próprio em português, azul-claro nos acentos. Sem novas rotas API, autenticação ou tabelas.

## Direção aprovada

- Tokens: fundo #0c0d0e, texto #f3f3ef, secundário #92979b, azul #a8d9f5 e borda #27292b.
- Manrope em títulos e corpo; monospace nos rótulos e índices.
- Layout máximo 1280px, margens 64px desktop / 22px mobile. Hero assimétrico com foto original sem alterações de identidade.
- Dois trabalhos enviados, sem inventar clientes, datas ou resultados. Filtros e modal com imagem íntegra.
- Serviços em linhas, sobre com retrato, FAQ em acordeão e chamada final azul-claro. Bordas discretas, sem excesso de cartões.
- Animações suaves de entrada, revelações ao rolar e hover; respeitar prefers-reduced-motion.
- WhatsApp 5522992343638, mensagem pronta em português, atendimento 10h–18h sem inventar dias.
- Instagram @luisxz.designer e selo azul visual, sem alegar verificação oficial.
- Web: página principal, estilos, metadados e assets em public. Colunas empilhadas e menu compacto mobile.

## Atualização do portfólio

- Home: carrossel horizontal contínuo da direita para esquerda, dois grupos idênticos para loop sem saltos, pausa por hover/foco e controle de reprodução; modo estático rolável com movimento reduzido.
- Página /portfolio com Todas e categorias em links filtrantes. Rotas individuais /portfolio/rodeio, /portfolio/eleicoes-2026, /portfolio/casamento, /portfolio/supermercado, /portfolio/studio-tattoo e /portfolio/futebol-atleta.
- Rodeio e Eleições 2026 reutilizam as artes enviadas; demais categorias exibem apenas Em breve. Não criar projetos fictícios.
- Componentes e dados de projetos compartilhados entre Home e página de categorias. Modal acessível mantido, selo Runable continua removido. Sem alterações em API ou banco.

## Feedbacks — transparência antes de prova social

- Seção Home entre Sobre e FAQ, cards editoriais preto/azul-claro em loop linear contínuo direita → esquerda. Pausa manual/hover e modo estático para movimento reduzido.
- /feedbacks mostra 24 exemplos com filtros Qualidade do design, Profissionalismo e Resultado comercial. Nenhuma nota, avaliação agregada ou métrica comercial real inventada.
- Todo exemplo tem nome fictício explicitado, aviso Demonstrativo e Não verificado. Aviso global em ambas as visualizações.
- Selo Comentário verificado pelo LuisXz Designer somente para registros reais com verifiedByLuis=true. Tipagem impede exemplos demonstrativos de receber esse estado.
- Dados compartilhados em lib/feedbacks.ts; componentes comuns para cards e carrossel. Sem adicionar painel administrativo ou login nesta etapa; feedbacks reais serão substituídos quando fornecidos e conferidos pelo usuário.

## Para Empresas

- Botão Sou uma empresa no hero da Home leva a /para-empresas. Página corporativa mantém Manrope, preto, azul-claro, composição editorial e animações suaves.
- Serviços: Design Gráfico e Web Design, processo de briefing, criação e alinhamento. Sem prometer vendas ou inventar preços.
- Formulário: empresa, responsável, segmento, serviços múltiplos, orçamento estimado em reais (ou A definir), data desejada (ou A combinar). Validação antes de abrir o WhatsApp 5522992343638.
- Mensagem formatada com todas as respostas. Envio final é confirmado pelo visitante no WhatsApp; link alternativo disponível após preparar a mensagem. Sem API, banco, envio automático ou armazenamento local de dados.

## Seis novas artes do portfólio

- Adicionar as seis imagens enviadas, mantendo as duas anteriores: total de oito projetos. Novas categorias Religião, Retratos, Games e Cinema / Arte fictícia para não forçar imagens em temas incorretos.
- Casamento recebe a composição dos noivos; Rodeio recebe a nova composição country, diferente da anterior. Pôster político apresentado como cinema fictício, nunca notícia ou filme real.
- Preservar proporções, assinaturas e conteúdo das artes. Assets WebP locais em public/images, sem cortes no modal ou nos cards.
- Contagens derivadas dos dados. Home mostra todos os oito projetos, inclusive no modo sem movimento; loop com clones inacessíveis e duração proporcional ao número de artes.

## Feedbacks reais — substitui a etapa demonstrativa

- O usuário forneceu e confirmou dez comentários reais para seu selo pessoal. Usar apenas esses dez, com nomes, profissões, títulos, textos e cinco estrelas preservados literalmente.
- Fonte única em lib/feedbacks.ts para Home e /feedbacks. Página completa sem duplicações; somente o carrossel tem cópia visual aria-hidden para o loop contínuo.
- Remover avisos e conteúdos fictícios da interface; selo Comentário verificado pelo LuisXz Designer em cada card. Não alterar outras seções nem o favicon nesta solicitação.

## Contato por e-mail

- Acrescentar Entrar em contato por e-mail à seção de contato da Home, preservando WhatsApp e horários. Botão preto/azul-claro e texto abaixo Prazo estimado de resposta: até 48 horas.
- Link mailto para luisxzdesigner@gmail.com com assunto e corpo fornecidos literalmente, codificação UTF-8 e quebras CRLF. Sem formulário, API, armazenamento ou envio automático.
- Abre o cliente padrão do dispositivo; Gmail somente quando configurado como manipulador de mailto. Cliente revisa e envia. Layout flexível desktop e empilhado mobile.

