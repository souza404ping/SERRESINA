# SERRESINA — L'Avenir du Design en Résine Époxy

Site institucional (landing page) da **SERRESINA**, empresa de revestimentos de luxo em resina epóxi.

- 100% em francês, single-page, tema escuro "mármore negro com veios dourados" + glassmorphism
- Seções: Hero, À Propos, Produits, Écran de Devis (formulário), Contact (footer)
- Animações de scroll-reveal, hover glow e detalhes dourados animados

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, SSR) + TypeScript
- Vite + Tailwind CSS v4
- Nitro (build serverless — pré-configurado para **Vercel**)

## Rodar localmente

Requisitos: [Bun](https://bun.sh) (ou Node 20+ com npm).

```sh
bun install      # ou: npm install
bun run dev      # ou: npm run dev
```

Abra `http://localhost:3000` (a porta é exibida no terminal).

## Subir para o Git

```sh
git init
git add .
git commit -m "Site SERRESINA"
git branch -M main
git remote add origin <URL-do-seu-repositorio>
git push -u origin main
```

O `.gitignore` já exclui `node_modules`, `dist`, `.vercel`, `.output` e logs.

## Deploy na Vercel

O projeto já está configurado para gerar o output da Vercel (Build Output API v3 em `.vercel/output`).

**Opção 1 — pelo painel (recomendado):**

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório do GitHub.
2. A Vercel detecta o projeto Nitro e executa `bun run build` automaticamente.
3. Sem variáveis de ambiente necessárias. Clique em **Deploy**.

**Opção 2 — pela CLI:**

```sh
npm i -g vercel
vercel            # primeiro deploy (responda as perguntas com os padrões)
vercel --prod     # deploys seguintes em produção
```

> Se o deploy automático não detectar o framework, rode `vercel build && vercel deploy --prebuilt`.

## Build de produção

```sh
bun run build     # gera .vercel/output (funções serverless + assets estáticos)
bun run preview   # pré-visualiza o build localmente
```

## Estrutura

```
src/
  routes/index.tsx    # página inteira (Header, Hero, À Propos, Produits, Devis, Footer)
  routes/__root.tsx   # layout raiz, fontes e metadados
  styles.css          # design system (tokens dourados, glass, animações)
  assets/             # mármore, textura de resina e logo SERRESINA
public/               # favicon e robots.txt
```

---

Fait par : **souza404**
