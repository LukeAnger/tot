import{S as p,O as w,G as h,W as y,P as L,D as b,A as O,a as P}from"./three-34692ea3.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();const x=""+new URL("first_rigged_fox-f0108a67.glb",import.meta.url).href,r=new p,c=new w;r.add(c);c.rotation.y=Math.PI;const v=new h;v.load(x,a=>{c.add(a.scene)});const f=document.getElementById("webgl-canvas"),o=new y({canvas:f});o.setSize(window.innerWidth,window.innerHeight);o.setPixelRatio(window.devicePixelRatio);const n=new L(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=6;n.position.y=3;n.rotation.x=-.2;const l=new b(16777215,1);l.position.set(0,0,5);r.add(l);const A=new O(16777215,.5);r.add(A);const R=new P(n,f),u=()=>{o.render(r,n)};u();R.addEventListener("change",u);const m=()=>{requestAnimationFrame(m),o.render(r,n)};m();
