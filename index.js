import{a as f,S as d,i as n}from"./assets/vendor-sgVy0kkG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="57567938-a750dc86e3e74b59c9f6f987b";function m(i){return f.get("https://pixabay.com/api/",{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log(r.message)})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(i){l.innerHTML=i.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:s,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
      <img class = "gallery-image" src="${r}" alt="${a}" />
      </a>
      <div class="image-info">
  <div>
    <p class="info-title">Likes</p>
    <p class="info-value">${e}</p>
  </div>

  <div>
    <p class="info-title">Views</p>
    <p class="info-value">${t}</p>
  </div>

  <div>
    <p class="info-title">Comments</p>
    <p class="info-value">${s}</p>
  </div>

  <div>
    <p class="info-title">Downloads</p>
    <p class="info-value">${u}</p>
  </div>
</div>
    </li>`).join(""),y.refresh()}function h(){l.innerHTML=""}function v(){c.classList.add("is-visible")}function L(){c.classList.remove("is-visible")}document.querySelector(".gallery");const b=document.querySelector(".form");b.addEventListener("submit",S);function S(i){i.preventDefault(),h();const r=i.target.elements["search-text"].value.trim();if(r==="")return n.show({message:"Please enter the word to search!"});v(),m(r).then(o=>{if(o.hits.length===0)return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});g(o.hits)}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
