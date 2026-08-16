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
  globals.css  → Tailwind + animações
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

**Marcar o projeto em destaque:** o card grande usa `featured: true` (hoje na Le Unic Brand).
Só um projeto por vez deve ter essa flag.

**Seção "Destaque técnico":** é escrita à mão no JSX, com um mock de navegador. Se trocar o
projeto em destaque, atualize também o texto, a URL da barra de endereço e a legenda.

## Nota sobre números

Os cards mostram um campo `destaque` — uma descrição curta e verdadeira do que o projeto
entrega. Não há pontuação de Lighthouse nem métrica de performance ali, de propósito: se
quiser exibir esses números, meça cada site antes e preencha com o valor real.
