# Web Estúdio BR — Portfólio

Portfólio do estúdio. Next.js (App Router) + Tailwind.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Publicar no Vercel

1. Suba esta pasta para um repositório no GitHub (o `package.json` precisa ficar na **raiz** do repo).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. O Vercel detecta Next.js sozinho — não altere Build Command nem Output Directory. Clique em **Deploy**.

Depois disso, todo `git push` atualiza o site automaticamente.

> Não suba o `.env` para o GitHub. O `.gitignore` já cobre isso, mas confira antes do primeiro push.

## Estrutura

```
app/
  layout.tsx   → metadata, fontes, <html lang="pt-BR">
  page.tsx     → o site inteiro (uma única página)
  globals.css  → tokens do design system + componentes (.cta, .chip, .card…) + movimento
public/        → imagens e ícones
```

## Como editar

**Contatos:** procure por `whatsappLink` e `instagramLink` no topo de `app/page.tsx`.
Hoje: WhatsApp `5573988960070` e Instagram `@web.estudio.br`. O telefone também aparece
escrito por extenso na seção de contato — `(73) 98896-0070`.

**Adicionar um projeto:** acrescente um objeto ao array `projects` em `app/page.tsx`:

```ts
{
  id: 11,
  name: 'Nome do Cliente',
  category: 'Branding',        // precisa existir no array `categories`
  description: 'Uma frase sobre o que o site faz.',
  url: 'https://exemplo.com.br',
  year: '2026',
  stack: ['Next.js', 'Tailwind'],
  destaque: 'Catálogo + orçamento',
}
```

Se a categoria for nova, adicione-a também ao array `categories` logo abaixo — o filtro
do portfólio é montado a partir dele.

Os números "Projetos no ar" e "Nichos atendidos" são calculados a partir do array — não precisa
editar à mão.

**Marcar o projeto em destaque:** o card grande usa `featured: true` (hoje na Le Unic Brand).
Só um projeto por vez deve ter essa flag.

**Seção "Destaque técnico":** é escrita à mão no JSX, com um mock de navegador. Se trocar o
projeto em destaque, atualize também o texto, a URL da barra de endereço e a legenda.

## Design system

Tudo vem dos tokens no bloco `:root` de `app/globals.css` — é a fonte única de verdade.
Regra: se um valor não é token, ele não entra. Precisa de um novo? Crie o token primeiro.

- **Cor:** canvas quente (`#FAFAF8 → #F4F3EF`), tinta `#16181D`, cinzas `--muted` (texto) e
  `--subtle` (só texto grande/decorativo), um único acento `#2F6FED` com hover e pressionado.
  O azul só aparece em momentos interativos: links, foco, hover dos chips, CTA da seção de contato.
- **Tipografia:** Fraunces (títulos) + Inter (todo o resto), via `next/font`. Use só as classes
  `.t-label`, `.t-small`, `.t-nav`, `.t-body`, `.t-lead`, `.t-h3`, `.t-h2`, `.t-h1`, `.t-stat`.
  Caixa alta só em rótulos e botões.
- **Espaçamento:** escala de 8 (8/16/24/32/48/64). No Tailwind, só `2, 4, 6, 8, 12, 16`.
- **Raios:** 8 (inputs), 12 (cards), 16 (card grande/mock), 24 (botões), 999 (chips).
- **Sombras:** `sm` em repouso, `md` no hover, `lg` no mock; o `glow` de acento é usado uma vez só
  (botão do WhatsApp na seção escura).
- **Movimento:** um easing (`cubic-bezier(0.16, 1, 0.3, 1)`), reveal com fade + 32px,
  hover de link por opacidade, `prefers-reduced-motion` respeitado.

## Nota sobre números

Os cards mostram um campo `destaque` — uma descrição curta e verdadeira do que o projeto
entrega. Não há pontuação de Lighthouse nem métrica de performance ali, de propósito: se
quiser exibir esses números, meça cada site antes e preencha com o valor real.
