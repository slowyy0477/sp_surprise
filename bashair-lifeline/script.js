/* =============================================================================
   Bashair — My Lifeline
   script.js   ·   HTML5 + CSS3 + vanilla JS, no frameworks, no backend
   -----------------------------------------------------------------------------
   ██  READ THIS FIRST  ██
   Everything personal lives in the CONFIG object directly below.
   Search for the words  "REPLACE"  to find every single place you might want
   your own words, dates, photos, song and messages.
   Nothing else in this file needs touching.
   ============================================================================= */

const CONFIG = {

  /* ---------------------------------------------------------------------
     THE PERSON THIS IS FOR
     Change the name here and it changes everywhere it appears in JS copy.
     (The <title>, the gate headline and the rail names live in index.html —
      search index.html for Bashair if you ever want to change them there too.)
     --------------------------------------------------------------------- */
  herName: 'Bashair',

  /* ---------------------------------- MASTHEAD ------------------------- */
  masthead: {
    eyebrow: 'a small world · seven chapters',
    title: 'Bashair',                                                    // REPLACE
    subtitle: 'My Lifeline',                                             // REPLACE
    note: 'Everything in here is yours. Take it slowly — there is no order you have to follow, ' +
          'nothing you have to say back, and no part of it is going anywhere.'      // REPLACE
  },

  /* ---------------------------------- INTRO ---------------------------- */
  intro: {
    eyebrow: 'for you',
    line1: 'Hey Bashair...',                                             // REPLACE (or leave it — it works)
    line2: 'I made a little world for you.',                             // REPLACE
    button: 'Enter'
  },

  /* ------------------------------ CHAPTER LEDES ------------------------ */
  chapters: {
    start: {
      lede: 'Before anything else, I wanted to put down how it actually happened — the small, ' +
            'unglamorous start of us, in the order it happened.'          // REPLACE
    },
    memories: {
      lede: 'Not the highlight reel. The ordinary ones I keep going back to.',   // REPLACE
      hint: 'Tap any light — it opens.',
      galleryTitle: 'The gallery',
      galleryNote: 'Swipe sideways. Tap a photo to see it properly.',     // REPLACE
    },
    reasons: {
      lede: 'These are the things I notice. They are hidden inside little objects — find them.',  // REPLACE
      counterLabel: 'found'
    },
    little: {
      title: 'Little things',
      note: 'Small objects, each with something attached to it. Tap them.'        // REPLACE
    },
    meaning: {
      statement: 'You are the person I go quiet about, because I cannot get it into a sentence.',  // REPLACE
      lede: 'And then there are things I have never told you, sitting here in the dark.',        // REPLACE
    },
    secret: {
      hint: 'Some things I never said out loud.',
      done: 'That is all of them. Now you know.',
      tallyLabel: 'found'
    },
    sorry: {
      lede: 'No buttons. No choosing. Just words I owe you.',             // REPLACE
      pre1: 'Before you read this, I just want you to know...',           // REPLACE
      pre2: '...that nothing you say next has to be a decision. You can read it and close the page and that is allowed.',  // REPLACE
      cta: 'Open it',
      ctaSub: 'the letter is short',
      footnote: 'And if you are not ready for it today, it will still be here tomorrow.'  // REPLACE
    },
    letter: {
      lede: 'The longer one. Read it when you have ten quiet minutes.'     // REPLACE
    },
    final: {
      eyebrow: 'one last thing'
    }
  },

  /* --------------------------------- 01 · TIMELINE ---------------------
     Add or remove entries freely. Keep the trailing commas tidy.
     DATE FORMAT: whatever reads naturally to you — "12 March 2023", "last winter",
                  "the week everything changed". All fine.
     --------------------------------------------------------------------- */
  timeline: [
    {                                                                     // REPLACE whole entry
      date: 'the beginning',
      title: 'I know I texted you first in 10G_ki_Legends account',
      text: 'Then we started texting each other. When I said ur name you shocked. ' +
            'I still remember reading that how we talk to each other like we already know each other.',
      tag: 'where it started'
    },
    {                                                                     // REPLACE whole entry
      date: 'a few weeks in',
      title: 'The first conversation that went past midnight',
      text: 'We were both pretending not to notice the time. That night the talking stopped ' +
            'feeling like talking and started feeling like somewhere to live.',
      tag: 'the long ones'
    },
    {                                                                     // REPLACE whole entry
      date: 'that first time',
      title: 'Seeing you in person',
      text: 'I have never seen you before, but I fall in love with youuuuuuuuuuuuuuuuu ' +
            'I have seen you after 4 months and am shocked how beautifil she iss.',
      tag: 'the real thing'
    },
    {                                                                     // REPLACE whole entry
      date: 'the hard part',
      title: 'The day I got it wrong',
      text: 'I handled something badly. I know it, you know it. It is written down properly in ' +
            'chapter five, and I am not skipping past it here.',
      tag: 'the part I own'
    },
    {                                                                     // REPLACE whole entry
      date: 'since then',
      title: 'Choosing this on purpose',
      text: 'Not swept along by the beginning of something. Choosing it, repeatedly, with the ' +
            'ordinary days included.',
      tag: 'still going'
    }
  ],

  /* --------------------------------- 02 · MEMORY LIGHTS -----------------
     image: any file in assets/images/memories/  (or a photo of your own)
     tint:  the colour of that light — rose, gold, or any hex you like
     --------------------------------------------------------------------- */
  memories: [
    { date: 'dekhh',       title: 'kuxxx nii',            image: 'assets/images/memories/memory-1.JPG', tint: 'rgba(229,118,143,.45)', story: 'kuxx bhii niii' },   // REPLACE
    { date: 'naa dekhhhh',    title: 'yaha bhi kuxx ni',           image: 'assets/images/memories/memory-2.JPG', tint: 'rgba(232,196,137,.40)', story: 'kuxx bhii niii' },                        // REPLACE
    { date: 'naa dekhh betaaa', title: 'idhrr bhii naiii',               image: 'assets/images/memories/memory-3.JPG', tint: 'rgba(229,118,143,.45)', story: 'khaaaliiiii' },                                                              // REPLACE
    { date: 'challl dekhh lyy',     title: 'ohhh yaha bhii naiii',           image: 'assets/images/memories/memory-4.JPG', tint: 'rgba(196,160,222,.35)', story: 'kuxx bhii niii' },                             // REPLACE
    { date: 'sochhhh lyyyy', title: 'kuxx nii huaaa',         image: 'assets/images/memories/memory-5.JPG', tint: 'rgba(232,196,137,.40)', story: '....................' },                                        // REPLACE
    { date: 'ohhhh khirrrr',  title: 'phrrrrr', image: 'assets/images/memories/memory-6.JPG', tint: 'rgba(129,148,205,.38)', story: '................................' }                           // REPLACE
  ],

  /* --------------------------------- 02b · GALLERY ---------------------
     Swipeable. Tap to zoom. Add as many as you like.
     --------------------------------------------------------------------- */
  gallery: [
    { image: 'assets/images/gallery/gallery-1.JPG', title: 'Chichii unglii — ',  date: '7',  caption: ' capture krty huay —' },   // REPLACE
    { image: 'assets/images/gallery/gallery-2.JPG', title: 'Nawaab — ',  date: '7',  caption: ' — Nawaab dekhty huay.' },   // REPLACE
    { image: 'assets/images/gallery/gallery-3.JPG', title: 'Badook — ',  date: '7',  caption: ' — jang ki tyaari.' },   // REPLACE
    { image: 'assets/images/gallery/gallery-4.JPG', title: 'Chupaa lyyy muu — ',  date: '0',  caption: ' — Kuxxx bhiii.' },   // REPLACE
    { image: 'assets/images/gallery/gallery-5.JPG', title: 'Mukka — ',  date: '7',  caption: ' — Mukka practice.' },   // REPLACE
    { image: 'assets/images/gallery/gallery-6.JPG', title: 'Shram — ',  date: '7',  caption: ' — Madam ji sharmaty huay.' },   // REPLACE
    { image: 'assets/images/gallery/gallery-7.JPG', title: 'kyaaa — ',  date: '8',  caption: ' — me tau udhr he dekhu ga.' },   // REPLACE
    { image: 'assets/images/gallery/gallery-8.JPG', title: 'Loveeee — ',  date: '7',  caption: ' — hnn hnn hogeyaa.' }    // REPLACE
  ],

  /* --------------------------------- 03 · REASONS ----------------------
     object: heart | flower | star | note | moon | feather | key | spark
     Each one hides a single reason. She finds them by tapping.
     --------------------------------------------------------------------- */
  reasons: [
    { object: 'heart',   text: 'Always you put me in your heart ' },        // REPLACE
    { object: 'flower',  text: 'The day I gave you the Gulaab ka phool remember' },      // REPLACE
    { object: 'star',    text: 'You are like star who always guides me' },        // REPLACE
    { object: 'note',    text: 'I always carried your presense' },           // REPLACE
    { object: 'moon',    text: 'You are like moon just like this' },                // REPLACE
    { object: 'feather', text: 'Your heart is soft like feather who falls' },                       // REPLACE
    { object: 'key',     text: 'This is key and nothing more' },    // REPLACE
    { object: 'spark',   text: 'when ever u are angry u are like lightening spark' }            // REPLACE
  ],

  /* --------------------------------- 03b · LITTLE THINGS ---------------
     icon: teddy | heart | flower | letter | star | gift
     --------------------------------------------------------------------- */
  littleThings: [
    { icon: 'teddy',  label: 'the teddy',  message: 'Awww tuny teddy ka socha jo meny diya meanss pandaaaaa' },  // REPLACE
    { icon: 'heart',  label: 'the heart',  message: 'Ye mera dil hai jo meny tujhy diya hai' },                                   // REPLACE
    { icon: 'flower', label: 'the flower', message: 'Ye gulaab ka phool jo meny diya' },                                   // REPLACE
    { icon: 'letter', label: 'the letter', message: 'This latter is emptyy hahahhaha' },                                   // REPLACE
    { icon: 'star',   label: 'the star',   message: 'U are always like star' },                                   // REPLACE
    { icon: 'gift',   label: 'the gift',   message: 'This web is ur gift' }                                    // REPLACE
  ],

  /* --------------------------------- 04 · SECRET WORLD -----------------
     x / y are percentages inside the dark sky. Keep them away from the
     edges so they stay tappable on small phones.
     mark: the single character or symbol drawn on the light.
     --------------------------------------------------------------------- */
  secrets: [
    { mark: '·',  x: 14, y: 30, text: 'I       Love       You      Betaaaa' },        // REPLACE
    { mark: '✦',  x: 38, y: 62, text: 'youuuuu  arrreeee sabbbbb syyyy pyariiiiii' },                                  // REPLACE
    { mark: '·',  x: 62, y: 24, text: 'youuuuuuu areee  alwaysssss stronger then everyone' },                                   // REPLACE
    { mark: '✧',  x: 78, y: 70, text: 'bas yahii cahhtaaa aisyyy khud par dihaan dy' },                                  // REPLACE
    { mark: '·',  x: 50, y: 44, text: 'Be strongerrrrrrr' }                      // REPLACE
  ],

  /* --------------------------------- 05 · THE APOLOGY LETTER -----------
     Write it the way you would actually say it. Greeting, paragraphs, sign.
     The animation writes it out line by line, so keep the paragraphs
     reasonably short — they read better slowly anyway.
     --------------------------------------------------------------------- */
  apology: {
    greeting: 'Bashair,',                                                // REPLACE (her name is fine here)
    paragraphs: [
      'Soryyyyy ywrrrrr 3rd person ny jo bhaijiii videooo dekh dukhhh huaaa us ki maaafiii.',   // REPLACE
      'ywraa  dekhhhh mujhyy tension hotii haii teriii ki koi tujhy video bna kr bhaij dy or meny kux kiya bhi na ho.',  // REPLACE
      'dekhhh ywraa tunyy jab dekha tujhy dukh hua ki kisior nybhaij di me ghr jaakr btata magr wahi bhaij di kisiny',   // REPLACE
      'ab ywra tujhy sath sath btaya krunga or tuny jo bola us par amal.',                            // REPLACE
      'ab tujhyy ywrrr tension free rehna hai ab tau tujy log videos bhaja krein gy bcz jealous hotayyy'        // REPLACE
    ],
    sign: '— me'                                                         // REPLACE
  },

  /* --------------------------------- 06 · THE LONG LETTER -------------
     The date line is filled automatically from today. Override it if you want.
     --------------------------------------------------------------------- */
  loveLetter: {
    dateOverride: '',                                                    // REPLACE (e.g. 'Written on a Tuesday in September')
    paragraphs: [
      'Dekhhh beta me tera he hun or tujhyy ab sy happy happy rehna hai okayyy nawww',      // REPLACE
      'or tuny meri waja sy bohot takleefy jhailii hain us ki bhi maafi ywrrrr',                              // REPLACE
      'ywraa mujhy bhi dar lagta or tension hoti ki tujhy kux ho na jaye bas tu apny dreams ko follow kr.',        // REPLACE
      'me bass chahtaa hun ywrr tuuu apnay aap ko aisa bna dein poora Pakistan tujhy jaanta ho kiye Bashair hai',                 // REPLACE
      'tu jab khud par kaaam kray gii tu or khud ko improve kray gi log jalty tery syy.',                             // REPLACE
      'Loveee youuu betaa abhii jaisy smiles tery mu par waisy he rkhi har timee smilessss.'                                          // REPLACE
    ],
    sign: 'Yours, me'                                                    // REPLACE
  },

  /* --------------------------------- 07 · THE ENDING -------------------
     Shown one block at a time in the final scene.
     --------------------------------------------------------------------- */
  finalMessage: [
    'dekhh ly ywrrrrr ab maaf krdy jo 50% reh geya thaa',       // REPLACE
    'meny tujhyy uni me bhi maafi maangi manayaaaa',                        // REPLACE
    'hameshaaaa strong rehna hai log bolty un ko bony daina hai.'                                                 // REPLACE
  ],
  final: {
    line1: 'Bashair...',
    line2: "You're more precious to me than I sometimes know how to explain.",
    made: 'Made for you ❤️',
    hugCta: 'give the teddy a hug',
    hugNote: 'tap it — or press and hold for longer',
    hugEcho: [                                                                      // REPLACE
      'hug given. it was accepted immediately.',
      'another one. the teddy has stopped keeping count.',
      'okay, so we are doing this all evening. that is fine.'
    ]
  },

  /* --------------------------------- TEDDY WHISPERS --------------------
     What the bear says when she taps different parts of it.
     --------------------------------------------------------------------- */
  teddy: {
    head:  ['that tickles.', 'hello you.', 'careful, i have just been fluffed.'],     // REPLACE
    heart: ['it does that around you.', 'still beating. arguably too fast.', 'that one is yours.'],   // REPLACE
    hand:  ['hi. hi. hi. hi.', 'i have been waiting to do that.', 'wave received.'], // REPLACE
    gift:  ['that one was not for me to open.', "you found it. it was under the bear the whole time."],// REPLACE
    giftMessage: 'REPLACE — the hidden message behind the gift box. Something you would never say out loud in a chat, only in a thing you built.',
    idle:  ['take your time.', 'there is more below.', 'nothing here is a test.']
  },

  /* --------------------------------- FOOTER ---------------------------- */
  footer: {
    line: 'For Bashair',     // REPLACE
    tiny: '.......'
  },

  /* --------------------------------- MUSIC -----------------------------
     No autoplay, ever. She presses play.
     Drop your file in assets/music/ and point src at it.
     --------------------------------------------------------------------- */
  music: {
    src: 'assets/music/song.mp3',                                        // REPLACE — your file
    title: 'dil lay geya dil lay geya',                                                   // REPLACE — what the player shows
    missingHint: 'add a song to assets/music/ and point CONFIG.music.src at it'
  }
};


