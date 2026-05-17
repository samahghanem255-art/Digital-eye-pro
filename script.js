/* ===== DIGITAL EYE - APP.JS COMPLETE ===== */
'use strict';

/* ============ TRANSLATIONS ============ */
const i18n = {
  ar:{
    breaking:"عاجل",nav_home:"الرئيسية",nav_news:"الأخبار",nav_videos:"الفيديوهات",
    nav_ai:"الذكاء الاصطناعي",nav_analytics:"التحليلات",nav_studio:"الاستوديو",nav_contact:"التواصل",
    hero_badge:"منصة إعلامية ذكية",hero_tagline:"عين واحدة... رؤية كاملة",
    hero_desc:"منصة إعلامية متكاملة تجمع بين قوة الذكاء الاصطناعي وتحليل البيانات الضخمة",
    stat_accuracy:"دقة التحليل",stat_fake:"خبر مزيف مكشوف",stat_countries:"دولة مغطاة",stat_sources:"مصدر إعلامي",
    cta_explore:"استكشف الأخبار",cta_ai:"أدوات الذكاء الاصطناعي",
    news_title:"آخر الأخبار",news_sub:"تغطية شاملة ومحدثة لحظة بلحظة من مصادر موثوقة",
    filter_all:"الكل",filter_tech:"تقنية",filter_politics:"سياسة",filter_economy:"اقتصاد",filter_sports:"رياضة",
    load_more:"تحميل المزيد",videos_title:"الفيديوهات",videos_sub:"تقارير ومحتوى مرئي من أبرز القنوات الإخبارية العالمية",
    ai_title:"أدوات الذكاء الاصطناعي",ai_sub:"حلول ذكية متقدمة لتحليل ورصد المحتوى الإعلامي",
    tab_fake:"كاشف الأخبار المزيفة",tab_sentiment:"تحليل المشاعر",tab_reputation:"رصد السمعة",tab_summary:"تلخيص المحتوى",
    fake_title:"كاشف الأخبار المزيفة",fake_sub:"أدخل نص الخبر وسنحلله فوراً",
    sentiment_title:"تحليل المشاعر",sentiment_sub:"تحليل عاطفي وتوجهي للنصوص",
    rep_title:"رصد السمعة الرقمية",rep_sub:"تتبع وتحليل سمعة المؤسسات",
    sum_title:"تلخيص المحتوى الذكي",sum_sub:"تلخيص المقالات في ثوانٍ",
    analyze_btn:"تحليل الآن",analyze_sentiment:"تحليل المشاعر",analyze_rep:"رصد السمعة",analyze_sum:"تلخيص ذكي",
    analytics_title:"البيانات الإعلامية الضخمة",analytics_sub:"لوحة تحكم تحليلية شاملة للمحتوى الإعلامي العالمي",
    metric_articles:"مقال محلل اليوم",metric_fake:"خبر مزيف مكشوف",metric_countries:"دولة مغطاة",metric_users:"مستخدم نشط",
    chart_trend:"توزيع الأخبار حسب الفئة",chart_fake:"نسبة الأخبار المزيفة أسبوعياً",
    chart_sources:"أبرز المصادر الإخبارية",chart_sentiment:"مؤشر المشاعر الإعلامية",
    studio_title:"الاستوديو السحابي",studio_sub:"أدوات الإنتاج الإعلامي الاحترافي في متناول يدك",
    studio_editor:"محرر المحتوى",studio_editor_desc:"محرر ذكي مع تدقيق لغوي تلقائي",
    studio_graphics:"مُنشئ الغرافيك",studio_graphics_desc:"تصميم الإنفوغرافيك تلقائياً",
    studio_broadcast:"البث المباشر",studio_broadcast_desc:"بث مباشر احترافي عالي الجودة",
    studio_social:"نشر تلقائي",studio_social_desc:"نشر على جميع المنصات بضغطة",
    studio_archive:"أرشيف سحابي",studio_archive_desc:"تخزين وفهرسة ذكية للمحتوى",
    studio_team:"إدارة الفريق",studio_team_desc:"تنسيق المهام بين أعضاء التحرير",
    contact_title:"تواصل معنا",contact_sub:"نحن هنا للإجابة على استفساراتك على مدار الساعة",
    contact_address:"العنوان",contact_phone:"الهاتف",contact_email:"البريد الإلكتروني",
    form_name:"الاسم الكامل",form_email:"البريد الإلكتروني",form_subject:"الموضوع",
    form_select:"اختر الموضوع...",form_inquiry:"استفسار عام",form_partnership:"شراكة إعلامية",
    form_technical:"دعم تقني",form_advertising:"إعلانات",form_message:"رسالتك",form_send:"إرسال الرسالة",
    footer_desc:"منصة إعلامية ذكية تجمع بين الصحافة الرقمية والذكاء الاصطناعي",
    footer_links:"روابط سريعة",footer_services:"الخدمات",footer_newsletter:"النشرة الإخبارية",
    newsletter_desc:"اشترك لتلقي أحدث الأخبار مباشرة",footer_copy:"© 2025 Digital Eye. جميع الحقوق محفوظة.",
    privacy:"سياسة الخصوصية",terms:"الشروط والأحكام",
    svc_fake:"كشف الأخبار المزيفة",svc_rep:"رصد السمعة",svc_big:"البيانات الضخمة",svc_studio:"الاستوديو السحابي",
    live:"بث مباشر"
  },
  en:{
    breaking:"BREAKING",nav_home:"Home",nav_news:"News",nav_videos:"Videos",
    nav_ai:"AI Tools",nav_analytics:"Analytics",nav_studio:"Studio",nav_contact:"Contact",
    hero_badge:"Smart Media Platform",hero_tagline:"One Eye... Complete Vision",
    hero_desc:"An integrated media platform combining AI power with big data analytics",
    stat_accuracy:"Analysis Accuracy",stat_fake:"Fake News Detected",stat_countries:"Countries Covered",stat_sources:"News Sources",
    cta_explore:"Explore News",cta_ai:"AI Tools",
    news_title:"Latest News",news_sub:"Comprehensive real-time coverage from trusted sources worldwide",
    filter_all:"All",filter_tech:"Technology",filter_politics:"Politics",filter_economy:"Economy",filter_sports:"Sports",
    load_more:"Load More",videos_title:"Videos",videos_sub:"Reports and visual content from top global news channels",
    ai_title:"AI Tools",ai_sub:"Advanced smart solutions for media content analysis",
    tab_fake:"Fake News Detector",tab_sentiment:"Sentiment Analysis",tab_reputation:"Reputation Monitor",tab_summary:"Content Summary",
    fake_title:"Fake News Detector",fake_sub:"Enter news text to verify instantly",
    sentiment_title:"Sentiment Analysis",sentiment_sub:"Emotional and directional text analysis",
    rep_title:"Reputation Monitor",rep_sub:"Track and analyze institutional reputation",
    sum_title:"Smart Content Summary",sum_sub:"Summarize articles in seconds",
    analyze_btn:"Analyze Now",analyze_sentiment:"Analyze Sentiment",analyze_rep:"Monitor Reputation",analyze_sum:"Smart Summary",
    analytics_title:"Big Media Data",analytics_sub:"Comprehensive analytics dashboard for global media content",
    metric_articles:"Articles Analyzed Today",metric_fake:"Fake News Detected",metric_countries:"Countries Covered",metric_users:"Active Users",
    chart_trend:"News by Category",chart_fake:"Weekly Fake News Rate",chart_sources:"Top News Sources",chart_sentiment:"Media Sentiment Index",
    studio_title:"Cloud Studio",studio_sub:"Professional media production tools at your fingertips",
    studio_editor:"Content Editor",studio_editor_desc:"Smart editor with auto spell check",
    studio_graphics:"Graphics Creator",studio_graphics_desc:"Auto infographic design",
    studio_broadcast:"Live Broadcast",studio_broadcast_desc:"Professional high-quality live streaming",
    studio_social:"Auto Publish",studio_social_desc:"Publish to all platforms in one click",
    studio_archive:"Cloud Archive",studio_archive_desc:"Smart storage and content indexing",
    studio_team:"Team Manager",studio_team_desc:"Editorial team task coordination",
    contact_title:"Contact Us",contact_sub:"We are available to answer your inquiries 24/7",
    contact_address:"Address",contact_phone:"Phone",contact_email:"Email",
    form_name:"Full Name",form_email:"Email Address",form_subject:"Subject",
    form_select:"Choose subject...",form_inquiry:"General Inquiry",form_partnership:"Media Partnership",
    form_technical:"Technical Support",form_advertising:"Advertising",form_message:"Your Message",form_send:"Send Message",
    footer_desc:"Smart media platform combining digital journalism with AI",
    footer_links:"Quick Links",footer_services:"Services",footer_newsletter:"Newsletter",
    newsletter_desc:"Subscribe to receive the latest news directly",footer_copy:"© 2025 Digital Eye. All rights reserved.",
    privacy:"Privacy Policy",terms:"Terms & Conditions",
    svc_fake:"Fake News Detection",svc_rep:"Reputation Monitoring",svc_big:"Big Data Analytics",svc_studio:"Cloud Studio",
    live:"Live"
  },
  fr:{
    breaking:"URGENT",nav_home:"Accueil",nav_news:"Actualités",nav_videos:"Vidéos",
    nav_ai:"Outils IA",nav_analytics:"Analytiques",nav_studio:"Studio",nav_contact:"Contact",
    hero_badge:"Plateforme Médiatique Intelligente",hero_tagline:"Un œil... Une vision complète",
    hero_desc:"Une plateforme médiatique intégrée combinant l'IA et l'analyse des mégadonnées",
    stat_accuracy:"Précision d'analyse",stat_fake:"Fausses infos détectées",stat_countries:"Pays couverts",stat_sources:"Sources d'information",
    cta_explore:"Explorer les Actualités",cta_ai:"Outils IA",
    news_title:"Dernières Actualités",news_sub:"Couverture complète en temps réel depuis des sources fiables",
    filter_all:"Tout",filter_tech:"Technologie",filter_politics:"Politique",filter_economy:"Économie",filter_sports:"Sport",
    load_more:"Charger plus",videos_title:"Vidéos",videos_sub:"Reportages et contenu visuel des principales chaînes d'information",
    ai_title:"Outils d'IA",ai_sub:"Solutions intelligentes avancées pour l'analyse des médias",
    tab_fake:"Détecteur de fausses infos",tab_sentiment:"Analyse des sentiments",tab_reputation:"Surveillance réputationnelle",tab_summary:"Résumé de contenu",
    fake_title:"Détecteur de fausses infos",fake_sub:"Entrez le texte à vérifier instantanément",
    sentiment_title:"Analyse des sentiments",sentiment_sub:"Analyse émotionnelle et directionnelle des textes",
    rep_title:"Surveillance réputationnelle",rep_sub:"Suivre et analyser la réputation des institutions",
    sum_title:"Résumé de contenu intelligent",sum_sub:"Résumer les articles en quelques secondes",
    analyze_btn:"Analyser maintenant",analyze_sentiment:"Analyser les sentiments",analyze_rep:"Surveiller la réputation",analyze_sum:"Résumé intelligent",
    analytics_title:"Mégadonnées Médiatiques",analytics_sub:"Tableau de bord analytique complet",
    metric_articles:"Articles analysés aujourd'hui",metric_fake:"Fausses infos détectées",metric_countries:"Pays couverts",metric_users:"Utilisateurs actifs",
    chart_trend:"Actualités par catégorie",chart_fake:"Taux hebdomadaire de fausses infos",chart_sources:"Principales sources",chart_sentiment:"Indice de sentiment",
    studio_title:"Studio Cloud",studio_sub:"Outils de production médiatique professionnels",
    studio_editor:"Éditeur de contenu",studio_editor_desc:"Éditeur intelligent avec vérification orthographique",
    studio_graphics:"Créateur graphique",studio_graphics_desc:"Conception automatique d'infographies",
    studio_broadcast:"Diffusion en direct",studio_broadcast_desc:"Streaming professionnel en direct",
    studio_social:"Publication auto",studio_social_desc:"Publier sur toutes les plateformes",
    studio_archive:"Archive Cloud",studio_archive_desc:"Stockage et indexation intelligents",
    studio_team:"Gestion d'équipe",studio_team_desc:"Coordination de l'équipe médiatique",
    contact_title:"Nous contacter",contact_sub:"Disponibles 24h/24 pour répondre à vos questions",
    contact_address:"Adresse",contact_phone:"Téléphone",contact_email:"Email",
    form_name:"Nom complet",form_email:"Adresse email",form_subject:"Sujet",
    form_select:"Choisissez un sujet...",form_inquiry:"Demande générale",form_partnership:"Partenariat médiatique",
    form_technical:"Support technique",form_advertising:"Publicité",form_message:"Votre message",form_send:"Envoyer le message",
    footer_desc:"Plateforme médiatique intelligente combinant journalisme et IA",
    footer_links:"Liens rapides",footer_services:"Services",footer_newsletter:"Newsletter",
    newsletter_desc:"Abonnez-vous pour les dernières actualités",footer_copy:"© 2025 Digital Eye. Tous droits réservés.",
    privacy:"Politique de confidentialité",terms:"Conditions d'utilisation",
    svc_fake:"Détection de fausses infos",svc_rep:"Surveillance réputationnelle",svc_big:"Analyse de mégadonnées",svc_studio:"Studio Cloud",
    live:"Direct"
  }
};

