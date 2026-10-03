const matches = [
  {
    id: 1,
    league: 'Premier League',
    date: 'Dom 18:00',
    home: 'Arsenal',
    away: 'Chelsea',
    homeTag: 'ARS',
    awayTag: 'CHE',
    formHome: 'W W D W',
    formAway: 'D L W D',
    odds: { home: 1.82, draw: 3.4, away: 4.5 },
    probability: 62,
    confidence: 8.4,
    recommended: 'home'
  },
  {
    id: 2,
    league: 'La Liga',
    date: 'Dom 20:30',
    home: 'Real Madrid',
    away: 'Sevilla',
    homeTag: 'RMA',
    awayTag: 'SEV',
    formHome: 'W W W D',
    formAway: 'L D W L',
    odds: { home: 1.45, draw: 4.2, away: 7.2 },
    probability: 71,
    confidence: 9.1,
    recommended: 'home'
  },
  {
    id: 3,
    league: 'Serie A',
    date: 'Seg 21:00',
    home: 'Juventus',
    away: 'Inter',
    homeTag: 'JUV',
    awayTag: 'INT',
    formHome: 'D W D W',
    formAway: 'W W L W',
    odds: { home: 2.95, draw: 3.35, away: 2.45 },
    probability: 48,
    confidence: 7.1,
    recommended: 'away'
  },
  {
    id: 4,
    league: 'Bundesliga',
    date: 'Ter 19:30',
    home: 'Bayern',
    away: 'Leverkusen',
    homeTag: 'BAY',
    awayTag: 'LEV',
    formHome: 'W W W L',
    formAway: 'W D W W',
    odds: { home: 1.72, draw: 3.75, away: 5.1 },
    probability: 57,
    confidence: 8.0,
    recommended: 'home'
  }
];

const state = {
  picks: {},
  stake: 25
};

const matchesList = document.getElementById('matchesList');
const betSlip = document.getElementById('betSlip');
const selectedCount = document.getElementById('selectedCount');
const estimatedReturn = document.getElementById('estimatedReturn');
const stakeInput = document.getElementById('stakeInput');
const generatePicksButton = document.getElementById('generatePicks');
const clearPicksButton = document.getElementById('clearPicks');
const submitBetButton = document.getElementById('submitBet');

function renderMatches() {
  matchesList.innerHTML = matches
    .map((match) => {
      const recommendedLabel = match.recommended === 'home' ? match.home : match.recommended === 'draw' ? 'Empate' : match.away;
      const odds = match.odds;
      const selectedChoice = state.picks[match.id]?.choice;

      return `
        <article class="match-card" data-id="${match.id}">
          <div class="match-topline">
            <span class="league-tag">${match.league}</span>
            <span class="match-date">${match.date}</span>
          </div>

          <div class="match-teams">
            <div class="team-block">
              <div class="team-badge">${match.homeTag.slice(0, 2)}</div>
              <div>
                <div class="team-name">${match.home}</div>
                <span class="team-form">${match.formHome}</span>
              </div>
            </div>

            <div class="score-pill">VS</div>

            <div class="team-block" style="justify-content:flex-end; text-align:right;">
              <div>
                <div class="team-name">${match.away}</div>
                <span class="team-form">${match.formAway}</span>
              </div>
              <div class="team-badge">${match.awayTag.slice(0, 2)}</div>
            </div>
          </div>

          <div class="match-meta">
            <div class="probability">
              <span class="signal"></span>
              <span>Probabilidade <strong>${match.probability}%</strong></span>
            </div>
            <span class="match-date">Palpite: ${recommendedLabel}</span>
          </div>

          <div class="odds-row">
            <button class="selection-button ${selectedChoice === 'home' ? 'selected' : ''} ${match.recommended === 'home' ? 'recommended' : ''}" data-match-id="${match.id}" data-choice="home">
              <span>Casa</span>
              <strong>${odds.home.toFixed(2)}</strong>
            </button>
            <button class="selection-button ${selectedChoice === 'draw' ? 'selected' : ''} ${match.recommended === 'draw' ? 'recommended' : ''}" data-match-id="${match.id}" data-choice="draw">
              <span>Empate</span>
              <strong>${odds.draw.toFixed(2)}</strong>
            </button>
            <button class="selection-button ${selectedChoice === 'away' ? 'selected' : ''} ${match.recommended === 'away' ? 'recommended' : ''}" data-match-id="${match.id}" data-choice="away">
              <span>Fora</span>
              <strong>${odds.away.toFixed(2)}</strong>
            </button>
          </div>
        </article>
      `;
    })
    .join('');

  document.querySelectorAll('.selection-button').forEach((button) => {
    button.addEventListener('click', () => {
      const matchId = Number(button.dataset.matchId);
      const choice = button.dataset.choice;
      const match = matches.find((item) => item.id === matchId);

      state.picks[matchId] = {
        matchId,
        choice,
        odd: match.odds[choice],
        label: choice === 'home' ? match.home : choice === 'draw' ? 'Empate' : match.away
      };

      renderMatches();
      renderSlip();
    });
  });
}

