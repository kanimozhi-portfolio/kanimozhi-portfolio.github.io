const A='assets/images/';
const V='assets/videos/';
const P='assets/video-posters/';
const items=[
 {id:'journey',cat:'design',title:'The Journey',type:'Book Cover',img:A+'the-journey.png',desc:'Editorial cover design with front and back cover treatment.'},
 {id:'back',cat:'design',title:'The Journey — Back',type:'Book Cover',img:A+'back-cover.png',desc:'Back cover companion to The Journey.'},
 {id:'cobride1',cat:'social',title:'Co-bride — Social Post 01',type:'Instagram',img:A+'co-bride.png',desc:'Bridal social creative.'},
 {id:'cobride2',cat:'social',title:'Co-bride — Social Post 02',type:'Instagram',img:A+'co-bride-1.png',desc:'Commercial social creative with CTA.'},
 {id:'adhi',cat:'design',title:"Adhi's Kitchen",type:'Brand Identity',img:A+'adhi-s-kitchen.png',desc:'Logo and identity application.'},
 {id:'iphone',cat:'design',title:'iPhone X — Water',type:'Concept Poster',img:A+'iphone-x.png',desc:'Concept product advertising.'},
 {id:'iphone2',cat:'design',title:'iPhone X — Blue',type:'Concept Poster',img:A+'iphone-poster.png',desc:'Alternate product poster concept.'},
 {id:'plastic',cat:'design',title:'Say No To Plastic',type:'Campaign Poster',img:A+'say-no-to-plastic.png',desc:'Awareness campaign visual.'},
 {id:'capture',cat:'design',title:'Capture Your Moments',type:'Concept Poster',img:A+'capture-yoyr-moments.png',desc:'Photography-oriented concept poster.'},
 {id:'independence',cat:'design',title:'Independence Day',type:'Festive Content',img:A+'happy-independence-day.png',desc:'Festive social creative.'},
 {id:'onam',cat:'design',title:'Onam',type:'Festive Content',img:A+'onam.png',desc:'Jewellery festive creative.'},
 {id:'pongal',cat:'design',title:'Pongal',type:'Festive Content',img:A+'pongal-1.png',desc:'Jewellery festive creative.'},
 {id:'valentine',cat:'design',title:"Valentine's Day",type:'Festive Content',img:A+'valentines-day-1.png',desc:'Jewellery festive creative.'},
 {id:'diwali',cat:'design',title:'Diwali',type:'Festive Content',img:A+'diwali.png',desc:'Jewellery festive creative.'},
 {id:'child1',cat:'design',title:"Children's Day",type:'Festive Content',img:A+'childrens-day-1.png',desc:'Festive social creative.'},
 {id:'child2',cat:'design',title:"Children's Day — Alternate",type:'Festive Content',img:A+'childrens-day.png',desc:'Alternate festive creative.'},
 {id:'christmas1',cat:'design',title:'Christmas',type:'Festive Content',img:A+'christmas.png',desc:'Festive social creative.'},
 {id:'christmas2',cat:'design',title:'Christmas — Alternate',type:'Festive Content',img:A+'christmas-1.png',desc:'Alternate festive creative.'},
 {id:'diwali2',cat:'design',title:'Diwali — Alternate',type:'Festive Content',img:A+'diwali-1.png',desc:'Alternate festive creative.'},
 {id:'gandhi',cat:'design',title:'Gandhi Jayanthi',type:'Festive Content',img:A+'gandhi-jayanthi.png',desc:'Festive social creative.'},
 {id:'testimony1',cat:'video',title:'Bloom Revive Testimony',type:'Testimony Video',video:V+'bloom-revive-testimony-final-v2.mp4',poster:P+'bloom-revive-testimony-final-v2.jpg',desc:'Client testimony edit.'},
 {id:'testimony2',cat:'video',title:'Testimony',type:'Testimony Video',video:V+'testimony.mp4',poster:P+'testimony.jpg',desc:'Testimony edit.'},
 {id:'story',cat:'video',title:"Fitra's Vlog",type:'Storytelling',video:V+'fitrascalvlog.mp4',poster:P+'fitrascalvlog.jpg',desc:'Vlog storytelling edit.'},
 {id:'mua',cat:'social',title:'MUA Social Media',type:'Social Media Management',desc:'15-day social media management case study — content, reels and lead-focused creative execution.'},
 {id:'mua1',cat:'social',title:'MUA — Reel 03',type:'Social Reel',video:V+'reel-3.mp4',poster:P+'reel-3.jpg',desc:'Real client social-media work.'},
 {id:'mua2',cat:'social',title:'MUA — Reel 08',type:'Social Reel',video:V+'reel-8-1.mp4',poster:P+'reel-8-1.jpg',desc:'Real client social-media work.'},
 {id:'mua3',cat:'social',title:'MUA — Reel 09',type:'Social Reel',video:V+'reel-9-1.mp4',poster:P+'reel-9-1.jpg',desc:'Real client social-media work.'},
 {id:'false',cat:'video',title:'False Fatigue',type:'Educational / Talking Head',video:V+'false-fatigue-v2-1.mp4',poster:P+'false-fatigue-v2-1.jpg',desc:'Educational short-form edit.'},
 {id:'mirror',cat:'video',title:'Mirror Secret',type:'Educational / Talking Head',video:V+'mirror-secret-fv-1.mp4',poster:P+'mirror-secret-fv-1.jpg',desc:'Educational short-form edit.'},
 {id:'good',cat:'video',title:'Good Job',type:'Educational / Talking Head',video:V+'good-job-v2.mp4',poster:P+'good-job-v2.jpg',desc:'Educational short-form edit.'},
 {id:'future',cat:'video',title:'Future Course',type:'Educational / Talking Head',video:V+'future-course.mp4',poster:P+'future-course.jpg',desc:'Educational short-form edit.'},
 {id:'maths',cat:'video',title:'Maths One Mark',type:'Educational / Talking Head',video:V+'maths-one-mark.mp4',poster:P+'maths-one-mark.jpg',desc:'Educational short-form edit.'},
 {id:'tamil',cat:'video',title:'11th Tamil',type:'Educational / Talking Head',video:V+'11th-tamil.mp4',poster:P+'11th-tamil.jpg',desc:'Educational short-form edit.'},
 {id:'motion',cat:'video',title:'Motion Graphics',type:'Motion Graphics',video:V+'video-from-kanimozhi.mp4',poster:P+'video-from-kanimozhi.jpg',desc:'Motion graphics study.'},
 {id:'tribhang',cat:'video',title:'Tribhang 4',type:'Dance / Performance',video:V+'tribhang-4.mp4',poster:P+'tribhang-4.jpg',desc:'Performance edit.'},
 {id:'kathak',cat:'video',title:'Kathak Trailer',type:'Dance / Performance',video:V+'kathak-trailer.mp4',poster:P+'kathak-trailer.jpg',desc:'Dance trailer edit.'},
 {id:'ai',cat:'video',title:'Shankara Water Descaler',type:'AI-Assisted Commercial',video:V+'shankara-water-descaler-final-v1-english.mp4',poster:P+'shankara-water-descaler-final-v1-english.jpg',desc:'AI-assisted commercial video.'},
 {id:'titans',cat:'strategy',title:'Rise of the Titans',type:'Creative Direction / Content Strategy',desc:'ICN India 2026 — world-building, narrative and a 26-reel series system.'}
];