/* ============ NEWS DATA ============ */
const newsData = [
  {id:1,category:'tech',catColor:'#00b4ff',catBg:'rgba(0,180,255,0.15)',
   title:'الذكاء الاصطناعي يُحدث ثورة في غرف الأخبار العالمية',
   excerpt:'تتسابق كبرى المؤسسات الإعلامية على دمج أدوات الذكاء الاصطناعي في عملياتها التحريرية، مما يُغير طبيعة العمل الصحفي.',
   source:'Digital Eye',time:'منذ 5 دقائق',readTime:'3 دقائق',
   img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=200&fit=crop',fake:false,views:'12.4K'},
  {id:2,category:'politics',catColor:'#ff6b35',catBg:'rgba(255,107,53,0.15)',
   title:'قمة دولية لمناقشة تنظيم وسائل التواصل الاجتماعي',
   excerpt:'يجتمع قادة العالم في جنيف لوضع إطار دولي لتنظيم منصات التواصل الاجتماعي ومكافحة الأخبار الكاذبة.',
   source:'رويترز',time:'منذ 18 دقيقة',readTime:'4 دقائق',
   img:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop',fake:false,views:'8.7K'},
  {id:3,category:'economy',catColor:'#00cc88',catBg:'rgba(0,204,136,0.15)',
   title:'أسواق المال تسجل ارتفاعاً قياسياً بفضل قطاع التقنية',
   excerpt:'سجّلت أسواق المال العالمية ارتفاعات قياسية مدفوعة بالنمو الاستثنائي لشركات التقنية الكبرى.',
   source:'بلومبرغ',time:'منذ 32 دقيقة',readTime:'2 دقيقة',
   img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',fake:false,views:'15.2K'},
  {id:4,category:'tech',catColor:'#00b4ff',catBg:'rgba(0,180,255,0.15)',
   title:'⚠️ مزاعم غير مؤكدة: هاتف ذكي يعمل بدون شحن 30 عاماً',
   excerpt:'تتداول ادعاءات عبر مواقع التواصل عن هاتف يعمل بطاقة الجاذبية - تم التحقق وهي معلومات مضللة.',
   source:'غير محدد',time:'منذ ساعة',readTime:'1 دقيقة',
   img:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',fake:true,views:'45.1K'},
  {id:5,category:'sports',catColor:'#f5a623',catBg:'rgba(245,166,35,0.15)',
   title:'كأس العالم 2026: المواجهات المرتقبة في ربع النهائي',
   excerpt:'تستعد المنتخبات الثمانية المتأهلة لإجراء قرعة ربع النهائي في كأس العالم 2026 بأمريكا الشمالية.',
   source:'ESPN',time:'منذ ساعتين',readTime:'5 دقائق',
   img:'https://images.unsplash.com/photo-1551958219-acbc630e2914?w=400&h=200&fit=crop',fake:false,views:'89.3K'},
  {id:6,category:'economy',catColor:'#00cc88',catBg:'rgba(0,204,136,0.15)',
   title:'البنك المركزي الأوروبي يُخفض أسعار الفائدة للمرة الثالثة',
   excerpt:'قرر البنك المركزي الأوروبي تخفيض أسعار الفائدة بمقدار 25 نقطة أساس لتحفيز النمو الاقتصادي.',
   source:'الفايننشال تايمز',time:'منذ 3 ساعات',readTime:'3 دقائق',
   img:'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=200&fit=crop',fake:false,views:'6.8K'}
];

/* ============ REAL YOUTUBE VIDEOS ============ */
/* فيديوهات حقيقية من قنوات إخبارية عالمية */
const videosData = [
  {
    id:'q-y-z_Q1xKI',
    title:'تقرير الجزيرة: مستقبل الذكاء الاصطناعي في الإعلام',
    channel:'قناة الجزيرة',
    thumb:'https://img.youtube.com/vi/q-y-z_Q1xKI/mqdefault.jpg',
    thumbFallback:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=220&fit=crop',
    duration:'12:34',views:'1.2M',date:'منذ أسبوع'
  },
  {
    id:'K_0gA0pz-FM',
    title:'BBC عربي: الأخبار المزيفة وتأثيرها على الرأي العام',
    channel:'BBC Arabic',
    thumb:'https://img.youtube.com/vi/K_0gA0pz-FM/mqdefault.jpg',
    thumbFallback:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop',
    duration:'18:22',views:'890K',date:'منذ 3 أيام'
  },
  {
    id:'2lP4uFEXsEk',
    title:'CNN: ثورة البيانات الضخمة في صناعة الإعلام الرقمي',
    channel:'CNN Arabic',
    thumb:'https://img.youtube.com/vi/2lP4uFEXsEk/mqdefault.jpg',
    thumbFallback:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop',
    duration:'09:47',views:'654K',date:'منذ 5 أيام'
  },
  {
    id:'Fg-xKyONQaM',
    title:'العربية: تحقيق في انتشار الأخبار الزائفة على الإنترنت',
    channel:'قناة العربية',
    thumb:'https://img.youtube.com/vi/Fg-xKyONQaM/mqdefault.jpg',
    thumbFallback:'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=220&fit=crop',
    duration:'22:15',views:'2.1M',date:'منذ أسبوعين'
  },
  {
    id:'nPTFRZmNRYI',
    title:'فرانس 24: كيف يغير الذكاء الاصطناعي مهنة الصحافة؟',
    channel:'France 24 Arabic',
    thumb:'https://img.youtube.com/vi/nPTFRZmNRYI/mqdefault.jpg',
    thumbFallback:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=220&fit=crop',
    duration:'14:58',views:'445K',date:'منذ أسبوعين'
  },
  {
    id:'L_jWHffIx5E',
    title:'DW عربية: حرية الصحافة في العالم الرقمي 2025',
    channel:'DW Arabic',
    thumb:'https://img.youtube.com/vi/L_jWHffIx5E/mqdefault.jpg',
    thumbFallback:'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=220&fit=crop',
    duration:'28:30',views:'320K',date:'منذ شهر'
  }
];

/* ============ STATE ============ */
let currentLang = 'ar';
let currentTheme = 'dark';
let heroAnimated = false;
let analyticsAnimated = false;

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded',()=>{
  setDateInTicker();
  duplicateTicker();
  renderNews('all');
  renderVideos();
  renderSources();
  renderSentimentMeter();
  initScrollWatcher();
  initNavHighlight();
  initIntersectionObservers();
  drawCharts();
  applyTranslations();
});

/* ============ TICKER ============ */
function duplicateTicker(){
  const tc=document.getElementById('tickerContent');
  if(tc) tc.innerHTML+=tc.innerHTML;
}
function setDateInTicker(){
  const langs={ar:'ar-DZ',en:'en-US',fr:'fr-FR'};
  const el=document.getElementById('tickerDate');
  if(el) el.textContent=new Date().toLocaleDateString(langs[currentLang]||'ar-DZ',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}

/* ============ THEME ============ */
function toggleTheme(){
  currentTheme=currentTheme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',currentTheme);
  const icon=document.getElementById('themeIcon');
  if(icon) icon.className=currentTheme==='dark'?'fas fa-moon':'fas fa-sun';
}

/* ============ LANGUAGE - FIXED ============ */
function setLang(lang){
  currentLang=lang;
  /* update active button */
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-lang')===lang);
  });
  /* direction */
  const dir=lang==='ar'?'rtl':'ltr';
  document.documentElement.setAttribute('dir',dir);
  document.documentElement.setAttribute('lang',lang);
  document.body.setAttribute('dir',dir);
  /* apply all translations */
  applyTranslations();
  setDateInTicker();
  /* re-render dynamic content */
  const activeFilter=document.querySelector('.filter-btn.active');
  const filterVal=activeFilter?activeFilter.getAttribute('onclick').match(/'([^']+)'/)?.[1]||'all':'all';
  renderNews(filterVal);
  renderVideos();
}

