(()=>{
  const q=(category,question,answers,correct,explanation)=>({category,question,answers,correct,explanation});
  const domains=[
    {id:'indonesia',number:'01',name:'Indonesia & Kebangsaan',short:'Sumpah Pemuda, persatuan, sejarah lokal, dan keberagaman Nusantara.',questions:[
      q('Sumpah Pemuda','Sumpah Pemuda diikrarkan pada tanggal…',['17 Agustus 1945','28 Oktober 1928','20 Mei 1908','1 Juni 1945'],1,'Sumpah Pemuda diikrarkan pada 28 Oktober 1928 dalam Kongres Pemuda II.'),
      q('Bahasa persatuan','Bahasa apa yang disebut sebagai bahasa persatuan dalam ikrar Sumpah Pemuda?',['Bahasa Jawa','Bahasa Melayu','Bahasa Indonesia','Bahasa daerah'],2,'Ikrar ketiga menyebut menjunjung bahasa persatuan, Bahasa Indonesia.'),
      q('Persatuan dalam keberagaman','Sikap yang mencerminkan persatuan dalam keberagaman adalah…',['Meminta semua kelompok punya kebiasaan yang sama','Bekerja sama sambil saling menghargai perbedaan','Menghindari teman dari daerah lain','Menganggap budaya sendiri paling baik'],1,'Persatuan tumbuh saat kita bekerja sama dan menghormati perbedaan.'),
      q('Sejarah pemuda','Apa pelajaran penting dari Kongres Pemuda II?',['Gagasan bersama dapat dirumuskan oleh pemuda lintas organisasi','Semua organisasi harus memiliki tujuan yang sama persis','Perbedaan daerah sebaiknya tidak dibicarakan','Perubahan hanya bisa dilakukan oleh satu kelompok'],0,'Kongres Pemuda II memperlihatkan pemuda dari beragam organisasi dapat membangun cita-cita bersama.'),
      q('Keberagaman Nusantara','Saat mempelajari kebiasaan dari daerah yang belum dikenal, langkah awal yang baik adalah…',['Membandingkannya dengan kebiasaan sendiri sebagai ukuran','Bertanya dengan rasa ingin tahu dan sikap hormat','Menyimpulkan dari satu unggahan','Menganggap semua orang di daerah itu sama'],1,'Bertanya dengan hormat memberi ruang bagi orang untuk menceritakan pengalamannya sendiri.'),
      q('Sejarah lokal','Agar cerita sejarah lokal lebih lengkap, kita sebaiknya…',['Mengandalkan satu ingatan saja','Menggabungkan cerita warga dengan arsip atau sumber lain','Menghapus bagian yang belum pasti','Membagikan cerita tanpa menyebut sumber'],1,'Cerita lisan dan sumber lain bisa saling melengkapi; perbedaan dan ketidakpastian perlu dicatat.'),
      q('Musyawarah','Agar diskusi kelas memberi ruang bagi banyak suara, kita dapat…',['Memberi giliran bicara dan mendengarkan sampai selesai','Meminta hanya ketua kelas yang bicara','Memotong pendapat yang berbeda','Memilih keputusan sebelum berdiskusi'],0,'Giliran bicara membantu peserta menyampaikan pendapat dengan lebih seimbang.'),
      q('Bahasa daerah','Bagaimana cara merawat bahasa daerah sekaligus memakai bahasa Indonesia sebagai penghubung?',['Mengejek logat yang belum dikenal','Menggunakan bahasa bersama tanpa merendahkan bahasa daerah','Melarang teman memakai bahasa keluarganya','Menganggap bahasa daerah tidak berguna'],1,'Bahasa Indonesia menghubungkan, sementara bahasa daerah menyimpan cerita dan pengetahuan lokal.'),
      q('Identitas kebangsaan','Pernyataan yang paling tepat tentang identitas Indonesia adalah…',['Identitas nasional menghapus semua identitas lokal','Identitas lokal dan rasa kebangsaan dapat tumbuh berdampingan','Hanya satu budaya yang membentuk Indonesia','Perbedaan membuat kerja sama mustahil'],1,'Rasa kebangsaan dapat menyatukan warga tanpa menghapus identitas dan pengalaman lokal.'),
      q('Pemuda dan Indonesia 2045','Contoh kontribusi pemuda untuk masa depan Indonesia adalah…',['Mengenali kebutuhan sekitar lalu merancang aksi bersama','Menunggu orang lain menyelesaikan semua masalah','Membagikan kabar tanpa memeriksa','Menghindari kerja sama lintas kelompok'],0,'Belajar, berkarya, dan bekerja bersama untuk menjawab kebutuhan nyata adalah bentuk kontribusi.'),
    ]},
    {id:'digital',number:'02',name:'Cakap Digital',short:'Cek fakta, privasi, keamanan akun, AI, dan etika di ruang digital.',questions:[
      q('Cek fakta','Kamu menerima berita yang membuatmu langsung marah. Apa langkah yang bijak?',['Bagikan secepatnya','Periksa sumber, tanggal, konteks, dan pembanding','Percaya karena banyak yang meneruskan','Ubah judulnya lalu bagikan'],1,'Emosi kuat bisa membuat kita terburu-buru; periksa sumber dan konteks sebelum membagikan.'),
      q('Pemeriksaan gambar','Sebuah foto viral diklaim berasal dari peristiwa hari ini. Apa yang sebaiknya diperiksa?',['Kecocokan gambar dengan sumber awal, tanggal, dan konteks','Jumlah tanda suka saja','Warna foto','Nama akun yang mengirim ulang pertama kali'],0,'Telusuri sumber awal dan konteks gambar; pencarian gambar balik dapat membantu.'),
      q('Privasi','Seseorang meminta kode verifikasi akunmu lewat pesan. Apa yang sebaiknya dilakukan?',['Mengirim kode jika orang itu mengaku petugas','Tidak membagikannya dan memeriksa lewat kanal resmi','Mengirim sebagian angka saja','Mengunggah kode agar teman mengecek'],1,'Kode verifikasi bersifat rahasia. Jangan bagikan lewat pesan atau telepon.'),
      q('Kata sandi','Kebiasaan yang membantu melindungi akun adalah…',['Memakai satu kata sandi untuk semua akun','Membuat kata sandi unik dan mengaktifkan verifikasi tambahan','Menyimpan kata sandi di bio publik','Memakai tanggal lahir agar mudah diingat'],1,'Kata sandi unik dan verifikasi tambahan mengurangi dampak jika satu akun bermasalah.'),
      q('Penipuan daring','Pesan mengabarkan akunmu akan ditutup dalam lima menit dan menyertakan tautan. Apa respons terbaik?',['Klik tautan dan masukkan kata sandi','Berhenti, lalu cek akun melalui aplikasi atau alamat resmi','Teruskan pesan ke semua kontak','Balas dengan kode verifikasi'],1,'Tekanan waktu dan tautan tak jelas sering dipakai untuk memancing tindakan tergesa-gesa.'),
      q('AI untuk belajar','Saat memakai jawaban dari alat AI untuk tugas, kamu sebaiknya…',['Menerima semua hasil tanpa diperiksa','Memeriksa klaim dengan sumber tepercaya dan memahami jawabannya','Memasukkan data pribadi agar hasil lebih lengkap','Menyatakan semua tulisan sebagai fakta'],1,'AI dapat keliru. Periksa klaim dan ikuti aturan tugas tentang penggunaan bantuan.'),
      q('Algoritma','Mengapa linimasa dua orang bisa menampilkan konten berbeda?',['Platform dapat menyesuaikan rekomendasi dari aktivitas masing-masing','Internet mengirim halaman secara acak tanpa aturan','Semua pengguna selalu melihat urutan yang sama','Linimasa hanya ditentukan usia perangkat'],0,'Rekomendasi dapat dipengaruhi oleh tontonan, klik, dan interaksi tiap pengguna.'),
      q('Perundungan digital','Kamu melihat teman dirundung di grup. Tindakan yang lebih aman adalah…',['Ikut membalas dengan hinaan','Menyimpan bukti seperlunya, melaporkan, dan mencari bantuan orang tepercaya','Menyebarkan tangkapan layar ke grup lain','Menyalahkan teman yang menjadi sasaran'],1,'Dukung teman, hindari memperluas sebaran konten, dan cari bantuan melalui jalur yang aman.'),
      q('Etika digital','Saat tidak setuju dengan pendapat di internet, sebaiknya…',['Mengkritik gagasannya dengan bahasa yang hormat','Menyerang identitas penulis','Menyebarkan data pribadinya','Mengajak orang lain membanjiri akunnya'],0,'Diskusi yang tegas tetap bisa membahas gagasan tanpa menyerang pribadi.'),
      q('Hak cipta dan izin','Kamu ingin memakai foto milik orang lain untuk poster sekolah. Apa yang tepat?',['Menghapus nama pembuatnya','Meminta izin atau memakai gambar berlisensi sesuai ketentuannya','Menganggap semua gambar internet bebas dipakai','Memotong tanda air pada foto'],1,'Hormati pembuat karya: periksa lisensi dan minta izin jika diperlukan.'),
    ]},
    {id:'lingkungan',number:'03',name:'Lingkungan & Aksi',short:'Kebiasaan hijau, pengelolaan sampah, dan aksi yang berangkat dari sekitar.',questions:[
      q('Pemilahan sampah','Sebelum memilah sampah untuk disetor, hal yang penting dilakukan adalah…',['Memeriksa aturan pengelola atau bank sampah setempat','Mencampur semua bahan agar cepat','Membakar sampah di halaman','Mengirim semua jenis ke satu tempat tanpa bertanya'],0,'Sistem penerimaan berbeda-beda, jadi cari tahu ketentuan pengelola di daerahmu.'),
      q('Barang guna ulang','Kebiasaan yang dapat mengurangi kemasan sekali pakai adalah…',['Membawa botol minum guna ulang jika memungkinkan','Mengambil beberapa botol baru setiap hari','Membuang botol ke selokan','Membeli barang baru untuk mengganti semua barang lama'],0,'Memakai kembali barang yang sudah dimiliki dapat mengurangi kebutuhan kemasan baru.'),
      q('Sisa makanan','Cara sederhana mencegah makanan terbuang adalah…',['Merencanakan kebutuhan dan mengambil porsi secukupnya','Membeli bahan tanpa melihat stok di rumah','Membuang makanan yang masih layak tanpa diperiksa','Memasak porsi sebanyak mungkin setiap hari'],0,'Rencana belanja dan porsi sesuai kebutuhan membantu mengurangi sisa.'),
      q('Hemat energi','Kamu meninggalkan ruang kelas yang kosong. Kebiasaan yang baik adalah…',['Mematikan lampu atau alat yang tidak digunakan jika aman','Membiarkan semua alat menyala','Mencabut perangkat orang lain tanpa izin','Menutup ventilasi agar lampu lebih terang'],0,'Matikan alat yang tidak dipakai dengan mengikuti aturan keselamatan setempat.'),
      q('Air bersih','Kamu melihat keran bersama terus menetes. Langkah awal yang berguna adalah…',['Memberi tahu pengelola atau orang yang dapat memperbaikinya','Membiarkannya karena hanya sedikit','Mencoba membongkar instalasi tanpa izin','Menutup saluran air seluruh gedung'],0,'Laporkan kebocoran agar pihak yang bertanggung jawab dapat memeriksanya.'),
      q('Keanekaragaman hayati','Mengapa tanaman lokal dapat menjadi pilihan baik untuk ruang hijau?',['Dapat sesuai dengan kondisi setempat dan mendukung kehidupan sekitar','Selalu tumbuh tanpa perawatan di semua tempat','Tidak perlu mengenali jenisnya','Harus menggantikan seluruh tanaman lain'],0,'Tanaman yang sesuai kondisi lokal dapat membantu merawat ruang dan makhluk hidup di sekitarnya.'),
      q('Ruang hijau','Sebelum menanam di taman sekolah, sebaiknya…',['Meminta izin dan memahami kebutuhan serta aturan perawatannya','Menanam di mana saja tanpa bertanya','Memilih tanaman hanya dari warna bunganya','Menutup jalur pejalan kaki'],0,'Koordinasi dan rencana perawatan membantu aksi hijau bertahan lebih lama.'),
      q('Transportasi','Untuk perjalanan dekat, pilihan yang lebih ramah lingkungan jika kondisi aman memungkinkan adalah…',['Berjalan kaki atau bersepeda','Meminta kendaraan menunggu dengan mesin menyala','Menggunakan kendaraan untuk jarak beberapa meter','Membiarkan kendaraan berputar-putar'],0,'Berjalan atau bersepeda dapat mengurangi penggunaan kendaraan bermotor untuk jarak dekat.'),
      q('Merancang aksi','Kelompokmu ingin mengurangi sampah di sekolah. Langkah pertama yang paling membantu adalah…',['Mengamati jenis dan lokasi sampah yang paling sering muncul','Membeli banyak alat sebelum tahu kebutuhan','Membuat aturan tanpa berbicara dengan warga sekolah','Menentukan hasil tanpa melihat kondisi'],0,'Amati masalah dan kebutuhan dulu agar aksi yang dipilih sesuai dengan situasi.'),
      q('Evaluasi aksi','Setelah menjalankan kegiatan bersih lingkungan, kelompok sebaiknya…',['Melihat hasil, mendengar masukan, lalu merencanakan langkah berikutnya','Menganggap semua masalah sudah selesai','Membuang catatan kegiatan','Mengulang kegiatan tanpa melihat hasil'],0,'Evaluasi sederhana membantu kelompok mengetahui apa yang berhasil dan perlu diperbaiki.'),
    ]},
    {id:'masa',number:'04',name:'Skill & Masa Depan',short:'Tujuan, kreativitas, kerja tim, literasi keuangan, dan kesiapan berkarya.',questions:[
      q('Mengenali diri','Saat memilih keterampilan yang ingin dipelajari, titik awal yang baik adalah…',['Mengenali minat, kebutuhan, dan hal yang ingin dikembangkan','Memilih hanya karena sedang populer','Mengikuti pilihan orang lain tanpa bertanya','Menghindari semua hal baru'],0,'Minat dan kebutuhan diri dapat membantu menentukan langkah belajar yang terasa bermakna.'),
      q('Tujuan belajar','Tujuan belajar yang lebih mudah ditindaklanjuti adalah…',['“Aku ingin lebih pintar”','“Aku akan berlatih presentasi 15 menit, tiga kali minggu ini”','“Nanti aku belajar kalau sempat”','“Aku harus langsung menjadi yang terbaik”'],1,'Tujuan yang jelas dan memiliki langkah konkret lebih mudah dipantau.'),
      q('Berpikir kritis','Sebelum menerima sebuah klaim sebagai dasar keputusan, kita perlu…',['Mencari bukti dan memeriksa sumbernya','Memercayainya jika terdengar meyakinkan','Membagikannya agar orang lain menilai','Mengabaikan semua pendapat berbeda'],0,'Periksa bukti dan sumber sebelum menggunakan klaim untuk mengambil keputusan.'),
      q('Pemecahan masalah','Tim menemukan masalah baru saat menjalankan proyek. Langkah awal yang baik adalah…',['Memahami penyebab dan siapa yang terdampak','Langsung menyalahkan anggota tim','Mengganti tujuan tanpa diskusi','Menyembunyikan masalah sampai selesai'],0,'Memahami penyebab dan dampak membantu tim memilih solusi yang sesuai.'),
      q('Komunikasi','Agar instruksi kerja kelompok dipahami, kita sebaiknya…',['Menyebut tujuan, tugas, dan waktu dengan jelas','Menggunakan petunjuk samar','Menganggap semua orang sudah tahu','Memberi instruksi berbeda kepada tiap orang'],0,'Tujuan, peran, dan tenggat yang jelas mengurangi kebingungan.'),
      q('Literasi keuangan','Kamu mendapat uang saku untuk seminggu. Langkah yang membantu mengaturnya adalah…',['Mencatat kebutuhan utama dan menyisihkan sesuai rencana','Menghabiskan semuanya di hari pertama','Meminjam lagi tanpa menghitung','Membeli karena teman membeli'],0,'Mencatat kebutuhan dan membuat rencana sederhana membantu mengendalikan pengeluaran.'),
      q('Kerja tim','Pembagian tugas yang adil dalam proyek sebaiknya mempertimbangkan…',['Tujuan, kemampuan, waktu, dan kesepakatan anggota','Siapa yang paling mudah disuruh','Agar semua tugas jatuh pada satu orang','Urutan nama anggota saja'],0,'Pembagian peran yang disepakati membuat kontribusi lebih seimbang dan jelas.'),
      q('Umpan balik','Teman memberi masukan pada hasil kerjamu. Respons yang membantu adalah…',['Mendengarkan, bertanya jika belum jelas, lalu memilih perbaikan yang relevan','Langsung menganggapnya sebagai serangan','Menghapus semua hasil kerja','Membalas dengan mengejek'],0,'Umpan balik dapat membantu memperbaiki karya jika didengarkan dan dipertimbangkan.'),
      q('Kreativitas','Cara sederhana mengembangkan ide menjadi karya adalah…',['Membuat contoh awal kecil lalu meminta masukan','Menunggu ide yang sempurna','Menyimpan ide tanpa pernah mencoba','Meniru karya orang tanpa izin'],0,'Contoh awal membantu menguji ide dan mengumpulkan masukan sebelum dikembangkan.'),
      q('Belajar sepanjang hayat','Teknologi atau kebutuhan kerja berubah. Sikap yang mendukung kesiapan masa depan adalah…',['Mau belajar, mencoba, dan meninjau kembali keterampilan','Berhenti belajar setelah satu kali gagal','Menganggap keterampilan lama selalu cukup','Menghindari masukan baru'],0,'Kesiapan masa depan tumbuh melalui kebiasaan belajar dan menyesuaikan diri.'),
    ]},
    {id:'sehat',number:'05',name:'Sehat & Komunitas',short:'Kesejahteraan diri, pertemanan aman, inklusi, dan kepedulian sosial.',questions:[
      q('Keseimbangan diri','Saat jadwal terasa padat, kebiasaan yang membantu menjaga keseimbangan adalah…',['Menyusun prioritas dan memberi waktu untuk istirahat','Mengabaikan semua kebutuhan diri','Menambah kegiatan tanpa melihat kemampuan','Menyembunyikan kesulitan dari semua orang'],0,'Prioritas yang realistis dan istirahat membantu kita mengelola kegiatan.'),
      q('Mencari dukungan','Kamu merasa kesulitan menghadapi masalah sendirian. Langkah yang baik adalah…',['Bercerita kepada orang dewasa atau pendamping yang dipercaya','Memendam semuanya karena meminta bantuan itu salah','Menyebarkan cerita pribadi ke publik','Menyalahkan diri sendiri'],0,'Mencari bantuan dari orang tepercaya adalah langkah yang wajar saat menghadapi kesulitan.'),
      q('Kebiasaan sehat','Cara memilih kebiasaan bergerak yang lebih mudah dipertahankan adalah…',['Memilih aktivitas yang disukai dan sesuai kemampuan','Memaksakan latihan berat meski terasa tidak aman','Membandingkan diri dengan semua orang','Berhenti bergerak sama sekali'],0,'Aktivitas yang sesuai kemampuan dan terasa menyenangkan lebih mudah menjadi kebiasaan.'),
      q('Pertemanan inklusif','Ada teman baru yang belum mengenal siapa pun di kegiatan sekolah. Sikap yang membantu adalah…',['Menyapa dan mengajaknya bergabung tanpa memaksa','Membiarkannya karena ia harus berkenalan sendiri','Menjadikannya bahan candaan','Menganggap ia tidak ingin ikut'],0,'Sapaan dan undangan yang ramah membantu orang baru merasa diterima.'),
      q('Batas pribadi','Teman mengatakan tidak nyaman dengan sebuah candaan. Apa yang sebaiknya kamu lakukan?',['Menghormati batasnya dan menghentikan candaan itu','Memaksanya tertawa','Mengulang candaan agar terbiasa','Menyalahkannya karena terlalu sensitif'],0,'Menghormati batas dan perasaan orang lain membantu menciptakan ruang aman.'),
      q('Menghadapi perundungan','Kamu melihat seseorang direndahkan berulang kali di sekolah. Langkah awal yang aman adalah…',['Mendukung orang tersebut dan mengajak bantuan orang dewasa tepercaya','Membalas dengan kekerasan','Merekam lalu menyebarkan videonya','Menganggap itu bukan urusan siapa pun'],0,'Dukungan dan bantuan dari orang dewasa tepercaya dapat membantu menangani perundungan dengan aman.'),
      q('Mengelola perbedaan','Dua anggota kelompok tidak sepakat. Cara yang membantu menyelesaikan perbedaan adalah…',['Mendengarkan kebutuhan masing-masing dan mencari kesepakatan','Memilih pihak yang paling keras suaranya','Menghentikan semua komunikasi','Menyebarkan pertengkaran ke grup lain'],0,'Mendengar kebutuhan setiap pihak membantu kelompok mencari jalan yang dapat diterima bersama.'),
      q('Kepedulian sosial','Kegiatan sukarela yang baik dimulai dengan…',['Memahami kebutuhan komunitas dan bertanya bentuk bantuan yang dibutuhkan','Menganggap semua komunitas punya kebutuhan sama','Datang tanpa koordinasi','Menjanjikan bantuan tanpa rencana'],0,'Tanyakan kebutuhan dan koordinasikan kegiatan supaya bantuan sesuai keadaan komunitas.'),
      q('Ruang bersama','Agar kegiatan komunitas bisa diikuti lebih banyak orang, penyelenggara sebaiknya…',['Memperhatikan akses, waktu, bahasa, dan kebutuhan peserta','Membuat aturan tanpa menjelaskan','Membatasi informasi kepada teman dekat saja','Menganggap semua orang memiliki kebutuhan yang sama'],0,'Memperhatikan beragam kebutuhan membuat kegiatan lebih terbuka untuk diikuti.'),
      q('Gotong royong','Kegiatan bersama berjalan lebih baik ketika…',['Tujuan dan pembagian tugas dibicarakan bersama','Satu orang mengerjakan semuanya','Tugas diberikan tanpa penjelasan','Hasilnya tidak pernah ditinjau'],0,'Tujuan yang disepakati dan peran yang jelas membantu kerja bersama berjalan adil.'),
    ]}
  ];
  const picker=document.getElementById('domainPicker');
  const domainGrid=document.getElementById('domainGrid');
  const quizWrap=document.getElementById('quizWrap');
  const shell=document.getElementById('quizShell');
  const originalMarkup=shell.innerHTML;
  const domainProgressBar=document.getElementById('domainProgressBar');
  const domainProgressTrack=document.querySelector('.domain-overall-track');
  let progress=window.ruangMudaReadProgress?.()||{xp:0,completed:[],actionsCompleted:[],bestScore:null,quizRewards:[]};
  if(!Array.isArray(progress.quizRewards))progress.quizRewards=[];
  if(!progress.quizSessions||typeof progress.quizSessions!=='object')progress.quizSessions={};
  if(!progress.bestScoresByDomain||typeof progress.bestScoresByDomain!=='object')progress.bestScoresByDomain={};
  if(!Array.isArray(progress.quizCompletionRewards))progress.quizCompletionRewards=[];
  if(!Array.isArray(progress.perfectQuizRewards))progress.perfectQuizRewards=[];
  if(!progress.quizAttemptsByDomain||typeof progress.quizAttemptsByDomain!=='object')progress.quizAttemptsByDomain={};
  let activeDomain=null;
  let session=null;

  function makeSession(){return {index:0,score:0,answers:Array(10).fill(null),xpEarned:Array(10).fill(false),earnedXp:0,completed:false}}
  function validSession(candidate){return candidate&&Array.isArray(candidate.answers)&&candidate.answers.length===10&&Array.isArray(candidate.xpEarned)&&candidate.xpEarned.length===10}
  function save(){
    if(activeDomain&&session)progress.quizSessions[activeDomain.id]=session;
    if(window.ruangMudaSaveProgress)window.ruangMudaSaveProgress(progress);
    else{try{localStorage.setItem('ruangMudaProgress_v2',JSON.stringify(progress))}catch(e){}}
    renderLevel();
  }
  function renderLevel(){
    const xp=Number(progress.xp)||0;
    const info=window.ruangMudaGetLevel?.(xp)||{level:Math.floor(xp/100)+1,rank:'Pemula',within:xp%100,toNext:100-(xp%100)};
    const level=document.getElementById('playerLevel');
    if(!level)return;
    level.textContent=`LEVEL ${info.level}`;
    document.getElementById('playerRank').textContent=info.rank;
    document.getElementById('levelNumber').textContent=String(info.level).padStart(2,'0');
    document.getElementById('playerXp').textContent=`${xp} XP`;
    document.getElementById('nextLevelText').textContent=`${info.toNext} XP ke level berikutnya`;
    document.getElementById('levelBar').style.width=`${info.within}%`;
    window.ruangMudaUpdateXpDisplay?.();
  }
  function answeredCount(saved){return saved?.answers?.filter(answer=>answer!==null&&answer!==undefined).length||0}
  function renderDomains(){
    const done=domains.filter(domain=>progress.quizSessions[domain.id]?.completed).length;
    document.getElementById('domainProgressText').textContent=`${done} dari ${domains.length} domain selesai`;
    domainProgressBar.style.width=`${Math.round(done/domains.length*100)}%`;
    domainProgressTrack.setAttribute('aria-valuenow',String(done));
    domainGrid.innerHTML=domains.map(domain=>{
      const saved=progress.quizSessions[domain.id];
      const count=saved?.completed?10:answeredCount(saved);
      const best=progress.bestScoresByDomain[domain.id];
      const action=saved?.completed?'Lihat hasil':count?'Lanjutkan kuis':'Mulai domain';
      return `<button class="domain-card${saved?.completed?' domain-card-done':''}" type="button" data-domain-id="${domain.id}" aria-label="${action}: ${domain.name}, 10 soal${best===undefined?'':`, skor terbaik ${best} dari 10`}"><span class="domain-card-top"><span class="domain-number">${domain.number}</span><span class="domain-count">10 SOAL</span></span><strong class="domain-name">${domain.name}</strong><span class="domain-description">${domain.short}</span><span class="domain-mini-track" aria-hidden="true"><span style="width:${count*10}%"></span></span><span class="domain-card-bottom"><span>${count} / 10 dijawab</span><span>${best===undefined?'Belum ada skor':`Terbaik ${best}/10`}</span></span><span class="domain-card-action">${action} <b aria-hidden="true">→</b></span></button>`;
    }).join('');
  }
  function renderBest(){
    const best=progress.bestScoresByDomain[activeDomain.id];
    document.getElementById('savedScore').textContent=best===undefined?'Belum ada':`${best} dari 10 benar`;
  }
  function bindNext(){document.getElementById('nextQuestion').addEventListener('click',advance)}
  function renderQuestion(){
    const questions=activeDomain.questions;
    session.index=Math.min(Math.max(0,Number(session.index)||0),questions.length-1);
    const index=session.index;
    const question=questions[index];
    const chosen=session.answers[index];
    const answered=chosen!==null&&chosen!==undefined;
    document.getElementById('questionCounter').textContent=`Pertanyaan ${index+1} / ${questions.length}`;
    document.getElementById('currentScore').textContent=`${session.score||0} benar`;
    document.getElementById('quizBar').style.width=`${(index/questions.length)*100}%`;
    document.getElementById('questionCategory').textContent=question.category;
    document.getElementById('questionText').textContent=question.question;
    document.getElementById('feedback').textContent='';
    document.getElementById('answerHint').textContent=answered?'Jawaban tersimpan. Lanjutkan kapan pun.':'Jawaban benar mendapat 10 XP, sekali per soal.';
    const next=document.getElementById('nextQuestion');
    next.disabled=!answered;
    next.innerHTML=index===questions.length-1?'Lihat hasil <span aria-hidden="true">→</span>':'Lanjut <span aria-hidden="true">→</span>';
    const list=document.getElementById('answerList');
    list.innerHTML='';
    ['A','B','C','D'].forEach((letter,optionIndex)=>{
      const button=document.createElement('button');
      button.className='answer-option';button.type='button';
      button.innerHTML=`<span class="answer-letter">${letter}</span><span>${question.answers[optionIndex]}</span>`;
      if(answered){button.disabled=true;if(optionIndex===question.correct)button.classList.add('correct');if(optionIndex===chosen&&chosen!==question.correct)button.classList.add('wrong')}
      else button.addEventListener('click',()=>choose(optionIndex));
      list.append(button);
    });
    if(answered){
      const feedback=document.getElementById('feedback');
      if(chosen===question.correct){feedback.textContent=`Tepat. ${question.explanation}${session.xpEarned[index]?' +10 XP tersimpan.':progress.quizRewards.includes(`${activeDomain.id}:${index}`)?' XP soal ini sudah kamu dapat sebelumnya.':''}`;feedback.style.color='var(--green)'}
      else{feedback.textContent=`Belum tepat. ${question.explanation}`;feedback.style.color='var(--accent)'}
    }
    renderLevel();renderBest();
  }
  function choose(optionIndex){
    const index=session.index;
    if(session.answers[index]!==null&&session.answers[index]!==undefined)return;
    const question=activeDomain.questions[index];
    session.answers[index]=optionIndex;
    const correct=optionIndex===question.correct;
    let message='';
    if(correct){
      session.score=(session.score||0)+1;
      progress.totalCorrect=(progress.totalCorrect||0)+1;
      const rewardKey=`${activeDomain.id}:${index}`;
      if(!progress.quizRewards.includes(rewardKey)){progress.quizRewards.push(rewardKey);progress.xp=(progress.xp||0)+10;session.xpEarned[index]=true;session.earnedXp=(session.earnedXp||0)+10;message=' +10 XP!'}
      else message=' XP soal ini sudah kamu dapat sebelumnya.';
      document.getElementById('feedback').style.color='var(--green)';
    }else document.getElementById('feedback').style.color='var(--accent)';
    save();
    document.getElementById('feedback').textContent=`${correct?'Tepat.':'Belum tepat.'} ${question.explanation}${message}`;
    document.getElementById('currentScore').textContent=`${session.score} benar`;
    document.getElementById('answerHint').textContent='Jawaban tersimpan. Lanjutkan kapan pun.';
    [...document.querySelectorAll('.answer-option')].forEach((button,i)=>{button.disabled=true;if(i===question.correct)button.classList.add('correct');if(i===optionIndex&&!correct)button.classList.add('wrong')});
    document.getElementById('nextQuestion').disabled=false;
    if(correct&&session.xpEarned[index])window.ruangMudaToast?.('+10 XP · progres tersimpan');
  }
  function advance(){
    if(session.answers[session.index]===null||session.answers[session.index]===undefined)return;
    if(session.index<activeDomain.questions.length-1){session.index+=1;save();renderQuestion()}
    else finish();
  }
  function finish(){
    session.completed=true;session.index=activeDomain.questions.length-1;
    const oldBest=progress.bestScoresByDomain[activeDomain.id];
    if(oldBest===undefined||session.score>oldBest)progress.bestScoresByDomain[activeDomain.id]=session.score;
    progress.quizAttempts=(progress.quizAttempts||0)+1;
    progress.quizAttemptsByDomain[activeDomain.id]=(progress.quizAttemptsByDomain[activeDomain.id]||0)+1;
    let bonus=0;
    if(!progress.quizCompletionRewards.includes(activeDomain.id)){progress.quizCompletionRewards.push(activeDomain.id);progress.xp=(progress.xp||0)+10;bonus+=10}
    if(session.score===activeDomain.questions.length&&!progress.perfectQuizRewards.includes(activeDomain.id)){progress.perfectQuizRewards.push(activeDomain.id);progress.xp=(progress.xp||0)+20;bonus+=20}
    session.earnedXp=(session.earnedXp||0)+bonus;session.completionBonus=bonus;
    save();renderBest();renderLevel();showSummary();renderDomains();
    if(bonus)window.ruangMudaToast?.(`Bonus kuis +${bonus} XP · tersimpan`);
  }
  function showSummary(){
    const score=session.score||0;const earned=session.earnedXp||0;const total=activeDomain.questions.length;
    const intro=score===total?'Semua tepat. Keren.':score>=Math.ceil(total*.6)?'Langkah bagus. Terus bertumbuh.':'Terus berlatih, kamu pasti makin paham.';
    const bar=document.getElementById('quizBar');if(bar)bar.style.width='100%';
    shell.innerHTML=`<div class="quiz-summary"><div class="section-label">${activeDomain.name} · progres tersimpan</div><div class="score">${score}<span style="font-size:24px;color:var(--muted)"> / ${total}</span></div><h2>${intro}</h2><p>XP dari sesi ini: <b>${earned} XP</b>. Skor tertinggi domain ini: <b>${progress.bestScoresByDomain[activeDomain.id]} dari ${total}</b>.</p><div class="quiz-summary-actions"><button class="btn" id="retryQuiz" type="button">Ulangi domain <span aria-hidden="true">↻</span></button><button class="btn btn-outline" id="summaryDomains" type="button">Pilih domain lain</button></div></div>`;
    document.getElementById('retryQuiz').addEventListener('click',()=>{
      session=makeSession();save();shell.innerHTML=originalMarkup;bindNext();renderQuestion();
    });
    document.getElementById('summaryDomains').addEventListener('click',backToPicker);
  }
  function openDomain(domain){
    activeDomain=domain;
    const saved=progress.quizSessions[domain.id];
    session=validSession(saved)?saved:makeSession();
    if(!Array.isArray(session.xpEarned))session.xpEarned=Array(10).fill(false);
    document.getElementById('activeDomainName').textContent=domain.name;
    picker.hidden=true;quizWrap.hidden=false;
    shell.innerHTML=originalMarkup;bindNext();
    if(session.completed){renderLevel();renderBest();showSummary()}
    else renderQuestion();
    quizWrap.scrollIntoView?.({behavior:'smooth',block:'start'});
  }
  function backToPicker(){
    if(activeDomain&&session)progress.quizSessions[activeDomain.id]=session;
    picker.hidden=false;quizWrap.hidden=true;activeDomain=null;session=null;renderDomains();
    picker.scrollIntoView?.({behavior:'smooth',block:'start'});
  }

  domainGrid.addEventListener('click',event=>{
    const card=event.target.closest('[data-domain-id]');
    if(!card)return;
    const domain=domains.find(item=>item.id===card.dataset.domainId);
    if(domain)openDomain(domain);
  });
  document.getElementById('backToDomains').addEventListener('click',backToPicker);
  renderDomains();
})();
