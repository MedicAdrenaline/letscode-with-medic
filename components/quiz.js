export function renderQuiz(phase, state) {
  const quizKey = `quiz_${phase.id}`;
  const s = typeof state === 'function' ? state() : state;
  const passed = (s.quizzes || []).includes(phase.id);

  if (passed) {
    return `<div class="quiz-passed">
      <span class="quiz-passed-icon">✓</span>
      <span>Quiz passed! Phase unlocked.</span>
    </div>`;
  }

  const questionsHTML = phase.quiz.map((q, qi) => `
    <div class="quiz-question" id="qq-${phase.id}-${qi}">
      <div class="quiz-q-text"><span class="quiz-q-num">Q${qi + 1}.</span> ${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <div class="quiz-option" data-phase="${phase.id}" data-q="${qi}" data-o="${oi}" onclick="selectOption(${phase.id}, ${qi}, ${oi})">
            <span class="quiz-opt-letter">${['A','B','C','D'][oi]}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="qf-${phase.id}-${qi}" style="display:none"></div>
    </div>
  `).join('');

  return `
    <div class="quiz-wrap" id="quiz-${phase.id}">
      <div class="quiz-header">
        <div class="section-lbl">// PHASE QUIZ — REQUIRED TO COMPLETE</div>
        <div class="quiz-desc">Answer all questions correctly to mark this phase done. You can retry wrong answers.</div>
      </div>
      <div class="quiz-questions">${questionsHTML}</div>
      <button class="quiz-submit-btn" onclick="submitQuiz(${phase.id})">Submit Answers →</button>
      <div class="quiz-result" id="qr-${phase.id}" style="display:none"></div>
    </div>
  `;
}

export function initQuizHandlers(PHASES, state, saveState, renderPage) {
  window.selectOption = (phaseId, qIndex, optIndex) => {
    // Deselect others in same question
    document.querySelectorAll(`[data-phase="${phaseId}"][data-q="${qIndex}"]`).forEach(el => {
      el.classList.remove('selected');
    });
    const el = document.querySelector(`[data-phase="${phaseId}"][data-q="${qIndex}"][data-o="${optIndex}"]`);
    if (el) el.classList.add('selected');
  };

  window.submitQuiz = (phaseId) => {
    const phase = PHASES.find(p => p.id === phaseId);
    if (!phase) return;

    let allCorrect = true;
    let allAnswered = true;

    phase.quiz.forEach((q, qi) => {
      const selected = document.querySelector(`[data-phase="${phaseId}"][data-q="${qi}"].selected`);
      const feedback = document.getElementById(`qf-${phaseId}-${qi}`);
      const questionEl = document.getElementById(`qq-${phaseId}-${qi}`);

      if (!selected) {
        allAnswered = false;
        if (questionEl) questionEl.style.border = '1px solid rgba(249,115,22,0.5)';
        return;
      }

      const chosenIndex = parseInt(selected.dataset.o);
      const correct = chosenIndex === q.answer;

      // Style all options
      document.querySelectorAll(`[data-phase="${phaseId}"][data-q="${qi}"]`).forEach(opt => {
        const oi = parseInt(opt.dataset.o);
        if (oi === q.answer) opt.classList.add('correct');
        else if (oi === chosenIndex && !correct) opt.classList.add('wrong');
        opt.style.pointerEvents = 'none';
      });

      // Show feedback
      if (feedback) {
        feedback.style.display = 'block';
        feedback.className = `quiz-feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}`;
        feedback.innerHTML = `<strong>${correct ? '✓ Correct!' : '✗ Wrong.'}</strong> ${q.explanation}`;
      }

      if (!correct) allCorrect = false;
    });

    if (!allAnswered) {
      const resultEl = document.getElementById(`qr-${phaseId}`);
      if (resultEl) {
        resultEl.style.display = 'block';
        resultEl.className = 'quiz-result result-fail';
        resultEl.textContent = 'Please answer all questions before submitting.';
      }
      return;
    }

    const resultEl = document.getElementById(`qr-${phaseId}`);
    const submitBtn = document.querySelector(`#quiz-${phaseId} .quiz-submit-btn`);

    if (allCorrect) {
      if (resultEl) {
        resultEl.style.display = 'block';
        resultEl.className = 'quiz-result result-pass';
        resultEl.innerHTML = '🎉 Perfect score! Quiz passed. You can now mark this phase as complete.';
      }
      // Save quiz pass
      const s = state();
      s.quizzes = s.quizzes || [];
      if (!s.quizzes.includes(phaseId)) s.quizzes.push(phaseId);
      saveState(s);
      if (submitBtn) submitBtn.style.display = 'none';
    } else {
      if (resultEl) {
        resultEl.style.display = 'block';
        resultEl.className = 'quiz-result result-fail';
        resultEl.innerHTML = '✗ Some answers were wrong. Review the explanations above, then <button class="retry-btn" onclick="retryQuiz(' + phaseId + ')">Retry Quiz →</button>';
      }
      if (submitBtn) submitBtn.style.display = 'none';
    }
  };

  window.retryQuiz = (phaseId) => {
    renderPage('roadmap');
    // Re-open the phase after re-render
    setTimeout(() => {
      const el = document.getElementById(`phase-${phaseId}`);
      if (el) el.classList.add('open');
    }, 50);
  };
}