/* =============================================================================
   EVERYTHING BELOW IS MACHINERY.
   You should not need to edit past this line.
   ============================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- utils */
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CAN_HOVER = window.matchMedia('(hover: hover)').matches;
  const HEARTS = ['#e5768f', '#f0a5b8', '#e8c489', '#ffffff'];

  const STORE_KEY = 'bashair.world.v1';
  const state = Object.assign(
    { reasons: [], secrets: [], unlocked: ['ch-01'], hugs: 0, giftFound: false, visited: false },
    readStore()
  );

  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function writeStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* private mode, fine */ }
  }

  function getPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
  }
  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }
  function pick(list, seed) {
    return list[Math.abs(seed) % list.length];
  }
  function todayLong() {
    try {
      return new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) { return ''; }
  }

  /* ------------------------------------------------------------------ toast */
  const toastEl = $('#toast');
  let toastTimer = 0;
  function toast(message, ms) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    requestAnimationFrame(() => toastEl.classList.add('is-on'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('is-on');
      setTimeout(() => { toastEl.hidden = true; }, 420);
    }, ms || 3200);
  }

  /* ------------------------------------------------------- AMBIENT CANVAS */
  const canvas = $('#ambient');
  const ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null;
  let motes = [];
  let bursts = [];
  let cw = 0, chh = 0, dpr = 1;
  let ambientRunning = false;

  function sizeCanvas() {
    if (!ctx) return;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    cw = window.innerWidth; chh = window.innerHeight;
    canvas.width = Math.floor(cw * dpr);
    canvas.height = Math.floor(chh * dpr);
    canvas.style.width = cw + 'px';
    canvas.style.height = chh + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = cw < 620 ? 22 : cw < 1100 ? 34 : 48;
    motes = [];
    for (let i = 0; i < count; i++) {
      motes.push({
        x: Math.random() * cw,
        y: Math.random() * chh,
        r: Math.random() * 1.5 + .35,
        vy: -(Math.random() * .22 + .06),
        vx: (Math.random() - .5) * .12,
        a: Math.random() * .35 + .08,
        hue: Math.random() < .22 ? '#e5768f' : '#ffffff'
      });
    }
  }

  function drawHeart(x, y, size, alpha, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 16, size / 16);
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.bezierCurveTo(-9, -3, -8, -11, -3.4, -11);
    ctx.bezierCurveTo(-1.2, -11, .2, -9.6, 0, -8.4);
    ctx.bezierCurveTo(-.2, -9.6, 1.2, -11, 3.4, -11);
    ctx.bezierCurveTo(8, -11, 9, -3, 0, 5);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  function tick() {
    if (!ambientRunning || !ctx) return;
    ctx.clearRect(0, 0, cw, chh);

    for (let i = 0; i < motes.length; i++) {
      const m = motes[i];
      m.x += m.vx; m.y += m.vy;
      if (m.y < -12) { m.y = chh + 10; m.x = Math.random() * cw; }
      if (m.x < -12) m.x = cw + 10;
      if (m.x > cw + 12) m.x = -10;
      ctx.globalAlpha = m.a;
      ctx.fillStyle = m.hue;
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    for (let i = bursts.length - 1; i >= 0; i--) {
      const p = bursts[i];
      p.x += p.vx; p.y += p.vy; p.vy += p.g; p.life -= 1;
      const t = Math.max(0, p.life / p.max);
      if (p.kind === 'heart') {
        drawHeart(p.x, p.y, p.size * (.6 + t * .7), t * .85, p.color);
      } else {
        ctx.globalAlpha = t * .7;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (.4 + t * .8), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      if (p.life <= 0) bursts.splice(i, 1);
    }
    requestAnimationFrame(tick);
  }

  function burst(x, y, count, hearts) {
    if (!ctx || REDUCED) return;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2.1 + .5;
      bursts.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.1,
        g: .045,
        life: 52 + Math.random() * 46,
        max: 98,
        size: hearts ? Math.random() * 8 + 8 : Math.random() * 4 + 2,
        kind: hearts && Math.random() < .6 ? 'heart' : 'dot',
        color: pick(HEARTS, Math.floor(Math.random() * HEARTS.length) + i)
      });
    }
    if (bursts.length > 220) bursts.splice(0, bursts.length - 220);
  }

  if (ctx) {
    sizeCanvas();
    window.addEventListener('resize', () => { sizeCanvas(); if (REDUCED) { ambientRunning = true; oneFrame(); ambientRunning = false; } }, { passive: true });
    function oneFrame() { if (ctx) { tickOnce(); } }
    function tickOnce() {
      ctx.clearRect(0, 0, cw, chh);
      motes.forEach(m => { ctx.globalAlpha = m.a; ctx.fillStyle = m.hue; ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2); ctx.fill(); });
      ctx.globalAlpha = 1;
    }
    if (REDUCED) {
      tickOnce();
    } else {
      ambientRunning = true;
      requestAnimationFrame(tick);
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) { ambientRunning = false; }
        else if (!ambientRunning) { ambientRunning = true; requestAnimationFrame(tick); }
      });
    }
  }

  /* ------------------------------------------------------------ TEDDY SVG */
  const FONT_NOTE = 'A teddy bear';

  function teddySVG(variant) {
    const final = variant === 'final';
    return [
      '<svg class="teddy' + (final ? ' teddy--final' : '') + '" viewBox="0 0 320 380" role="img" aria-label="' + FONT_NOTE + '">',
      '<ellipse class="teddy__shadow" cx="160" cy="358" rx="98" ry="17" fill="url(#softShadow)"/>',
      // ---- gift box (intro only) -------------------------------------------
      final ? '' : [
        '<g class="teddy__gift" data-part="gift" tabindex="0" role="button" aria-label="A small gift">',
        '  <rect x="226" y="286" width="88" height="80" rx="10" fill="transparent"/>',
        '  <rect x="240" y="308" width="62" height="52" rx="6" fill="url(#giftGrad)"/>',
        '  <rect x="266" y="308" width="10" height="52" fill="rgba(255,255,255,.22)"/>',
        '  <g class="teddy__gift-lid">',
        '    <rect x="234" y="296" width="74" height="16" rx="5" fill="#a2738c"/>',
        '    <path d="M271 296c-8-8-16-6-16 0 0 5 7 7 16 0zm0 0c8-8 16-6 16 0 0 5-7 7-16 0z" fill="#f0d9df"/>',
        '  </g>',
        '</g>'
      ].join(''),
      // ---- body ------------------------------------------------------------
      '<g class="teddy__body">',
      '  <ellipse cx="104" cy="330" rx="44" ry="30" fill="url(#furGrad)"/>',
      '  <ellipse cx="216" cy="330" rx="44" ry="30" fill="url(#furGrad)"/>',
      '  <ellipse cx="107" cy="336" rx="24" ry="15" fill="url(#furLight)" opacity=".8"/>',
      '  <ellipse cx="213" cy="336" rx="24" ry="15" fill="url(#furLight)" opacity=".8"/>',
      '  <ellipse cx="160" cy="262" rx="86" ry="94" fill="url(#furGrad)"/>',
      '  <ellipse cx="160" cy="286" rx="54" ry="62" fill="url(#furLight)" opacity=".65"/>',
      '  <circle class="teddy__glow-ring" cx="160" cy="252" r="56" fill="url(#heartGlow)"/>',
      // chest heart
      '  <g class="teddy__heart" data-part="heart" tabindex="0" role="button" aria-label="The teddy\'s heart">',
      '    <circle cx="160" cy="252" r="34" fill="transparent"/>',
      '    <path d="M160 270c-15-10-26-18.5-26-28.5 0-7.5 5.5-12.5 12-12.5 5.2 0 10.6 3.3 14 8.3 3.4-5 8.8-8.3 14-8.3 6.5 0 12 5 12 12.5 0 10-11 18.5-26 28.5z" fill="#b8455f"/>',
      '    <path d="M160 266c-12-8-21-15-21-23.5 0-4.6 3-7.6 6.6-7.6 3 0 6.2 2 8.4 5" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="1.6"/>',
      '  </g>',
      // arms
      '  <g class="teddy__arm teddy__arm--l" data-part="hand" tabindex="0" role="button" aria-label="The teddy\'s paw">',
      '    <g transform="rotate(-22 92 232)">',
      '      <circle cx="86" cy="278" r="30" fill="transparent"/>',
      '      <ellipse cx="92" cy="238" rx="23" ry="46" fill="url(#furGrad)"/>',
      '      <circle cx="86" cy="278" r="20" fill="url(#furLight)" opacity=".9"/>',
      '    </g>',
      '  </g>',
      '  <g class="teddy__arm teddy__arm--r" data-part="hand" tabindex="0" role="button" aria-label="The teddy\'s paw">',
      '    <g transform="rotate(22 228 232)">',
      '      <circle cx="234" cy="278" r="30" fill="transparent"/>',
      '      <ellipse cx="228" cy="238" rx="23" ry="46" fill="url(#furGrad)"/>',
      '      <circle cx="234" cy="278" r="20" fill="url(#furLight)" opacity=".9"/>',
      '    </g>',
      '  </g>',
      // scarf
      '  <path d="M112 196q48 26 96 0v14q-48 26-96 0z" fill="url(#scarfGrad)" opacity=".92"/>',
      '  <path d="M196 206q14 4 12 22-10 4-16-6z" fill="url(#scarfGrad)" opacity=".92"/>',
      '</g>',
      // ---- head ------------------------------------------------------------
      '<g class="teddy__head" data-part="head" tabindex="0" role="button" aria-label="The teddy\'s head">',
      '  <circle cx="104" cy="72" r="27" fill="url(#furGrad)"/>',
      '  <circle cx="216" cy="72" r="27" fill="url(#furGrad)"/>',
      '  <circle cx="104" cy="72" r="14" fill="#c98f9c" opacity=".65"/>',
      '  <circle cx="216" cy="72" r="14" fill="#c98f9c" opacity=".65"/>',
      '  <circle cx="160" cy="122" r="66" fill="url(#furGrad)"/>',
      '  <ellipse cx="160" cy="146" rx="37" ry="28" fill="url(#furLight)"/>',
      '  <ellipse cx="160" cy="132" rx="10" ry="7.5" fill="#3a2830"/>',
      '  <path d="M160 140v6" stroke="#3a2830" stroke-width="2" stroke-linecap="round"/>',
      '  <path d="M160 146c-4 6-11 6-14 1" stroke="#3a2830" stroke-width="2" fill="none" stroke-linecap="round"/>',
      '  <path d="M160 146c4 6 11 6 14 1" stroke="#3a2830" stroke-width="2" fill="none" stroke-linecap="round"/>',
      '  <g>',
      '    <ellipse cx="134" cy="112" rx="9.5" ry="11.5" fill="#33222a"/>',
      '    <ellipse class="teddy__pupil" cx="134" cy="112" rx="9.5" ry="11.5" fill="#171014"/>',
      '    <circle cx="130.6" cy="107.5" r="2.4" fill="#fff" opacity=".85"/>',
      '    <rect class="teddy__lid" x="122" y="98" width="24" height="26" rx="12" fill="url(#furGrad)"/>',
      '  </g>',
      '  <g>',
      '    <ellipse cx="186" cy="112" rx="9.5" ry="11.5" fill="#33222a"/>',
      '    <ellipse class="teddy__pupil" cx="186" cy="112" rx="9.5" ry="11.5" fill="#171014"/>',
      '    <circle cx="182.6" cy="107.5" r="2.4" fill="#fff" opacity=".85"/>',
      '    <rect class="teddy__lid teddy__lid--b" x="174" y="98" width="24" height="26" rx="12" fill="url(#furGrad)"/>',
      '  </g>',
      '  <ellipse cx="122" cy="140" rx="9" ry="5.5" fill="#e5768f" opacity=".22"/>',
      '  <ellipse cx="198" cy="140" rx="9" ry="5.5" fill="#e5768f" opacity=".22"/>',
      '</g>',
      '</svg>'
    ].join('\n');
  }

  function mountTeddy(host) {
    const variant = host.getAttribute('data-teddy-variant') || 'intro';
    host.innerHTML = teddySVG(variant);
    host.classList.add('teddy-host');
    if (variant === 'final') host.classList.add('is-final');
    return $('.teddy', host);
  }

  /* ------------------------------------------------- TEDDY REACTIONS */
  const REACTION_CLASSES = ['is-happy', 'is-beating', 'is-waving', 'is-giggling', 'is-gift-open', 'is-hugging'];

  function clearReactions(host) {
    REACTION_CLASSES.forEach(c => host.classList.remove(c));
  }
  function react(host, cls, ms) {
    host.classList.remove(cls);
    void host.offsetWidth;                    // restart the animation
    host.classList.add(cls);
    setTimeout(() => host.classList.remove(cls), ms || 1100);
  }

  function bubble(host, text) {
    if (!text) return;
    const existing = host.querySelector('.teddy-say');
    if (existing) existing.remove();
    const say = el('span', 'teddy-say', text);
    host.appendChild(say);
    setTimeout(() => { say.classList.add('is-out'); }, 1900);
    setTimeout(() => say.remove(), 2500);
  }

  function centreOf(node) {
    const r = node.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function wireTeddy(host) {
    let tapSeed = 0;
    host.addEventListener('click', (ev) => {
      const part = ev.target.closest ? ev.target.closest('[data-part]') : null;
      const point = { x: ev.clientX || centreOf(host).x, y: ev.clientY || centreOf(host).y };

      if (!part) {
        burst(point.x, point.y, 8, false);
        if (Math.random() < .28) react(host, 'is-giggling', 1700);
        return;
      }
      const which = part.getAttribute('data-part');
      tapSeed += 1;

      if (which === 'head') {
        react(host, 'is-happy', 950);
        burst(centreOf(part).x, centreOf(part).y - 20, 6, true);
        bubble(host, pick(CONFIG.teddy.head, tapSeed));
      } else if (which === 'heart') {
        react(host, 'is-beating', 2400);
        burst(centreOf(part).x, centreOf(part).y, 10, true);
        bubble(host, pick(CONFIG.teddy.heart, tapSeed));
      } else if (which === 'hand') {
        react(host, 'is-waving', 1900);
        bubble(host, pick(CONFIG.teddy.hand, tapSeed));
      } else if (which === 'gift') {
        const opening = !host.classList.contains('is-gift-open');
        react(host, 'is-gift-open', 2600);
        burst(centreOf(part).x, centreOf(part).y - 10, 14, true);
        bubble(host, pick(CONFIG.teddy.gift, tapSeed));
        if (opening && !state.giftFound) {
          state.giftFound = true; writeStore();
          setTimeout(() => toast(CONFIG.teddy.giftMessage, 7000), 520);
        }
      }
    });

    host.addEventListener('keydown', (ev) => {
      const part = ev.target.closest ? ev.target.closest('[data-part]') : null;
      if (!part) return;
      if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
        ev.preventDefault();
        part.click();
      }
    });

    // ambient sparkle wherever she taps the empty space around the bear
    host.addEventListener('pointerdown', (ev) => {
      if (ev.target.closest && ev.target.closest('[data-part]')) return;
      burst(ev.clientX, ev.clientY, 7, Math.random() < .4);
    });
  }

  const gateTeddyHost = $('[data-teddy-host][data-teddy-variant="intro"]');
  const finalTeddyHost = $('[data-teddy-host][data-teddy-variant="final"]');
  if (gateTeddyHost) { mountTeddy(gateTeddyHost); wireTeddy(gateTeddyHost); }
  if (finalTeddyHost) { mountTeddy(finalTeddyHost); wireTeddy(finalTeddyHost); }

  /* ------------------------------------------------- CONFIG → DOM text */
  function fillConfigText() {
    $$('[data-config]').forEach(node => {
      const value = getPath(CONFIG, node.getAttribute('data-config'));
      if (typeof value === 'string') node.textContent = value;
    });
    $$('[data-intro]').forEach(node => {
      const key = node.getAttribute('data-intro');
      if (key === 'button') {
        const span = node.querySelector('span');
        if (span) span.textContent = CONFIG.intro.button;
      } else if (CONFIG.intro[key]) {
        node.textContent = CONFIG.intro[key];
      }
    });
  }

  /* ------------------------------------------------- ICON FACTORY */
  const ROSE = '#e5768f', ROSE_SOFT = '#f0a5b8', GOLD = '#e8c489', CREAM = '#f2e6ea';

  const ICONS = {
    heart: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40c-11-8-17-13.4-17-19.4C7 16.2 10.4 13 14.6 13c3 0 6.2 2 8.4 5.4C25.2 15 28.4 13 31.4 13 35.6 13 39 16.2 39 20.6 39 26.6 33 32 22 40z" fill="${ROSE}" opacity=".92"/><path d="M24 36c-8-6-12.6-10-12.6-14.6 0-2.6 1.9-4.6 4.4-4.6" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1.4"/></svg>`,
    flower: `<svg viewBox="0 0 48 48" aria-hidden="true"><g fill="${ROSE_SOFT}" opacity=".9"><ellipse cx="24" cy="13" rx="6" ry="9"/><ellipse cx="24" cy="35" rx="6" ry="9"/><ellipse cx="13" cy="24" rx="9" ry="6"/><ellipse cx="35" cy="24" rx="9" ry="6"/></g><circle cx="24" cy="24" r="5" fill="${GOLD}"/></svg>`,
    star: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5c1.6 9.2 5.8 13.4 15 15-9.2 1.6-13.4 5.8-15 15-1.6-9.2-5.8-13.4-15-15 9.2-1.6 13.4-5.8 15-15z" fill="${GOLD}" opacity=".95"/><circle cx="24" cy="24" r="2.4" fill="#fff" opacity=".8"/></svg>`,
    note: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="7" width="30" height="34" rx="4" fill="#2b1c2c" stroke="rgba(255,255,255,.24)"/><path d="M9 15h30" stroke="rgba(255,255,255,.2)"/><g stroke="${ROSE_SOFT}" stroke-width="1.7" stroke-linecap="round" opacity=".85"><path d="M16 22h16M16 27h16M16 32h9"/></g></svg>`,
    moon: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 8a16 16 0 1 0 10 28A18 18 0 0 1 30 8z" fill="${CREAM}" opacity=".82"/><circle cx="18" cy="20" r="1.6" fill="#0b0810" opacity=".35"/></svg>`,
    feather: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 38c8-2 20-8 24-18 2-5 1-9 1-9s-5-1-9 1C18 16 14 28 12 38z" fill="${ROSE_SOFT}" opacity=".85"/><path d="M12 38c4-9 10-16 20-22" stroke="#0b0810" stroke-opacity=".35" stroke-width="1.2" fill="none"/></svg>`,
    key: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="17" cy="17" r="9" fill="none" stroke="${GOLD}" stroke-width="3"/><path d="M23 23l15 15m-6-6 4-4m-9 0 3-3" stroke="${GOLD}" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
    spark: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 8v18M15 17h18" stroke="${CREAM}" stroke-width="2" stroke-linecap="round" opacity=".8"/><path d="M24 12c1 6 3.6 8.6 10 10-6.4 1.4-9 4-10 10-1-6-3.6-8.6-10-10 6.4-1.4 9-4 10-10z" fill="${ROSE}" opacity=".75"/></svg>`,
    teddy: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="13" cy="15" r="6" fill="#c4906a"/><circle cx="35" cy="15" r="6" fill="#c4906a"/><circle cx="24" cy="25" r="13" fill="#c4906a"/><ellipse cx="24" cy="29" rx="7" ry="5.4" fill="#eeddcb"/><ellipse cx="24" cy="26.5" rx="2.4" ry="1.8" fill="#3a2830"/><circle cx="19" cy="22" r="1.9" fill="#2b1d24"/><circle cx="29" cy="22" r="1.9" fill="#2b1d24"/></svg>`,
    letter: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="12" width="36" height="24" rx="3" fill="#2b1c2c" stroke="rgba(255,255,255,.22)"/><path d="M6 15l18 12 18-12" fill="none" stroke="${ROSE_SOFT}" stroke-width="1.6" opacity=".8"/></svg>`,
    gift: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="20" width="32" height="20" rx="3" fill="#8d5f76"/><rect x="6" y="14" width="36" height="8" rx="3" fill="#a2738c"/><path d="M24 14v26" stroke="rgba(255,255,255,.3)" stroke-width="2"/><path d="M24 14c-6-6-12-4-12 1 0 4 6 5 12-1zm0 0c6-6 12-4 12 1 0 4-6 5-12-1z" fill="${ROSE_SOFT}" opacity=".9"/></svg>`
  };

  /* ------------------------------------------------- 01 · TIMELINE */
  function renderTimeline() {
    const list = $('#timeline');
    if (!list) return;
    CONFIG.timeline.forEach((entry, i) => {
      const li = el('li', 'timeline__item');
      li.dataset.anim = '';
      li.style.setProperty('--d', (i % 3) * 90 + 'ms');
      const grid = el('div', 'timeline__grid');
      grid.appendChild(el('p', 'timeline__when', entry.date || ''));
      const body = el('div', 'timeline__body');
      body.appendChild(el('h3', 'timeline__title', entry.title || ''));
      body.appendChild(el('p', 'timeline__text', entry.text || ''));
      if (entry.tag) body.appendChild(el('span', 'timeline__tag', entry.tag));
      grid.appendChild(body);
      li.appendChild(grid);
      list.appendChild(li);
    });
    const fill = el('div', 'timeline__fill');
    fill.setAttribute('aria-hidden', 'true');
    list.appendChild(fill);
  }

  /* ------------------------------------------------- 02 · MEMORY LIGHTS */
  function renderMemories() {
    const field = $('#orbitField');
    if (!field) return;
    CONFIG.memories.forEach((m, i) => {
      const btn = el('button', 'memory');
      btn.type = 'button';
      btn.dataset.index = String(i);
      btn.style.setProperty('--c1', m.tint || 'rgba(229,118,143,.4)');
      btn.style.setProperty('--fd', (i * .55) + 's');
      btn.setAttribute('aria-label', (m.title || 'A memory') + (m.date ? ', ' + m.date : '') + '. Open it.');
      btn.innerHTML =
        '<span class="memory__glyph" aria-hidden="true">' + (ICONS.star || '') + '</span>' +
        '<span class="memory__inner">' +
        '<span class="memory__date">' + (m.date || '') + '</span>' +
        '<span class="memory__title">' + (m.title || '') + '</span>' +
        '</span>';
      field.appendChild(btn);
    });
  }

  /* ------------------------------------------------- overlay plumbing */
  let lastFocus = null;
  function openOverlay(node) {
    lastFocus = document.activeElement;
    node.hidden = false;
    document.body.classList.add('is-locked');
    const focusable = node.querySelector('.ghost-btn, button');
    if (focusable) focusable.focus({ preventScroll: true });
  }
  function closeOverlay(node) {
    node.hidden = true;
    if (!$('#moment') || $('#moment').hidden) {
      if (!$('#lightbox') || $('#lightbox').hidden) document.body.classList.remove('is-locked');
    }
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  const momentEl = $('#moment');
  let momentIndex = 0;
  function showMoment(index) {
    const list = CONFIG.memories;
    if (!list.length) return;
    momentIndex = (index + list.length) % list.length;
    const m = list[momentIndex];
    const img = $('#momentImg');
    img.classList.remove('is-broken');
    img.src = m.image || '';
    img.alt = (m.title || 'A memory') + ' — photo';
    img.onerror = () => img.classList.add('is-broken');
    $('#momentDate').textContent = (m.date || '').toUpperCase();
    $('#momentTitle').textContent = m.title || '';
    $('#momentStory').textContent = m.story || '';
    if (momentEl.hidden) openOverlay(momentEl);
    highlightMemory();
  }
  function highlightMemory() {
    $$('.memory').forEach((b, i) => b.classList.toggle('is-open', i === momentIndex));
  }
  function closeMoment() {
    closeOverlay(momentEl);
    $$('.memory').forEach(b => b.classList.remove('is-open'));
  }

  const orbitField = $('#orbitField');
  if (orbitField) {
    orbitField.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.memory');
      if (!btn) return;
      showMoment(Number(btn.dataset.index || 0));
    });
  }
  if (momentEl) {
    $$('[data-close="moment"]', momentEl).forEach(b => b.addEventListener('click', closeMoment));
    const prev = $('#momentPrev'), next = $('#momentNext');
    if (prev) prev.addEventListener('click', () => showMoment(momentIndex - 1));
    if (next) next.addEventListener('click', () => showMoment(momentIndex + 1));
  }

  /* ------------------------------------------------- 02b · GALLERY */
  let gallerySlides = [];
  function renderGallery() {
    const track = $('#galleryTrack');
    const dots = $('#galleryDots');
    if (!track) return;
    CONFIG.gallery.forEach((g, i) => {
      const slide = el('figure', 'slide');
      slide.dataset.index = String(i);
      slide.innerHTML =
        '<div class="slide__media">' +
        '<img src="' + (g.image || '') + '" alt="' + (g.title || 'A photo') + '" loading="lazy" decoding="async">' +
        '<figcaption class="slide__cap">' +
        '<span class="slide__date">' + (g.date || '') + '</span>' +
        '<span class="slide__title">' + (g.title || '') + '</span>' +
        '</figcaption>' +
        '</div>' +
        '<button type="button" class="slide__open" aria-label="Open photo: ' + (g.title || '') + '"></button>';
      const img = slide.querySelector('img');
      img.addEventListener('error', () => { img.style.opacity = '.25'; }, { once: true });
      track.appendChild(slide);

      if (dots) {
        const dot = el('button');
        dot.type = 'button';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Photo ' + (i + 1));
        dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        dot.addEventListener('click', () => goToSlide(i));
        dots.appendChild(dot);
      }
    });
    gallerySlides = $$('.slide', track);
    const count = $('#galleryCount');
    if (count) count.textContent = CONFIG.gallery.length + ' photographs';
  }

  function goToSlide(i) {
    const track = $('#galleryTrack');
    if (!track || !gallerySlides.length) return;
    const idx = Math.max(0, Math.min(gallerySlides.length - 1, i));
    const slide = gallerySlides[idx];
    track.scrollTo({ left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2, behavior: REDUCED ? 'auto' : 'smooth' });
    setCurrentSlide(idx);
  }
  function setCurrentSlide(i) {
    gallerySlides.forEach((s, k) => s.classList.toggle('is-current', k === i));
    $$('#galleryDots button').forEach((d, k) => d.setAttribute('aria-selected', k === i ? 'true' : 'false'));
  }
  function trackCurrentSlide() {
    const track = $('#galleryTrack');
    if (!track || !gallerySlides.length) return;
    const centre = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    gallerySlides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.clientWidth / 2 - centre);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setCurrentSlide(best);
  }

  const galleryTrack = $('#galleryTrack');
  if (galleryTrack) {
    let gRaf = 0;
    galleryTrack.addEventListener('scroll', () => {
      if (gRaf) return;
      gRaf = requestAnimationFrame(() => {
        gRaf = 0;
        trackCurrentSlide();
        parallaxSlides();
      });
    }, { passive: true });

    galleryTrack.addEventListener('click', (ev) => {
      const open = ev.target.closest('.slide__open');
      if (!open) return;
      openLightbox(Number(open.closest('.slide').dataset.index || 0));
    });
    galleryTrack.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowRight') { ev.preventDefault(); goToSlide(currentSlideIndex() + 1); }
      if (ev.key === 'ArrowLeft') { ev.preventDefault(); goToSlide(currentSlideIndex() - 1); }
    });
    const prev = $('#galleryPrev'), next = $('#galleryNext');
    if (prev) prev.addEventListener('click', () => goToSlide(currentSlideIndex() - 1));
    if (next) next.addEventListener('click', () => goToSlide(currentSlideIndex() + 1));
  }
  function currentSlideIndex() {
    const i = gallerySlides.findIndex(s => s.classList.contains('is-current'));
    return i < 0 ? 0 : i;
  }
  function parallaxSlides() {
    if (REDUCED) return;
    const track = $('#galleryTrack');
    if (!track) return;
    const centre = track.scrollLeft + track.clientWidth / 2;
    gallerySlides.forEach(s => {
      const img = s.querySelector('img');
      if (!img) return;
      const d = (s.offsetLeft + s.clientWidth / 2 - centre) / track.clientWidth;
      img.style.transform = 'scale(1.04) translate3d(' + (d * -14).toFixed(1) + 'px,0,0)';
    });
  }

  /* ------------------------------------------------- lightbox */
  const lightboxEl = $('#lightbox');
  function openLightbox(index) {
    const g = CONFIG.gallery[index];
    if (!g || !lightboxEl) return;
    const img = $('#lightboxImg');
    img.src = g.image || '';
    img.alt = g.title || 'A photo';
    img.classList.remove('is-zoomed');
    $('#lightboxCaption').textContent = [g.title, g.caption, g.date].filter(Boolean).join(' — ');
    openOverlay(lightboxEl);
  }
  if (lightboxEl) {
    $$('[data-close="lightbox"]', lightboxEl).forEach(b => b.addEventListener('click', () => closeOverlay(lightboxEl)));
    const img = $('#lightboxImg');
    const zoom = $('#lightboxZoom');
    if (img) img.addEventListener('click', () => img.classList.toggle('is-zoomed'));
    if (zoom && img) zoom.addEventListener('click', () => img.classList.toggle('is-zoomed'));
  }

  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      if (momentEl && !momentEl.hidden) closeMoment();
      else if (lightboxEl && !lightboxEl.hidden) closeOverlay(lightboxEl);
    }
    if (momentEl && !momentEl.hidden) {
      if (ev.key === 'ArrowRight') showMoment(momentIndex + 1);
      if (ev.key === 'ArrowLeft') showMoment(momentIndex - 1);
    }
  });

  /* ------------------------------------------------- 03 · REASONS */
  function renderReasons() {
    const field = $('#reasonsField');
    if (!field) return;
    CONFIG.reasons.forEach((r, i) => {
      const btn = el('button', 'reason');
      btn.type = 'button';
      btn.dataset.index = String(i);
      btn.dataset.anim = '';
      btn.style.setProperty('--fd', (i * .4) + 's');
      btn.setAttribute('aria-label', 'A hidden reason. Open it.');
      btn.innerHTML = ICONS[r.object] || ICONS.heart;
      if (state.reasons.indexOf(i) >= 0) btn.classList.add('is-found');
      field.appendChild(btn);
    });
    updateReasonsCount();
  }

  function updateReasonsCount() {
    const total = CONFIG.reasons.length;
    const found = state.reasons.length;
    const label = $('#reasonsCount');
    if (label) label.textContent = found + ' / ' + total;
    const btn = $('#revealAllReasons');
    if (btn) btn.textContent = found >= total ? 'all found' : 'reveal them all';
    if (found >= total && btn) btn.disabled = found >= total;
  }

  function findReason(btn) {
    const i = Number(btn.dataset.index || 0);
    const reason = CONFIG.reasons[i];
    if (!reason) return;
    const isNew = state.reasons.indexOf(i) < 0;
    if (isNew) { state.reasons.push(i); state.reasons.sort((a, b) => a - b); writeStore(); }
    btn.classList.add('is-found');
    updateReasonsCount();

    const box = centreOf(btn);
    burst(box.x, box.y, 10, true);

    // clear whatever was showing
    $$('.reason__note').forEach(n => n.remove());
    const onPhone = window.innerWidth < 641;
    const note = el('span', 'reason__note', reason.text);
    if (onPhone) {
      // appended to <body>: a transformed .reason would trap a fixed element
      document.body.appendChild(note);
      setTimeout(() => { if (note.parentNode) note.remove(); }, 7500);
    } else {
      btn.appendChild(note);
    }
    if (isNew && state.reasons.length === CONFIG.reasons.length) {
      setTimeout(() => toast('You found all of them.', 4200), 700);
    }
  }

  const reasonsField = $('#reasonsField');
  if (reasonsField) {
    reasonsField.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.reason');
      if (!btn) return;
      if (window.innerWidth >= 641) {
        const already = $('.reason__note', btn);
        if (already) { already.remove(); return; }
      }
      findReason(btn);
    });
    reasonsField.addEventListener('mouseleave', () => {
      if (window.innerWidth < 641) return;
      const n = $('.reason__note');
      if (n) n.remove();
    });
  }
  const revealAll = $('#revealAllReasons');
  if (revealAll) {
    revealAll.addEventListener('click', () => {
      $$('.reason').forEach((btn, i) => {
        setTimeout(() => {
          if (btn.classList.contains('is-found') && state.reasons.indexOf(i) >= 0) return;
          findReason(btn);
        }, i * 130);
      });
      toast('Opened all of them. No more secrets in this part.', 3600);
    });
  }

  /* ------------------------------------------------- 03b · SHELF */
  function renderShelf() {
    const row = $('#shelfRow');
    if (!row) return;
    CONFIG.littleThings.forEach((item, i) => {
      const li = el('li');
      const btn = el('button', 'shelf__item');
      btn.type = 'button';
      btn.dataset.anim = '';
      btn.style.setProperty('--d', (i * 70) + 'ms');
      btn.innerHTML = (ICONS[item.icon] || ICONS.heart) + '<span class="shelf__label">' + (item.label || '') + '</span>';
      btn.setAttribute('aria-label', (item.label || 'object') + '. Open it.');
      li.appendChild(btn);
      row.appendChild(li);
    });
  }
  const shelfRow = $('#shelfRow');
  if (shelfRow) {
    shelfRow.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.shelf__item');
      if (!btn) return;
      const i = $$('.shelf__item', shelfRow).indexOf(btn);
      const item = CONFIG.littleThings[i];
      const readout = $('#shelfReadout');
      btn.classList.remove('is-tapped');
      void btn.offsetWidth;
      btn.classList.add('is-tapped');
      const box = centreOf(btn);
      burst(box.x, box.y, 8, item.icon === 'heart' || item.icon === 'teddy');
      if (readout) {
        readout.classList.remove('is-on');
        readout.textContent = '';
        setTimeout(() => {
          readout.textContent = item.message || '';
          readout.classList.add('is-on');
        }, 140);
      }
    });
  }

  /* ------------------------------------------------- 04 · SECRET WORLD */
  function renderSecrets() {
    const sky = $('#secretSky');
    if (!sky) return;
    CONFIG.secrets.forEach((s, i) => {
      const btn = el('button', 'secret');
      btn.type = 'button';
      btn.dataset.index = String(i);
      btn.style.left = (s.x || 20) + '%';
      btn.style.top = (s.y || 30) + '%';
      btn.style.setProperty('--tw', (4.4 + (i % 4) * .8).toFixed(1) + 's');
      btn.setAttribute('aria-label', 'A hidden message');
      btn.innerHTML = '<span class="secret__mark" aria-hidden="true">' + (s.mark || '·') + '</span>';
      if (state.secrets.indexOf(i) >= 0) btn.classList.add('is-found');
      sky.appendChild(btn);
    });
    updateSecretsTally();
  }
  function updateSecretsTally() {
    const tally = $('#secretTally');
    if (tally) tally.textContent = state.secrets.length + ' / ' + CONFIG.secrets.length + ' ' + CONFIG.chapters.secret.tallyLabel;
  }
  const secretSky = $('#secretSky');
  if (secretSky) {
    secretSky.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.secret');
      if (!btn) return;
      const i = Number(btn.dataset.index || 0);
      const s = CONFIG.secrets[i];
      if (!s) return;
      const isNew = state.secrets.indexOf(i) < 0;
      if (isNew) { state.secrets.push(i); state.secrets.sort((a, b) => a - b); writeStore(); }
      btn.classList.add('is-found');
      const box = centreOf(btn);
      burst(box.x, box.y, 12, true);

      const panel = $('#secretPanel');
      if (panel) {
        $$('p', panel).forEach(p => { if (!p.classList.contains('secret-world__hint')) p.remove(); });
        const whisper = el('p', 'secret-world__whisper', s.text || '');
        panel.appendChild(whisper);
        let tally = $('#secretTally');
        if (!tally) {
          tally = el('p', 'secret-world__tally');
          tally.id = 'secretTally';
          panel.appendChild(tally);
        }
        updateSecretsTally();
        if (isNew && state.secrets.length === CONFIG.secrets.length) {
          setTimeout(() => toast(CONFIG.chapters.secret.done, 4000), 800);
        }
      }
    });
  }

  /* ------------------------------------------------- 05 · LETTER + INK */
  function renderApology() {
    const body = $('[data-letter="body"]');
    const greeting = $('[data-letter="greeting"]');
    const sign = $('[data-letter="sign"]');
    if (greeting) greeting.textContent = CONFIG.apology.greeting || '';
    if (sign) sign.textContent = CONFIG.apology.sign || '';
    if (!body) return;
    body.innerHTML = '';
    CONFIG.apology.paragraphs.forEach((text, i) => {
      const p = el('p', 'ink', text);
      p.setAttribute('data-ink', '');
      p.dataset.index = String(i);
      body.appendChild(p);
    });
  }

  let inkRun = 0;
  function runInk(container, speedMs) {
    const paras = $$('[data-ink]', container);
    inkRun += 1;
    const run = inkRun;
    if (REDUCED) {
      paras.forEach(p => p.style.setProperty('--ink', '100%'));
      return;
    }
    let delay = 0;
    paras.forEach((p, idx) => {
      const chars = (p.textContent || '').length;
      const duration = Math.max(900, Math.min(chars * (speedMs || 16), 5200));
      setTimeout(() => {
        if (run !== inkRun) return;
        p.classList.add('is-pen');
        const start = performance.now();
        function step(now) {
          if (run !== inkRun) { p.classList.remove('is-pen'); return; }
          const t = Math.min(1, (now - start) / duration);
          const eased = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          p.style.setProperty('--ink', (eased * 100).toFixed(2) + '%');
          if (t < 1) requestAnimationFrame(step);
          else p.classList.remove('is-pen');
        }
        requestAnimationFrame(step);
      }, delay);
      delay += duration * .72 + 260;
    });
  }

  const openApologyBtn = $('#openApology');
  const apologyLetter = $('#apologyLetter');
  if (openApologyBtn && apologyLetter) {
    openApologyBtn.addEventListener('click', () => {
      openApologyBtn.setAttribute('aria-expanded', 'true');
      apologyLetter.hidden = false;
      revealNow(apologyLetter);
      runInk($('[data-letter="body"]', apologyLetter) || apologyLetter, 16);
      const box = centreOf(apologyLetter);
      setTimeout(() => {
        apologyLetter.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
      }, 120);
      burst(box.x, window.innerHeight * .5, 12, true);
    });
  }
  const replayApology = $('#replayApology');
  if (replayApology) {
    replayApology.addEventListener('click', () => {
      $$('[data-ink]', apologyLetter).forEach(p => p.style.setProperty('--ink', '0%'));
      runInk($('[data-letter="body"]', apologyLetter) || apologyLetter, 16);
    });
  }

  /* ------------------------------------------------- 06 · LONG LETTER */
  function renderLongLetter() {
    const body = $('#longLetterBody');
    const dateEl = $('#longLetterDate');
    const signEl = $('#longLetterSign');
    if (dateEl) {
      const d = CONFIG.loveLetter.dateOverride || todayLong();
      dateEl.textContent = d ? d.toUpperCase() : '';
    }
    if (signEl) signEl.textContent = CONFIG.loveLetter.sign || '';
    if (!body) return;
    CONFIG.loveLetter.paragraphs.forEach((text, i) => {
      const p = el('p', '', text);
      p.dataset.anim = 'soft';
      p.style.setProperty('--d', Math.min(i * 60, 260) + 'ms');
      body.appendChild(p);
    });
  }

  /* ------------------------------------------------- 07 · FINAL SCENE */
  function renderFinal() {
    $$('[data-final]').forEach(node => {
      const key = node.getAttribute('data-final');
      if (key === 'line1' || key === 'line2' || key === 'made' || key === 'hugCta' || key === 'hugNote') {
        const value = key === 'hugNote' ? CONFIG.final.hugNote
          : key === 'hugCta' ? CONFIG.final.hugCta
          : key === 'made' ? CONFIG.final.made
          : key === 'line1' ? CONFIG.final.line1
          : CONFIG.final.line2;
        if (value) node.textContent = value;
      }
    });
    const box = $('#finalMessage');
    if (box) {
      box.innerHTML = '';
      CONFIG.finalMessage.forEach((text, i) => {
        const p = el('p', '', text);
        p.dataset.anim = 'soft';
        p.style.setProperty('--d', (i * 90) + 'ms');
        box.appendChild(p);
      });
    }
  }

  let hugHeld = 0;
  function giveHug(host, long) {
    if (!host) return;
    clearReactions(host);
    host.classList.add('is-hugging');
    const btn = $('#hugBtn');
    if (btn) {
      btn.classList.remove('is-pressed');
      void btn.offsetWidth;
      btn.classList.add('is-pressed');
    }
    const c = centreOf(host);
    burst(c.x, c.y, long ? 34 : 20, true);
    if (!REDUCED) {
      setTimeout(() => burst(c.x - 40, c.y + 10, 10, true), 220);
      setTimeout(() => burst(c.x + 40, c.y + 4, 10, true), 420);
    }
    setTimeout(() => host.classList.remove('is-hugging'), long ? 3600 : 2200);
    const echo = $('#hugEcho');
    if (echo) {
      const lines = CONFIG.final.hugEcho || [];
      echo.textContent = pick(lines, hugHeld) || '';
      echo.classList.add('is-on');
    }
    hugHeld += 1;
    state.hugs += 1;
    writeStore();
  }

  const hugBtn = $('#hugBtn');
  if (hugBtn && finalTeddyHost) {
    hugBtn.addEventListener('click', () => giveHug(finalTeddyHost, false));
  }
  if (finalTeddyHost) {
    finalTeddyHost.addEventListener('click', (ev) => {
      if (!ev.target.closest('[data-part]')) giveHug(finalTeddyHost, false);
    });
    finalTeddyHost.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') giveHug(finalTeddyHost, false);
    });
  }

  /* ------------------------------------------------- REVEAL SYSTEM */
  function revealNow(root) {
    $$('[data-anim]', root || document).forEach(n => n.classList.add('is-in'));
  }

  const revealIO = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: .16, rootMargin: '0px 0px -8% 0px' }) : null;

  function observeReveals(root) {
    const nodes = $$('[data-anim]', root || document);
    if (!revealIO) { nodes.forEach(n => n.classList.add('is-in')); return; }
    nodes.forEach(n => revealIO.observe(n));
  }

  /* ------------------------------------------------- CHAPTER RAIL + UNLOCK */
  const chapters = $$('.chapter');
  const railDots = $$('.rail__dot');

  function setRail() {
    const unlocked = new Set(state.unlocked);
    railDots.forEach(dot => {
      const id = dot.getAttribute('data-goto');
      const isUnlocked = unlocked.has(id);
      dot.classList.toggle('is-unlocked', isUnlocked);
      dot.classList.toggle('is-locked', !isUnlocked);
      dot.setAttribute('aria-disabled', isUnlocked ? 'false' : 'true');
    });
  }

  function unlockChapter(id) {
    if (state.unlocked.indexOf(id) >= 0) return;
    state.unlocked.push(id);
    writeStore();
    setRail();
  }

  function activeChapter(id) {
    railDots.forEach(dot => dot.classList.toggle('is-active', dot.getAttribute('data-goto') === id));
  }

  if ('IntersectionObserver' in window) {
    const chapterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        activeChapter(id);
        unlockChapter(id);
        const next = chapters[chapters.indexOf(entry.target) + 1];
        if (next) unlockChapter(next.id);
      });
    }, { threshold: .08, rootMargin: '-12% 0px -55% 0px' });
    chapters.forEach(c => chapterIO.observe(c));
  } else {
    setRail();
  }

  railDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const id = dot.getAttribute('data-goto');
      if (state.unlocked.indexOf(id) < 0) {
        toast('Not open yet — keep going and it unlocks itself.', 2600);
        return;
      }
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
    });
  });

  const toTop = $('#toTop');
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }));

  /* ------------------------------------------------- TIMELINE FILL */
  let scrollRaf = 0;
  function onScroll() {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = 0;
      const tl = $('#timeline');
      const fill = $('.timeline__fill');
      if (tl && fill) {
        const r = tl.getBoundingClientRect();
        const mid = window.innerHeight * .62;
        const progress = Math.max(0, Math.min(1, (mid - r.top) / r.height));
        fill.style.height = (progress * 100) + '%';
      }
      const rail = $('#rail');
      if (rail) document.body.classList.toggle('is-scrolled', window.scrollY > 40);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ------------------------------------------------- MUSIC PLAYER */
  function initPlayer() {
    const player = $('#player');
    const audio = $('#audio');
    if (!player || !audio) return;

    player.hidden = false;
    requestAnimationFrame(() => player.classList.add('is-on'));

    const title = $('#playerTitle');
    const playBtn = $('#playBtn');
    const fill = $('#seekFill');
    const bar = $('#seekBar');
    const nowEl = $('#timeNow');
    const totalEl = $('#timeTotal');
    let missing = false;

    title.textContent = CONFIG.music.title || 'music';
    // the file is attached lazily on the first press, so a missing song never
    // logs a network error for someone who never asks for music
    audio.removeAttribute('src');

    function fmt(sec) {
      if (!isFinite(sec) || sec < 0) sec = 0;
      const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
      return m + ':' + (s < 10 ? '0' : '') + s;
    }

    audio.addEventListener('loadedmetadata', () => {
      missing = false;
      player.classList.remove('is-idle');
      title.textContent = CONFIG.music.title || 'music';
      totalEl.textContent = fmt(audio.duration);
    });
    audio.addEventListener('timeupdate', () => {
      nowEl.textContent = fmt(audio.currentTime);
      const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      fill.style.width = pct.toFixed(2) + '%';
    });
    audio.addEventListener('play', () => {
      player.classList.add('is-playing');
      player.classList.remove('is-idle');
      playBtn.setAttribute('aria-label', 'Pause music');
    });
    audio.addEventListener('pause', () => {
      player.classList.remove('is-playing');
      playBtn.setAttribute('aria-label', 'Play music');
    });
    audio.addEventListener('error', () => {
      missing = true;
      player.classList.remove('is-playing');
      player.classList.add('is-idle');
      title.textContent = 'no song loaded';
      toast(CONFIG.music.missingHint, 5200);
    });

    playBtn.addEventListener('click', () => {
      if (missing) { toast(CONFIG.music.missingHint, 5200); return; }
      if (!audio.getAttribute('src') && CONFIG.music.src) audio.src = CONFIG.music.src;
      if (audio.paused) {
        const p = audio.play();
        if (p && p.catch) p.catch(() => toast('The browser blocked playback — tap once more.', 3200));
      } else {
        audio.pause();
      }
    });

    function seekFromEvent(ev) {
      if (missing || !audio.duration) return;
      const r = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width));
      audio.currentTime = ratio * audio.duration;
      fill.style.width = (ratio * 100).toFixed(2) + '%';
      nowEl.textContent = fmt(audio.currentTime);
    }
    let seeking = false;
    bar.addEventListener('pointerdown', (ev) => { seeking = true; bar.setPointerCapture && bar.setPointerCapture(ev.pointerId); seekFromEvent(ev); });
    bar.addEventListener('pointermove', (ev) => { if (seeking) seekFromEvent(ev); });
    bar.addEventListener('pointerup', () => { seeking = false; });
    bar.addEventListener('keydown', (ev) => {
      if (!audio.duration) return;
      if (ev.key === 'ArrowRight') { audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); ev.preventDefault(); }
      if (ev.key === 'ArrowLeft') { audio.currentTime = Math.max(0, audio.currentTime - 5); ev.preventDefault(); }
    });
  }

  /* ------------------------------------------------- GATE → WORLD */
  function introSequence() {
    const gate = $('#gate');
    const eyebrow = $('.gate__eyebrow');
    const hint = $('.gate__hint');
    const line1 = $('.gate__name');
    const line2 = $('.gate__sub');
    const btn = $('#enterBtn');

    if (REDUCED) {
      [eyebrow, line1, line2, btn, hint].forEach(n => n && n.classList.add('is-on'));
      return;
    }
    const steps = [
      [0,    eyebrow],
      [520,  line1],
      [1500, line2],
      [2300, btn],
      [3300, hint]
    ];
    steps.forEach(([delay, node]) => {
      if (node) setTimeout(() => node.classList.add('is-on'), delay);
    });
  }

  let entered = false;
  function enterWorld() {
    if (entered) return;
    entered = true;
    const gate = $('#gate');
    const world = $('#world');

    if (REDUCED) {
      gate.hidden = true;
      world.hidden = false;
      document.body.classList.remove('is-locked');
      world.classList.add('is-live');
      initPlayer();
      observeReveals();
      setRail();
      return;
    }

    gate.classList.add('is-leaving');
    const cx = window.innerWidth / 2, cy = window.innerHeight * .58;
    burst(cx, cy, 26, true);
    gate.style.transition = 'opacity .7s ease, transform .9s cubic-bezier(.16,.84,.28,1), filter .7s ease';
    gate.style.opacity = '0';
    gate.style.transform = 'scale(1.045)';
    gate.style.filter = 'blur(10px)';
    window.setTimeout(() => {
      gate.hidden = true;
      gate.removeAttribute('style');
      world.hidden = false;
      document.body.classList.remove('is-locked');
      world.classList.add('is-live');
      state.visited = true;
      writeStore();
      window.scrollTo({ top: 0, behavior: 'auto' });
      observeReveals();
      setRail();
      initPlayer();
    }, 620);
  }

  const enterBtn = $('#enterBtn');
  if (enterBtn) enterBtn.addEventListener('click', enterWorld);
  document.addEventListener('keydown', (ev) => {
    if (!entered && (ev.key === 'Enter' || ev.key === ' ')) enterWorld();
  });
  // tapping the empty space of the opening scene sprinkles particles — it does NOT
  // pull her in (she only enters when she chooses to)
  const gateEl = $('#gate');
  if (gateEl) {
    gateEl.addEventListener('pointerdown', (ev) => {
      if (entered) return;
      if (ev.target.closest('.gate__inner')) return;
      burst(ev.clientX, ev.clientY, 7, Math.random() < .35);
    });
  }

  /* ------------------------------------------------- BOOT */
  function boot() {
    fillConfigText();
    renderTimeline();
    renderMemories();
    renderGallery();
    renderReasons();
    renderShelf();
    renderSecrets();
    renderApology();
    renderLongLetter();
    renderFinal();

    if ($('#rail')) setRail();
    if ($('#secretSky')) {
      const panel = $('#secretPanel');
      if (panel && !$('#secretTally')) {
        const tally = el('p', 'secret-world__tally');
        tally.id = 'secretTally';
        panel.appendChild(tally);
      }
      updateSecretsTally();
    }

    // returning visitors can skip the opening line-up after a beat
    if (state.visited && !REDUCED) {
      setTimeout(() => {
        if (!entered) toast('Tap Enter whenever you are ready.', 3000);
      }, 4200);
    }

    introSequence();
    onScroll();
    // gallery starts centred on slide 0
    requestAnimationFrame(() => { setCurrentSlide(0); parallaxSlides(); });

    // safety net: if IntersectionObserver never fires for some reason,
    // nothing in the page is allowed to stay invisible forever
    setTimeout(() => {
      $$('[data-anim]').forEach(n => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) n.classList.add('is-in');
      });
    }, 2500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // expose a tiny bit for debugging in the console (harmless in production)
  window.BASHAIR = { CONFIG, state, burst, toast, teddySVG };
})();
