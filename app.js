:root {
  --bg: #07111d;
  --panel: rgba(12, 24, 39, 0.85);
  --panel-alt: #0e1d2d;
  --card: #122638;
  --card-soft: #1a2d41;
  --line: rgba(148, 163, 184, 0.18);
  --text: #edf6ff;
  --muted: #9bb2cc;
  --green: #22c55e;
  --green-soft: rgba(34, 197, 94, 0.15);
  --red: #f87171;
  --red-soft: rgba(248, 113, 113, 0.12);
  --amber: #fbbf24;
  --amber-soft: rgba(251, 191, 36, 0.12);
  --blue: #60a5fa;
  --shadow: 0 18px 45px rgba(10, 16, 26, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background: radial-gradient(circle at top left, rgba(96, 165, 250, 0.1), transparent 20%), linear-gradient(135deg, #050b13 0%, #081625 35%, #0c1928 100%);
  color: var(--text);
}

button,
input {
  font: inherit;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px 40px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
  padding: 18px 24px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(9, 18, 28, 0.7);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  background: linear-gradient(135deg, var(--blue), #22d3ee);
  color: #06131d;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow.accent {
  color: #8fe3ff;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.topbar h1 {
  font-size: 1.4rem;
}

.topbar-nav {
  display: flex;
  gap: 10px;
  align-items: center;
}

.nav-pill {
  border: 1px solid var(--line);
  background: transparent;
  color: var(--muted);
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-pill.active,
.nav-pill:hover {
  background: rgba(96, 165, 250, 0.12);
  color: var(--text);
  border-color: rgba(96, 165, 250, 0.3);
}

.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero {
  background: linear-gradient(135deg, rgba(12, 25, 38, 1), rgba(12, 25, 38, 0.75));
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px 28px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-shadow: var(--shadow);
}

.hero-copy {
  max-width: 700px;
}

.hero h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  margin-bottom: 12px;
}

.hero-subtitle {
  max-width: 560px;
  color: var(--muted);
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.primary-button,
.secondary-button {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--green), #2dd4bf);
  color: #04100d;
  font-weight: 700;
  padding: 12px 18px;
}

.secondary-button {
  background: rgba(148, 163, 184, 0.12);
  color: var(--text);
  border: 1px solid var(--line);
  padding: 12px 18px;
}

.primary-button:hover,
.secondary-button:hover,
.selection-button:hover {
  transform: translateY(-1px);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
}

.stat-card {
  background: rgba(14, 29, 45, 0.9);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px 18px;
  min-height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow);
}

.stat-card.success {
  background: rgba(14, 38, 27, 0.82);
  border-color: rgba(34, 197, 94, 0.28);
}

.stat-card.warning {
  background: rgba(41, 28, 8, 0.82);
  border-color: rgba(251, 191, 36, 0.25);
}

.stat-label {
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stat-card strong {
  font-size: clamp(1.7rem, 2vw, 2.3rem);
  letter-spacing: -0.06em;
}

.stat-card small {
  color: var(--muted);
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(290px, 0.92fr);
  gap: 24px;
}

.matches-panel,
.slip-panel {
  background: rgba(10, 20, 31, 0.88);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 20px 18px;
  box-shadow: var(--shadow);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.section-header h3 {
  font-size: 1.5rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.1);
  color: #dcecff;
  border: 1px solid rgba(96, 165, 250, 0.25);
  font-size: 0.75rem;
  font-weight: 600;
}

.chip.secondary {
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.26);
  color: #c8f7d6;
}

.matches-list {
  display: grid;
  gap: 16px;
}

.match-card {
  background: linear-gradient(180deg, rgba(18, 38, 56, 0.8), rgba(14, 27, 39, 0.88));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px 16px;
}

.match-topline,
.match-teams,
.match-meta,
.odds-row,
.selection-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.match-topline {
  margin-bottom: 14px;
}

.league-tag {
  font-size: 0.72rem;
  color: #cfe9ff;
  background: rgba(96, 165, 250, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 999px;
  padding: 6px 10px;
}

.match-date {
  color: var(--muted);
  font-size: 0.8rem;
}

.match-teams {
  align-items: center;
  margin-bottom: 16px;
}

.team-block {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.team-badge {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
  font-weight: 800;
  color: #07131b;
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}

.team-name {
  font-weight: 700;
}

.team-form {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  margin-top: 4px;
}

.score-pill {
  min-width: 64px;
  text-align: center;
  padding: 8px 12px;
  background: rgba(148, 163, 184, 0.08);
  border-radius: 12px;
  border: 1px solid var(--line);
  font-weight: 700;
}

.match-meta {
  margin-bottom: 14px;
}

.probability {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #c8f7d6;
  font-weight: 600;
  font-size: 0.8rem;
}

.probability strong {
  color: var(--text);
}

.signal {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
}

.odds-row {
  margin-top: 12px;
  gap: 10px;
}

.selection-button {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(148, 163, 184, 0.04);
  color: var(--text);
  cursor: pointer;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition: all 0.2s ease;
}

.selection-button span {
  font-size: 0.73rem;
  color: var(--muted);
}

.selection-button strong {
  font-size: 1.05rem;
}

.selection-button.selected {
  background: rgba(96, 165, 250, 0.12);
  border-color: rgba(96, 165, 250, 0.42);
  box-shadow: inset 0 0 0 1px rgba(96, 165, 250, 0.2);
}

.selection-button.recommended {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
}

.slip-panel {
  align-self: start;
}

.bet-slip {
  min-height: 140px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0 12px;
}

.bet-slip.empty {
  justify-content: center;
  color: var(--muted);
  text-align: center;
  border: 1px dashed var(--line);
  border-radius: 16px;
  padding: 18px 12px;
}

.bet-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--line);
  background: rgba(16, 31, 46, 0.9);
  border-radius: 14px;
  padding: 12px 12px;
}

.bet-item .bet-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.bet-item .bet-head strong {
  font-size: 0.95rem;
}

.bet-tag {
  font-size: 0.72rem;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.1);
  color: #cbf9d8;
  border: 1px solid rgba(34, 197, 94, 0.28);
}

.bet-item small {
  color: var(--muted);
}

.stake-box {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.stake-box label {
  display: block;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.82rem;
}

.stake-row {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--line);
  background: rgba(10, 18, 29, 0.7);
  border-radius: 12px;
  padding: 12px 14px;
}

.stake-row span {
  color: var(--muted);
}

.stake-row input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text);
  font-size: 1.1rem;
}

.summary-box {
  margin-top: 18px;
  background: rgba(15, 28, 39, 0.8);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px 14px;
}

.summary-box > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.summary-box span {
  color: var(--muted);
}

.summary-box strong {
  font-size: 1.4rem;
}

.full-width {
  width: 100%;
}

@media (max-width: 980px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 620px) {
  .page-shell {
    padding: 18px 14px 30px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar-nav {
    width: 100%;
    justify-content: space-between;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .match-teams {
    flex-wrap: wrap;
    justify-content: center;
  }

  .match-topline,
  .match-meta,
  .bet-item .bet-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
