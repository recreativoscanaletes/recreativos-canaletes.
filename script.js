function toggleMenu(){
  const menu = document.getElementById('menu');
  const isOpen = getComputedStyle(menu).display !== 'none';
  menu.style.display = isOpen ? 'none' : 'flex';
}
document.addEventListener('DOMContentLoaded',()=>{
  const y=new Date().getFullYear();
  const el=document.getElementById('year');
  if(el)el.textContent=y;
});