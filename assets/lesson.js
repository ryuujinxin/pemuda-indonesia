(()=>{
  const lessons=window.RUANG_MUDA_LESSONS||[];
  const params=new URLSearchParams(location.search);
  const id=params.get('topik');
  const index=lessons.findIndex(lesson=>lesson.id===id);
  if(index<0){location.replace('index.html');return}
  const lesson=lessons[index];
  document.title=`${lesson.title} — Ruang Muda`;
  document.getElementById('lessonCrumb').textContent=lesson.title;
  document.getElementById('lessonCategory').textContent=lesson.trackLabel;
  document.getElementById('lessonTitle').textContent=lesson.title;
  document.getElementById('lessonLead').textContent=lesson.summary;
  document.getElementById('lessonIntroTitle').textContent='Pahami idenya, lalu coba dalam keseharian.';
  document.getElementById('lessonIntro').textContent=lesson.intro;
  document.getElementById('lessonDuration').textContent=`Bacaan ${lesson.duration} menit`;
  document.getElementById('diagramCaption').textContent=lesson.caption;
  document.getElementById('reflectionPrompt').textContent=lesson.reflection;
  document.getElementById('diagramIndex').textContent=`${String(index+1).padStart(2,'0')} — 50`;

  const diagram=document.getElementById('lessonDiagram');
  diagram.className=`lesson-diagram diagram-track-${lesson.track}`;
  diagram.setAttribute('aria-label',`Gambaran materi: ${lesson.steps.map(step=>step.name).join(', ')}`);
  diagram.innerHTML=`<div class="concept-map">${lesson.steps.map((step,stepIndex)=>`<div class="concept-step"><span>${String(stepIndex+1).padStart(2,'0')}</span><strong>${step.name}</strong></div>`).join('')}</div>`;
  document.getElementById('lessonPoints').innerHTML=lesson.steps.map((step,stepIndex)=>`<article class="lesson-point"><span class="point-index">${String(stepIndex+1).padStart(2,'0')}</span><div><h3>${step.name}</h3><p>${step.detail}</p></div></article>`).join('');

  const nextButton=document.getElementById('nextLesson');
  if(index<lessons.length-1){nextButton.href=`materi.html?topik=${encodeURIComponent(lessons[index+1].id)}`;nextButton.innerHTML='Materi berikutnya <span aria-hidden="true">→</span>'}
  else{nextButton.href='index.html';nextButton.innerHTML='Kembali ke semua materi <span aria-hidden="true">→</span>'}

  const storageKey='ruangMudaProgress_v2';
  let progress={xp:0,completed:[],bestScore:null};
  try{progress={...progress,...JSON.parse(localStorage.getItem(storageKey)||'{}')}}catch(e){}
  const completeButton=document.getElementById('completeLesson');
  function updateButton(){if(progress.completed.includes(lesson.id)){completeButton.textContent='Materi sudah selesai ✓';completeButton.disabled=true}}
  completeButton.addEventListener('click',()=>{
    if(progress.completed.includes(lesson.id))return;
    progress.completed.push(lesson.id);progress.xp=(progress.xp||0)+20;
    if(window.ruangMudaSaveProgress)window.ruangMudaSaveProgress(progress);else{try{localStorage.setItem(storageKey,JSON.stringify(progress))}catch(e){}}
    updateButton();window.ruangMudaToast?.('Materi selesai · 20 XP ditambahkan');
  });
  updateButton();
})();
