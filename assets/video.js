(()=>{
  const player=document.getElementById('mainPlayer');
  const choices=[...document.querySelectorAll('.video-choice')];
  choices.forEach(button=>button.addEventListener('click',()=>{
    choices.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
    button.classList.add('active');button.setAttribute('aria-pressed','true');
    const id=button.dataset.id;
    player.src=`https://www.youtube-nocookie.com/embed/${id}?rel=0`;
    player.title=button.dataset.title;
    document.getElementById('videoTitle').textContent=button.dataset.title;
    document.getElementById('videoCategory').textContent=button.dataset.category;
    document.getElementById('videoCreator').textContent=button.dataset.creator;
    document.getElementById('videoSummary').textContent=button.dataset.summary;
  }));
})();
