const PERFUMES = [

  // ══ NICHO ══
  { id:1,  name:"Honor Spirit of Kings",      brand:"Honor",              cat:"nicho",    gen:"masculino",
    img:"images/honor.webp",
    notes:"Azafrán · Clavos · Bergamota · Higo · Rosa · Incienso · Madera de oud · Ámbar",
    p:{"3ml":120,"5ml":200,"10ml":395} },

  { id:2,  name:"Oud & Musk",                 brand:"Maison Label",       cat:"nicho",    gen:"unisex",
    img:"images/oud-musk.jpg",
    notes:"Naranja amarga · Pimienta negra · Frambuesa · Madera de oud · Cuero · Ámbar",
    p:{"3ml":110,"5ml":190,"10ml":370} },

  { id:3,  name:"Flamenco Extracto",          brand:"Ramon Monegal",      cat:"nicho",    gen:"unisex",
    img:"images/flamenco.jpg",
    notes:"Frambuesa · Azafrán · Rosa · Iris · Cedro · Jazmín · Madera de oud · Cuero",
    p:{"3ml":175,"5ml":290,"10ml":570} },

  { id:4,  name:"Matador",                    brand:"Ramon Monegal",      cat:"nicho",    gen:"unisex",
    img:"images/matador.jpg",
    notes:"Comino · Pera · Incienso · Rosa · Maracuyá · Magnolia · Cuero · Sándalo",
    p:{"3ml":110,"5ml":190,"10ml":275} },

  { id:5,  name:"Dubai Extrait",              brand:"Bortnikoff",         cat:"nicho",    gen:"unisex",
    img:"images/dubai.jpg",
    notes:"Manzana · Bergamota · Jazmín · Oud indio · Pachulí · Sándalo · Vainilla",
    p:{"3ml":240,"5ml":400,"10ml":790} },

  { id:6,  name:"Wild Carrot Oud",            brand:"Bohoboco",           cat:"nicho",    gen:"unisex",
    img:"images/wild-carrot.webp",
    notes:"Zanahoria · Canela · Bergamota · Madera de oud · Tabaco · Cedro · Cuero",
    p:{"3ml":90,"5ml":160,"10ml":310} },

  { id:19, name:"Alexandria II Orientale",    brand:"Xerjoff",            cat:"nicho",    gen:"unisex",
    img:"images/alexandria.webp",
    notes:"Oud · Amaderado · Ámbar · Rosas · Fresco especiado · Ahumado · Cuero",
    p:{"3ml":130,"5ml":220,"10ml":440} },

  { id:20, name:"Angels' Share",              brand:"Kilian",             cat:"nicho",    gen:"unisex",
    img:"images/angels-share.jpg",
    notes:"Amaderado · Cálido especiado · Dulce · Avainillado · Canela · Ámbar",
    p:{"3ml":135,"5ml":225,"10ml":445} },

  { id:21, name:"Red Tobacco Intense",        brand:"Mancera",            cat:"nicho",    gen:"unisex",
    img:"images/red-tobacco.jpg",
    notes:"Cálido especiado · Tabaco · Amaderado · Dulce · Ámbar · Avainillado · Canela · Oud",
    p:{"3ml":75,"5ml":125,"10ml":245} },

  { id:22, name:"Instant Crush",              brand:"Mancera",            cat:"nicho",    gen:"unisex",
    img:"images/instant-crush.jpg",
    notes:"Amaderado · Cálido especiado · Avainillado · Ámbar · Cítrico · Almizclado",
    p:{"3ml":75,"5ml":125,"10ml":245} },

  { id:38, name:"Amore Caffe",                brand:"Mancera",            cat:"nicho",    gen:"unisex",
    img:"images/amore-caffe.jpg",
    notes:"Dulce · Avainillado · Café · Almendrado · Afrutados · Cálido especiado",
    p:{"3ml":75,"5ml":125,"10ml":245} },

  { id:23, name:"Cherry Ink",                 brand:"Lorenzo Pazzaglia",  cat:"nicho",    gen:"unisex",
    img:"images/cherry-ink.jpg",
    notes:"Acerezado · Dulce · Almendrado · Nueces · Ámbar · Afrutados · Vino",
    p:{"3ml":150,"5ml":250,"10ml":490} },

  { id:24, name:"Oud Malinau",                brand:"Bortnikoff",         cat:"nicho",    gen:"unisex",
    img:"images/dubai.jpg",
    notes:"Oud · Cálido especiado · Afrutados · Dulce · Ámbar · Cera de abeja",
    p:{"3ml":330,"5ml":550,"10ml":1050} },

  { id:25, name:"Decas",                      brand:"Xerjoff",            cat:"nicho",    gen:"unisex",
    img:"images/decas.jpg",
    notes:"Ámbar · Avainillado · Cítrico · Balsámico · Dulce · Nardos · Tabaco · Iris",
    p:{"3ml":90,"5ml":160,"10ml":300} },

  { id:26, name:"Sacred Flames",              brand:"Argos",              cat:"nicho",    gen:"unisex",
    img:"images/sacred-flames.png",
    notes:"Ámbar · Cítrico · Cálido especiado · Amaderado · Vainilla · Canela",
    p:{"3ml":135,"5ml":225,"10ml":445} },

  { id:27, name:"Lemon Tart",                 brand:"Theodoros Kalotinis",cat:"nicho",    gen:"unisex",
    img:"images/lemon-tart.webp",
    notes:"Cítrico · Avainillado · Dulce · Lactónico",
    p:{"3ml":75,"5ml":125,"10ml":245} },

  { id:28, name:"Creation-R",                 brand:"Roja Parfums",       cat:"nicho",    gen:"femenino",
    img:"images/creation-r.jpg",
    notes:"Cítrico · Ámbar · Cálido especiado · Rosas · Amaderado · Almizclado",
    p:{"3ml":70,"5ml":120,"10ml":235} },

  { id:33, name:"Erba Pura",                  brand:"Xerjoff",            cat:"nicho",    gen:"unisex",
    img:"images/erba-pura.jpg",
    notes:"Afrutados · Cítrico · Dulce · Almizclado · Avainillado · Ámbar",
    p:{"3ml":90,"5ml":155,"10ml":290} },

  { id:34, name:"Naxos",                      brand:"Xerjoff",            cat:"nicho",    gen:"masculino",
    img:"images/naxos.jpg",
    notes:"Dulce · Avainillado · Amielado · Tabaco · Lavanda · Cítrico",
    p:{"3ml":105,"5ml":180,"10ml":355} },

  { id:35, name:"Althair",                    brand:"Parfums de Marly",   cat:"nicho",    gen:"masculino",
    img:"images/althair.jpg",
    notes:"Dulce · Avainillado · Cálido especiado · Canela · Almizclado · Ámbar",
    p:{"3ml":120,"5ml":205,"10ml":400} },

  { id:36, name:"Ombré Leather",              brand:"Tom Ford",           cat:"nicho",    gen:"unisex",
    img:"images/ombre-leather.webp",
    notes:"Cuero · Animálico · Cálido especiado · Floral blanco · Ámbar · Ahumado",
    p:{"3ml":80,"5ml":135,"10ml":260} },

  { id:42, name:"Russian Tea",                brand:"Masque Milano",      cat:"nicho",    gen:"unisex",
    img:"images/russian-tea.jpg",
    notes:"Cuero · Verde · Ahumado · Fresco especiado · Ámbar · Aromático",
    p:{"3ml":135,"5ml":230,"10ml":440} },

  // ══ ÁRABE ══
  { id:7,  name:"Club de Nuit Intense Man",   brand:"Armaf",              cat:"arabe",    gen:"masculino",
    img:"images/club-de-nuit.png",
    notes:"Cítrico · Afrutados · Cuero · Ahumado · Amaderado · Almizclado",
    p:{"3ml":30,"5ml":50,"10ml":95} },

  { id:9,  name:"Shuhrah Pour Homme",         brand:"Rasasi",             cat:"arabe",    gen:"masculino",
    img:"images/shuhrah.png",
    notes:"Aromático · Florales · Amaderado · Cuero · Rosas · Oud · Animálico",
    p:{"3ml":40,"5ml":65,"10ml":120} },

  { id:10, name:"Layuqawam Pour Homme",       brand:"Rasasi",             cat:"arabe",    gen:"masculino",
    img:"images/layuqawam.webp",
    notes:"Cuero · Afrutados · Dulce · Animálico · Ámbar · Amaderado · Ahumado",
    p:{"3ml":40,"5ml":65,"10ml":120} },

  { id:11, name:"Khamrah",                    brand:"Lattafa",            cat:"arabe",    gen:"unisex",
    img:"images/khamrah.jpg",
    notes:"Dulce · Cálido especiado · Avainillado · Ámbar · Canela · Afrutados",
    p:{"3ml":40,"5ml":65,"10ml":120} },

  { id:12, name:"Oud for Glory",              brand:"Lattafa",            cat:"arabe",    gen:"unisex",
    img:"images/oud-for-glory.jpg",
    notes:"Oud · Cálido especiado · Pachulí · Almizclado · Amaderado · Cuero",
    p:{"3ml":40,"5ml":65,"10ml":120} },

  { id:31, name:"Interlude",                  brand:"Amouage",            cat:"arabe",    gen:"masculino",
    img:"images/interlude.png",
    notes:"Ámbar · Balsámico · Fresco especiado · Ahumado · Cálido especiado · Oud",
    p:{"3ml":90,"5ml":155,"10ml":290} },

  { id:37, name:"Turathi Electric",           brand:"Afnan",              cat:"arabe",    gen:"unisex",
    img:"images/turathi.jpg",
    notes:"Cítrico · Afrutados · Dulce · Almizclado · Floral blanco · Ámbar · Acuático",
    p:{"3ml":50,"5ml":70,"10ml":140} },

  { id:39, name:"Cocoa Morado",               brand:"French Avenue",      cat:"arabe",    gen:"unisex",
    img:"images/cocoa-morado.webp",
    notes:"Ámbar · Cálido especiado · Dulce · Cuero · Oud · Ahumado",
    p:{"3ml":50,"5ml":70,"10ml":140} },

  { id:40, name:"Liquid Brun",                brand:"French Avenue",      cat:"arabe",    gen:"unisex",
    img:"images/liquid-brun.jpg",
    notes:"Dulce · Cálido especiado · Avainillado · Canela · Floral blanco · Ámbar",
    p:{"3ml":50,"5ml":70,"10ml":140} },

  { id:41, name:"Vulcan Feu",                 brand:"French Avenue",      cat:"arabe",    gen:"unisex",
    img:"images/vulcan-feu.webp",
    notes:"Tropical · Afrutados · Dulce · Cítrico · Amaderado · Ámbar",
    p:{"3ml":50,"5ml":70,"10ml":140} },

  // ══ COMERCIAL ══
  { id:13, name:"Stronger With You Intensely",brand:"Emporio Armani",     cat:"comercial",gen:"masculino",
    img:"images/stronger-with-you.png",
    notes:"Avainillado · Dulce · Ámbar · Canela · Cálido especiado · Caramelo",
    p:{"3ml":60,"5ml":95,"10ml":185} },

  { id:14, name:"Boss Bottled Parfum",        brand:"Hugo Boss",          cat:"comercial",gen:"masculino",
    img:"images/boss-bottled.png",
    notes:"Amaderado · Cuero · Ámbar · Atalcado · Iris · Cítrico",
    p:{"3ml":45,"5ml":75,"10ml":140} },

  { id:15, name:"Le Male Le Parfum",          brand:"Jean Paul Gaultier", cat:"comercial",gen:"masculino",
    img:"images/le-male-parfum.jpg",
    notes:"Cálido especiado · Avainillado · Lavanda · Aromático · Iris · Amaderado",
    p:{"3ml":60,"5ml":95,"10ml":185} },

  { id:16, name:"Le Male Essence",            brand:"Jean Paul Gaultier", cat:"comercial",gen:"masculino",
    img:"images/le-male-essence.jpg",
    notes:"Cálido especiado · Aromático · Cuero · Avainillado · Lavanda · Canela",
    p:{"3ml":70,"5ml":115,"10ml":225} },

  { id:17, name:"Y EDP",                      brand:"Yves Saint Laurent", cat:"comercial",gen:"masculino",
    img:"images/y-edp.jpg",
    notes:"Aromático · Fresco especiado · Amaderado · Afrutados · Ámbar · Cítrico",
    p:{"3ml":55,"5ml":90,"10ml":175} },

  { id:18, name:"Myself EDP",                 brand:"Yves Saint Laurent", cat:"comercial",gen:"masculino",
    img:"images/myself-edp.jpg",
    notes:"Cítrico · Floral blanco · Pachulí · Fresco especiado · Amaderado",
    p:{"3ml":60,"5ml":95,"10ml":185} },

  { id:29, name:"Oud Essentiel",              brand:"Guerlain",           cat:"comercial",gen:"unisex",
    img:"images/oud-essentiel.png",
    notes:"Oud · Cuero · Animálico · Ahumado",
    p:{"3ml":60,"5ml":90,"10ml":175} },

  { id:30, name:"Gentleman Society",          brand:"Givenchy",           cat:"comercial",gen:"masculino",
    img:"images/gentleman-society.jpg",
    notes:"Aromático · Amaderado · Avainillado · Cálido especiado · Herbal",
    p:{"3ml":60,"5ml":90,"10ml":175} },

  { id:32, name:"Born in Roma Intense",       brand:"Valentino",          cat:"comercial",gen:"masculino",
    img:"images/born-in-roma.jpg",
    notes:"Avainillado · Lavanda · Aromático · Amaderado · Fresco especiado",
    p:{"3ml":65,"5ml":105,"10ml":210} },
];