function renderSlip() {
  const picks = Object.values(state.picks);
  selectedCount.textContent = String(picks.length);

  if (!picks.length) {
    betSlip.classList.add('empty');
    betSlip.innerHTML = '<p>Nenhum palpite selecionado ainda.</p>';
    estimatedReturn.textContent = '€0.00';
    return;
  }

  betSlip.classList.remove('empty');

  const totalOdds = picks.reduce((accumulator, pick) => accumulator * pick.odd, 1);
  const stake = Number(stakeInput.value) || 0;
  const returnValue = stake * totalOdds;

  estimatedReturn.textContent = `€${returnValue.toFixed(2)}`;

  betSlip.innerHTML = picks
    .map((pick) => {
      const match = matches.find((item) => item.id === pick.matchId);
      return `
        <div class="bet-item">
          <div class="bet-head">
            <strong>${match.home} x ${match.away}</strong>
            <span class="bet-tag">${pick.label}</span>
          </div>
          <small>Odd ${pick.odd.toFixed(2)} • ${match.league}</small>
        </div>
      `;
    })
    .join('');
}

function updateDashboardStats() {
  const gamesCount = document.getElementById('gamesCount');
  const accuracyValue = document.getElementById('accuracyValue');
  const profitValue = document.getElementById('profitValue');
  const betsCount = document.getElementById('betsCount');

  gamesCount.textContent = String(matches.length);
  accuracyValue.textContent = '68%';
  profitValue.textContent = '+€142';
  betsCount.textContent = String(Object.keys(state.picks).length);
}

function generateRandomPicks() {
  const recommendedMatches = matches.slice(0, 3);
  state.picks = {};

  recommendedMatches.forEach((match) => {
    const choice = match.recommended;
    state.picks[match.id] = {
      matchId: match.id,
      choice,
      odd: match.odds[choice],
      label: choice === 'home' ? match.home : choice === 'draw' ? 'Empate' : match.away
    };
  });

  renderMatches();
  renderSlip();
  updateDashboardStats();
}

function clearPicks() {
  state.picks = {};
  renderMatches();
  renderSlip();
  updateDashboardStats();
}

function handleSubmit() {
  const picks = Object.values(state.picks);
  if (!picks.length) {
    alert('Selecione pelo menos um palpite antes de confirmar.');
    return;
  }

  const total = picks.reduce((accumulator, pick) => accumulator * pick.odd, 1);
  const stake = Number(stakeInput.value) || 0;
  const returnValue = stake * total;

  alert(`Palpite confirmado! Retorno estimado: €${returnValue.toFixed(2)}`);
}

stakeInput.addEventListener('input', renderSlip);
generatePicksButton.addEventListener('click', generateRandomPicks);
clearPicksButton.addEventListener('click', clearPicks);
submitBetButton.addEventListener('click', handleSubmit);

renderMatches();
renderSlip();
updateDashboardStats();





























































































































































































































































































































































































































