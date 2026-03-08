# Styles

Esta pasta contém os estilos globais e as definições de design do projeto.

O objetivo é centralizar o **design system da aplicação**, garantindo consistência visual e facilitando manutenção.

Os estilos aqui definidos podem ser utilizados em toda a aplicação.

## Estrutura

Os arquivos de estilo são organizados para separar responsabilidades dentro do design system.

### variables.css

Arquivo responsável por armazenar **variáveis globais de estilo** utilizando CSS Custom Properties.

Exemplos de variáveis:

- cores da aplicação
- espaçamentos
- tamanhos de borda
- z-index
- sombras

Essas variáveis permitem manter consistência visual e facilitar mudanças no design.

---

### typography.css

Define os padrões de tipografia da aplicação.

Inclui:

- tamanhos de fonte
- pesos de fonte
- estilos de títulos
- estilos de parágrafos
- line-height

Esse arquivo garante padronização nos textos da interface.

---

### reset.css

Arquivo responsável por remover estilos padrão aplicados pelos navegadores.

Isso ajuda a evitar inconsistências visuais entre diferentes browsers.

---

### global.css

Define os estilos globais da aplicação.

Exemplos:

- fonte padrão
- cor de fundo da aplicação
- cores de texto
- estilos base do `body`

Também é responsável por importar outros estilos globais necessários.

---

## Boas práticas

- Sempre utilizar variáveis definidas em `variables.css`
- Evitar cores ou valores hardcoded nos componentes
- Manter estilos reutilizáveis
- Priorizar consistência visual

---

## Temas

O projeto poderá utilizar **dark mode e light mode**, definidos através de variáveis CSS.

Isso permite alternar temas sem alterar diretamente os estilos dos componentes.

---

## Objetivo

Manter um **design consistente, escalável e fácil de manter** ao longo do desenvolvimento do projeto.