/* ─── CONSTANTES ─── */
const SPRAYS = {"3ml":45,"5ml":75,"10ml":150};
const CC     = {nicho:"#b8904a",arabe:"#7060a8",comercial:"#308888"};
const CL     = {nicho:"Nicho",arabe:"Árabe",comercial:"Comercial"};
const GL     = {unisex:"Unisex",masculino:"Masculino",femenino:"Femenino"};
const PASS   = "decantspot2024";
const SL     = {nuevo:"Nuevo","en-proceso":"En proceso",entregado:"Entregado",cancelado:"Cancelado"};
const SC     = {nuevo:"#b8904a","en-proceso":"#308888",entregado:"#508850",cancelado:"#c04040"};

let selSz={}, cart=[], catF="todos", genF="todos", srch="", adAuth=false, orders=[];

function getSz(id)  { return selSz[id]||"5ml"; }
function getTotal() { return cart.reduce((s,i)=>s+i.price*i.qty,0); }
function getCnt()   { return cart.reduce((s,i)=>s+i.qty,0); }

/* ─── CATÁLOGO ─── */
function renderCatalog() {
  const filt = PERFUMES.filter(p=>
    (catF==="todos"||p.cat===catF)&&
    (genF==="todos"||p.gen===genF)&&
    (srch===""||p.name.toLowerCase().includes(srch.toLowerCase())||p.brand.toLowerCase().includes(srch.toLowerCase()))
  );
  document.getElementById("resCnt").textContent =
    `${filt.length} fragancia${filt.length!==1?"s":""} disponible${filt.length!==1?"s":""}`;

  document.getElementById("catalog").innerHTML = filt.map(p=>{
    const s=getSz(p.id), pr=p.p[s], cc=CC[p.cat];
    const inCart=cart.find(i=>i.key===`${p.id}-${s}`);
    return `
      <div class="card">
        <div class="card-top-line" style="background:${cc};opacity:.8;"></div>
        <div class="card-img-wrap">
          <img class="card-img" src="${p.img}" alt="${p.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
          <div class="card-img-placeholder">◈</div>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-cat" style="color:${cc}">${CL[p.cat]}</span>
            <span class="card-dot">·</span>
            <span class="card-gen">${GL[p.gen]||"Unisex"}</span>
          </div>
          <div class="card-name">${p.name}</div>
          <div class="card-brand">${p.brand}</div>
          <p class="card-notes">${p.notes}</p>
          <div class="card-price">Q${pr}</div>
          <div class="card-size-info">${s} · ${SPRAYS[s]} sprays</div>
          <div class="sizes">
            ${Object.entries(p.p).map(([sv,pv])=>
              `<button class="sz${s===sv?" on":""}" onclick="selectSz(${p.id},'${sv}')">${sv} · Q${pv}</button>`
            ).join("")}
          </div>
          <button class="abtn${inCart?" added":""}" id="abtn-${p.id}"
            onclick="${inCart?"":"addCart("+p.id+")"}">
            ${inCart?"✓  Agregado al carrito":"Agregar al carrito"}
          </button>
        </div>
      </div>`;
  }).join("");
}

