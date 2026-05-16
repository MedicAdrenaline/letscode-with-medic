import { PHASES } from './data/phases.js';
import { renderRoadmap } from './pages/roadmap.js';
import { renderPayments, renderResources, renderStudents, renderPaymentsAdmin, renderAnnounce } from './pages/other.js';
import { initQuizHandlers } from './components/quiz.js';

// ===================== CREDENTIALS =====================
const CREDENTIALS = {
  mentor:        { pass: 'mentor123',  role: 'mentor',  display: 'Medic Adrenaline' },
  oluwadamilola: { pass: 'dami123',    role: 'student', display: 'Oluwadamilola'    },
};

// ===================== STATE =====================
let currentUser = null;
let currentRole = null;
let selectedRole = 'student';
let currentPage = 'roadmap';

function getState() {
  const raw = localStorage.getItem(`devmentor_${currentUser}`);
  return raw ? JSON.parse(raw) : { tasks: [], phases: [], quizzes: [], announcements: [] };
}

function saveState(s) {
  localStorage.setItem(`devmentor_${currentUser}`, JSON.stringify(s));
}

function getSharedState() {
  const raw = localStorage.getItem('devmentor_shared');
  return raw ? JSON.parse(raw) : { announcements: [], payments: {} };
}

function saveSharedState(s) {
  localStorage.setItem('devmentor_shared', JSON.stringify(s));
}

// ===================== AUTH =====================
window.setRole = (r) => {
  selectedRole = r;
  document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
};

window.login = () => {
  const u = document.getElementById('username').value.trim().toLowerCase();
  const p = document.getElementById('password').value;
  const err = document.getElementById('login-error');

  if (CREDENTIALS[u] && CREDENTIALS[u].pass === p) {
    currentUser = u;
    currentRole = CREDENTIALS[u].role;
    localStorage.setItem('devmentor_current_user', u);
    err.style.display = 'none';
    showApp();
  } else {
    err.style.display = 'block';
  }
};

window.logout = () => {
  currentUser = null;
  currentRole = null;
  document.getElementById('login-view').classList.add('active');
  document.getElementById('app-view').classList.remove('active');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
};

function showApp() {
  document.getElementById('login-view').classList.remove('active');
  document.getElementById('app-view').classList.add('active');
  document.getElementById('sb-name').textContent = CREDENTIALS[currentUser].display;
  document.getElementById('sb-role').textContent = currentRole.toUpperCase();
  document.getElementById('sb-avatar').textContent = CREDENTIALS[currentUser].display[0].toUpperCase();
  buildSidebar();
  navigate('roadmap');
}

// ===================== SIDEBAR =====================
function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const items = currentRole === 'mentor'
    ? [
        { id: 'roadmap',        icon: '🗺️', label: 'Roadmap'   },
        { id: 'students',       icon: '👥', label: 'Students'  },
        { id: 'payments_admin', icon: '💰', label: 'Payments'  },
        { id: 'announce',       icon: '📣', label: 'Announce'  },
      ]
    : [
        { id: 'roadmap',   icon: '🗺️', label: 'Roadmap'   },
        { id: 'payments',  icon: '💳', label: 'Payments'  },
        { id: 'resources', icon: '📚', label: 'Resources' },
      ];

  nav.innerHTML = items.map(i => `
    <div class="nav-item" id="nav-${i.id}" onclick="navigate('${i.id}')">
      <span class="nav-icon">${i.icon}</span> ${i.label}
    </div>
  `).join('');
}

// ===================== ROUTING =====================
window.navigate = (page) => {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById(`nav-${page}`);
  if (navEl) navEl.classList.add('active');
  renderPage(page);
};

