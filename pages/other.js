import { PAYMENTS } from '../data/payments.js';

export function renderPayments(currentUser) {
  const shared = JSON.parse(localStorage.getItem('devmentor_shared') || '{}');
  const userPaid = shared.payments?.[currentUser] || [];

  const cardsHTML = PAYMENTS.map(p => {
    const paid = userPaid.includes(p.id);
    return `<div class="payment-card ${paid ? 'paid' : ''}">
      <div class="payment-title">${p.title}</div>
      <div class="payment-desc">${p.desc}</div>
      <div class="payment-price">${p.price}</div>
      <div class="payment-includes">
        <div class="payment-includes-lbl">INCLUDES</div>
        ${p.includes.map(i => `<div class="include-item">${i}</div>`).join('')}
      </div>
      <button class="pay-btn ${paid ? 'pay-btn-done' : 'pay-btn-active pay-now-btn'}" ${paid ? 'disabled' : ''}>
        ${paid ? '✓ Payment Confirmed' : 'Pay via WhatsApp →'}
      </button>
    </div>`;
  }).join('');

  const historyRows = PAYMENTS.filter(p => userPaid.includes(p.id)).map(p =>
    `<div class="pay-row">
      <div>${p.title}</div>
      <div class="pay-amount">${p.price}</div>
      <span class="pay-status done">PAID</span>
    </div>`
  ).join('') || `<div class="empty-state"><div class="emoji">💳</div>No payments yet</div>`;

  return `
    <div class="page-header">
      <div class="page-tag">// PAYMENTS</div>
      <div class="page-title">Courses & Fees</div>
      <div class="page-desc">Pay your mentor via WhatsApp. Medic Adrenaline will confirm here once received.</div>
    </div>
    <div class="payment-grid">${cardsHTML}</div>
    <div class="pay-history">
      <div class="pay-history-head"><span>ITEM</span><span>AMOUNT</span><span>STATUS</span></div>
      ${historyRows}
    </div>
  `;
}

export function renderResources(PHASES) {
  return `
    <div class="page-header">
      <div class="page-tag">// RESOURCES</div>
      <div class="page-title">Concept Library</div>
      <div class="page-desc">Everything explained in plain English. No links needed — it's all right here.</div>
    </div>
    <div class="admin-section">
      ${PHASES.filter(p => p.explanations && p.explanations.length).map(p => `
        <div class="section-lbl">${p.label} — ${p.name}</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
          ${p.explanations.map(e => `
            <div class="concept-card">
              <div class="concept-label">${e.label}</div>
              <div class="concept-body">${e.body}</div>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

export function renderStudents(PHASES) {
  const CREDENTIALS_DISPLAY = { oluwadamilola: 'Oluwadamilola' };
  const shared = JSON.parse(localStorage.getItem('devmentor_shared') || '{}');
  const totalTasks = PHASES.reduce((n, p) => n + p.tasks.length, 0);

  const studentsHTML = Object.entries(CREDENTIALS_DISPLAY).map(([username, display]) => {
    const st = JSON.parse(localStorage.getItem(`devmentor_${username}`) || '{}');
    const doneTasks = (st.tasks || []).length;
    const donePhases = (st.phases || []).length;
    const passedQuizzes = (st.quizzes || []).length;
    const pct = Math.round((doneTasks / totalTasks) * 100);
    const paid = shared.payments?.[username] || [];
    return `<div class="student-row">
      <div class="avatar">${display[0]}</div>
      <div style="flex:1">
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:15px">${display}</div>
        <div class="admin-note">Tasks: ${doneTasks}/${totalTasks} | Phases: ${donePhases}/${PHASES.length} | Quizzes passed: ${passedQuizzes}</div>
        <div class="student-prog-bar"><div class="student-prog-fill" style="width:${pct}%"></div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
        <span class="admin-badge ${paid.length ? 'badge-paid' : 'badge-unpaid'}">${paid.length ? 'PAYMENTS ✓' : 'NO PAYMENT'}</span>
        <span style="font-size:11px;color:var(--text-dim);font-family:'DM Mono',monospace">${pct}% complete</span>
      </div>
    </div>`;
  }).join('');

  return `
    <div class="page-header">
      <div class="page-tag">// MENTOR PANEL</div>
      <div class="page-title">Your Students</div>
      <div class="page-desc">Track everyone's progress at a glance.</div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">👥 Active Students</div>
      ${studentsHTML}
    </div>
  `;
}

export function renderPaymentsAdmin() {
  const shared = JSON.parse(localStorage.getItem('devmentor_shared') || '{}');
  const userPaid = shared.payments?.oluwadamilola || [];

  return `
    <div class="page-header">
      <div class="page-tag">// ADMIN</div>
      <div class="page-title">Confirm Payments</div>
      <div class="page-desc">Mark payments as received once confirmed via WhatsApp.</div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Oluwadamilola's Payments</div>
      ${PAYMENTS.map(p => {
        const paid = userPaid.includes(p.id);
        return `<div class="pay-row">
          <div>
            <div style="font-weight:600">${p.title}</div>
            <div style="font-size:12px;color:var(--text-dim)">${p.price}</div>
          </div>
          <span class="pay-status ${paid ? 'done' : 'pending'}">${paid ? 'CONFIRMED' : 'PENDING'}</span>
          <button class="mark-btn mark-paid-btn" data-user="oluwadamilola" data-pid="${p.id}" ${paid ? 'disabled style="opacity:0.4"' : ''}>
            ${paid ? '✓ Confirmed' : 'Mark Paid'}
          </button>
        </div>`;
      }).join('')}
    </div>
  `;
}

export function renderAnnounce() {
  const shared = JSON.parse(localStorage.getItem('devmentor_shared') || '{}');
  const announces = shared.announcements || [];

  return `
    <div class="page-header">
      <div class="page-tag">// ANNOUNCEMENTS</div>
      <div class="page-title">Post to Students</div>
      <div class="page-desc">Messages here appear at the top of each student's roadmap.</div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">📣 New Announcement</div>
      <textarea id="announce-input" placeholder="Type your message to students..."></textarea>
      <button class="btn-sm btn-orange" id="post-announce-btn">Post Announcement →</button>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">Recent Announcements</div>
      ${announces.length ? announces.map(a => `
        <div class="announce-box" style="margin-bottom:10px">
          <div class="announce-text">${a}</div>
        </div>`).join('') : '<div class="empty-state"><div class="emoji">📭</div>No announcements yet</div>'}
    </div>
  `;
}
