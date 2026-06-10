(function(){

  /* ============================================================
     HEADER HTML — fetch ашиглахгүй, шууд оруулсан
     file:// болон веб сервер аль алинд нь ажиллана
  ============================================================ */
  var HEADER_HTML = `<style>
header{background:rgba(255,255,255,0.72);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;transition:background .3s;}
html.dark header{background:rgba(22,22,22,0.78);}
.hdr-inner{display:flex;align-items:center;justify-content:space-between;height:76px;max-width:1280px;margin:0 auto;padding:0 56px;}
@media(max-width:768px){.hdr-inner{padding:0 20px;height:68px;}}
.hdr-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;}
.hdr-logo img{height:60px;width:auto;}
.nav-desktop{display:flex;align-items:center;height:100%;gap:2px;}
@media(max-width:1100px){.nav-desktop{display:none;}}
.nav-link{padding:0 14px;height:76px;display:flex;align-items:center;font-size:14px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;color:var(--text-muted);border-bottom:2px solid transparent;transition:color .15s,border-color .15s;white-space:nowrap;text-decoration:none;cursor:pointer;background:none;border-top:none;border-left:none;border-right:none;gap:3px;}
.nav-link:hover{color:var(--primary);}
.nav-link.active{color:var(--primary);border-bottom-color:var(--primary);}
.nav-dropdown{position:relative;height:76px;display:flex;align-items:center;}
.nav-dd-menu{position:absolute;top:calc(100% + 2px);left:0;min-width:220px;background:var(--bg-surface);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.11);display:none;z-index:200;padding:5px 0;}
html.dark .nav-dd-menu{box-shadow:0 8px 28px rgba(0,0,0,.42);}
.nav-dd-menu.open{display:block;}
.nav-dd-menu a{display:block;padding:10px 18px;font-size:14px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;color:var(--text-sec);transition:background .1s,color .1s;text-decoration:none;}
.nav-dd-menu a:hover{background:var(--bg-low);color:var(--primary);}
.nav-dd-menu a.active{color:var(--primary);}
.nav-sub-wrap{position:relative;}
.nav-dd-sub-trigger{display:flex;align-items:center;justify-content:space-between;gap:4px;padding:10px 18px;font-size:14px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;color:var(--text-sec);transition:background .1s,color .1s;text-decoration:none;cursor:pointer;width:100%;}
.nav-dd-sub-trigger:hover{background:var(--bg-low);color:var(--primary);}
.nav-sub-menu{position:absolute;left:100%;top:-5px;min-width:220px;background:var(--bg-surface);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.11);display:none;z-index:300;padding:5px 0;}
html.dark .nav-sub-menu{box-shadow:0 8px 28px rgba(0,0,0,.42);}
.nav-sub-menu.open{display:block;}
.nav-sub-menu a{display:block;padding:10px 18px;font-size:14px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;color:var(--text-sec);transition:background .1s,color .1s;text-decoration:none;}
.nav-sub-menu a:hover{background:var(--bg-low);color:var(--primary);}
.nav-hdr-actions{display:flex;align-items:center;gap:6px;flex-shrink:0;}
#langToggle{font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.05em;padding:6px 12px;border-radius:99px;border:1.5px solid var(--border);background:transparent;color:var(--text-muted);cursor:pointer;transition:all .15s;}
#langToggle:hover{border-color:var(--primary);color:var(--primary);}
.icon-btn{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--text-muted);background:transparent;border:none;cursor:pointer;transition:background .15s,color .15s;}
.icon-btn:hover{background:var(--bg-container);color:var(--primary);}
.btn-newtrekh{background:var(--primary);color:#fff;padding:9px 22px;border-radius:99px;border:none;font-size:13px;font-weight:700;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;transition:all .15s;text-decoration:none;display:inline-flex;align-items:center;}
.btn-newtrekh:hover{background:var(--primary-hover);transform:translateY(-1px);}
html.dark .btn-newtrekh{color:#000;}
#hamburger{display:none;width:38px;height:38px;border-radius:50%;align-items:center;justify-content:center;background:transparent;border:none;color:var(--text-muted);cursor:pointer;}
@media(max-width:1100px){#hamburger{display:flex;}}
#mobileMenu{display:none;position:fixed;top:68px;left:0;right:0;bottom:0;background:var(--bg-surface);z-index:99;flex-direction:column;padding:8px 20px 24px;border-top:1px solid var(--border);overflow-y:auto;}
#mobileMenu.open{display:flex;}
#mobileMenu a{padding:13px 8px;font-size:15px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;color:var(--text-sec);border-bottom:1px solid var(--border);text-decoration:none;}
#mobileMenu a.active{color:var(--primary);}
.mob-cat{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);font-family:'JetBrains Mono',monospace;padding:14px 8px 4px;}
</style>

<header>
  <div class="hdr-inner">
    <a class="hdr-logo" href="index.html">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIxU-A1r3NCaYt1hOmYEzStBc50sffz9bfC4ANRutEkz2VkPYxzyHH4VXV9PGWHNsPbIBjrBKpTDU7r7u1wF5C2cOM7kZZHnCYTLBfh5xRn3GfDgqzo9_3vHt_9r3bLWnvS19U4XvXz0sdjqsXHVoC7G8YBtK9XMFGHwj1-GCvgSxRGQBJshyHJyf8neiHQ7TBWeRSImqFVfVOVPCiU4gL_Lf0VS5NbhAKzT5Vc5fXWJINb0rMD7OR1yTttgjq9-MvZxIINapTWy8" alt="Есөн Шижир Инвест"/>
    </a>
    <nav class="nav-desktop">
      <div class="nav-dropdown" id="dd-about">
        <button class="nav-link">Бидний тухай <span class="material-symbols-outlined" style="font-size:16px">expand_more</span></button>
        <div class="nav-dd-menu" id="menu-about">
          <a href="about/tuz-mendchilgee.html">ТУЗ Мэндчилгээ</a>
          <a href="about/company-intro.html">Компанийн танилцуулга</a>
          <div class="nav-sub-wrap" id="sub-team">
            <a href="about/management-team.html" class="nav-dd-sub-trigger">
              Удирдлагын баг
              <span class="material-symbols-outlined" style="font-size:14px">chevron_right</span>
            </a>
            <div class="nav-sub-menu" id="sub-menu-team">
              <a href="about/management-team.html?tab=tuz">Төлөөлөн удирдах зөвлөл</a>
              <a href="about/management-team.html?tab=exec">Гүйцэтгэх удирдлагын баг</a>
            </div>
          </div>
          <a href="about/org-structure.html">Бүтэц зохион байгуулалт</a>
          <a href="about/transparency.html">Ил тод байдал</a>
          <a href="about/iso-certificate.html">ISO Сертификат</a>
        </div>
      </div>
      <a class="nav-link" href="products/index.html">Бүтээгдэхүүн</a>
      <div class="nav-dropdown" id="dd-invest">
        <button class="nav-link">Хөрөнгө оруулалт <span class="material-symbols-outlined" style="font-size:16px">expand_more</span></button>
        <div class="nav-dd-menu" id="menu-invest">
          <a href="investment/itgelts.html">Итгэлцэл</a>
          <a href="investment/hbuts.html">ХБҮЦ</a>
          <a href="investment/bond.html">Бонд</a>
          <a href="investment/report.html">Тайлан</a>
        </div>
      </div>
      <a class="nav-link" href="hr/index.html">Хүний нөөц</a>
      <div class="nav-dropdown" id="dd-news">
        <button class="nav-link">Мэдээ мэдээлэл <span class="material-symbols-outlined" style="font-size:16px">expand_more</span></button>
        <div class="nav-dd-menu" id="menu-news">
          <a href="news/index.html?cat=breaking">Цаг үеийн мэдээ</a>
          <a href="news/index.html?cat=social">Нийгмийн хариуцлага</a>
          <a href="news/index.html?cat=advice">Заавар зөвлөмж</a>
        </div>
      </div>
      <a class="nav-link" href="contact/index.html">Холбоо барих</a>
    </nav>
    <div class="nav-hdr-actions">
      <button id="langToggle">МН</button>
      <button id="themeToggle" class="icon-btn">
        <span id="icon-dark" class="material-symbols-outlined" style="font-size:20px">dark_mode</span>
        <span id="icon-light" class="material-symbols-outlined" style="font-size:20px;display:none">light_mode</span>
      </button>
      <a href="login.html" class="btn-newtrekh">Нэвтрэх</a>
      <button id="hamburger"><span class="material-symbols-outlined">menu</span></button>
    </div>
  </div>
</header>
<nav id="mobileMenu">
  <p class="mob-cat">Бидний тухай</p>
  <a href="about/tuz-mendchilgee.html">ТУЗ Мэндчилгээ</a>
  <a href="about/company-intro.html">Компанийн танилцуулга</a>
  <a href="about/management-team.html?tab=tuz">Төлөөлөн удирдах зөвлөл</a>
  <a href="about/management-team.html?tab=exec">Гүйцэтгэх удирдлагын баг</a>
  <a href="about/org-structure.html">Бүтэц зохион байгуулалт</a>
  <a href="about/transparency.html">Ил тод байдал</a>
  <a href="products/index.html">Бүтээгдэхүүн</a>
  <p class="mob-cat">Хөрөнгө оруулалт</p>
  <a href="investment/itgelts.html">Итгэлцэл</a>
  <a href="investment/hbuts.html">ХБҮЦ</a>
  <a href="investment/bond.html">Бонд</a>
  <a href="hr/index.html">Хүний нөөц</a>
  <p class="mob-cat">Мэдээ мэдээлэл</p>
  <a href="news/index.html?cat=breaking">Цаг үеийн мэдээ</a>
  <a href="news/index.html?cat=social">Нийгмийн хариуцлага</a>
  <a href="contact/index.html">Холбоо барих</a>
  <a href="login.html">Нэвтрэх</a>
</nav>`;

  /* ============================================================
     FOOTER HTML
  ============================================================ */
  var FOOTER_HTML = `<style>
.site-footer{background:var(--bg-low);border-top:1px solid var(--border);margin-top:80px;}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1.5fr 1.5fr;gap:40px;max-width:1280px;margin:0 auto;padding:56px 64px 40px;}
@media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:640px){.footer-grid{grid-template-columns:1fr;padding:36px 20px 28px;}}
.footer-brand{font-size:18px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:var(--primary);margin-bottom:10px;}
.footer-desc{font-size:14px;color:var(--text-muted);line-height:1.7;}
.footer-col h4{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;font-family:'JetBrains Mono',monospace;color:var(--primary);margin-bottom:14px;}
.footer-col a,.footer-col p{display:block;font-size:14px;color:var(--text-muted);margin-bottom:9px;transition:color .15s;text-decoration:none;}
.footer-col a:hover{color:var(--primary);}
.footer-subscribe{display:flex;gap:8px;margin-bottom:16px;}
.footer-subscribe input{flex:1;padding:9px 13px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-surface);color:var(--text);font-family:'Inter',sans-serif;font-size:14px;outline:none;transition:border-color .15s;}
.footer-subscribe input:focus{border-color:var(--primary);}
.footer-subscribe button{padding:9px 14px;background:var(--primary);color:#fff;border:none;border-radius:8px;cursor:pointer;transition:opacity .15s;}
.footer-subscribe button:hover{opacity:.88;}
html.dark .footer-subscribe button{color:#000;}
.footer-social{display:flex;gap:10px;}
.footer-social a{width:36px;height:36px;border-radius:50%;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--text-muted);margin-bottom:0;transition:border-color .15s,color .15s;}
.footer-social a:hover{border-color:var(--primary);color:var(--primary);}
.footer-bottom{max-width:1280px;margin:0 auto;padding:16px 64px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:center;}
@media(max-width:640px){.footer-bottom{padding:14px 20px;text-align:center;}}
.footer-bottom p{font-size:12px;color:var(--text-muted);font-family:'JetBrains Mono',monospace;}
</style>
<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <div class="footer-brand">Yesun Shijir Invest</div>
      <p class="footer-desc">Бид таны санхүүгийн итгэлт түнш байж, хамтын өсөлтийг бүтээх болно. Монгол Улсын Санхүүгийн Зохицуулах Хорооны зөвшөөрлийн дагуу үйл ажиллагаа явуулдаг ББСБ.</p>
    </div>
    <div class="footer-col">
      <h4>Холбоосууд</h4>
      <a href="about/tuz-mendchilgee.html">Бидний тухай</a>
      <a href="products/index.html">Бүтээгдэхүүн</a>
      <a href="investment/itgelts.html">Хөрөнгө оруулалт</a>
      <a href="hr/index.html">Хүний нөөц</a>
      <a href="news/index.html">Мэдээ мэдээлэл</a>
    </div>
    <div class="footer-col">
      <h4>Холбоо барих</h4>
      <p><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle;margin-right:5px">location_on</span>Сүхбаатар дүүрэг, 2-р хороо, Twin Tower 1, 13 давхар</p>
      <p><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle;margin-right:5px">phone</span>+976 7753-5353</p>
      <p><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle;margin-right:5px">mail</span>info@yesunshijir.mn</p>
    </div>
    <div class="footer-col">
      <h4>Мэдээлэл авах</h4>
      <div class="footer-subscribe">
        <input type="email" placeholder="И-мэйл хаяг"/>
        <button><span class="material-symbols-outlined" style="font-size:17px">send</span></button>
      </div>
      <div class="footer-social">
        <a href="https://www.facebook.com/yesunshijir" target="_blank" rel="noopener" aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Есөн Шижир Инвест ББСБ. Бүх эрх хуулиар хамгаалагдсан.</p>
  </div>
</footer>`;

  /* ============================================================
     INJECT — DOM-д шууд оруулна, fetch хэрэггүй
  ============================================================ */
  function inject(){
    var hp = document.getElementById('header-placeholder');
    if(hp){ hp.outerHTML = HEADER_HTML; }
    var fp = document.getElementById('footer-placeholder');
    if(fp){ fp.outerHTML = FOOTER_HTML; }
  }

  /* ============================================================
     ACTIVE LINK
  ============================================================ */
  function setActive(){
    var path = window.location.pathname + window.location.search;
    var file = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-dd-menu a, .nav-sub-menu a, #mobileMenu a').forEach(function(a){
      var href = a.getAttribute('href') || '';
      var hfile = href.split('/').pop().split('?')[0];
      if(hfile && hfile !== 'index.html' && file === hfile){
        a.classList.add('active');
      }
    });
  }

  /* ============================================================
     DROPDOWNS — hover open/close
  ============================================================ */
  function initDropdowns(){
    // Main dropdowns
    ['dd-about','dd-invest','dd-news'].forEach(function(k){
      var wrap = document.getElementById(k);
      var menu = document.getElementById('menu-' + k.replace('dd-',''));
      if(!wrap || !menu) return;
      var t;
      wrap.addEventListener('mouseenter', function(){ clearTimeout(t); menu.classList.add('open'); });
      wrap.addEventListener('mouseleave', function(){ t = setTimeout(function(){ menu.classList.remove('open'); }, 160); });
    });
    // Sub-menu: Удирдлагын баг
    var sw = document.getElementById('sub-team');
    var sm = document.getElementById('sub-menu-team');
    if(sw && sm){
      var st;
      sw.addEventListener('mouseenter', function(){ clearTimeout(st); sm.classList.add('open'); });
      sw.addEventListener('mouseleave', function(){ st = setTimeout(function(){ sm.classList.remove('open'); }, 160); });
    }
  }

  /* ============================================================
     MOBILE MENU
  ============================================================ */
  function initMobile(){
    var btn  = document.getElementById('hamburger');
    var menu = document.getElementById('mobileMenu');
    if(!btn || !menu) return;
    btn.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      var ic = btn.querySelector('.material-symbols-outlined');
      if(ic) ic.textContent = open ? 'close' : 'menu';
    });
    document.addEventListener('click', function(e){
      if(!menu.classList.contains('open')) return;
      if(!menu.contains(e.target) && !btn.contains(e.target)){
        menu.classList.remove('open');
        var ic = btn.querySelector('.material-symbols-outlined');
        if(ic) ic.textContent = 'menu';
      }
    });
  }

  /* ============================================================
     THEME + LANG
  ============================================================ */
  function initThemeLang(){
    var tb = document.getElementById('themeToggle');
    if(tb && window.toggleTheme) tb.addEventListener('click', window.toggleTheme);
    if(window.applyTheme) window.applyTheme();
    var lb = document.getElementById('langToggle');
    if(lb) lb.addEventListener('click', window.toggleLanguage);
    if(window.setLanguage && window.getCurrentLang) window.setLanguage(window.getCurrentLang());
  }

  /* ============================================================
     INIT
  ============================================================ */
  function init(){
    inject();          // Synchronous — no fetch, no await
    setActive();
    initDropdowns();
    initMobile();
    initThemeLang();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
