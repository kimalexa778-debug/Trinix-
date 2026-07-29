/* =========================================================
NUIT MAGIQUE — style.css
Palette : noir profond / violet / blanc-lavande / rose cœur
========================================================= */

:root{
--black:        #06040c;
--black-soft:   #0d0817;
--purple-deep:  #2a1450;
--purple:       #6d3fc9;
--purple-light: #a578f0;
--lavender:     #e7dcff;
--white:        #f7f3ff;
--pink:         #ff7fb0;
--gold:         #ffe3a3;

--shadow-glow: 0 0 40px rgba(160, 100, 240, 0.35);
--font-display: Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Times New Roman', serif;
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

--ease-soft: cubic-bezier(.22,.9,.35,1.1);
}

*{ box-sizing: border-box; }

html, body{
margin: 0;
padding: 0;
width: 100%;
height: 100%;
overflow-x: hidden;
background: radial-gradient(120% 90% at 50% 0%, var(--purple-deep) 0%, var(--black-soft) 45%, var(--black) 100%);
color: var(--white);
font-family: var(--font-body);
-webkit-tap-highlight-color: transparent;
}

body{
min-height: 100svh;
position: relative;
}

::selection{ background: var(--purple); color: var(--white); }

button{
font-family: inherit;
border: none;
background: none;
color: inherit;
cursor: pointer;
-webkit-tap-highlight-color: transparent;
}

/* ---------- Fond étoilé (canvas) ---------- */
#stars-canvas{
position: fixed;
inset: 0;
width: 100%;
height: 100%;
z-index: 0;
pointer-events: none;
}

/* ---------- Particules flottantes (cœurs / étincelles) ---------- */
#particles{
position: fixed;
inset: 0;
z-index: 1;
pointer-events: none;
overflow: hidden;
}

.particle{
position: absolute;
bottom: -10%;
opacity: 0;
will-change: transform, opacity;
animation-name: float-up;
animation-timing-function: linear;
animation-fill-mode: forwards;
filter: drop-shadow(0 0 6px rgba(200,150,255,0.5));
}

@keyframes float-up{
0%   { transform: translateY(0) translateX(0) rotate(0deg) scale(0.6); opacity: 0; }
10%  { opacity: 0.9; }
85%  { opacity: 0.7; }
100% { transform: translateY(-110vh) translateX(var(--drift, 30px)) rotate(360deg) scale(1); opacity: 0; }
}

/* ---------- Lune ---------- */
.moon{
position: fixed;
top: max(18px, env(safe-area-inset-top));
right: 18px;
z-index: 30;
width: 58px;
height: 58px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
transition: transform .35s var(--ease-soft);
}

.moon-glow{
position: absolute;
inset: -14px;
border-radius: 50%;
background: radial-gradient(circle, rgba(255,230,163,0.55) 0%, rgba(255,230,163,0.12) 45%, transparent 70%);
animation: moon-pulse 4.5s ease-in-out infinite;
}

.moon-face{
position: relative;
font-size: 34px;
filter: drop-shadow(0 0 10px rgba(255,227,163,0.8));
transform: rotate(-10deg);
}

@keyframes moon-pulse{
0%, 100% { opacity: .7; transform: scale(1); }
50%      { opacity: 1;  transform: scale(1.15); }
}

.moon:active{ transform: scale(0.85) rotate(15deg); }
.moon.egg-shake{ animation: moon-shake .6s var(--ease-soft); }
@keyframes moon-shake{
0%, 100% { transform: rotate(0); }
20%      { transform: rotate(-18deg) scale(1.1); }
40%      { transform: rotate(14deg) scale(1.1); }
60%      { transform: rotate(-10deg); }
80%      { transform: rotate(6deg); }
}

/* ---------- Bouton musique ---------- */
.icon-btn{
position: fixed;
top: max(18px, env(safe-area-inset-top));
left: 18px;
z-index: 30;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
color: var(--lavender);
background: rgba(255,255,255,0.06);
border: 1px solid rgba(200,160,255,0.35);
backdrop-filter: blur(6px);
transition: transform .3s var(--ease-soft), box-shadow .3s, background .3s;
}

.icon-btn:active{ transform: scale(0.88); }

