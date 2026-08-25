/* ============ Icon library (line-art SVGs, reused per category) ============ */
const ICONS = {
  chair: `<svg viewBox="0 0 100 100" fill="none" stroke="#B08D57" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M28 15 L28 45 M72 15 L72 45 M28 15 Q28 8 36 8 L64 8 Q72 8 72 15 M22 45 L78 45 L78 58 L22 58 Z M28 58 L24 90 M72 58 L76 90 M24 90 L38 90 M76 90 L62 90"/></svg>`,
  sofa: `<svg viewBox="0 0 120 100" fill="none" stroke="#B08D57" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 55 L15 75 Q15 82 22 82 L98 82 Q105 82 105 75 L105 55 M15 55 L15 40 Q15 32 24 32 L96 32 Q105 32 105 40 L105 55 M15 55 L105 55 M40 32 L40 55 M80 32 L80 55 M20 82 L20 92 M100 82 L100 92"/></svg>`,
  table: `<svg viewBox="0 0 110 90" fill="none" stroke="#B08D57" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 25 L100 25 L100 33 L10 33 Z M18 33 L18 78 M92 33 L92 78 M30 50 L80 50"/></svg>`,
  storage: `<svg viewBox="0 0 100 100" fill="none" stroke="#B08D57" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 10 L85 10 L85 90 L15 90 Z M15 40 L85 40 M15 65 L85 65 M70 25 L78 25 M70 52 L78 52 M70 77 L78 77"/></svg>`,
  lighting: `<svg viewBox="0 0 90 110" fill="none" stroke="#B08D57" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M45 8 L45 28 M20 28 L70 28 L58 58 L32 58 Z M45 58 L45 90 M30 100 L60 100 M45 90 L30 100 M45 90 L60 100"/></svg>`,
  stool: `<svg viewBox="0 0 90 100" fill="none" stroke="#B08D57" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="45" cy="20" rx="30" ry="10"/><path d="M20 24 L14 90 M70 24 L76 90 M45 30 L45 90"/></svg>`
};

/* ============ Product data ============ */
const PRODUCTS = [
  { id:'p1', name:'Alder Lounge Chair', cat:'seating', icon:'chair', price:640, desc:'White oak frame, wool-blend cushion.', materials:[{n:'Oak',c:'#B08D57'},{n:'Walnut',c:'#5C3A28'},{n:'Ash',c:'#D8CBB3'}] },
  { id:'p2', name:'Marrow Sofa, 3-Seat', cat:'seating', icon:'sofa', price:2180, desc:'Kiln-dried frame, feather-down fill.', materials:[{n:'Linen',c:'#D8CBB3'},{n:'Boucl\u00e9',c:'#EAE2D2'},{n:'Sage',c:'#7C8B6F'}] },
  { id:'p3', name:'Fen Accent Stool', cat:'seating', icon:'stool', price:220, desc:'Solid ash, hand-turned legs.', materials:[{n:'Ash',c:'#D8CBB3'},{n:'Walnut',c:'#5C3A28'}] },
  { id:'p4', name:'Harrow Dining Table', cat:'tables', icon:'table', price:1480, desc:'Black walnut top, breadboard ends.', materials:[{n:'Walnut',c:'#5C3A28'},{n:'Oak',c:'#B08D57'}] },
  { id:'p5', name:'Kiln Side Table', cat:'tables', icon:'table', price:340, desc:'Compact oak table, mortise joints.', materials:[{n:'Oak',c:'#B08D57'},{n:'Ash',c:'#D8CBB3'}] },
  { id:'p6', name:'Rill Console Table', cat:'tables', icon:'table', price:820, desc:'Narrow profile, hand-rubbed finish.', materials:[{n:'Walnut',c:'#5C3A28'},{n:'Oak',c:'#B08D57'}] },
  { id:'p7', name:'Fettle Bookcase', cat:'storage', icon:'storage', price:960, desc:'Adjustable shelves, dovetailed sides.', materials:[{n:'Oak',c:'#B08D57'},{n:'Walnut',c:'#5C3A28'}] },
  { id:'p8', name:'Coppice Sideboard', cat:'storage', icon:'storage', price:1720, desc:'Brass pulls, soft-close doors.', materials:[{n:'Walnut',c:'#5C3A28'},{n:'Ash',c:'#D8CBB3'}] },
  { id:'p9', name:'Loam Bedside Chest', cat:'storage', icon:'storage', price:410, desc:'Three drawers, solid ash front.', materials:[{n:'Ash',c:'#D8CBB3'},{n:'Oak',c:'#B08D57'}] },
  { id:'p10', name:'Ember Floor Lamp', cat:'lighting', icon:'lighting', price:290, desc:'Oak stem, linen shade.', materials:[{n:'Oak',c:'#B08D57'},{n:'Walnut',c:'#5C3A28'}] },
  { id:'p11', name:'Rushlight Table Lamp', cat:'lighting', icon:'lighting', price:165, desc:'Turned walnut base.', materials:[{n:'Walnut',c:'#5C3A28'},{n:'Oak',c:'#B08D57'}] },
  { id:'p12', name:'Grove Pendant Light', cat:'lighting', icon:'lighting', price:210, desc:'Brass fixture, oak canopy.', materials:[{n:'Brass',c:'#B08D57'},{n:'Blackened Ash',c:'#3A342C'}] },
];

