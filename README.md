# 3035Tech Teste técnico - Tendências de filmes da semana

Aplicação SPA de catálogo de filmes desenvolvida como parte de um desafio técnico. O projeto utiliza a API do The Movie Database (TMDB) para exibir filmes em alta na semana, permitir buscas e visualizar detalhes completos de cada filme.

## Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server de alta performance
- **React Router 7** - Navegação e roteamento
- **TanStack Query** - Gerenciamento de estado assíncrono e cache
- **Tailwind CSS 4** - Framework CSS utility-first
- **Shadcn** - Componentes acessíveis e customizáveis
- **Zod** - Validação de schemas TypeScript-first
- **Lucide React** - Biblioteca de ícones
- **Motion** - Animações declarativas
- **date-fns** - Manipulação de datas
- **Vitest** - Framework de testes unitários
- **Testing Library** - Utilitários para testes de componentes React

## Funcionalidades

- Listagem de filmes em alta da semana
- Sistema de busca de filmes
- Página de detalhes com informações completas do filme
- Exibição de trailers
- Design responsivo
- Skeleton screens para melhor UX durante carregamento
- Tratamento de erros
- Animações suaves com Motion

## Pré-requisitos

- Node.js 18+ ou Bun
- Chave de API do TMDB (The Movie Database)

## Configuração

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd 3035tech-challenge
```

2. Instale as dependências:
```bash
npm install
# ou
bun install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
VITE_TMDB_API_KEY=seu_token_de_acesso_da_api_tmdb
```

Para obter sua chave de API:
1. Crie uma conta em [https://www.themoviedb.org](https://www.themoviedb.org)
2. Acesse [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
3. Gere um novo token de acesso (API Read Access Token)

## Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
# ou
bun run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build de Produção

```bash
npm run build
# ou
bun run build
```

### Preview da Build

```bash
npm run preview
# ou
bun run preview
```

## Testes

### Executar testes em modo watch

```bash
npm run test
# ou
bun run test
```

### Executar testes uma vez (CI)

```bash
npm run test:ci
# ou
bun run test:ci
```

## Estrutura do Projeto

```
src/
├── assets/          # Arquivos estáticos (imagens, SVGs)
├── common/          # Utilitários comuns
├── components/      # Componentes React
│   ├── content/     # Componentes de conteúdo de páginas
│   ├── navbar/      # Componentes da navegação
│   ├── ui/          # Componentes de UI reutilizáveis
│   └── variants/    # Variantes de componentes
├── hooks/           # Custom hooks
├── lib/             # Configurações de bibliotecas
├── pages/           # Páginas da aplicação
├── schema/          # Schemas de validação (Zod)
├── services/        # Serviços de API
├── skeleton/        # Componentes skeleton para loading
├── layout.tsx       # Layout principal
└── main.tsx         # Entry point da aplicação
```

## Rotas

- `/` - Página inicial com filmes em alta
- `/search` - Página de busca de filmes
- `/movie/:slug/:id` - Página de detalhes do filme

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter (ESLint)
- `npm run test` - Executa os testes em modo watch
- `npm run test:ci` - Executa os testes uma vez (para CI/CD)

## Qualidade de Código

O projeto utiliza:
- **ESLint** - Análise estática de código
- **TypeScript** - Tipagem estática
- **Vitest + Testing Library** - Testes unitários e de componentes

## Licença

Projeto desenvolvido para fins de avaliação técnica.
