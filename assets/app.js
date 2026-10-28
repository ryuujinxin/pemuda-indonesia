(()=>{
  const body=document.body;
  const base=body.dataset.base||'';
  const active=body.dataset.page||'home';
  const links=[['home','Beranda','index.html'],['learn','Belajar','jalur-belajar/index.html'],['video','Video','ruang-video/index.html'],['quiz','Kuis','kuis-cepat/index.html'],['action','Aksi','aksi/index.html']];
  const logo=`<img class="brand-mark" src="${base}assets/ruang-muda-logo.svg" alt="" aria-hidden="true" />`;
  const header=document.getElementById('site-header');
  if(header){
    header.innerHTML=`<div class="topline"><span class="topline-dot"></span><span class="topline-copy">Dari semangat 1928, bergerak bersama untuk 2045.</span></div><header class="site-header"><div class="wrap nav-row"><a class="brand" href="${base}index.html" aria-label="Ruang Muda — beranda">${logo}<span class="brand-name">ruang muda<small>belajar bareng, yuk</small></span></a><nav class="nav-links" id="siteNav" aria-label="Navigasi utama">${links.map(([key,label,path])=>`<a href="${base}${path}" ${active===key?'aria-current="page"':''}>${label}</a>`).join('')}</nav><div class="nav-actions"><a class="nav-xp" id="navXp" href="${base}kuis-cepat/index.html" aria-label="Lihat level dan XP"><span class="nav-xp-level" id="navXpLevel">LV 1</span><b id="navXpAmount">0 XP</b></a><button class="theme-toggle" id="themeToggle" aria-label="Beralih ke mode gelap" title="Mode terang / gelap"></button><a class="btn" href="${base}jalur-belajar/index.html">Yuk mulai <span aria-hidden="true">↗</span></a><button class="menu-toggle" id="menuToggle" aria-label="Buka navigasi" aria-expanded="false">☰</button></div></div></header>`;
  }
  const footer=document.getElementById('site-footer');
  if(footer){footer.innerHTML=`<footer class="page-footer"><div class="wrap footer-row"><a class="brand" href="${base}index.html">${logo}<span class="brand-name">ruang muda<small>belajar bareng, yuk</small></span></a><div class="footer-credit">Dirancang &amp; dikembangkan oleh <strong>Erlangga Prassetiawan</strong></div></div></footer>`}
  const root=document.documentElement;
  const themeButton=document.getElementById('themeToggle');
  const sun=`<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>`;
  const moon=`<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 14.2A8.6 8.6 0 0 1 9.8 3.3 8.8 8.8 0 1 0 20.8 14.2Z"/></svg>`;
  function setTheme(theme){root.dataset.theme=theme;try{localStorage.setItem('ruangMudaTheme_v2',theme)}catch(e){}const themeColor=document.querySelector('meta[name="theme-color"]');if(themeColor)themeColor.content=theme==='dark'?'#080d12':'#ffffff';if(themeButton){themeButton.innerHTML=theme==='dark'?sun:moon;themeButton.setAttribute('aria-label',theme==='dark'?'Beralih ke mode terang':'Beralih ke mode gelap')}}
  let initial='dark';try{initial=localStorage.getItem('ruangMudaTheme_v2')||'dark'}catch(e){}setTheme(initial);
  const progressKey='ruangMudaProgress_v2';
  window.ruangMudaReadProgress=()=>{let data={xp:0,completed:[],actionsCompleted:[],bestScore:null,quizRewards:[],quizCompletionAwarded:false,perfectQuizAwarded:false,quizSession:null};try{data={...data,...JSON.parse(localStorage.getItem(progressKey)||'{}')}}catch(e){}if(!Array.isArray(data.completed))data.completed=[];if(!Array.isArray(data.actionsCompleted))data.actionsCompleted=[];if(!Array.isArray(data.quizRewards))data.quizRewards=[];data.xp=Number(data.xp)||0;return data};
  window.ruangMudaSaveProgress=data=>{try{localStorage.setItem(progressKey,JSON.stringify(data))}catch(e){}window.ruangMudaUpdateXpDisplay?.()};
  window.ruangMudaGetLevel=xp=>{const level=Math.floor(Math.max(0,Number(xp)||0)/100)+1;const ranks=['Pemula','Penjelajah','Perangkai Ide','Penggerak','Penggerak Muda','Inspirator'];return {level,rank:ranks[Math.min(level-1,ranks.length-1)],within:Math.max(0,Number(xp)||0)%100,toNext:100-(Math.max(0,Number(xp)||0)%100)}};
  window.ruangMudaUpdateXpDisplay=()=>{const pill=document.getElementById('navXp');if(!pill)return;const data=window.ruangMudaReadProgress();const info=window.ruangMudaGetLevel(data.xp);document.getElementById('navXpLevel').textContent=`LV ${info.level}`;document.getElementById('navXpAmount').textContent=`${data.xp} XP`;pill.setAttribute('aria-label',`Level ${info.level}, ${data.xp} XP. Buka kuis`)};
  themeButton?.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
  const menu=document.getElementById('menuToggle');
  menu?.addEventListener('click',()=>{const nav=document.getElementById('siteNav');const isOpen=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen));menu.textContent=isOpen?'×':'☰'});
  document.querySelectorAll('#siteNav a').forEach(link=>link.addEventListener('click',()=>{document.getElementById('siteNav').classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='☰'}));
  window.ruangMudaToast=(message)=>{let el=document.querySelector('.toast');if(!el){el=document.createElement('div');el.className='toast';el.setAttribute('role','status');document.body.append(el)}el.textContent=message;el.classList.add('show');clearTimeout(window.__ruangToastTimer);window.__ruangToastTimer=setTimeout(()=>el.classList.remove('show'),2300)};
  window.ruangMudaUpdateXpDisplay();
})();