function applyTranslations(){
  const t=i18n[currentLang]||i18n.ar;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(!t[key]) return;
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=t[key];
    else if(el.tagName==='OPTION') el.textContent=t[key];
    else el.textContent=t[key];
  });
  /* update ticker label */
  const lbl=document.getElementById('breakingLabel');
  if(lbl&&t.breaking) lbl.textContent=t.breaking;
}

/* ============ MOBILE MENU ============ */
function toggleMenu(){
  const links=document.getElementById('navLinks');
  const ham=document.getElementById('hamburger');
  if(links) links.classList.toggle('open');
  if(ham) ham.classList.toggle('open');
}

/* ============ SCROLL ============ */
function initScrollWatcher(){
  const navbar=document.getElementById('navbar');
  const scrollBtn=document.getElementById('scrollTop');
  window.addEventListener('scroll',()=>{
    if(navbar) navbar.classList.toggle('scrolled',window.scrollY>50);
    if(scrollBtn) scrollBtn.classList.toggle('visible',window.scrollY>400);
  },{passive:true});
}

function scrollToSection(id){
  const el=document.getElementById(id);
  if(el) window.scrollTo({top:el.offsetTop-102,behavior:'smooth'});
}

/* ============ NAV HIGHLIGHT ============ */
function initNavHighlight(){
  const sections=document.querySelectorAll('section[id]');
  const links=document.querySelectorAll('.nav-link');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        links.forEach(l=>l.classList.remove('active'));
        const a=document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if(a) a.classList.add('active');
      }
    });
  },{threshold:0.35,rootMargin:'-100px 0px 0px 0px'});
  sections.forEach(s=>obs.observe(s));
}

