# Portfólio Luis Otávio

- Direção aprovada: referência editorial escura, azul-claro e conteúdo original.
- Implementado: hero com foto original, estatísticas, dois trabalhos enviados, filtros e modal, quatro serviços, sobre, FAQ, Instagram e WhatsApp com mensagens prontas.
- Sem clientes, datas de projetos, preços ou testemunhos inventados. Selo azul decorativo, sem alegação de verificação oficial.
- Assets próprios em public, fontes locais, metadados pt-BR.
- Verificação: build passou; lint sem erros; Chrome desktop/mobile sem overflow ou erros de execução. Filtros, abertura/fechamento do modal, FAQ, menu mobile e URL WhatsApp testados. Todas as imagens carregadas.
- Servidor: tmux luis-web, porta gerenciada 4200.
- Próximo passo: entregar preview e aguardar feedback.

## Atualização — carrossel e categorias

- Home agora exibe loop contínuo linear direita → esquerda com grupos idênticos; pausa por hover/foco e botão. Modo de movimento reduzido sem autoplay.
- Botão Ver todos os projetos leva a /portfolio.
- Seis categorias com URLs próprias; Rodeio e Eleições 2026 mostram uma arte correspondente cada. Casamento, Supermercado, Studio Tattoo e Futebol/Atleta mostram Em breve, sem misturar projetos.
- Dados, cards e modal compartilhados entre as páginas; layout preto/azul-claro preservado.
- Testado no Chrome: geometria de loop exata, deslocamento para esquerda, pausa, seis filtros, URLs diretas, modal/Escape, retorno à Home, movimento reduzido. Sem erros de execução ou overflow em 390, 768 e 1440px.
- Build e lint finais passaram. Servidor existente permanece na porta 4200.

## Atualização — feedbacks demonstrativos

- Seção Home com 24 exemplos fictícios, loop contínuo direita → esquerda, pausa e botão Ver todos os meus feedbacks.
- /feedbacks reúne os 24 cards com filtros por três assuntos (8 por assunto), aviso demonstrativo global e regras de verificação.
- Cada card mostra EXEMPLO DEMONSTRATIVO, Nome fictício e Não verificado. Zero selos aplicados. Não existe formulário de cadastro/admin nesta etapa.
- Dados tipados: demonstrative permite apenas verifiedByLuis=false; real só recebe selo quando true. Regras testadas com registros sintéticos fora da UI.
- Build/lint passaram. Chrome: 24 cards únicos na Home/página, loop sem salto (grupo=9456px, total=18912px), direção esquerda, pausa, navegação, três filtros, menu mobile, sem erros/overflow em 390,768,1440px; movimento reduzido desativa autoplay e oculta clones.
- Reiniciado Vite após identificar cache antigo. Preview atualizado e ativo na porta gerenciada 4200.

## Atualização — Para Empresas

- Home: botão Sou uma empresa abre /para-empresas, também acessível por URL direta.
- Página editorial preto/azul-claro: soluções Design Gráfico e Web Design, processo, atendimento e formulário corporativo responsivo.
- Briefing validado: empresa, responsável, segmento (Outro com detalhe), serviços múltiplos, orçamento e prazo; alternativas A definir/A combinar desativam os campos correspondentes.
- Abre WhatsApp 5522992343638 com as seis respostas organizadas e valores/data pt-BR. Link alternativo aparece após preparar a mensagem; qualquer edição invalida o link antigo. O visitante confirma o envio no WhatsApp, sem armazenamento no site.
- Build e lint finais passaram. Chrome: CTA e rota direta, campos vazios/espaços, orçamento negativo/acima do limite, data passada/acima do limite, segmento Outro, dois serviços, formatação da mensagem e link alternativo testados. Nenhuma mensagem enviada nos testes (window.open interceptado).
- Sem erros de execução ou overflow na Home e /para-empresas em 390, 768 e 1440px; menu mobile testado. Screenshots desktop/mobile inspecionadas.
- Servidor luis-web ativo na porta gerenciada 4200. Pronto para entrega.

## Atualização — seis novas artes

- Todas as seis imagens enviadas adicionadas, preservando as duas anteriores: oito projetos. A nova arte de Rodeio é distinta da anterior.
- Categorias: Rodeio (2), Eleições 2026 (1), Casamento (1), Religião (1), Retratos (1), Games (1), Cinema / Arte fictícia (1). Supermercado, Studio Tattoo e Futebol/Atleta permanecem Em breve.
- Pôster A Reviravolta identificado como filme fictício. Nenhum filme, notícia ou cliente real alegado.
- Imagens em WebP no public/images; proporções e assinaturas preservadas. Contagens dinâmicas e carrossel corrigido para oito cards únicos, inclusive no modo de movimento reduzido.
- Build/lint passaram. Chrome: contagens por categoria, imagens decodificadas, modal e Escape, aviso fictício, todas as rotas sem erros. Home/galeria sem overflow em 390/768/1440px. Loop com grupos de 3088px/total 6176px, movimento para esquerda e pausa testados. Screenshots inspecionadas.

## Atualização — dez feedbacks reais fornecidos pelo usuário

- Os 24 exemplos removidos da fonte e UI. Exatamente dez comentários fornecidos e confirmados pelo usuário, com nomes, profissões, títulos, textos e cinco estrelas preservados. Verificação é pessoal de Luis, conforme sua confirmação, não verificação independente da plataforma.
- Home e /feedbacks usam a mesma fonte; página completa com dez cards e zero duplicações. Dez selos Comentário verificado pelo LuisXz Designer e cinquenta estrelas. Carrossel mantém clones somente visuais aria-hidden para loop.
- Apenas lib/feedbacks.ts, feedback-gallery.tsx, pages/feedbacks.tsx e feedbacks.css modificados no site; demais seções e favicon preservados conforme a solicitação mais recente.
- Build/lint passaram. Chrome comparou todos os cinco campos de cada card entre fonte/Home/página, testou filtros, botão, ausência de avisos fictícios, pausa, movimento reduzido, direção esquerda e grupos de 3940px/total 7880px. Zero erros e zero overflow em 390/768/1440px. Screenshot mobile inspecionada.

## Atualização — contato por e-mail

- Botão Entrar em contato por e-mail adicionado à seção de contato da Home, mantendo WhatsApp e horário existentes.
- mailto para luisxzdesigner@gmail.com com assunto Solicitação de orçamento — LuisXz Designer e corpo exato fornecido, codificados com encodeURIComponent e quebras CRLF.
- Texto abaixo: Prazo estimado de resposta: até 48 horas. Sem formulário, API ou envio automático; abre cliente de e-mail padrão, Gmail somente quando configurado como padrão.
- Build/lint passaram. Chrome verificou destinatário/assunto/corpo decodificados, clique nativo interceptado sem envio, texto, ausência de formulário e preservação de WhatsApp. Zero overflow/erros em 360/390/768/1440px. Screenshots desktop/mobile inspecionadas.
- A abertura efetiva do aplicativo de e-mail não pode ser testada neste sandbox sem cliente padrão; o href mailto nativo foi verificado. Vite reiniciado para eliminar módulo antigo; servidor ativo na porta gerenciada 4200.