.icon-btn.playing{
background: rgba(160, 100, 240, 0.25);
box-shadow: 0 0 22px rgba(160,100,240,0.55);
animation: note-bob 1.6s ease-in-out infinite;
}

@keyframes note-bob{
0%, 100% { transform: translateY(0) rotate(0); }
50%      { transform: translateY(-3px) rotate(-6deg); }
}

/* ---------- Toast easter egg ---------- */
.egg-toast{
position: fixed;
left: 50%;
top: 14%;
transform: translate(-50%, -12px);
z-index: 60;
padding: 10px 18px;
border-radius: 999px;
background: rgba(20, 10, 35, 0.85);
border: 1px solid rgba(200,160,255,0.4);
color: var(--lavender);
font-size: 14px;
letter-spacing: .3px;
white-space: nowrap;
opacity: 0;
pointer-events: none;
box-shadow: var(--shadow-glow);
transition: opacity .35s ease, transform .35s ease;
}

.egg-toast.show{
opacity: 1;
transform: translate(-50%, 0);
}

/* ---------- Layout général des écrans ---------- */
#app{
position: relative;
z-index: 5;
min-height: 100svh;
display: flex;
align-items: center;
justify-content: center;
padding: 24px 18px calc(24px + env(safe-area-inset-bottom));
}

.screen{
display: none;
width: 100%;
max-width: 460px;
animation: screen-in .7s var(--ease-soft) both;
}

.screen.is-active{ display: block; }

@keyframes screen-in{
from { opacity: 0; transform: translateY(18px) scale(.98); }
to   { opacity: 1; transform: translateY(0) scale(1); }
}

.scene-title{
text-align: center;
color: var(--lavender);
font-family: var(--font-display);
font-style: italic;
font-size: clamp(16px, 4.2vw, 19px);
margin: 0 0 28px;
opacity: 0.9;
}

