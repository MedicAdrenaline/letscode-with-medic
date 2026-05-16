import { renderQuiz } from '../components/quiz.js';

export function renderRoadmap(PHASES, state, currentRole) {
  const s = state();
  const donePhases = s.phases || [];
  const doneTasks = s.tasks || [];
  const passedQuizzes = s.quizzes || [];

  const shared = JSON.parse(localStorage.getItem('devmentor_shared') || '{}');
  const announce = shared.announcements?.[0];

  const announceHTML = announce ? `
    <div class="announce-box">
      <div class="announce-title">📣 From Mentor</div>
      <div class="announce-text">${announce}</div>
    </div>` : '';

  const totalTasks = PHASES.reduce((n, p) => n + p.tasks.length, 0);
  const pct = Math.round((donePhases.length / PHASES.length) * 100);

  const phasesHTML = PHASES.map(p => {
    const done = donePhases.includes(p.id);
    const isLocked = p.locked && currentRole !== 'mentor';
    const quizPassed = passedQuizzes.includes(p.id);

    if (isLocked) {
      return `<div class="phase-card" id="phase-${p.id}" style="opacity:0.4;pointer-events:none;">
        <div class="phase-head" style="cursor:default;">
          <div class="phase-num-badge">${p.label}</div>
          <div class="phase-name" style="color:var(--text-dim)">${p.name}</div>
          <div class="phase-actions">
            <span class="tag ${p.tagClass}">${p.tag}</span>
            <span class="tag tag-cyan" style="font-size:9px">${p.week}</span>
            <span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--text-dim);letter-spacing:1px;padding:5px 12px;border:1px solid var(--border);border-radius:6px;">🔒 LOCKED</span>
          </div>
          <span class="chevron" style="opacity:0.3">▼</span>
        </div>
      </div>`;
    }

    const tasksHTML = p.tasks.map(t => {
      const checked = doneTasks.includes(t.id);
      return `<div class="task-item ${checked ? 'done' : ''}" data-task="${t.id}">
        <div class="task-check">${checked ? '✓' : ''}</div>
        <div class="task-text">${t.text}</div>
      </div>`;
    }).join('');

    const explHTML = (p.explanations && p.explanations.length) ? `
      <div class="section-lbl" style="margin-top:24px">// CONCEPTS EXPLAINED</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${p.explanations.map(e => `
          <div class="concept-card">
            <div class="concept-label">${e.label}</div>
            <div class="concept-body">${e.body}</div>
          </div>
        `).join('')}
      </div>` : '';

    const quizHTML = (p.quiz && p.quiz.length) ? `
      <div style="margin-top:24px">
        ${renderQuiz(p, s, null)}
      </div>` : '';

    const canMarkDone = quizPassed || !p.quiz || p.quiz.length === 0 || currentRole === 'mentor';

    return `<div class="phase-card ${done ? 'completed' : 'unlocked'}" id="phase-${p.id}">
      <div class="phase-head" onclick="togglePhase(${p.id})">
        <div class="phase-num-badge">${p.label}</div>
        <div class="phase-name">${p.name}</div>
        <div class="phase-actions">
          <span class="tag ${p.tagClass}">${p.tag}</span>
          <span class="tag tag-cyan" style="font-size:9px">${p.week}</span>
          ${canMarkDone
            ? `<button class="mark-btn" onclick="event.stopPropagation();markPhase(${p.id})">${done ? '✓ DONE' : 'MARK DONE'}</button>`
            : `<span class="mark-btn" style="cursor:default;opacity:0.5" title="Pass the quiz to unlock">🔒 PASS QUIZ</span>`
          }
        </div>
        <span class="chevron">▼</span>
      </div>
      <div class="phase-body">
        <div class="phase-content">
          <div class="section-lbl">TASKS</div>
          <div class="tasks">${tasksHTML}</div>
          ${explHTML}
          ${quizHTML}
          <div class="notes-box"><strong>// MENTOR NOTE</strong>${p.note}</div>
        </div>
      </div>
    </div>`;
  }).join('');

  return `
    <div class="page-header">
      <div class="page-tag">// WEB DEV BOOTCAMP</div>
      <div class="page-title">Your Learning Roadmap</div>
      <div class="page-desc">Phase by phase. Task by task. Medic Adrenaline's got you.</div>
    </div>
    ${announceHTML}
    <div class="stats-row">
      <div class="stat-card"><span class="stat-val">${donePhases.length}/${PHASES.length}</span><span class="stat-lbl">PHASES DONE</span></div>
      <div class="stat-card"><span class="stat-val">${doneTasks.length}</span><span class="stat-lbl">TASKS CLEARED</span></div>
      <div class="stat-card"><span class="stat-val">${pct}%</span><span class="stat-lbl">COMPLETION</span></div>
      <div class="stat-card"><span class="stat-val">${totalTasks - doneTasks.length}</span><span class="stat-lbl">TASKS LEFT</span></div>
    </div>
    <div class="prog-bar-wrap">
      <span class="prog-label">OVERALL PROGRESS</span>
      <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
      <span class="prog-pct">${pct}%</span>
    </div>
    ${phasesHTML}
  `;
}