function selectSz(id,s){selSz[id]=s;renderCatalog();}

function setF(type,val,btn){
  if(type==="cat"){catF=val;document.querySelectorAll("#catF .fb").forEach(b=>b.classList.remove("on"));}
  else{genF=val;document.querySelectorAll("#genF .fb").forEach(b=>b.classList.remove("on"));}
  btn.classList.add("on");renderCatalog();
}

function onSearch(v){srch=v;renderCatalog();}

/* ─── CARRITO ─── */
function addCart(id){
  const p=PERFUMES.find(x=>x.id===id), s=getSz(id), key=`${id}-${s}`;
  const ex=cart.find(i=>i.key===key);
  if(ex) ex.qty++;
  else cart.push({key,id,name:p.name,brand:p.brand,size:s,price:p.p[s],qty:1});
  updateCartUI();
  const btn=document.getElementById(`abtn-${id}`);
  if(btn){btn.textContent="✓  Agregado al carrito";btn.classList.add("added");btn.onclick=null;}
  setTimeout(()=>renderCatalog(),1500);
}

function rmCart(key){cart=cart.filter(i=>i.key!==key);updateCartUI();renderCartBody();}
function chQty(key,d){const it=cart.find(i=>i.key===key);if(it)it.qty=Math.max(1,it.qty+d);updateCartUI();renderCartBody();}