/* ---------- Carte mot de passe ---------- */
.card{
background: linear-gradient(165deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
border: 1px solid rgba(200,160,255,0.25);
border-radius: 28px;
padding: 38px 26px 30px;
text-align: center;
backdrop-filter: blur(10px);
box-shadow: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
}

.card-emblem{
font-size: 40px;
margin-bottom: 6px;
filter: drop-shadow(0 0 14px rgba(255,227,163,0.7));
animation: emblem-float 3.5s ease-in-out infinite;
}

@keyframes emblem-float{
0%, 100% { transform: translateY(0) rotate(-6deg); }
50%      { transform: translateY(-8px) rotate(6deg); }
}

.title{
font-family: var(--font-display);
font-style: italic;
font-weight: 400;
font-size: clamp(22px, 6.5vw, 28px);
margin: 6px 0 8px;
background: linear-gradient(90deg, var(--lavender), var(--pink), var(--purple-light));
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: .3px;
}

.subtitle{
color: rgba(231,220,255,0.7);
font-size: 14.5px;
margin: 0 0 26px;
}

.field{ margin-bottom: 18px; }

.input{
width: 100%;
padding: 15px 18px;
border-radius: 16px;
border: 1px solid rgba(200,160,255,0.3);
background: rgba(0,0,0,0.25);
color: var(--white);
font-size: 16px;
text-align: center;
letter-spacing: .5px;
outline: none;
transition: border-color .3s, box-shadow .3s, transform .2s;
}

.input::placeholder{ color: rgba(231,220,255,0.35); }

.input:focus{
border-color: var(--purple-light);
box-shadow: 0 0 0 4px rgba(160,100,240,0.2);
}

.input.shake{ animation: input-shake .45s; }
@keyframes input-shake{
0%, 100% { transform: translateX(0); }
20%      { transform: translateX(-8px); }
40%      { transform: translateX(8px); }
60%      { transform: translateX(-6px); }
80%      { transform: translateX(6px); }
}

.hint{
margin: 16px 0 0;
font-size: 12.5px;
color: rgba(231,220,255,0.45);
}

.error{
min-height: 18px;
margin: 10px 0 0;
font-size: 13px;
color: var(--pink);
opacity: 0;
transition: opacity .3s;
}
.error.show{ opacity: 1; }

/* ---------- Boutons ---------- */
.btn{
position: relative;
width: 100%;
padding: 15px 20px;
border-radius: 16px;
font-size: 15.5px;
font-weight: 600;
letter-spacing: .3px;
overflow: hidden;
transition: transform .25s var(--ease-soft), box-shadow .3s;
}

.btn span{ position: relative; z-index: 2; }

.btn-primary{
color: var(--white);
background: linear-gradient(135deg, var(--purple), #4a1f96);
box-shadow: 0 10px 30px rgba(109,63,201,0.5);
}

.btn-primary::before{
content: "";
position: absolute;
inset: 0;
background: linear-gradient(135deg, var(--pink), var(--purple-light));
opacity: 0;
transition: opacity .35s;
}

.btn-primary:active::before{ opacity: 1; }

.btn-secondary{
margin-top: 26px;
color: var(--lavender);
background: rgba(255,255,255,0.06);
border: 1px solid rgba(200,160,255,0.35);
}

.btn:active{ transform: scale(0.95); }
.btn:hover{ transform: translateY(-2px); box-shadow: 0 14px 34px rgba(109,63,201,0.6); }

/* ==========================================================
ÉCRAN ENVELOPPE
========================================================== */
.envelope-scene{ text-align: center; }

.envelope{
position: relative;
width: 240px;
height: 160px;
margin: 10px auto 26px;
perspective: 1000px;
}

.envelope-shadow{
position: absolute;
bottom: -18px;
left: 10%;
width: 80%;
height: 22px;
background: radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%);
border-radius: 50%;
transition: opacity .4s, transform .4s;
}

.envelope-body{
position: relative;
width: 100%;
height: 100%;
border-radius: 10px;
background: linear-gradient(160deg, #efe6ff 0%, #d9c6ff 55%, #c3a6f5 100%);
box-shadow: 0 18px 40px rgba(0,0,0,0.5);
transition: transform .5s var(--ease-soft);
animation: envelope-idle 3s ease-in-out infinite;
}

@keyframes envelope-idle{
0%, 100% { transform: translateY(0) rotate(0deg); }
50%      { transform: translateY(-6px) rotate(-1.2deg); }
}

.envelope-body::before,
.envelope-body::after{
content: "";
position: absolute;
top: 0;
width: 0;
height: 0;
border-top: 80px solid rgba(255,255,255,0.35);
}
.envelope-body::before{
left: 0;
border-left: 120px solid transparent;
}
.envelope-body::after{
right: 0;
border-right: 120px solid transparent;
}

.envelope-letter-peek{
position: absolute;
left: 8%;
right: 8%;
top: -6px;
height: 90%;
background: linear-gradient(180deg, var(--white), #efe6ff);
border-radius: 6px 6px 0 0;
box-shadow: 0 -4px 14px rgba(0,0,0,0.15);
transform: translateY(100%);
transition: transform .7s var(--ease-soft) .15s;
z-index: 1;
}

.envelope-flap{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 82px;
background: linear-gradient(160deg, #d9c6ff, #b48fe8);
clip-path: polygon(0 0, 50% 68%, 100% 0);
transform-origin: top center;
transition: transform .6s var(--ease-soft);
z-index: 3;
box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.envelope-seal{
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 4;
font-size: 26px;
filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
transition: opacity .3s, transform .4s;
}

/* état ouvert */
.envelope.is-open .envelope-flap{
transform: rotateX(180deg);
}
.envelope.is-open .envelope-seal{
opacity: 0;
transform: translate(-50%, -50%) scale(0.3);
}
.envelope.is-open .envelope-letter-peek{
transform: translateY(-38%);
}
.envelope.is-open .envelope-body{
animation: none;
}
.envelope.is-open .envelope-shadow{
transform: scale(1.15);
}

.envelope:active .envelope-body{ transform: scale(0.97); }

.tap-hint{
color: rgba(231,220,255,0.55);
font-size: 13.5px;
animation: hint-pulse 2s ease-in-out infinite;
}

@keyframes hint-pulse{
0%, 100% { opacity: .5; }
50%      { opacity: 1; }
}

/* ==========================================================
ÉCRAN CHATS
========================================================== */
.cats-scene{ text-align: center; }

.cats-stage{
position: relative;
height: 180px;
margin: 10px 0 22px;
display: flex;
align-items: flex-end;
justify-content: center;
}

.cats-stage::after{
content: "";
position: absolute;
bottom: 14px;
left: 8%;
right: 8%;
height: 1px;
background: linear-gradient(90deg, transparent, rgba(200,160,255,0.35), transparent);
}

.cat{
position: absolute;
bottom: 18px;
font-size: 54px;
line-height: 1;
filter: drop-shadow(0 8px 10px rgba(0,0,0,0.5));
transition: transform .25s ease;
animation: cat-bounce .6s ease-in-out infinite;
}

@keyframes cat-bounce{
0%, 100% { transform: translateY(0); }
50%      { transform: translateY(-6px); }
}

.cat-black{ left: 6%; transform: scaleX(1); }
.cat-white{ right: 6%; transform: scaleX(-1); }

.cat-black.run{
animation: run-right 1.6s var(--ease-soft) forwards;
}
.cat-white.run{
animation: run-left 1.6s var(--ease-soft) forwards;
}

@keyframes run-right{
0%   { left: 6%; }
100% { left: calc(50% - 46px); }
}
@keyframes run-left{
0%   { right: 6%; }
100% { right: calc(50% - 46px); }
}

.cat.hug{
animation: hug-bounce 1s ease-in-out infinite;
}
@keyframes hug-bounce{
0%, 100% { transform: scaleX(var(--flip,1)) translateY(0) scale(1); }
50%      { transform: scaleX(var(--flip,1)) translateY(-4px) scale(1.06); }
}
.cat-black.hug{ --flip: 1; }
.cat-white.hug{ --flip: -1; }

.cat:active{ transform: scale(0.85) scaleX(var(--flip,1)); }

.hug-hearts{
position: absolute;
bottom: 70px;
left: 50%;
transform: translateX(-50%);
width: 10px;
height: 10px;
pointer-events: none;
}

.burst-heart{
position: absolute;
font-size: 18px;
opacity: 0;
animation: burst-up 1.4s ease-out forwards;
filter: drop-shadow(0 0 6px rgba(255,127,176,0.7));
}

@keyframes burst-up{
0%   { opacity: 0; transform: translate(0,0) scale(0.4); }
15%  { opacity: 1; }
100% { opacity: 0; transform: translate(var(--bx,0), var(--by,-90px)) scale(1.1) rotate(var(--br,20deg)); }
}

.cats-caption{
color: rgba(231,220,255,0.75);
font-family: var(--font-display);
font-style: italic;
font-size: 15px;
min-height: 20px;
transition: opacity .4s;
}

/* ==========================================================
ÉCRAN LETTRE
========================================================== */
.letter-scene{ text-align: center; }

.letter-card{
background: linear-gradient(165deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
border: 1px solid rgba(200,160,255,0.25);
border-radius: 22px;
padding: 26px 22px 22px;
text-align: left;
box-shadow: 0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
max-height: 68svh;
display: flex;
flex-direction: column;
}

.letter-header{
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 14px;
padding-bottom: 12px;
border-bottom: 1px dashed rgba(200,160,255,0.3);
}

.letter-emblem{ font-size: 20px; }
.letter-emblem-sub{
font-family: var(--font-display);
font-style: italic;
color: var(--purple-light);
font-size: 14px;
}

.letter-scroll{
overflow-y: auto;
flex: 1;
padding-right: 4px;
scrollbar-width: thin;
scrollbar-color: var(--purple) transparent;
}

.letter-text{
margin: 0;
font-family: var(--font-display);
font-size: clamp(15px, 4vw, 17px);
line-height: 1.9;
color: var(--lavender);
white-space: pre-wrap;
}

.type-cursor{
color: var(--purple-light);
font-weight: 300;
animation: blink 0.9s step-end infinite;
}
@keyframes blink{
0%, 49%  { opacity: 1; }
50%, 100%{ opacity: 0; }
}
.type-cursor.done{ display: none; }

#replay-btn{ max-width: 220px; margin-left: auto; margin-right: auto; }

/* ---------- Responsive fine-tuning ---------- */
@media (max-width: 380px){
.envelope{ width: 210px; height: 140px; }
.envelope-flap{ height: 72px; }
.cat{ font-size: 46px; }
.cats-stage{ height: 160px; }
}

@media (min-height: 780px){
#app{ padding-top: 40px; }
}

/* ---------- Respect du mouvement réduit ---------- */
@media (prefers-reduced-motion: reduce){
*, *::before, *::after{
animation-duration: 0.001ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.001ms !important;
}
}