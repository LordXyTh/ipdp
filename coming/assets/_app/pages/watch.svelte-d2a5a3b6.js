import{S as e,i as t,s,e as a,$ as r,c as d,a as l,d as n,b as i,E as o,F as p,z as c,a0 as m}from"../chunks/vendor-54cab04d.js";const{document:h}=m;function u(e){let t,s,c,m,u,v;return{c(){t=a("script"),c=a("script"),u=a("script"),this.h()},l(e){const s=r('[data-svelte="svelte-8f7tqx"]',h.head);t=d(s,"SCRIPT",{src:!0}),l(t).forEach(n),c=d(s,"SCRIPT",{src:!0}),l(c).forEach(n),u=d(s,"SCRIPT",{src:!0}),l(u).forEach(n),s.forEach(n),this.h()},h(){t.src!==(s="https://cdn.jsdelivr.net/npm/p2p-media-loader-core@latest/build/p2p-media-loader-core.min.js")&&i(t,"src","https://cdn.jsdelivr.net/npm/p2p-media-loader-core@latest/build/p2p-media-loader-core.min.js"),c.src!==(m="https://cdn.jsdelivr.net/npm/p2p-media-loader-hlsjs@latest/build/p2p-media-loader-hlsjs.min.js")&&i(c,"src","https://cdn.jsdelivr.net/npm/p2p-media-loader-hlsjs@latest/build/p2p-media-loader-hlsjs.min.js"),u.src!==(v="https://cdn.jsdelivr.net/npm/clappr@latest")&&i(u,"src","https://cdn.jsdelivr.net/npm/clappr@latest")},m(e,s){o(h.head,t),o(h.head,c),o(h.head,u)},p:p,i:p,o:p,d(e){n(t),n(c),n(u)}}}function v(e){let t=()=>{let{p2pml:e}=window;if(e&&e.hlsjs.Engine.isSupported()){var s=new e.hlsjs.Engine;const t=document.getElementById("intro-video"),r=document.getElementById("movie-banner"),d=document.getElementById("sound-toggle"),l=document.getElementById("video-overlay");d.remove(),l.remove(),t.remove();const n=document.createElement("div");n.id="player",n.style.width="100%",n.style.height="100vh",r.appendChild(n);var a=new Clappr.Player({parentId:"#player",source:"/static/silhouettes.mp4",mute:!1,autoPlay:!1,width:"100%",height:"100%",playback:{hlsjsConfig:{liveSyncDurationCount:7,loader:s.createLoaderClass()}}});e.hlsjs.initClapprPlayer(a)}else setTimeout(t,100)};return c(t),[]}export default class extends e{constructor(e){super(),t(this,e,v,u,s,{})}}