const grid=document.getElementById('archiveGrid'); const count=document.getElementById('count');
function card(x){const media=x.video?`<video muted loop playsinline preload="metadata" poster="${x.poster||''}"><source src="${x.video}" type="video/mp4"></video>`:`<img src="${x.img}" alt="${x.title}">`;return `<article class="archive-item" data-open="${x.id}"><div class="archive-thumb">${media}</div><h3>${x.title}</h3><p>${x.type}</p></article>`}
function render(filter='all'){const list=filter==='all'?items:items.filter(x=>x.cat===filter);grid.innerHTML=list.map(card).join('');count.textContent=`${list.length} projects`;grid.querySelectorAll('[data-open]').forEach(e=>e.addEventListener('click',()=>openModal(e.dataset.open)));grid.querySelectorAll('video').forEach(v=>{v.addEventListener('mouseenter',()=>v.play().catch(()=>{}));v.addEventListener('mouseleave',()=>v.pause())})}
render();
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)}));
document.querySelectorAll('[data-open]').forEach(e=>e.addEventListener('click',()=>openModal(e.dataset.open)));
const modal=document.getElementById('modal'), content=document.getElementById('modalContent');
function openModal(id){const x=items.find(i=>i.id===id);if(!x)return;let html=`<div class="meta">${x.type}</div><h2>${x.title}</h2><p class="modal-copy">${x.desc}</p>`;
 if(id==='titans'){html+=`<div class="modal-section"><h3>Project thinking</h3><p class="modal-copy">A campaign world built around the idea of Titans as living archetypes of discipline and dominance. The story moves from the Scroll, through city-specific identities, to the Gathering and the Dubai Forge.</p><div class="timeline"><div><b>Mumbai</b><span>Storm Titan</span></div><div><b>Bangalore</b><span>War Titan</span></div><div><b>Hyderabad</b><span>Desire Titan</span></div><div><b>Goa</b><span>Gathering</span></div><div><b>Dubai</b><span>Forge Titan</span></div></div></div><div class="modal-section"><h3>Role</h3><div class="tagrow"><span class="tag">Creative Analysis</span><span class="tag">World-building</span><span class="tag">Story Development</span><span class="tag">Content Strategy</span><span class="tag">Series Planning</span></div></div>`}
 else if(id==='journey'){html+=`<div class="modal-grid"><img src="${A}the-journey.png" alt="The Journey front cover"><img src="${A}back-cover.png" alt="The Journey back cover"></div>`}
 else if(id==='mua'){html+=`<div class="modal-grid"><video controls playsinline poster="${P}reel-3.jpg"><source src="${V}reel-3.mp4" type="video/mp4"></video><video controls playsinline poster="${P}reel-8-1.jpg"><source src="${V}reel-8-1.mp4" type="video/mp4"></video><video controls playsinline poster="${P}reel-9-1.jpg"><source src="${V}reel-9-1.mp4" type="video/mp4"></video></div><div class="modal-section"><h3>Role</h3><p class="modal-copy">Social media management, content execution and reel creation for an MUA page. The project can be expanded later with analytics screenshots and the 15-day performance story.</p></div>`}
 else if(x.video){html+=`<div class="modal-grid"><video controls playsinline poster="${x.poster||''}"><source src="${x.video}" type="video/mp4"></video></div>`}
 else {html+=`<div class="modal-grid"><img src="${x.img}" alt="${x.title}"></div>`}
 content.innerHTML=html;modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');content.innerHTML='';document.body.style.overflow=''}
document.querySelector('.close').addEventListener('click',closeModal);document.querySelector('.modal-backdrop').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const mb=document.querySelector('.menu-btn'), menu=document.querySelector('.menu');mb.addEventListener('click',()=>{const open=menu.classList.toggle('open');mb.setAttribute('aria-expanded',open)});
const drop=document.querySelector('.nav-dropdown'), dropBtn=document.querySelector('.nav-drop-trigger');
if(dropBtn){dropBtn.addEventListener('click',()=>{const open=drop.classList.toggle('open');dropBtn.setAttribute('aria-expanded',open)});}
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');if(drop){drop.classList.remove('open');dropBtn&&dropBtn.setAttribute('aria-expanded','false')}const filter=a.dataset.filterLink;if(filter){const button=document.querySelector(`.filter[data-filter=\"${filter}\"]`);if(button)button.click()}}));
const revealTargets=document.querySelectorAll('.hero-kicker,.hero h1,.hero-copy,.hero-meta,.section-head,.project,.archive-item,.approach-layout>h2,.steps>div,.cap-grid>div,.about-layout>h2,.about-layout>p,.contact h2,.contact-link');
revealTargets.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=`${Math.min(i%6,5)*55}ms`});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});revealTargets.forEach(el=>observer.observe(el));}else{revealTargets.forEach(el=>el.classList.add('is-visible'));}