const QUOTES = [
  { text:'"Five years in and the joints haven\u2019t loosened once. It\u2019s the first sofa I\u2019ve owned that got more comfortable, not less."', attr:'\u2014 Maren H., Portland' },
  { text:'"I watched them cut the dovetails on my sideboard. You don\u2019t get that from a warehouse store."', attr:'\u2014 Dev K., Austin' },
  { text:'"Ordered a dining table for a family of six. Six years and two toddlers later, still flawless."', attr:'\u2014 Priya S., Chicago' },
];

/* ============ State ============ */
let cart = JSON.parse(localStorage.getItem('fettleoak_cart') || '[]');
let activeFilter = 'all';
let quoteIndex = 0;

/* ============ Render products ============ */
function renderProducts(){
  const grid = document.getElementById('productGrid');
  const items = PRODUCTS.filter(p => activeFilter === 'all' || p.cat === activeFilter);
  grid.innerHTML = items.map(p => `
    <div class="card" data-id="${p.id}">
      <div class="card__art">${ICONS[p.icon]}</div>
      <div class="card__body">
        <span class="card__cat">${p.cat}</span>
        <h3 class="card__name">${p.name}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="swatches" data-id="${p.id}">
          ${p.materials.map((m,i) => `<span class="swatch ${i===0?'is-active':''}" style="background:${m.c}" data-material="${m.n}" title="${m.n}"></span>`).join('')}
        </div>
        <div class="card__row">
          <span class="card__price">$${p.price.toLocaleString()}</span>
        </div>
        <button class="card__add" data-id="${p.id}">Add to cart</button>
      </div>
    </div>
  `).join('');
}

/* Track selected material per product */
const selectedMaterial = {};
PRODUCTS.forEach(p => selectedMaterial[p.id] = p.materials[0].n);

document.addEventListener('click', (e) => {
  const swatch = e.target.closest('.swatch');
  if (swatch){
    const wrap = swatch.closest('.swatches');
    const id = wrap.dataset.id;
    [...wrap.children].forEach(s => s.classList.remove('is-active'));
    swatch.classList.add('is-active');
    selectedMaterial[id] = swatch.dataset.material;
  }

  const addBtn = e.target.closest('.card__add');
  if (addBtn){
    addToCart(addBtn.dataset.id);
  }
});

/* ============ Filters ============ */
document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  document.querySelectorAll('.filter').forEach(f => f.classList.remove('is-active'));
  btn.classList.add('is-active');
  activeFilter = btn.dataset.filter;
  renderProducts();
});

