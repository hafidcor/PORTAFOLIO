const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
document.getElementById("showContact")?.addEventListener("click",(e)=>{const d=document.getElementById("contactDetails");if(!d)return;d.hidden=!d.hidden;e.currentTarget.textContent=d.hidden?"Mostrar datos de contacto":"Ocultar datos de contacto";});

// Copiar correo al portapapeles
const copyBtn=document.getElementById("copyEmail");
copyBtn?.addEventListener("click",async()=>{
  const email="hafidcoronel438@gmail.com";
  try{await navigator.clipboard.writeText(email);copyBtn.textContent="¡Copiado!";}
  catch{copyBtn.textContent=email;}
  setTimeout(()=>{copyBtn.textContent="Copiar correo";},2000);
});

// Menú móvil (hamburguesa)
const header=document.querySelector(".site-header");
const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle?.addEventListener("click",()=>{
  const open=header.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");
});
mainNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  header.classList.remove("nav-open");
  menuToggle?.setAttribute("aria-expanded","false");
  menuToggle?.setAttribute("aria-label","Abrir menú");
}));

// Visor de PDF en ventana emergente
// En móvil los navegadores no muestran PDFs dentro de un iframe y piden
// descargarlo; ahí se usa el visor de Google, que sí lo muestra en pantalla.
// En escritorio el PDF se muestra directo en el iframe.
const isMobileViewer=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(max-width: 768px)").matches;
function viewerUrl(url){
  return isMobileViewer?"https://docs.google.com/viewer?url="+encodeURIComponent(url)+"&embedded=true":url;
}
const modal=document.getElementById("pdfModal");
const frame=document.getElementById("pdfFrame");
const modalTitle=document.getElementById("pdfModalTitle");
const pdfDownload=document.getElementById("pdfDownload");
const pdfOpenTab=document.getElementById("pdfOpenTab");
let lastFocused=null;
function openPdf(title,url){
  if(!modal)return;
  lastFocused=document.activeElement;
  modalTitle.textContent=title;
  frame.src=viewerUrl(url);
  pdfDownload.href=url;
  pdfOpenTab.href=url;
  modal.hidden=false;
  document.body.style.overflow="hidden";
  document.getElementById("pdfModalClose")?.focus();
}
function closePdf(){
  if(!modal||modal.hidden)return;
  modal.hidden=true;
  frame.src="about:blank";
  document.body.style.overflow="";
  if(lastFocused&&lastFocused.focus)lastFocused.focus();
}
document.querySelectorAll("[data-open-pdf]").forEach(btn=>{
  btn.addEventListener("click",()=>openPdf(btn.dataset.title,btn.dataset.url));
});
document.getElementById("pdfModalClose")?.addEventListener("click",closePdf);
document.getElementById("pdfModalCloseBtn")?.addEventListener("click",closePdf);
modal?.querySelector("[data-close-pdf]")?.addEventListener("click",closePdf);
document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape"){
    closePdf();
    header?.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded","false");
  }
});

// Animación suave al bajar y sección activa en el menú
if("IntersectionObserver" in window){
  const revealEls=document.querySelectorAll(".hero-grid,.profile-card,.section > .container,.projects article,.skills article,.exp-item");
  const io=new IntersectionObserver(entries=>{
    entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add("visible");io.unobserve(en.target);}});
  },{threshold:.12});
  revealEls.forEach(el=>{el.classList.add("reveal");io.observe(el);});
  const spy=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting)return;
      const id=en.target.id;
      mainNav?.querySelectorAll("a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id));
    });
  },{rootMargin:"-40% 0px -55% 0px"});
  document.querySelectorAll("main section[id]").forEach(s=>spy.observe(s));
}