function renderPage(page) {
  const main = document.getElementById('main-content');
  if      (page === 'roadmap')        main.innerHTML = renderRoadmap(PHASES, getState, currentRole);
  else if (page === 'payments')       main.innerHTML = renderPayments(currentUser);
  else if (page === 'resources')      main.innerHTML = renderResources(PHASES);
  else if (page === 'students')       main.innerHTML = renderStudents(PHASES);
  else if (page === 'payments_admin') main.innerHTML = renderPaymentsAdmin();
  else if (page === 'announce')       main.innerHTML = renderAnnounce();
  attachHandlers(page);
}

function attachHandlers(page) {
  if (page === 'roadmap') {
    document.querySelectorAll('.task-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.task;
        const s = getState();
        s.tasks = s.tasks || [];
        const idx = s.tasks.indexOf(id);
        if (idx >= 0) s.tasks.splice(idx, 1);
        else s.tasks.push(id);
        saveState(s);
        renderPage('roadmap');
      });
    });
  }
  if (page === 'announce') {
    const btn = document.getElementById('post-announce-btn');
    if (btn) btn.addEventListener('click', () => {
      const val = document.getElementById('announce-input')?.value?.trim();
      if (!val) return;
      const shared = getSharedState();
      shared.announcements = [val, ...(shared.announcements || [])].slice(0, 5);
      saveSharedState(shared);
      renderPage('announce');
    });
  }
  if (page === 'payments_admin') {
    document.querySelectorAll('.mark-paid-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const user = btn.dataset.user;
        const pid  = btn.dataset.pid;
        const shared = getSharedState();
        if (!shared.payments[user]) shared.payments[user] = [];
        if (!shared.payments[user].includes(pid)) shared.payments[user].push(pid);
        saveSharedState(shared);
        renderPage('payments_admin');
      });
    });
  }
  if (page === 'payments') {
    document.querySelectorAll('.pay-now-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Contact Medic Adrenaline on WhatsApp to make payment. Once confirmed, it will be marked as paid here.');
      });
    });
  }
}

// ===================== PHASE CONTROLS =====================
window.togglePhase = (id) => {
  document.getElementById(`phase-${id}`)?.classList.toggle('open');
};

window.markPhase = (id) => {
  const s = getState();
  const passedQuizzes = s.quizzes || [];
  const phase = PHASES.find(p => p.id === id);

  // Check quiz requirement
  if (phase?.quiz?.length && !passedQuizzes.includes(id) && currentRole !== 'mentor') {
    alert('You need to pass the quiz before marking this phase as done!');
    return;
  }

  s.phases = s.phases || [];
  const idx = s.phases.indexOf(id);
  if (idx >= 0) s.phases.splice(idx, 1);
  else s.phases.push(id);
  saveState(s);
  renderPage('roadmap');
};


// ===================== RESET FUNCTIONS =====================
window.resetStudentProgress = (username) => {
  if (!confirm('Are you sure you want to clear ALL progress for ' + username + '? This cannot be undone.')) return;
  localStorage.removeItem('devmentor_' + username);
  alert('Progress cleared for ' + username);
  renderPage('students');
};

window.resetStudentPayments = (username) => {
  if (!confirm('Are you sure you want to clear ALL payments for ' + username + '? This cannot be undone.')) return;
  const shared = getSharedState();
  shared.payments[username] = [];
  saveSharedState(shared);
  alert('Payments cleared for ' + username);
  renderPage('students');
};

window.markPaymentUnpaid = (username, pid) => {
  if (!confirm('Mark this payment as UNPAID?')) return;
  const shared = getSharedState();
  if (shared.payments[username]) {
    shared.payments[username] = shared.payments[username].filter(p => p !== pid);
  }
  saveSharedState(shared);
  renderPage('payments_admin');
};

// ===================== QUIZ INIT =====================
initQuizHandlers(PHASES, getState, saveState, renderPage);

// ===================== KEYBOARD SHORTCUTS =====================
document.getElementById('password').addEventListener('keydown', e => { if (e.key === 'Enter') window.login(); });
document.getElementById('username').addEventListener('keydown', e => { if (e.key === 'Enter') window.login(); });