/* ============ Cart logic ============ */
function saveCart(){ localStorage.setItem('fettleoak_cart', JSON.stringify(cart)); }

function addToCart(id){
  const product = PRODUCTS.find(p => p.id === id);
  const material = selectedMaterial[id];
  const key = id + '|' + material;
  const existing = cart.find(i => i.key === key);
  if (existing){
    existing.qty += 1;
  } else {
    cart.push({ key, id, name: product.name, price: product.price, icon: product.icon, material, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast(`${product.name} added to cart`);
  pulseCart();
}

function changeQty(key, delta){
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
}

function removeItem(key){
  cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
}

function renderCart(){
  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartCount');

  const count = cart.reduce((sum,i) => sum + i.qty, 0);
  countEl.textContent = count;

  if (cart.length === 0){
    itemsEl.innerHTML = `<p class="cart-empty">Your cart is empty. Go find something worth keeping.</p>`;
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item" data-key="${item.key}">
        <div class="cart-item__art">${ICONS[item.icon]}</div>
        <div class="cart-item__info">
          <span class="cart-item__name">${item.name}</span>
          <span class="cart-item__meta">${item.material}</span>
          <div class="cart-item__row">
            <div class="qty-ctrl">
              <button data-action="dec" data-key="${item.key}">&minus;</button>
              <span>${item.qty}</span>
              <button data-action="inc" data-key="${item.key}">+</button>
            </div>
            <span>$${(item.price * item.qty).toLocaleString()}</span>
          </div>
          <button class="cart-item__remove" data-action="remove" data-key="${item.key}">Remove</button>
        </div>
      </div>
    `).join('');
  }

  const total = cart.reduce((sum,i) => sum + i.price * i.qty, 0);
  totalEl.textContent = `$${total.toLocaleString()}`;
}

document.getElementById('cartItems').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const key = btn.dataset.key;
  if (btn.dataset.action === 'inc') changeQty(key, 1);
  if (btn.dataset.action === 'dec') changeQty(key, -1);
  if (btn.dataset.action === 'remove') removeItem(key);
});

function pulseCart(){
  const btn = document.getElementById('cartToggle');
  btn.style.transform = 'scale(1.12)';
  setTimeout(() => { btn.style.transform = 'scale(1)'; }, 180);
}

/* ============ Cart drawer open/close ============ */
const drawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('cartOverlay');

function openCart(){
  drawer.classList.add('is-open');
  overlay.classList.add('is-open');
  drawer.setAttribute('aria-hidden','false');
}
function closeCart(){
  drawer.classList.remove('is-open');
  overlay.classList.remove('is-open');
  drawer.setAttribute('aria-hidden','true');
}
document.getElementById('cartToggle').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart(); });

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0){
    showToast('Your cart is empty');
    return;
  }
  showToast('This is a demo — hook this button up to your checkout flow');
});

/* ============ Toast ============ */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

/* ============ Quote rotator ============ */
function renderQuote(){
  const q = QUOTES[quoteIndex];
  document.getElementById('quoteText').textContent = q.text;
  document.getElementById('quoteAttr').textContent = q.attr;
  document.getElementById('quoteDots').innerHTML = QUOTES.map((_, i) =>
    `<button data-i="${i}" class="${i === quoteIndex ? 'is-active' : ''}" aria-label="Show review ${i+1}"></button>`
  ).join('');
}
document.getElementById('quoteDots').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  quoteIndex = Number(btn.dataset.i);
  renderQuote();
});
setInterval(() => {
  quoteIndex = (quoteIndex + 1) % QUOTES.length;
  renderQuote();
}, 6000);

/* ============ Newsletter form ============ */
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  const msg = document.getElementById('newsletterMsg');
  msg.textContent = `Thanks — we'll write to ${email} when something new ships.`;
  e.target.reset();
});

/* ============ Init ============ */
renderProducts();
renderCart();
renderQuote();