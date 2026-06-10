(function(){
  var KEY='ysi-lang';
  var lang=localStorage.getItem(KEY)||'mn';
  function apply(l){
    lang=l;
    localStorage.setItem(KEY,l);
    document.documentElement.lang=l==='en'?'en':'mn';
    document.querySelectorAll('[data-mn]').forEach(function(el){
      var txt=l==='en'?(el.getAttribute('data-en')||el.getAttribute('data-mn')):el.getAttribute('data-mn');
      if(el.tagName==='INPUT'||el.tagName==='TEXTAREA'){
        var ph=l==='en'?(el.getAttribute('data-en-placeholder')||''):(el.getAttribute('data-mn-placeholder')||'');
        if(ph)el.placeholder=ph;
      } else { el.textContent=txt; }
    });
    document.querySelectorAll('#langToggle,.lang-toggle').forEach(function(b){
      b.textContent=l==='mn'?'EN':'МН';
    });
  }
  function toggle(){apply(lang==='mn'?'en':'mn');}
  document.addEventListener('DOMContentLoaded',function(){
    apply(lang);
    var btn=document.getElementById('langToggle');
    if(btn)btn.addEventListener('click',toggle);
    document.querySelectorAll('.lang-toggle').forEach(function(b){b.addEventListener('click',toggle);});
  });
  window.setLanguage=apply;
  window.toggleLanguage=toggle;
  window.getCurrentLang=function(){return lang;};
})();