/* ============ INTERSECTION OBSERVERS ============ */
function initIntersectionObservers(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        if(e.target.id==='home'&&!heroAnimated){heroAnimated=true;animateStatNums();}
        if(e.target.id==='analytics'&&!analyticsAnimated){analyticsAnimated=true;animateMetrics();}
      }
    });
  },{threshold:0.25});
  ['home','analytics'].forEach(id=>{const s=document.getElementById(id);if(s)obs.observe(s);});
}

/* ============ COUNTER ANIMATION ============ */
function animateNum(el,target,duration){
  const start=performance.now();
  const update=now=>{
    const p=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-p,3);
    const val=Math.floor(eased*target);
    el.textContent=val>=1000?val.toLocaleString('ar-DZ'):val;
    if(p<1) requestAnimationFrame(update);
    else el.textContent=target>=1000?target.toLocaleString('ar-DZ'):target;
  };
  requestAnimationFrame(update);
}
function animateStatNums(){
  document.querySelectorAll('.stat-num[data-target]').forEach(el=>{
    animateNum(el,parseInt(el.getAttribute('data-target')),2200);
  });
}
function animateMetrics(){
  const vals=[48291,1247,80,2400000];
  const ids=['m1','m2','m3','m4'];
  ids.forEach((id,i)=>{const el=document.getElementById(id);if(el)animateNum(el,vals[i],2000);});
}

