// ---- App state ----
const state = {
  current: 'home',
  done: new Set(), // completed lesson ids (in-memory only, resets per session)
};

const STAR_SVG = `<svg class="star-emblem" width="30" height="30" viewBox="0 0 40 40" fill="none">
  <path d="M20 2 L24 14 L36 14 L26 21 L30 34 L20 26 L10 34 L14 21 L4 14 L16 14 Z"
    fill="none" stroke="currentColor" stroke-width="1.4"/>
</svg>`;

function normalize(str){
  return str.trim().toLowerCase()
    .replace(/i̇/g,'i')
    .replace(/[.!?]+$/,'');
}

// ---------- Sidebar ----------
function renderSidebar(){
  const sb = document.getElementById('sidebar');
  let html = `
    <div class="brand">
      <div style="color:var(--gold)">${STAR_SVG}</div>
      <div class="brand-title">Türkçe Dilbilgisi<small>Курс турецкой грамматики</small></div>
    </div>
    <div class="nav-item ${state.current==='home'?'active':''}" data-page="home">
      <div class="nav-num">⌂</div><div class="nav-label">Главная</div>
    </div>
  `;
  LEVELS.forEach(level=>{
    html += `<div class="nav-group-label">${level.label}</div>`;
    LESSONS.filter(l=>l.level===level.id).forEach(l=>{
      const active = state.current === 'lesson-'+l.id ? 'active':'';
      const done = state.done.has(l.id) ? 'done':'';
      html += `
        <div class="nav-item ${active} ${done}" data-page="lesson-${l.id}">
          <div class="nav-num">${l.id}</div>
          <div class="nav-label">${l.title}</div>
          <div class="nav-done"></div>
        </div>`;
    });
  });
  sb.innerHTML = html;
  sb.querySelectorAll('.nav-item').forEach(el=>{
    el.addEventListener('click', ()=>{
      navigate(el.dataset.page);
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebarScrim').classList.remove('show');
    });
  });
}

