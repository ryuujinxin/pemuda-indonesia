(()=>{
  const lessons=window.RUANG_MUDA_LESSONS||[];
  const storageKey='ruangMudaProgress_v2';
  let progress={xp:0,completed:[],bestScore:null};
  try{progress={...progress,...JSON.parse(localStorage.getItem(storageKey)||'{}')}}catch(e){}
  const grid=document.getElementById('lessonGrid');
  const search=document.getElementById('lessonSearch');
  const empty=document.getElementById('lessonEmpty');
  const loadMore=document.getElementById('loadMore');
  const resultCount=document.getElementById('resultCount');
  let activeFilter='all',visibleCount=10,query='';
  const pad=value=>String(value).padStart(2,'0');
  function filteredLessons(){
    const q=query.trim().toLocaleLowerCase('id');
    return lessons.map((lesson,index)=>({...lesson,index})).filter(lesson=>{
      const matchesFilter=activeFilter==='all'||lesson.track===activeFilter;
      const searchable=`${lesson.title} ${lesson.summary} ${lesson.trackLabel}`.toLocaleLowerCase('id');
      return matchesFilter&&(!q||searchable.includes(q));
    });
  }
  function render(){
    const matches=filteredLessons();
    const visible=matches.slice(0,visibleCount);
    const completedCount=lessons.filter(lesson=>progress.completed.includes(lesson.id)).length;
    const percent=Math.round(completedCount/lessons.length*100);
    document.getElementById('learnProgressText').textContent=`${completedCount} dari ${lessons.length} materi selesai · ${progress.xp||0} XP`;
    document.getElementById('learnPercent').textContent=`${percent}%`;
    document.getElementById('learnProgressBar').style.width=`${percent}%`;
    grid.innerHTML=visible.map(lesson=>{
      const complete=progress.completed.includes(lesson.id);
      return `<article class="lesson-card" data-category="${lesson.track}" data-lesson="${lesson.id}"><div class="lesson-no">${pad(lesson.index+1)}</div><div><div class="lesson-meta"><span class="tag">${lesson.trackLabel}</span><span class="tag">${lesson.duration} menit</span></div><h2>${lesson.title}</h2><p>${lesson.summary}</p><a class="btn lesson-open" href="materi.html?topik=${encodeURIComponent(lesson.id)}">${complete?'Baca lagi':'Buka materi'} <span aria-hidden="true">→</span></a>${complete?'<span class="completed">Sudah selesai</span>':''}</div></article>`;
    }).join('');
    empty.hidden=matches.length>0;
    const showing=Math.min(visibleCount,matches.length);
    resultCount.textContent=query||activeFilter!=='all'?`Menampilkan ${showing} dari ${matches.length} hasil`:`Menampilkan ${showing} dari ${lessons.length}`;
    loadMore.hidden=showing>=matches.length||matches.length===0;
  }
  document.querySelectorAll('.filter-chip').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('.filter-chip').forEach(item=>item.classList.remove('active'));
    button.classList.add('active');activeFilter=button.dataset.filter;visibleCount=10;render();
  }));
  search.addEventListener('input',()=>{query=search.value;visibleCount=10;render()});
  loadMore.addEventListener('click',()=>{visibleCount+=10;render()});
  render();
})();