function updateCartUI(){
  const cnt=getCnt(), tot=getTotal();
  const badge=document.getElementById("cartBadge"), btn=document.getElementById("cartBtn");
  if(cnt>0){badge.style.display="inline";badge.textContent=cnt;btn.classList.add("has");}
  else{badge.style.display="none";btn.classList.remove("has");}
  document.getElementById("totalVal").textContent=`Q${tot}`;
  document.getElementById("cartSub").textContent=cnt>0?`${cnt} ARTÍCULO${cnt>1?"S":""}` :"";
  document.getElementById("cartFt").style.display=cart.length>0?"block":"none";
}

function renderCartBody(){
  const body=document.getElementById("cartBody");
  if(!cart.length){
    body.innerHTML=`<div class="cart-empty"><div class="cart-empty-icon">◈</div><div class="cart-empty-txt">Carrito vacío</div></div>`;
    return;
  }
  body.innerHTML=cart.map(i=>`
    <div class="cart-item">
      <div class="ci-info">
        <div class="ci-name">${i.name}</div>
        <div class="ci-meta">${i.brand} · ${i.size} · ${SPRAYS[i.size]} sprays</div>
      </div>
      <div class="ci-right">
        <button class="qty-btn" onclick="chQty('${i.key}',-1)">−</button>
        <span class="qty-n">${i.qty}</span>
        <button class="qty-btn" onclick="chQty('${i.key}',1)">+</button>
        <span class="ci-price">Q${i.price*i.qty}</span>
        <button class="btn-rm" onclick="rmCart('${i.key}')">✕</button>
      </div>
    </div>`).join("");
}

