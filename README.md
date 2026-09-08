# Atividade Prática - Colaboração e Fluxo de Branches

Projeto desenvolvido para a disciplina de Engenharia de Software II.

## Objetivo

Demonstrar o fluxo de trabalho com Git e GitHub utilizando:

- branch `main`
- branch `dev`
- branches de funcionalidade (`feature/...`)
- commits individuais
- Pull Requests
- integração das funcionalidades na branch `dev`

## Projeto

Aplicação simples em TypeScript para controlar um veículo pelo terminal.

Funcionalidades:

1. Criar veículo por entrada de dados.
2. Acelerar.
3. Frear.
4. Subir marcha.
5. Descer marcha.
6. Imprimir os dados do veículo.

## Como executar

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm start
```

Para verificar a compilação:

```bash
npm run build
```

## Fluxo Git utilizado

`main` -> `dev` -> `feature/nome-da-funcionalidade` -> Pull Request -> `dev`

Após a revisão, as funcionalidades são integradas à `dev`.
