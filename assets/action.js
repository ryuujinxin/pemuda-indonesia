(()=>{
  const actions=[
    {id:'cerita-lokal',number:'01',theme:'NUSANTARA',title:'Dengarkan satu cerita lokal',text:'Ajak anggota keluarga atau teman berbagi cerita, kebiasaan, atau ungkapan dari daerahnya. Dengarkan sampai selesai dan tanyakan dengan hormat.',step:'Luangkan 10 menit untuk mendengar dan mencatat satu hal baru.'},
    {id:'cek-fakta',number:'02',theme:'RUANG DIGITAL',title:'Periksa sebelum membagikan',text:'Pilih satu kabar yang kamu temui hari ini. Telusuri sumber awal dan cari pembanding tepercaya. Jika belum jelas, tahan untuk tidak meneruskannya.',step:'Bagikan sumber yang sudah kamu periksa, bukan hanya tangkapan layar.'},
    {id:'aksi-hijau',number:'03',theme:'LINGKUNGAN',title:'Rawat satu ruang bersama',text:'Pilih area kecil di rumah, sekolah, atau lingkungan yang bisa dirapikan atau dirawat bersama. Minta izin dan ajak satu orang untuk ikut.',step:'Lakukan aksi sederhana selama 10 menit, lalu jaga hasilnya.'},
    {id:'ruang-inklusif',number:'04',theme:'PERSATUAN',title:'Buka ruang untuk suara lain',text:'Dalam obrolan atau kerja kelompok, ajak teman yang belum banyak bicara untuk menyampaikan pendapat. Beri waktu dan dengarkan tanpa memotong.',step:'Coba satu putaran bicara agar semua mendapat giliran.'},
    {id:'ide-2045',number:'05',theme:'INDONESIA 2045',title:'Rancang solusi kecil untuk sekitar',text:'Tulis satu masalah di sekolah atau lingkungan, siapa yang terdampak, dan satu ide yang bisa dicoba. Minta masukan sebelum mulai.',step:'Buat rancangan tiga baris: masalah, ide, langkah pertama.'}
  ];
  const grid=document.getElementById('actionGrid');
  const progressbar=document.querySelector('.action-progress-track');
  function read(){return window.ruangMudaReadProgress()}
  function render(){
    const data=read();
    const done=actions.filter(item=>data.actionsCompleted.includes(item.id)).length;
    const percent=Math.round(done/actions.length*100);
    document.getElementById('actionProgressCount').textContent=`${done} / ${actions.length}`;
    document.getElementById('actionProgressTitle').textContent=done===actions.length?'Semua tantangan sudah dicoba!':done?`${done} langkah sudah kamu jalankan.`:'Belum ada aksi yang ditandai.';
    document.getElementById('actionProgressHint').textContent=done===actions.length?`Keren, kamu mendapat ${done*15} XP dari tantangan aksi.`:`Setiap tantangan selesai memberi 15 XP · ${actions.length-done} langkah tersisa.`;
    document.getElementById('actionProgressBar').style.width=`${percent}%`;
    progressbar.setAttribute('aria-valuenow',String(done));
    grid.innerHTML=actions.map(item=>{
      const complete=data.actionsCompleted.includes(item.id);
      return `<article class="action-card${complete?' is-complete':''}"><div class="action-card-top"><span class="action-number">${item.number}</span><span class="action-theme">${item.theme}</span></div><h2>${item.title}</h2><p>${item.text}</p><div class="action-step"><span>COBA INI</span><strong>${item.step}</strong></div><button class="btn ${complete?'btn-outline':'action-complete-btn'}" type="button" data-action-id="${item.id}" ${complete?'disabled aria-pressed="true"':'aria-pressed="false"'}>${complete?'Sudah dilakukan · +15 XP':'Tandai sudah dilakukan · +15 XP'}</button></article>`;
    }).join('');
  }
  grid.addEventListener('click',event=>{
    const button=event.target.closest('[data-action-id]');
    if(!button)return;
    const id=button.dataset.actionId;
    const data=read();
    if(data.actionsCompleted.includes(id))return;
    data.actionsCompleted.push(id);
    data.xp+=15;
    window.ruangMudaSaveProgress(data);
    render();
    window.ruangMudaToast('Aksi dicatat. +15 XP untuk langkah nyatamu!');
  });
  render();
})();