function openCart(){renderCartBody();document.getElementById("cartOv").classList.add("open");document.getElementById("cartDr").classList.add("open");}
function closeCart(){document.getElementById("cartOv").classList.remove("open");document.getElementById("cartDr").classList.remove("open");}

/* ─── CHECKOUT ─── */
function openCheckout(){closeCart();renderCk();document.getElementById("ckOv").classList.add("open");document.getElementById("ckModal").classList.add("open");}
function closeCk(){document.getElementById("ckOv").classList.remove("open");document.getElementById("ckModal").classList.remove("open");}

function renderCk(){
  document.getElementById("ckContent").innerHTML=`
    <div class="modal-bd">
      <div class="modal-hd">
        <div><div class="modal-title">Datos de Entrega</div><div class="modal-sub">COMPLETA TU INFORMACIÓN</div></div>
        <button class="btn-x" onclick="closeCk()">✕</button>
      </div>
      <div class="cod-box">
        <span class="cod-ico">◈</span>
        <div><div class="cod-title">Pago Contra Entrega</div>
        <div class="cod-desc">Solo pagas cuando recibes tus decants. Sin adelantos, sin riesgo.</div></div>
      </div>
      <div class="fg"><label class="fl">Nombre completo</label><input class="fi" id="f_n" placeholder="Tu nombre completo"/></div>
      <div class="fg"><label class="fl">WhatsApp / Teléfono</label><input class="fi" id="f_t" placeholder="+502 0000-0000"/></div>
      <div class="fg"><label class="fl">Dirección de entrega</label><input class="fi" id="f_d" placeholder="Calle, número, colonia, referencias..."/></div>
      <div class="fg"><label class="fl">Zona / Ciudad</label><input class="fi" id="f_z" placeholder="Zona 10, Ciudad de Guatemala..."/></div>
      <div class="fg"><label class="fl">Notas (opcional)</label><textarea class="fi" id="f_no" placeholder="Instrucciones, horario..."></textarea></div>
      <div class="summary-box">
        <div class="summary-lbl">Resumen del pedido</div>
        ${cart.map(i=>`<div class="s-item"><span>${i.name} ${i.size} ×${i.qty}</span><span>Q${i.price*i.qty}</span></div>`).join("")}
        <div class="s-div"></div>
        <div class="s-total"><span class="s-total-lbl">Total</span><span class="s-total-val">Q${getTotal()}</span></div>
      </div>
      <button class="cbtn" onclick="submitOrder()">Confirmar pedido · Q${getTotal()}</button>
      <p class="hint">Completa nombre, teléfono y dirección para continuar</p>
    </div>`;
}

