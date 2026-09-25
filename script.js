const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
document.getElementById("showContact")?.addEventListener("click",(e)=>{const d=document.getElementById("contactDetails");if(!d)return;d.hidden=!d.hidden;e.currentTarget.textContent=d.hidden?"Mostrar datos de contacto":"Ocultar datos de contacto";});
