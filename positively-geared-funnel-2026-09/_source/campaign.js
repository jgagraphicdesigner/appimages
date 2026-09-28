(function(){
 'use strict';
 function init(root){
  if(root.dataset.pgReady)return;root.dataset.pgReady='true';
  var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)');
  if((!reduced||!reduced.matches)&&window.IntersectionObserver){
   var items=root.querySelectorAll('[data-reveal]');
   var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target);}});},{threshold:.07,rootMargin:'0px 0px -18px 0px'});
   items.forEach(function(el){observer.observe(el);});
   if(reduced&&reduced.addEventListener)reduced.addEventListener('change',function(e){if(e.matches){observer.disconnect();items.forEach(function(el){el.classList.remove('is-revealed');});}});
  }
  root.querySelectorAll('a[href^="#pg-"]').forEach(function(a){a.addEventListener('click',function(e){if(e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;var target=document.getElementById(a.getAttribute('href').slice(1));if(!target)return;e.preventDefault();target.scrollIntoView({behavior:reduced&&reduced.matches?'auto':'smooth',block:'start'});if(!target.hasAttribute('tabindex'))target.setAttribute('tabindex','-1');target.focus({preventScroll:true});});});
  var bump=root.querySelector('[data-preview-bump]');
  if(bump)bump.addEventListener('change',function(){var price=Number(bump.dataset.price);var total=root.querySelector('[data-preview-total]');if(total&&Number.isFinite(price)&&price>0)total.textContent=new Intl.NumberFormat('en-AU',{style:'currency',currency:'AUD'}).format(9+(bump.checked?price:0));});
  if(location.protocol==='file:'){root.querySelectorAll('[data-youtube]').forEach(function(frame){var fallback=frame.parentNode.querySelector('.video-file-fallback');frame.remove();if(fallback)fallback.hidden=false;});}
  var calendar=root.querySelector('[data-calendar]');
  if(calendar){var u=new URL(calendar.getAttribute('src'));if(/^https?:$/.test(location.protocol))u.searchParams.set('embed_domain',location.hostname);calendar.src=u.href;window.addEventListener('message',function(event){if(event.origin!=='https://calendly.com'||event.source!==calendar.contentWindow||!event.data||event.data.event!=='calendly.event_scheduled')return;var status=root.querySelector('[data-booking-status]');if(status){status.hidden=false;status.textContent='Your appointment has been booked through Calendly. Check your email for the calendar invitation.';}});}
 }
 function start(){document.querySelectorAll('.pg-funnel').forEach(init);}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
 if(window.MutationObserver){var delayed=new MutationObserver(start);delayed.observe(document.documentElement,{childList:true,subtree:true});setTimeout(function(){delayed.disconnect();},10000);}
 document.querySelectorAll('[data-preview-nav]').forEach(function(select){select.addEventListener('change',function(){location.href=select.value;});});
})();
