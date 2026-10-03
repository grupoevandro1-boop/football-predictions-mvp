<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GoalPredict | Palpites de Futebol</title>
    <meta
      name="description"
      content="Aplicativo para prognósticos de futebol e palpites com análise de jogos e retorno estimado."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="topbar">
        <div class="brand-wrap">
          <div class="brand-mark">⚽</div>
          <div>
            <p class="eyebrow">Análise esportiva</p>
            <h1>GoalPredict</h1>
          </div>
        </div>

        <nav class="topbar-nav" aria-label="Navegação principal">
          <button class="nav-pill active">Hoje</button>
          <button class="nav-pill">Semana</button>
          <button class="nav-pill">Ligas</button>
        </nav>
      </header>

      <main class="dashboard">
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow accent">Prognóstico inteligente</p>
            <h2>Descubra os jogos com maior valor e alivie a sua aposta.</h2>
            <p class="hero-subtitle">
              Veja probabilidades, análises rápidas e palpite recomendado por partida antes
              de confirmar sua seleção.
            </p>
          </div>

          <div class="hero-cta">
            <button id="generatePicks" class="primary-button">Gerar palpite</button>
            <button id="clearPicks" class="secondary-button">Limpar</button>
          </div>
        </section>

        <section class="stats-grid" aria-label="Estatísticas gerais">
          <article class="stat-card">
            <span class="stat-label">Jogos</span>
            <strong id="gamesCount">0</strong>
            <small>Hoje</small>
          </article>
          <article class="stat-card">
            <span class="stat-label">Precisão</span>
            <strong id="accuracyValue">68%</strong>
            <small>Últimos 30 dias</small>
          </article>
          <article class="stat-card success">
            <span class="stat-label">Lucro</span>
            <strong id="profitValue">+€142</strong>
            <small>Acumulado</small>
          </article>
          <article class="stat-card warning">
            <span class="stat-label">Apostas</span>
            <strong id="betsCount">0</strong>
            <small>Ativas</small>
          </article>
        </section>

        <section class="content-grid">
          <div class="matches-panel">
            <div class="section-header">
              <div>
                <p class="eyebrow">Lista de jogos</p>
                <h3>Próximas partidas</h3>
              </div>
              <span class="chip">4 partidas</span>
            </div>

            <div id="matchesList" class="matches-list" aria-live="polite"></div>
          </div>

          <aside class="slip-panel">
            <div class="section-header">
              <div>
                <p class="eyebrow">Boletim</p>
                <h3>Meu palpite</h3>
              </div>
              <span id="selectedCount" class="chip secondary">0</span>
            </div>

            <div id="betSlip" class="bet-slip empty">
              <p>Nenhum palpite selecionado ainda.</p>
            </div>

            <div class="stake-box">
              <label for="stakeInput">Valor da aposta</label>
              <div class="stake-row">
                <span>€</span>
                <input id="stakeInput" type="number" min="5" step="5" value="25" />
              </div>
            </div>

            <div class="summary-box">
              <div>
                <span>Retorno estimado</span>
                <strong id="estimatedReturn">€0.00</strong>
              </div>
              <button id="submitBet" class="primary-button full-width">Confirmar palpite</button>
            </div>
          </aside>
        </section>
      </main>
    </div>

    <script src="app.js"></script>
  </body>
</html>
