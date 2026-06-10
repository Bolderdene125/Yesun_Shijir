(function(){
  var KEY='ysi-theme';
  var saved=localStorage.getItem(KEY);
  var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark=saved==='dark'||(!saved&&prefersDark);
  var root=document.documentElement;
  root.classList.toggle('dark',isDark);
  root.classList.toggle('light',!isDark);
  function updateIcon(dark){
    var d=document.getElementById('icon-dark');
    var l=document.getElementById('icon-light');
    if(d)d.style.display=dark?'none':'inline';
    if(l)l.style.display=dark?'inline':'none';
  }
  function toggle(){
    var nowDark=root.classList.contains('dark');
    root.classList.toggle('dark',!nowDark);
    root.classList.toggle('light',nowDark);
    localStorage.setItem(KEY,nowDark?'light':'dark');
    updateIcon(!nowDark);
  }
  document.addEventListener('DOMContentLoaded',function(){
    updateIcon(root.classList.contains('dark'));
    var btn=document.getElementById('themeToggle');
    if(btn)btn.addEventListener('click',toggle);
    document.querySelectorAll('.theme-toggle').forEach(function(b){b.addEventListener('click',toggle);});
  });
  window.toggleTheme=toggle;
  window.applyTheme=function(){updateIcon(root.classList.contains('dark'));};
})();