// ---------- Home page ----------
function renderHome(){
  const total = LESSONS.length;
  const totalEx = LESSONS.reduce((s,l)=>s+l.exercises.length,0);
  let html = `
  <section class="hero">
    <div class="tile-motif"></div>
    <div class="hero-eyebrow">Rusça konuşanlar için · для говорящих по-русски</div>
    <h1>Грамматика турецкого <em>языка</em>, объяснённая по-человечески</h1>
    <p>Полный авторский курс: от алфавита и гармонии гласных до залогов и деепричастий.
    В каждом уроке — теория, разбор нюансов, живые примеры и интерактивные задания
    с мгновенной проверкой.</p>
    <div class="hero-stats">
      <div class="stat"><b>${total}</b><span>уроков</span></div>
      <div class="stat"><b>${totalEx}</b><span>заданий с проверкой</span></div>
      <div class="stat"><b>3</b><span>уровня сложности</span></div>
    </div>
    <div class="cta-row">
      <a class="btn btn-primary" data-page="lesson-1">Начать с Урока 1 →</a>
      <a class="btn btn-ghost" data-page="lesson-9">Продолжить с падежей и времён</a>
    </div>
  </section>
  <section class="section-block">
    <div class="lesson-kicker">Программа курса</div>
    <div class="level-grid">
      ${LEVELS.map(level=>`
        <div class="level-card">
          <h3>${level.label}</h3>
          <p>${level.desc}</p>
          <ul>
            ${LESSONS.filter(l=>l.level===level.id).map(l=>`<li data-page="lesson-${l.id}">${l.id}. ${l.title}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  </section>
  `;
  const main = document.getElementById('main');
  main.innerHTML = `<div class="page active">${html}</div>`;
  main.querySelectorAll('[data-page]').forEach(el=>{
    el.addEventListener('click', ()=>navigate(el.dataset.page));
  });
}

// ---------- Lesson page ----------
function renderLesson(lesson){
  const idx = LESSONS.findIndex(l=>l.id===lesson.id);
  const prev = LESSONS[idx-1];
  const next = LESSONS[idx+1];

  const theoryHtml = lesson.theory.map(t=>`
    <div class="theory-block">
      <h3>${t.h}</h3>
      ${t.html}
    </div>
  `).join('');

  const nuancesHtml = lesson.nuances.map(n=>`<div class="nuance"><b>Нюанс.</b> ${n}</div>`).join('');

  const examplesHtml = `
    <div class="examples">
      ${lesson.examples.map(e=>`<div class="example-row"><span class="tr">${e.tr}</span><span class="ru">${e.ru}</span></div>`).join('')}
    </div>
  `;

  const exercisesHtml = lesson.exercises.map((ex,i)=>renderExercise(lesson.id, ex, i)).join('');

  const html = `
    <div class="lesson-kicker">Урок ${lesson.id} из ${LESSONS.length}</div>
    <h1 class="lesson-title">${lesson.title}</h1>
    <p class="lesson-subtitle">${lesson.subtitle}</p>

    ${theoryHtml}
    ${nuancesHtml}

    <div class="theory-block">
      <h3>Примеры</h3>
      ${examplesHtml}
    </div>

    <div class="exercise-wrap">
      <div class="lesson-kicker">Проверьте себя</div>
      <p class="lesson-subtitle" style="margin-bottom:20px;">Ответьте и нажмите «Проверить» — обратная связь появится сразу.</p>
      ${exercisesHtml}
    </div>

    <div class="lesson-footer-nav">
      <div>${prev ? `<button class="btn btn-ghost" data-nav="lesson-${prev.id}">← Урок ${prev.id}</button>` : `<button class="btn btn-ghost" data-nav="home">← На главную</button>`}</div>
      <div class="progress-pill">Пройдено уроков: <b>${state.done.size}/${LESSONS.length}</b></div>
      <div>${next ? `<button class="btn btn-primary" data-nav="lesson-${next.id}">Урок ${next.id} →</button>` : `<button class="btn btn-primary" data-nav="home">Курс завершён 🎉</button>`}</div>
    </div>
  `;

  const main = document.getElementById('main');
  main.innerHTML = `<div class="page active">${html}</div>`;
  main.querySelectorAll('[data-nav]').forEach(el=>{
    el.addEventListener('click', ()=>navigate(el.dataset.nav));
  });
  wireExercises(lesson);
}

function renderExercise(lessonId, ex, i){
  const qid = `ex-${lessonId}-${i}`;
  if(ex.type === 'choice'){
    return `
      <div class="ex-card" id="${qid}">
        <p class="ex-q"><b>${i+1}.</b> ${ex.q}</p>
        <div class="ex-options">
          ${ex.options.map((opt,oi)=>`<div class="ex-opt" data-idx="${oi}">${opt}</div>`).join('')}
        </div>
        <div class="ex-feedback"></div>
      </div>
    `;
  } else {
    return `
      <div class="ex-card" id="${qid}">
        <p class="ex-q"><b>${i+1}.</b> ${ex.q}</p>
        <div class="ex-input-row">
          <input class="ex-input" type="text" placeholder="Впишите ответ по-турецки…" autocomplete="off" autocapitalize="off" spellcheck="false">
          <button class="ex-check">Проверить</button>
        </div>
        <div class="ex-feedback"></div>
      </div>
    `;
  }
}

function markLessonProgress(lessonId){
  const card = document.querySelectorAll(`.ex-card`);
  // Consider lesson "done" once at least one exercise answered correctly in this session view;
  // simple heuristic: mark done when user gets ANY exercise right in the lesson.
  state.done.add(lessonId);
  renderSidebar();
  const pill = document.querySelector('.progress-pill b');
  if(pill) pill.textContent = `${state.done.size}/${LESSONS.length}`;
}

function wireExercises(lesson){
  lesson.exercises.forEach((ex,i)=>{
    const qid = `ex-${lesson.id}-${i}`;
    const card = document.getElementById(qid);
    if(!card) return;
    const feedback = card.querySelector('.ex-feedback');

    if(ex.type === 'choice'){
      const opts = card.querySelectorAll('.ex-opt');
      opts.forEach(opt=>{
        opt.addEventListener('click', ()=>{
          if(card.dataset.answered) return;
          card.dataset.answered = '1';
          const chosen = parseInt(opt.dataset.idx,10);
          opts.forEach((o,oi)=>{
            if(oi === ex.answer) o.classList.add('correct');
            else if(oi === chosen) o.classList.add('wrong');
          });
          feedback.classList.add('show');
          if(chosen === ex.answer){
            feedback.classList.add('ok');
            feedback.innerHTML = `✓ Верно! ${ex.explain}`;
            markLessonProgress(lesson.id);
          } else {
            feedback.classList.add('bad');
            feedback.innerHTML = `✗ Не совсем. ${ex.explain}`;
          }
        });
      });
    } else {
      const input = card.querySelector('.ex-input');
      const btn = card.querySelector('.ex-check');
      const check = ()=>{
        const val = normalize(input.value || '');
        const ok = ex.answer.some(a=>normalize(a) === val);
        feedback.classList.add('show');
        if(ok){
          feedback.classList.remove('bad'); feedback.classList.add('ok');
          feedback.innerHTML = `✓ Верно! ${ex.explain}`;
          input.style.borderColor = 'var(--teal-bright)';
          markLessonProgress(lesson.id);
        } else {
          feedback.classList.remove('ok'); feedback.classList.add('bad');
          feedback.innerHTML = `✗ Пока не то. Правильный ответ: <span class="tr">${ex.answer[0]}</span>. ${ex.explain}`;
          input.style.borderColor = 'var(--coral)';
        }
      };
      btn.addEventListener('click', check);
      input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); check(); } });
    }
  });
}

// ---------- Router ----------
function navigate(page){
  state.current = page;
  window.scrollTo(0,0);
  renderSidebar();
  if(page === 'home'){
    renderHome();
  } else if(page.startsWith('lesson-')){
    const id = parseInt(page.split('-')[1],10);
    const lesson = LESSONS.find(l=>l.id===id);
    if(lesson) renderLesson(lesson);
    else renderHome();
  }
}

// ---------- Mobile menu ----------
document.getElementById('menuToggle').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarScrim').classList.toggle('show');
});
document.getElementById('sidebarScrim').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarScrim').classList.remove('show');
});

// ---------- Init ----------
renderSidebar();
navigate('home');