/* ============ NEWS ============ */
function getCatName(cat){
  const t=i18n[currentLang]||i18n.ar;
  return {tech:t.filter_tech,politics:t.filter_politics,economy:t.filter_economy,sports:t.filter_sports}[cat]||cat;
}
function renderNews(filter){
  const grid=document.getElementById('newsGrid');
  if(!grid) return;
  const data=filter==='all'?newsData:newsData.filter(n=>n.category===filter);
  const arrow=currentLang==='ar'?'arrow-left':'arrow-right';
  grid.innerHTML=data.map(n=>`
    <div class="news-card" onclick="openNewsModal(${n.id})">
      <div class="news-card-img">
        <img src="${n.img}" alt="${n.title}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop'"/>
        <span class="news-card-cat" style="background:${n.catBg};color:${n.catColor}">${getCatName(n.category)}</span>
        ${n.fake?`<div class="fake-badge"><i class="fas fa-exclamation-triangle"></i> مزيف</div>`:''}
      </div>
      <div class="news-card-body">
        <div class="news-card-meta">
          <span><i class="fas fa-clock"></i> ${n.time}</span>
          <span><i class="fas fa-eye"></i> ${n.views}</span>
          <span><i class="fas fa-book-open"></i> ${n.readTime}</span>
        </div>
        <h3>${n.title}</h3>
        <p>${n.excerpt}</p>
        <div class="news-card-footer">
          <button class="news-read-btn">اقرأ المزيد <i class="fas fa-${arrow}"></i></button>
          <button class="news-share-btn" onclick="event.stopPropagation();showToast('تم نسخ رابط الخبر ✓')"><i class="fas fa-share-alt"></i></button>
        </div>
      </div>
    </div>`).join('');
}
function filterNews(filter,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderNews(filter);
}
function openNewsModal(id){
  const n=newsData.find(x=>x.id===id);
  if(!n) return;
  openModal(`
    <img src="${n.img}" style="width:100%;border-radius:10px;margin-bottom:18px" alt="${n.title}"
         onerror="this.style.display='none'"/>
    <div style="display:flex;gap:9px;align-items:center;margin-bottom:14px;flex-wrap:wrap">
      <span style="background:${n.catBg};color:${n.catColor};padding:4px 13px;border-radius:20px;font-size:.78rem;font-weight:700">${getCatName(n.category)}</span>
      ${n.fake
        ?`<span style="background:rgba(255,68,68,.15);color:#ff4444;padding:4px 13px;border-radius:20px;font-size:.78rem;font-weight:700"><i class="fas fa-exclamation-triangle"></i> خبر مزيف</span>`
        :`<span style="background:rgba(0,204,136,.15);color:#00cc88;padding:4px 13px;border-radius:20px;font-size:.78rem;font-weight:700"><i class="fas fa-check-circle"></i> موثوق</span>`}
    </div>
    <h2 style="font-size:1.25rem;font-weight:900;margin-bottom:14px;line-height:1.5">${n.title}</h2>
    <div style="display:flex;gap:14px;color:var(--text-muted);font-size:.78rem;margin-bottom:18px;flex-wrap:wrap">
      <span><i class="fas fa-newspaper"></i> ${n.source}</span>
      <span><i class="fas fa-clock"></i> ${n.time}</span>
      <span><i class="fas fa-eye"></i> ${n.views}</span>
    </div>
    <p style="line-height:1.9;color:var(--text-secondary);font-size:.92rem">${n.excerpt}</p>
    <p style="line-height:1.9;color:var(--text-secondary);font-size:.92rem;margin-top:12px">
      استمراراً لهذا الموضوع، تُشير التقارير إلى أن الأحداث المتسارعة تُلقي بظلالها على المشهد الإعلامي الدولي، فيما يترقب المراقبون التطورات القادمة بكثير من الاهتمام والمتابعة الدقيقة.
    </p>
    <div style="display:flex;gap:10px;margin-top:22px;flex-wrap:wrap">
      <button class="btn-primary" onclick="closeModal();showToast('تم حفظ الخبر ✓')"><i class="fas fa-bookmark"></i> حفظ</button>
      <button class="btn-secondary" onclick="showToast('تم نسخ الرابط ✓')"><i class="fas fa-share-alt"></i> مشاركة</button>
    </div>`);
}

