// interacciones simples para los botones de moonsun
(function(){
  const toast = document.querySelector('.toast');
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>toast.classList.remove('show'), 1800);
  }

  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-action]');
    if(!btn) return;
    const action = btn.getAttribute('data-action');
    const labels = {
      start: '¡Empecemos! ✨',
      demo: 'Cargando demo…',
      about: 'moonsun: simple y bonito.',
      features: 'Funciones: botones, tarjetas y toasts.',
      contact: 'Escríbenos: hola@moonsun.local',
      profile: 'Abriendo perfil…',
      gallery: 'Abriendo galería…',
      notes: 'Abriendo notas…'
    };
    showToast(labels[action] || 'click');
  });
})();
