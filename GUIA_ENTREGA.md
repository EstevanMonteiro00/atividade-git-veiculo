# Guia para realizar a atividade no GitHub

## 1. Primeiro integrante: criar o repositório

No GitHub, crie um repositório vazio, por exemplo:

`atividade-git-veiculo`

Depois, no terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "chore: adiciona projeto inicial"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Crie a branch `dev`:

```bash
git checkout -b dev
git push -u origin dev
```

Convide o segundo integrante em:

`Settings > Collaborators`

## 2. Integrante 1

A partir da `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/imprimir-frear
```

Faça as alterações referentes a:
- imprimir dados do veículo;
- frear.

Depois:

```bash
git add .
git commit -m "feat: adiciona impressão e função de frear"
git push -u origin feature/imprimir-frear
```

No GitHub, abra um Pull Request:

`feature/imprimir-frear` -> `dev`

Após a revisão, faça o merge.

## 3. Integrante 2

Antes de começar, atualize a `dev`:

```bash
git checkout dev
git pull origin dev
```

Crie a branch:

```bash
git checkout -b feature/marchas
```

Faça as alterações referentes a:
- subir marcha;
- reduzir marcha.

Depois:

```bash
git add .
git commit -m "feat: adiciona controle de marchas"
git push -u origin feature/marchas
```

Abra o Pull Request:

`feature/marchas` -> `dev`

Depois da revisão, faça o merge.

## 4. Conferência final

No final:

```bash
git checkout dev
git pull origin dev
git log --oneline --graph --all
```

O histórico deverá mostrar os commits dos dois integrantes e as branches de funcionalidade.

O link entregue ao professor deve ser o link do repositório GitHub.