/* ============ VIDEOS - REAL YOUTUBE ============ */
function renderVideos(){
  const grid=document.getElementById('videosGrid');
  if(!grid) return;
  grid.innerHTML=videosData.map(v=>`
    <div class="video-card" onclick="playVideo('${v.id}')">
      <div class="video-thumb">
        <img src="${v.thumb}" alt="${v.title}" loading="lazy"
             onerror="this.src='${v.thumbFallback}'"/>
        <div class="video-play-btn"><i class="fas fa-play"></i></div>
        <div class="video-duration">${v.duration}</div>
      </div>
      <div class="video-info">
        <div class="video-channel"><i class="fas fa-tv"></i> ${v.channel}</div>
        <h3>${v.title}</h3>
        <div class="video-meta">
          <span><i class="fas fa-eye"></i> ${v.views}</span>
          <span><i class="fas fa-calendar-alt"></i> ${v.date}</span>
        </div>
      </div>
    </div>`).join('');
}
function playVideo(id){
  const modal=document.getElementById('videoModal');
  const frame=document.getElementById('videoFrame');
  if(!modal||!frame) return;
  frame.src=`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeVideoModal(){
  const modal=document.getElementById('videoModal');
  const frame=document.getElementById('videoFrame');
  if(frame) frame.src='';
  if(modal) modal.classList.remove('open');
  document.body.style.overflow='';
}

/* ============ AI TOOLS ============ */
function switchAI(panel,btn){
  document.querySelectorAll('.ai-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.ai-tab').forEach(t=>t.classList.remove('active'));
  const p=document.getElementById('ai-'+panel);
  if(p) p.classList.add('active');
  if(btn) btn.classList.add('active');
}

function setLoading(btnId,loading,originalHTML){
  const btn=document.getElementById(btnId);
  if(!btn) return;
  if(loading){btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> جارٍ التحليل...';}
  else{btn.disabled=false;btn.innerHTML=originalHTML;}
}

function analyzeFakeNews(){
  const text=document.getElementById('fakeNewsInput').value.trim();
  if(!text){showToast('الرجاء إدخال نص الخبر أولاً ⚠️');return;}
  const orig='<i class="fas fa-search"></i><span>تحليل الآن</span>';
  setLoading('fakeBtn',true,orig);
  setTimeout(()=>{
    setLoading('fakeBtn',false,orig);
    const score=Math.random();
    const isFake=score>0.52;
    const pct=Math.round(isFake?score*100:(1-score)*100);
    const color=isFake?'#ff4444':'#00cc88';
    const label=isFake?'محتمل كذب':'موثوق';
    const icon=isFake?'fa-times-circle':'fa-check-circle';
    const res=document.getElementById('fakeNewsResult');
    res.classList.add('show');
    res.innerHTML=`
      <div class="result-header" style="color:${color}"><i class="fas ${icon}"></i> ${label} — دقة ${pct}%</div>
      <div class="score-bar"><div class="score-fill" style="width:0%;background:${color}" id="fakeFill"></div></div>
      <p style="font-size:.84rem;color:var(--text-secondary);margin-top:10px;line-height:1.7">
        ${isFake
          ?'⚠️ يُحتمل أن هذا الخبر يحتوي على معلومات مضللة أو غير موثقة. تحقق من المصدر الأصلي واستشر مصادر متعددة.'
          :'✅ الخبر يبدو موثوقاً ومطابقاً للمعطيات المتاحة. يُنصح دائماً بالتحقق المزدوج من مصادر مستقلة.'}
      </p>
      <div class="result-tags">
        <span class="result-tag"><i class="fas fa-robot"></i> تحليل آلي</span>
        <span class="result-tag"><i class="fas fa-database"></i> قاعدة بيانات ضخمة</span>
        <span class="result-tag"><i class="fas fa-clock"></i> تحليل فوري</span>
      </div>`;
    setTimeout(()=>{const f=document.getElementById('fakeFill');if(f)f.style.width=pct+'%';},100);
  },1800);
}

function analyzeSentiment(){
  const text=document.getElementById('sentimentInput').value.trim();
  if(!text){showToast('الرجاء إدخال النص أولاً ⚠️');return;}
  const orig='<i class="fas fa-heart"></i><span>تحليل المشاعر</span>';
  setLoading('sentimentBtn',true,orig);
  setTimeout(()=>{
    setLoading('sentimentBtn',false,orig);
    const pos=Math.round(Math.random()*45+30);
    const neu=Math.round(Math.random()*20+10);
    const neg=100-pos-neu;
    const sentiments=[
      {label:'إيجابي',pct:pos,color:'#00cc88',icon:'fa-smile'},
      {label:'محايد',pct:neu,color:'#ffaa00',icon:'fa-meh'},
      {label:'سلبي',pct:neg,color:'#ff4444',icon:'fa-frown'}
    ];
    const dominant=sentiments.reduce((a,b)=>a.pct>b.pct?a:b);
    const res=document.getElementById('sentimentResult');
    res.classList.add('show');
    res.innerHTML=`
      <div class="result-header" style="color:${dominant.color}"><i class="fas ${dominant.icon}"></i> المشاعر السائدة: ${dominant.label}</div>
      ${sentiments.map((s,i)=>`
        <div style="margin:9px 0">
          <div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:3px">
            <span style="font-weight:600">${s.label}</span>
            <span style="color:${s.color};font-weight:700">${s.pct}%</span>
          </div>
          <div class="score-bar"><div class="score-fill" style="width:0%;background:${s.color}" id="sentFill${i}"></div></div>
        </div>`).join('')}
      <div class="result-tags" style="margin-top:14px">
        <span class="result-tag">تحليل سياقي</span>
        <span class="result-tag">NLP متقدم</span>
        <span class="result-tag">97.3% دقة</span>
      </div>`;
    setTimeout(()=>{sentiments.forEach((s,i)=>{const f=document.getElementById('sentFill'+i);if(f)f.style.width=s.pct+'%';});},100);
  },1600);
}

function analyzeReputation(){
  const name=document.getElementById('repInput').value.trim();
  if(!name){showToast('الرجاء إدخال اسم المؤسسة أو الشخص ⚠️');return;}
  const orig='<i class="fas fa-chart-pie"></i><span>رصد السمعة</span>';
  setLoading('repBtn',true,orig);
  setTimeout(()=>{
    setLoading('repBtn',false,orig);
    const score=Math.round(Math.random()*30+60);
    const color=score>=75?'#00cc88':score>=55?'#ffaa00':'#ff4444';
    const res=document.getElementById('repResult');
    res.classList.add('show');
    res.innerHTML=`
      <div class="result-header" style="color:${color}"><i class="fas fa-star"></i> مؤشر سمعة "${name}": ${score}/100</div>
      <div class="score-bar" style="height:11px"><div class="score-fill" style="width:0%;background:${color}" id="repFill"></div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px">
        ${[['ذكر إيجابي',`${Math.round(score*.8)}%`,'#00cc88'],
           ['ذكر سلبي',`${Math.round((100-score)*.5)}%`,'#ff4444'],
           ['وسائل إعلام',`${Math.round(Math.random()*200+50)}`,'#00b4ff'],
           ['وسائل التواصل',`${Math.round(Math.random()*2000+500)}`,'#f5a623']]
          .map(([l,v,c])=>`
            <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:9px;padding:11px;text-align:center">
              <div style="font-size:1.15rem;font-weight:900;color:${c}">${v}</div>
              <div style="font-size:.73rem;color:var(--text-muted);margin-top:3px">${l}</div>
            </div>`).join('')}
      </div>`;
    setTimeout(()=>{const f=document.getElementById('repFill');if(f)f.style.width=score+'%';},100);
  },1900);
}

function summarizeContent(){
  const text=document.getElementById('summaryInput').value.trim();
  if(!text){showToast('الرجاء إدخال النص المراد تلخيصه ⚠️');return;}
  const orig='<i class="fas fa-magic"></i><span>تلخيص ذكي</span>';
  setLoading('summaryBtn',true,orig);
  setTimeout(()=>{
    setLoading('summaryBtn',false,orig);
    const words=text.split(/\s+/).length;
    const reducePct=Math.round(Math.random()*20+60);
    const summary=words>30
      ?text.split(/\s+/).slice(0,Math.floor(words*.35)).join(' ')+'...'
      :'النص قصير جداً. أدخل مقالاً أطول للحصول على ملخص أكثر دقة وشمولاً.';
    const res=document.getElementById('summaryResult');
    res.classList.add('show');
    res.innerHTML=`
      <div class="result-header" style="color:var(--accent)"><i class="fas fa-compress-alt"></i> ملخص ذكي — تقليص ${reducePct}%</div>
      <p style="line-height:1.8;color:var(--text-secondary);font-size:.88rem;margin:10px 0;padding:13px;background:var(--bg-primary);border-radius:8px;border-right:3px solid var(--accent)">${summary}</p>
      <div class="result-tags">
        <span class="result-tag"><i class="fas fa-font"></i> ${words} كلمة</span>
        <span class="result-tag"><i class="fas fa-compress"></i> تقليص ${reducePct}%</span>
        <span class="result-tag"><i class="fas fa-bolt"></i> فوري</span>
      </div>`;
  },2200);
}

/* ============ ANALYTICS SOURCES & SENTIMENT ============ */
function renderSources(){
  const sources=[
    {name:'رويترز',pct:85},{name:'بي بي سي عربي',pct:72},
    {name:'الجزيرة',pct:68},{name:'العربية',pct:61},{name:'فرانس 24',pct:54}
  ];
  const el=document.getElementById('sourcesList');
  if(!el) return;
  el.innerHTML=sources.map((s,i)=>`
    <div class="source-item">
      <div class="source-rank">${i+1}</div>
      <div class="source-bar-wrap">
        <div class="source-name">${s.name}</div>
        <div class="source-bar"><div class="source-fill" style="width:${s.pct}%"></div></div>
      </div>
      <div class="source-pct">${s.pct}%</div>
    </div>`).join('');
}
function renderSentimentMeter(){
  const data=[
    {label:'إيجابي',pct:42,color:'#00cc88'},
    {label:'محايد',pct:35,color:'#ffaa00'},
    {label:'سلبي',pct:23,color:'#ff4444'}
  ];
  const el=document.getElementById('sentimentMeter');
  if(!el) return;
  el.innerHTML=data.map(d=>`
    <div class="sentiment-row">
      <span class="sentiment-label" style="color:${d.color}">${d.label}</span>
      <div class="sentiment-bar-wrap">
        <div class="sentiment-bar"><div class="sentiment-fill" style="width:${d.pct}%;background:${d.color}"></div></div>
      </div>
      <span class="sentiment-pct" style="color:${d.color}">${d.pct}%</span>
    </div>`).join('');
}

/* ============ CHARTS ============ */
function drawCharts(){
  drawCategoryChart();
  drawFakeChart();
}
function getCardBg(){
  return currentTheme==='light'?'#ffffff':'#0d1f3a';
}
function drawCategoryChart(){
  const canvas=document.getElementById('categoryChart');
  if(!canvas) return;
  canvas.width=380;canvas.height=240;
  const ctx=canvas.getContext('2d');
  const data=[
    {label:'تقنية',value:35,color:'#00b4ff'},
    {label:'سياسة',value:25,color:'#ff6b35'},
    {label:'اقتصاد',value:20,color:'#00cc88'},
    {label:'رياضة',value:12,color:'#f5a623'},
    {label:'أخرى',value:8,color:'#9b59b6'}
  ];
  const W=canvas.width,H=canvas.height;
  const cx=W*.36,cy=H/2,R=Math.min(cx,cy)*.82,r=R*.52;
  let angle=-Math.PI/2;
  const total=data.reduce((s,d)=>s+d.value,0);
  data.forEach(d=>{
    const slice=(d.value/total)*Math.PI*2;
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,R,angle,angle+slice);ctx.closePath();
    ctx.fillStyle=d.color;ctx.fill();
    ctx.strokeStyle=getCardBg();ctx.lineWidth=3;ctx.stroke();
    angle+=slice;
  });
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fillStyle=getCardBg();ctx.fill();
  const lx=W*.72,ly=H*.1;
  data.forEach((d,i)=>{
    ctx.fillStyle=d.color;ctx.beginPath();ctx.arc(lx,ly+i*32+8,7,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#7ba3c8';ctx.font='13px Cairo,sans-serif';ctx.textAlign='right';
    ctx.fillText(`${d.label} (${d.value}%)`,lx-16,ly+i*32+13);
  });
}
function drawFakeChart(){
  const canvas=document.getElementById('fakeChart');
  if(!canvas) return;
  canvas.width=380;canvas.height=240;
  const ctx=canvas.getContext('2d');
  const days=['أح','إث','ث','أر','خ','ج','س'];
  const real=[65,72,68,85,78,92,88];
  const fake=[22,35,28,40,31,25,18];
  const W=canvas.width,H=canvas.height;
  const pad={top:22,right:18,bottom:38,left:38};
  const cW=W-pad.left-pad.right,cH=H-pad.top-pad.bottom;
  for(let i=0;i<=4;i++){
    const y=pad.top+cH-(i/4)*cH;
    ctx.strokeStyle='rgba(0,180,255,0.08)';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(pad.left+cW,y);ctx.stroke();
    ctx.fillStyle='#4a6a8a';ctx.font='10px Cairo';ctx.textAlign='right';
    ctx.fillText((i*25)+'%',pad.left-5,y+4);
  }
  function drawLine(data,color,doFill){
    const pts=data.map((v,i)=>({x:pad.left+(i/(data.length-1))*cW,y:pad.top+cH-(v/100)*cH}));
    if(doFill){
      ctx.beginPath();ctx.moveTo(pts[0].x,pad.top+cH);
      pts.forEach(p=>ctx.lineTo(p.x,p.y));
      ctx.lineTo(pts[pts.length-1].x,pad.top+cH);ctx.closePath();
      const g=ctx.createLinearGradient(0,pad.top,0,pad.top+cH);
      g.addColorStop(0,color+'44');g.addColorStop(1,color+'00');
      ctx.fillStyle=g;ctx.fill();
    }
    ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=2.5;ctx.lineJoin='round';
    pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.stroke();
    pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();});
  }
  drawLine(real,'#00b4ff',true);
  drawLine(fake,'#ff4444',false);
  ctx.fillStyle='#4a6a8a';ctx.font='11px Cairo';ctx.textAlign='center';
  days.forEach((d,i)=>ctx.fillText(d,pad.left+(i/(days.length-1))*cW,H-10));
  [['أخبار حقيقية','#00b4ff'],['أخبار مزيفة','#ff4444']].forEach(([lbl,col],i)=>{
    ctx.fillStyle=col;ctx.fillRect(pad.left+i*130,5,11,11);
    ctx.fillStyle='#7ba3c8';ctx.font='11px Cairo';ctx.textAlign='right';
    ctx.fillText(lbl,pad.left+i*130+85,15);
  });
}

/* ============ STUDIO ============ */
function openStudioTool(tool){
  const tools={
    editor:{title:'محرر المحتوى الذكي',icon:'fa-edit',desc:'محرر نصي متقدم مع تصحيح تلقائي للأخطاء الإملائية والنحوية، واقتراحات تحريرية ذكية مدعومة بالذكاء الاصطناعي. يدعم التحرير التعاوني في الوقت الفعلي.'},
    graphics:{title:'مُنشئ الغرافيك الإعلامي',icon:'fa-image',desc:'أداة متطورة لتصميم الإنفوغرافيك والصور الإخبارية تلقائياً. استورد بياناتك وسيُنشئ الذكاء الاصطناعي تصاميم احترافية في ثوانٍ.'},
    broadcast:{title:'منصة البث المباشر',icon:'fa-broadcast-tower',desc:'بث مباشر بجودة 4K مع تحكم كامل في الصوت والصورة. يدعم البث على منصات متعددة في آنٍ واحد مع تسجيل تلقائي.'},
    social:{title:'أداة النشر التلقائي',icon:'fa-share-alt',desc:'جدولة ونشر المحتوى على جميع منصات التواصل الاجتماعي بضغطة واحدة مع تحليل أفضل أوقات النشر وتتبع التفاعل.'},
    archive:{title:'الأرشيف السحابي الذكي',icon:'fa-archive',desc:'تخزين لامحدود وفهرسة ذكية لكل محتواك الإعلامي. بحث فوري بالنص أو الصورة أو الصوت بفضل الذكاء الاصطناعي.'},
    team:{title:'لوحة إدارة الفريق',icon:'fa-users-cog',desc:'نظام متكامل لإدارة المهام وتوزيع الأدوار وتتبع الإنجازات لفريق التحرير. يشمل تقارير الأداء والجدولة الذكية.'}
  };
  const t=tools[tool];if(!t) return;
  openModal(`
    <div style="text-align:center;margin-bottom:22px">
      <div style="width:68px;height:68px;background:rgba(0,180,255,.1);border:2px solid rgba(0,180,255,.3);border-radius:18px;display:inline-flex;align-items:center;justify-content:center;font-size:1.8rem;color:var(--accent);margin-bottom:14px">
        <i class="fas ${t.icon}"></i>
      </div>
      <h2 style="font-size:1.3rem;font-weight:900;margin-bottom:7px">${t.title}</h2>
      <p style="color:var(--text-secondary);line-height:1.7;font-size:.9rem">${t.desc}</p>
    </div>
    <div style="background:var(--bg-secondary);border-radius:11px;padding:18px;margin-bottom:18px;border:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:8px;color:var(--success);font-weight:700;margin-bottom:6px"><i class="fas fa-check-circle"></i> الأداة جاهزة للاستخدام</div>
      <p style="font-size:.83rem;color:var(--text-muted)">الاشتراك المطلوب: Pro أو Team</p>
    </div>
    <button class="btn-primary full-width" onclick="closeModal();showToast('تم تفعيل الأداة بنجاح ✓')">
      <i class="fas fa-rocket"></i> تشغيل الأداة
    </button>`);
}

/* ============ CONTACT ============ */
function submitContact(e){
  e.preventDefault();
  const btn=e.target.querySelector('button[type="submit"]');
  const orig=btn.innerHTML;
  btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> جارٍ الإرسال...';
  setTimeout(()=>{
    btn.disabled=false;btn.innerHTML=orig;
    e.target.reset();
    showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً ✓');
  },2000);
}

/* ============ NEWSLETTER ============ */
function subscribeNewsletter(){
  const input=document.getElementById('newsletterEmail');
  if(!input) return;
  const email=input.value.trim();
  if(!email||!email.includes('@')){showToast('الرجاء إدخال بريد إلكتروني صحيح ⚠️');return;}
  input.value='';
  showToast('تم الاشتراك في النشرة الإخبارية بنجاح ✓');
}

/* ============ MODAL ============ */
function openModal(content){
  const overlay=document.getElementById('modalOverlay');
  const mc=document.getElementById('modalContent');
  if(!overlay||!mc) return;
  mc.innerHTML=content;
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  const overlay=document.getElementById('modalOverlay');
  if(overlay) overlay.classList.remove('open');
  document.body.style.overflow='';
}

/* ============ TOAST ============ */
function showToast(msg,duration=3200){
  const toast=document.getElementById('toast');
  const toastMsg=document.getElementById('toastMsg');
  if(!toast||!toastMsg) return;
  toastMsg.textContent=msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),duration);
}

/* ============ KEYBOARD ============ */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeModal();closeVideoModal();
    const nl=document.getElementById('navLinks');
    if(nl&&nl.classList.contains('open')) toggleMenu();
  }
});

/* ============ SMOOTH LINKS ============ */
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]');
  if(!a) return;
  const target=document.querySelector(a.getAttribute('href'));
  if(target){
    e.preventDefault();
    window.scrollTo({top:target.offsetTop-102,behavior:'smooth'});
    const nl=document.getElementById('navLinks');
    if(nl&&nl.classList.contains('open')) toggleMenu();
  }
});

/* ============ LIVE TICKER UPDATE ============ */
setInterval(()=>{
  const tc=document.getElementById('tickerContent');
  if(!tc) return;
  const items=[
    '🔴 Digital Eye تكشف 37 خبراً مزيفاً في الساعة الأخيرة',
    '📡 مؤتمر إعلامي دولي ينطلق في باريس الأسبوع المقبل',
    '⚡ اختراق جديد في معالجة اللغة العربية بالذكاء الاصطناعي',
    '🌍 تقرير أممي يرصد انتشار المعلومات المضللة عالمياً',
  ];
  const span=document.createElement('span');
  span.textContent=items[Math.floor(Math.random()*items.length)];
  tc.appendChild(span);
  if(tc.children.length>22) tc.removeChild(tc.firstChild);
},14000);

console.log('%c🌐 Digital Eye v2.0 — All Systems Operational','color:#00b4ff;font-size:16px;font-weight:bold');