function submitOrder(){
  const n=document.getElementById("f_n")?.value||"";
  const t=document.getElementById("f_t")?.value||"";
  const d=document.getElementById("f_d")?.value||"";
  const z=document.getElementById("f_z")?.value||"";
  const no=document.getElementById("f_no")?.value||"";
  if(!n||!t||!d){alert("Por favor completa nombre, teléfono y dirección.");return;}
  const order={id:`ORD-${Date.now()}`,ts:Date.now(),status:"nuevo",
    cliente:{nombre:n,telefono:t,direccion:d,zona:z,notas:no},items:[...cart],total:getTotal()};
  orders.unshift(order);
  try{localStorage.setItem("dsgt_orders",JSON.stringify(orders));}catch(e){}
  cart=[];updateCartUI();
  document.getElementById("ckContent").innerHTML=`
    <div class="success">
      <div class="succ-icon">◈</div>
      <div class="succ-title">¡Pedido recibido!</div>
      <p class="succ-txt">Gracias por tu pedido. Nos comunicaremos contigo pronto para coordinar la entrega y el pago.</p>
      <div class="succ-div"></div>
      <div class="succ-brand">DecantspotGT</div>
    </div>`;
  setTimeout(closeCk,5000);
}

/* ─── ADMIN ─── */
function openAdmin(){
  try{const s=localStorage.getItem("dsgt_orders");if(s)orders=JSON.parse(s);}catch(e){}
  renderAdmin();
  document.getElementById("adOv").classList.add("open");
  document.getElementById("adModal").classList.add("open");
}
function closeAdmin(){
  document.getElementById("adOv").classList.remove("open");
  document.getElementById("adModal").classList.remove("open");
}

function renderAdmin(){
  document.getElementById("adContent").innerHTML=`
    <div style="display:flex;flex-direction:column;max-height:90vh;">
      <div class="admin-hd">
        <div><div class="admin-title">Panel de Administrador</div><div class="admin-sub">DECANTSPOTGT · GESTIÓN DE PEDIDOS</div></div>
        <div style="display:flex;gap:8px">
          ${adAuth?`<button class="btn-ref" onclick="refreshOrders()">↻ Actualizar</button>`:""}
          <button class="btn-x" onclick="closeAdmin()">✕</button>
        </div>
      </div>
      <div class="admin-body" id="adBody"></div>
    </div>`;
  renderAdBody();
}

