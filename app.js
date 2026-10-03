# GoalPredict

Aplicativo de prognósticos de futebol e palpites com dashboard de jogos, análise e apostas.

## Stack

- Frontend: HTML / CSS / JavaScript
- Backend: Node.js + Express
- Autenticação: JWT
- Persistência: arquivos JSON locais (MVP)

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm start
```

3. Acesse em:

```bash
http://localhost:3000
```

## Endpoints principais

- `GET /api/health`
- `GET /api/matches`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/dashboard`
- `POST /api/predictions`

## Próximo passo

A próxima evolução será adicionar login visual no frontend e integração com uma API externa de odds/partidas.
