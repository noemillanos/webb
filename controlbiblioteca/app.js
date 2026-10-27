// Datos ficticios incluidos en el código.
// No se usa base de datos, PHP, localStorage ni servidor.
const libros = [
  {id:1, titulo:"El Misterio de la Luna", autor:"María López", cat:"Ciencia", prestado:false},
  {id:2, titulo:"Historia del Cóndor", autor:"Carlos Rivera", cat:"Historia", prestado:true},
  {id:3, titulo:"El Principito", autor:"Saint-Exupéry", cat:"Novela", prestado:false},
  {id:4, titulo:"Matemática 5to", autor:"Ministerio", cat:"Texto", prestado:false},
  {id:5, titulo:"Diccionario", autor:"Larousse", cat:"Consulta", prestado:true},
  {id:6, titulo:"Atlas Bolivia", autor:"Santillana", cat:"Consulta", prestado:false},
  {id:7, titulo:"Cuentos Oscar Alfaro", autor:"Oscar Alfaro", cat:"Novela", prestado:true},
  {id:8, titulo:"Ciencias Naturales", autor:"Santillana", cat:"Ciencia", prestado:false},
];
const lista=document.getElementById("lista");
function ini(t){return t.split(" ").slice(0,2).map(x=>x[0]).join("").toUpperCase()}
function pintar(){
  const q=document.getElementById("buscar").value.toLowerCase();
  const c=document.getElementById("filtroCat").value;
  const fil=libros.filter(l=> (l.titulo+" "+l.autor).toLowerCase().includes(q) && (c=="todos"||l.cat==c));
  lista.innerHTML="";
  fil.forEach(l=>{
    const d=document.createElement("div");d.className="card";
    d.innerHTML=`<div class="left"><span class="avatar">${ini(l.titulo)}</span><div><b>${l.titulo}</b><p>${l.autor} - ${l.cat}</p><span class="badge ${l.prestado?'prestado':'disponible'}">${l.prestado?'Prestado':'Disponible'}</span></div></div><span style="font-size:18px">${l.prestado?'🔴':'🟢'}</span>`;
    d.onclick=()=>{l.prestado=!l.prestado;pintar();contar();};
    lista.appendChild(d);
  });
  document.getElementById("vacio").hidden=fil.length!=0;
}
function contar(){
  document.getElementById("totalLibros").textContent=libros.length;
  document.getElementById("totalPrestados").textContent=libros.filter(l=>l.prestado).length;
}
function cats(){
  const s=document.getElementById("filtroCat");
  const cs=[...new Set(libros.map(l=>l.cat))].sort();
  cs.forEach(x=>{let o=document.createElement("option");o.value=x;o.textContent=x;s.appendChild(o);});
  document.getElementById("totalCat").textContent=cs.length;
}
document.getElementById("buscar").addEventListener("input",pintar);
document.getElementById("filtroCat").addEventListener("change",pintar);
cats();contar();pintar();