function renderAdBody(){
  const b=document.getElementById("adBody");if(!b)return;
  if(!adAuth){
    b.innerHTML=`
      <div class="auth-wrap">
        <div class="auth-icon">🔐</div>
        <div class="auth-lbl">Acceso restringido</div>
        <input class="auth-inp" id="adPw" type="password" placeholder="Contraseña de administrador"
          onkeydown="if(event.key==='Enter')authAd()"/>
        <div id="adErr" style="display:none" class="auth-err">Contraseña incorrecta</div>
        <button class="auth-btn" onclick="authAd()">Ingresar</button>
      </div>`;
    return;
  }
  if(!orders.length){
    b.innerHTML=`<div style="text-align:center;padding:64px 0;color:var(--text4)">
      <div style="font-size:48px;margin-bottom:14px;color:var(--border2)">◈</div>
      <div style="font-size:9px;letter-spacing:3px;text-transform:uppercase">Sin pedidos aún</div>
      <div style="font-size:10px;color:var(--text4);margin-top:8px">Los pedidos aparecerán aquí cuando los clientes ordenen</div>
    </div>`;
    return;
  }
  const rev=orders.filter(o=>o.status!=="cancelado").reduce((s,o)=>s+o.total,0);
  b.innerHTML=`
    <div class="orders-meta">
      <span class="orders-cnt">${orders.length} pedido${orders.length!==1?"s":""}</span>
      <span class="orders-rev">Ingresos totales: <span>Q${rev}</span></span>
    </div>
    ${orders.map(o=>`
      <div class="ocard">
        <div class="o-top">
          <div>
            <div class="o-id-row">
              <span class="o-id">${o.id}</span>
              <span class="sbadge" style="background:${SC[o.status]}18;color:${SC[o.status]};border:1px solid ${SC[o.status]}44">${SL[o.status]}</span>
            </div>
            <div class="o-name">${o.cliente.nombre}</div>
            <div class="o-phone">${o.cliente.telefono}${o.cliente.zona?" · "+o.cliente.zona:""}</div>
            <div class="o-addr">${o.cliente.direccion}</div>
            ${o.cliente.notas?`<div class="o-notes">"${o.cliente.notas}"</div>`:""}
          </div>
          <div class="o-right">
            <div class="o-total">Q${o.total}</div>
            <div class="o-date">${new Date(o.ts).toLocaleDateString("es-GT",{day:"2-digit",month:"short",year:"numeric"})}</div>
          </div>
        </div>
        <div class="o-items">
          ${o.items.map(i=>`<div class="o-item"><span>${i.name} · ${i.size} ×${i.qty}</span><span>Q${i.price*i.qty}</span></div>`).join("")}
        </div>
        <div class="sbtns">
          ${["nuevo","en-proceso","entregado","cancelado"].map(s=>
            `<button class="sbtn" style="${o.status===s?`background:${SC[s]}14;color:${SC[s]};border-color:${SC[s]}55;font-weight:600`:""}"
              onclick="chSt('${o.id}','${s}')">${SL[s]}</button>`
          ).join("")}
        </div>
      </div>`).join("")}`;
}

function authAd(){
  const pw=document.getElementById("adPw")?.value||"";
  if(pw===PASS){adAuth=true;renderAdBody();}
  else{const e=document.getElementById("adErr");if(e){e.style.display="block";setTimeout(()=>e.style.display="none",1600);}}
}
function refreshOrders(){
  try{const s=localStorage.getItem("dsgt_orders");if(s)orders=JSON.parse(s);}catch(e){}
  renderAdBody();
}
function chSt(id,status){
  const o=orders.find(x=>x.id===id);
  if(o){o.status=status;try{localStorage.setItem("dsgt_orders",JSON.stringify(orders));}catch(e){}}
  renderAdBody();
}

/* ─── INICIO ─── */
try{const s=localStorage.getItem("dsgt_orders");if(s)orders=JSON.parse(s);}catch(e){}
renderCatalog();
updateCartUI();
