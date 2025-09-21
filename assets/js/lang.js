(function () {
  // --- Dictionary ---
  const dict = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'nav.resume': 'Resume',
      'nav.skills': 'Skills',
      'nav.rec': 'Rec',
      'nav.contact': 'Contact',
      'hero.noVideo': 'Your browser does not support the video tag.',
      'hero.name': 'Jinwoo Choi',
      'hero.title': 'Graphics Engineer',
      'about.title': 'About',
      'about.role': 'Graphics Engineer & Game Developer',
      'about.subtitle': 'will always be happy to connect',
      'about.githubLabel': 'Github:',
      'about.regionLabel': 'Region:',
      'about.region': 'South Korea',
      'about.degreeLabel': 'Degree:',
      'about.degree': 'Bachelor of Science in Computer Science in Real-Time Interactive Simulation',
      'about.emailLabel': 'Email:',
      'about.desc': 'I am a graphics engineer with a background in real-time rendering and GPU performance optimization. My experience spans from optimizing graphics for VR devices to implementing advanced rendering techniques such as Deferred Shading, Adaptive Resolution, and Poisson PCF filtering. My expertise lies in optimizing real-time graphics performance, debugging rendering issues, and developing custom shaders to achieve high-quality visual effects. I enjoy writing shaders to push rendering quality and efficiency, experimenting with new techniques to create immersive and visually striking experiences. I am always excited about pushing the boundaries of real-time graphics and exploring innovative rendering techniques.',
      'portfolio.title': 'Portfolio',
      'portfolio.filters.all': 'All',
      'portfolio.filters.graphics': 'Graphics',
      'portfolio.filters.engine': 'Unity/Unreal',
      'portfolio.filters.others': 'Others',
      'portfolio.items.snake.title': 'Snake Engine',
      'portfolio.items.snake.desc': '2D Based Game Engine',
      'portfolio.items.gfx1.title': 'Graphics Engine 1',
      'portfolio.items.gfx1.desc': 'Custom Engine, OpenGL, PBR',
      'portfolio.items.blog.title': 'Blog post',
      'portfolio.items.blog.desc': 'Universal Rendering Pipeline, Optimization',
      'portfolio.items.raccoon.title': 'Dodge-Blue racoon',
      'portfolio.items.raccoon.desc': 'Mobile game, Unity',
      'portfolio.items.tetris.title': 'Tetris',
      'portfolio.items.tetris.desc': 'Game, C',
      'portfolio.items.gfx2.title': 'Graphics Engine 2',
      'portfolio.items.gfx2.desc': 'Custom Engine, OpenGL, Model Loader, Fundamentals',
      'portfolio.items.deferred.title': 'Deferred Shading',
      'portfolio.items.deferred.desc': 'Lecture, ppt',
      'portfolio.items.curve.title': 'Curve Simulator',
      'portfolio.items.curve.desc': 'Interpolating Polynomials, 3D, Custom Engine',
      'portfolio.items.home.title': 'Way Back Home',
      'portfolio.items.home.desc': 'Custom Engine, 2D topdown puzzle game',
      'portfolio.items.accounting.title': 'Learn Accounting or Die',
      'portfolio.items.accounting.desc': 'Mobile game, Unity, Commissioned App',
      'portfolio.items.pinata.title': 'Pinata Panic',
      'portfolio.items.pinata.desc': 'Unreal4, 3D, VFX',
      'resume.title': 'Resume',
      'resume.education': 'Education',
      'resume.edu.dit.title': 'Bachelor of Science in Computer Science in Real-Time Interactive Simulation',
      'resume.edu.dit.period': '2021.08 - 2023.04',
      'resume.edu.dit.school': 'Digipen Institute of Technology, Redmond, WA',
      'resume.edu.kmu.title': 'Bachelor of Science in Computer Science in Real-Time Interactive Simulation',
      'resume.edu.kmu.period': '2017.03 - 2019.06',
      'resume.edu.kmu.school': 'Keimyung University, Daegu, KR',
      'resume.extra': 'Additional Experience',
      'resume.military.title': 'Military service',
      'resume.military.period': '2019.08 - 2021.02',
      'resume.military.place': 'Paju, KR',
      'resume.prof': 'Professional Experience',
      'resume.lecturer.title': 'Lecturer in Digipen Academy in Busan',
      'resume.lecturer.period': '2025.02 - ',
      'resume.lecturer.place': 'Digipen Academy, Busan, South Korea',
      'resume.byte.title': 'XR Engine and Runtime Software Engineer',
      'resume.byte.period': '2023.05 - 2024.10',
      'resume.byte.place': 'ByteDance, Mountain View, CA',
      'resume.byte.blogLabel': 'Blog Post:',
      'resume.byte.b1': "Optimized 15-30% of GPU usage on Unity's Universal Render Pipeline (URP) bloom for the VR device",
      'resume.byte.b2': "Corrected depth perception distortion in Unity's built-in pipeline Multiview feature",
      'resume.byte.b3': 'Optimized 8-10% of GPU usage on the VR device by implementing Poisson Percentage Closer Filtering(PCF)',
      'resume.byte.b4': 'Collaborated with Runtime team to integrate Adaptive Resolution, Super Resolution, and Sharpening features into Unity XR SDK',
      'resume.byte.b5': 'Improved GPU usage by 10% and reduced GPU memory consumption from ½ to ⅒ across general Unity-built VR applications ',
      'resume.byte.b6': 'Investigated performance issues specific to Pico products related to the Unity engine and submitted solutions to Unity ',
      'resume.byte.b7': 'Benchmark and analyze Unity UI and Particles for the internal project ',
      'resume.byte.b8': 'Built multiple demo and test app with Unity Polyspatial for visionOS ',
      'resume.byte.b9': 'Designed and Implemented a Unity particle parser to extract and replicate particle system data across different platforms  ',
      'resume.byte.b10': 'Debugged and Resolved compatibility issues between URP and Adaptive Resolution, extending the maximum achievable resolution ',
      'resume.byte.b11': 'Developed and implemented a comprehensive Unity project for analyzing user input across multiple devices using the XR Interaction Toolkit ',
      'resume.tiktok.title': 'AR Effect Software Engineer Intern',
      'resume.tiktok.period': '2022.05 - 2022.08',
      'resume.tiktok.place': 'Tiktok, Mountain View, CA',
      'resume.tiktok.b1': 'Implemented Deferred Shading for the Uber Shader(6000+ lines) to improve the performance limitations of TikTok stickers',
      'resume.tiktok.b2': 'Integrating Physics Based Rendering, Environment Mapping, UV, Normal Texture, Fresnel to the Deferred Shading',
      'resume.tiktok.b3': 'Implemented Transparent, Temporal Anti-Aliasing to the shader, and integrated Deferred shading with Forward Shading',
      'resume.ta.title': 'Undergraduate Teaching Assistant',
      'resume.ta.period': '2021.09 - 2021.12',
      'resume.ta.place': 'Digipen Institute of Technology, Redmond, WA',
      'resume.ta.b1': 'Delivered a lecture on graphics technology, creating and presenting a detailed PowerPoint presentation to support learning and understanding of key concepts',
      'resume.ta.view': 'View presentation file',
      'skills.title': 'Skills',
      'skills.items.graphics': 'Computer graphics',
      'skills.items.opengl': 'OpenGL',
      'skills.items.vulkan': 'Vulkan',
      'skills.items.renderdoc': 'RenderDoc',
      'skills.items.cpp': 'C/C++',
      'skills.items.engines': 'Unity/Unreal',
      'skills.items.xr': 'XR',
      'recs.title': 'Recommendations',
      'recs.subtitle': 'These recommendations are excerpted from LinkedIn Recommendations',
      'recs.items.seth.text': "It's been a pleasure working with Jinwoo at PICO. Jinwoo did a great job of optimizing our Unity rendering pipeline, and has been involved in a number of important Unity-related efforts. He is very easy to work with, bringing a positive attitude to the workplace. I'd definitely recommend Jinwoo and hope to work with him again.",
      'recs.items.seth.role': 'Software Engineer - Worked on the same team in Bytedance(PICO)',
      'recs.items.john.text': "Highly adaptable, fast learner, Jinwoo has the technical chops to be a generalist, as well as the mental fortitude to grind through all the bugs and crashes that come with beta software. Though I imagine he’ll be happiest working as a graphics specialist, he’s fully capable of filling other gaps in your team’s strengths.",
      'recs.items.john.role': 'Software Engineer - Worked on the same team in Bytedance(PICO)',
      'recs.items.anda.text': 'Jinwoo was intern in my team this Summer. He finished a deferred shading pipeline in our AR engine, which supports PBR lighting, shadow, transparency, TAA and many other things. Jinwoo is super hardworking and can finish tasks very quickly with high quality. And Jinwoo is always happy to help other interns and new members in the team. I can feel his great passion for this job.',
      'recs.items.anda.role': 'Software Engineer in Tiktok',
      'recs.items.pushpak.text': 'Jinwoo was one of the top students in my computer graphics courses. He also served as a Teaching Assistant (TA) later. He is a very diligent student who is extremely passionate about real-time rendering. He consistently went above and beyond what was expected from the coursework to provide his own take on the design on his graphics engine. As a TA, he was always respectful towards the students, and served as a valuable mentor to many. I would highly recommend him as a valuable team member to your organization.',
      'recs.items.pushpak.role': 'Program Director in Digipen Institute of Technology',
      'recs.items.rudy.text': "I highly recommend Jinwoo Choi as an exceptional professional. As his former instructor at DigiPen Institute of Technology, I was impressed by his earnestness, perseverance, and ability to excel in challenging assignments. Jinwoo's role as a TA showcased his leadership skills and expertise in computer graphics courses, where he provided invaluable assistance to his peers. As a Software Developer and Graphics Programmer, Jinwoo's technical proficiency and problem-solving abilities are exceptional. I wholeheartedly recommend him for any opportunity as he continues to excel in his field.",
      'recs.items.rudy.role': 'Lecturer in Digipen-KMU program',
      'recs.items.jina.text': 'Jinwoo and I worked together three times for different projects. He is pleasure to work with and a good teammate! He was always ready to help when I cannot solve the problem. His explanation was easy to understand. What he did in our last team project was PBR, which made our project looks awesome.',
      'recs.items.jina.role': 'Software Engineer - Worked on the same project in college',
      'contact.title': 'Contact',
      'footer.copy1': 'Copyright',
      'footer.copy2': 'All Rights Reserved',
      'footer.designedBy': 'Designed by',
      'footer.distributedBy': 'Distribuited by'
    },
    ko: {
      'nav.home': '홈',
      'nav.about': '소개',
      'nav.portfolio': '포트폴리오',
      'nav.resume': '이력서',
      'nav.skills': '기술',
      'nav.rec': '추천',
      'nav.contact': '연락처',
      'hero.noVideo': '이 브라우저는 video 태그를 지원하지 않습니다.',
      'hero.name': '최진우',
      'hero.title': '그래픽스 엔지니어',
      'about.title': '소개',
      'about.role': '그래픽스 엔지니어 & 게임 개발자',
      'about.subtitle': '언제든지 연결 환영합니다',
      'about.githubLabel': '깃허브:',
      'about.regionLabel': '지역:',
      'about.region': '대한민국',
      'about.degreeLabel': '학위:',
      'about.degree': '실시간 상호작용 시뮬레이션 전공 컴퓨터공학 학사',
      'about.emailLabel': '이메일:',
      'about.desc': '저는 실시간 렌더링과 GPU 성능 최적화 배경을 가진 그래픽스 엔지니어입니다. VR 디바이스용 그래픽스 최적화부터 Deferred Shading, Adaptive Resolution, Poisson PCF 등 고급 렌더링 기법 구현에 이르기까지 경험을 쌓았습니다. 실시간 그래픽스 성능 최적화, 렌더링 이슈 디버깅, 고품질 비주얼 효과를 위한 커스텀 셰이더 개발에 강점을 가지고 있습니다. 렌더링 품질과 효율을 끌어올리는 셰이더 작성과 새로운 기법 실험을 즐기며, 몰입감 있고 인상적인 경험을 만드는 데 열정을 갖고 있습니다.',
      'portfolio.title': '포트폴리오',
      'portfolio.filters.all': '전체',
      'portfolio.filters.graphics': '그래픽스',
      'portfolio.filters.engine': '유니티/언리얼',
      'portfolio.filters.others': '기타',
      'portfolio.items.snake.title': '스네이크 엔진',
      'portfolio.items.snake.desc': '2D 기반 게임 엔진',
      'portfolio.items.gfx1.title': '그래픽스 엔진 1',
      'portfolio.items.gfx1.desc': '커스텀 엔진, OpenGL, PBR',
      'portfolio.items.blog.title': '블로그 글',
      'portfolio.items.blog.desc': 'URP, 최적화',
      'portfolio.items.raccoon.title': 'Dodge-Blue 라쿤',
      'portfolio.items.raccoon.desc': '모바일 게임, Unity',
      'portfolio.items.tetris.title': '테트리스',
      'portfolio.items.tetris.desc': '게임, C',
      'portfolio.items.gfx2.title': '그래픽스 엔진 2',
      'portfolio.items.gfx2.desc': '커스텀 엔진, OpenGL, 모델 로더, 기초',
      'portfolio.items.deferred.title': '디퍼드 셰이딩',
      'portfolio.items.deferred.desc': '강의, PPT',
      'portfolio.items.curve.title': '커브 시뮬레이터',
      'portfolio.items.curve.desc': '보간 다항식, 3D, 커스텀 엔진',
      'portfolio.items.home.title': 'Way Back Home',
      'portfolio.items.home.desc': '커스텀 엔진, 2D 탑다운 퍼즐 게임',
      'portfolio.items.accounting.title': '회계를 배워라 아니면 죽어라',
      'portfolio.items.accounting.desc': '모바일 게임, Unity, 의뢰 앱',
      'portfolio.items.pinata.title': '피냐타 패닉',
      'portfolio.items.pinata.desc': 'Unreal4, 3D, VFX',
      'resume.title': '이력서',
      'resume.education': '학력',
      'resume.edu.dit.title': '실시간 상호작용 시뮬레이션 전공 컴퓨터공학 학사',
      'resume.edu.dit.period': '2021.08 - 2023.04',
      'resume.edu.dit.school': 'Digipen Institute of Technology, 레드먼드, WA',
      'resume.edu.kmu.title': '실시간 상호작용 시뮬레이션 전공 컴퓨터공학 학사',
      'resume.edu.kmu.period': '2017.03 - 2019.06',
      'resume.edu.kmu.school': '계명대학교, 대구, KR',
      'resume.extra': '기타 경력',
      'resume.military.title': '군 복무',
      'resume.military.period': '2019.08 - 2021.02',
      'resume.military.place': '파주, KR',
      'resume.prof': '실무 경력',
      'resume.lecturer.title': '디지펜 아카데미 부산 강의',
      'resume.lecturer.period': '2025.02 - ',
      'resume.lecturer.place': '디지펜 아카데미, 부산, 대한민국',
      'resume.byte.title': 'XR 엔진 & 런타임 소프트웨어 엔지니어',
      'resume.byte.period': '2023.05 - 2024.10',
      'resume.byte.place': '바이트댄스, 마운틴뷰, CA',
      'resume.byte.blogLabel': '블로그 글:',
      'resume.byte.b1': 'VR 디바이스용 URP Bloom에서 GPU 사용량 15~30% 최적화',
      'resume.byte.b2': 'Unity 내장 파이프라인 Multiview의 깊이 왜곡 보정',
      'resume.byte.b3': 'Poisson PCF 구현으로 VR 디바이스 GPU 사용량 8~10% 절감',
      'resume.byte.b4': 'Adaptive Resolution, Super Resolution, Sharpening을 Unity XR SDK에 통합',
      'resume.byte.b5': '일반 Unity VR 앱에서 GPU 사용량 10% 개선, GPU 메모리 1/2 → 1/10 절감',
      'resume.byte.b6': 'Pico 제품/Unity 엔진 특이 성능 이슈 분석 및 Unity에 해결책 제안',
      'resume.byte.b7': '내부 프로젝트용 Unity UI/Particles 벤치마크 및 분석',
      'resume.byte.b8': 'visionOS용 Unity Polyspatial 데모/테스트 앱 다수 제작',
      'resume.byte.b9': '플랫폼 간 파티클 시스템 데이터 추출/복제를 위한 Unity 파티클 파서 설계/구현',
      'resume.byte.b10': 'URP와 Adaptive Resolution 호환성 이슈 디버깅 및 최대 해상도 확장',
      'resume.byte.b11': 'XR Interaction Toolkit 기반 멀티 디바이스 입력 분석 Unity 프로젝트 개발',
      'resume.tiktok.title': 'AR 이펙트 소프트웨어 엔지니어 인턴',
      'resume.tiktok.period': '2022.05 - 2022.08',
      'resume.tiktok.place': '틱톡, 마운틴뷰, CA',
      'resume.tiktok.b1': 'Uber Shader(6000+ 라인)에 디퍼드 셰이딩 구현, 스티커 성능 한계 개선',
      'resume.tiktok.b2': 'PBR, 환경 매핑, UV/노멀 텍스처, 프레넬을 디퍼드 파이프라인에 통합',
      'resume.tiktok.b3': '투명/시간적 안티앨리어싱 구현 및 디퍼드/포워드 통합',
      'resume.ta.title': '학부 조교',
      'resume.ta.period': '2021.09 - 2021.12',
      'resume.ta.place': 'Digipen Institute of Technology, 레드먼드, WA',
      'resume.ta.b1': '그래픽스 기술 주제로 강의 자료 제작 및 발표',
      'resume.ta.view': '발표 자료 보기',
      'skills.title': '기술',
      'skills.items.graphics': '컴퓨터 그래픽스',
      'skills.items.opengl': 'OpenGL',
      'skills.items.vulkan': 'Vulkan',
      'skills.items.renderdoc': 'RenderDoc',
      'skills.items.cpp': 'C/C++',
      'skills.items.engines': 'Unity/Unreal',
      'skills.items.xr': 'XR',
      'recs.title': '추천사',
      'recs.subtitle': '아래 추천사는 LinkedIn 추천에서 발췌했습니다',
      'recs.items.seth.text': 'PICO에서 진우와 함께 일해서 즐거웠습니다. 진우는 우리의 Unity 렌더링 파이프라인 최적화를 훌륭히 해냈고, 다양한 Unity 관련 핵심 과제에 참여했습니다. 함께 일하기 매우 편했고, 항상 긍정적인 태도를 보였습니다. 강력히 추천합니다.',
      'recs.items.seth.role': '소프트웨어 엔지니어 - Bytedance(PICO) 동료',
      'recs.items.john.text': '적응력이 뛰어나고 학습이 빠르며, 버그와 크래시가 많은 베타 소프트웨어 환경에서도 꾸준히 해결해내는 정신력을 갖췄습니다. 그래픽스 스페셜리스트로서 가장 행복하겠지만, 팀의 다른 빈틈도 충분히 메울 수 있습니다.',
      'recs.items.john.role': '소프트웨어 엔지니어 - Bytedance(PICO) 동료',
      'recs.items.anda.text': '여름 인턴으로 우리 팀에 있었습니다. PBR 조명/그림자/투명/TAA 등 다양한 요소를 지원하는 디퍼드 셰이딩 파이프라인을 완료했습니다. 매우 성실하고 빠르게 높은 품질로 작업을 마칩니다. 팀원들을 기꺼이 돕는 태도가 인상적입니다.',
      'recs.items.anda.role': '소프트웨어 엔지니어 (틱톡)',
      'recs.items.pushpak.text': '내 수업에서 가장 뛰어난 학생 중 한 명이었고 이후 TA로도 활약했습니다. 실시간 렌더링에 대한 열정이 크며, 과제 기대치를 넘는 엔진 설계를 선보였습니다. 학생들에게 존중을 보이며 멘토 역할을 잘 수행했습니다. 강력 추천합니다.',
      'recs.items.pushpak.role': '디지펜 프로그램 디렉터',
      'recs.items.rudy.text': '진우는 매우 뛰어난 전문가입니다. 성실함과 끈기, 어려운 과제를 해결하는 능력이 탁월합니다. 그래픽스 과목 TA로서 리더십과 전문성을 보여줬습니다. 개발자로서의 기술력과 문제 해결 능력이 탁월합니다. 강력 추천합니다.',
      'recs.items.rudy.role': '디지펜-KMU 프로그램 강사',
      'recs.items.jina.text': '세 번의 다른 프로젝트에서 함께 일했습니다. 함께 일하기 즐거운 좋은 팀원입니다. 문제가 생기면 늘 도와줬고 설명이 이해하기 쉬웠습니다. 마지막 팀프로젝트에서 구현한 PBR 덕분에 결과물이 훌륭했습니다.',
      'recs.items.jina.role': '소프트웨어 엔지니어 - 대학 프로젝트 동료',
      'contact.title': '연락처',
      'footer.copy1': 'Copyright',
      'footer.copy2': 'All Rights Reserved',
      'footer.designedBy': 'Designed by',
      'footer.distributedBy': 'Distribuited by'
    }
  };

  function apply(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = (dict[lang] && dict[lang][key]) || (dict.en && dict.en[key]) || el.textContent;
      if (typeof text === 'string') el.textContent = text;
    });
    // Toggle active button if present
    const btnEn = document.getElementById('btn-en');
    const btnKo = document.getElementById('btn-ko');
    if (btnEn && btnKo) {
      btnEn.classList.toggle('active', lang === 'en');
      btnKo.classList.toggle('active', lang === 'ko');
    }
  }

  // Expose globally
  window.setLanguage = function(lang) {
    localStorage.setItem('lang', lang);
    apply(lang);
  };

  // Bind buttons and init
  window.addEventListener('DOMContentLoaded', () => {
    const btnEn = document.getElementById('btn-en');
    const btnKo = document.getElementById('btn-ko');
    if (btnEn) btnEn.addEventListener('click', () => window.setLanguage('en'));
    if (btnKo) btnKo.addEventListener('click', () => window.setLanguage('ko'));
    const initial = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('ko') ? 'ko' : 'en');
    apply(initial);
  });
})();

(function () {
  const btnEn = document.getElementById("btn-en");
  const btnKo = document.getElementById("btn-ko");
  const detailLinks = () => document.querySelectorAll(".details-link");

  // 언어 상태: localStorage 에 저장/복원
  const getLang = () => localStorage.getItem("site_lang") || "EN";
  const setLang = (lang) => localStorage.setItem("site_lang", lang);

  function reflectButtons(lang) {
    if (!btnEn || !btnKo) return;
    btnEn.classList.toggle("active", lang === "EN");
    btnKo.classList.toggle("active", lang === "KR");
  }

  function toKR(href) {
    // detailsX.html -> detailsX_KR.html
    // 이미 _KR면 그대로
    if (/_KR\.html$/i.test(href)) return href;
    return href.replace(/\.html$/i, "_KR.html");
  }
  function toEN(href) {
    // detailsX_KR.html -> detailsX.html
    return href.replace(/_KR\.html$/i, ".html");
  }

  function updateLinksFor(lang) {
    detailLinks().forEach((a) => {
      const base = a.getAttribute("href") || "";
      a.setAttribute("href", lang === "KR" ? toKR(base.replace(/_KR\.html$/i, ".html")) : toEN(base));
    });
  }

  // 초기 로드: 저장된 언어 적용 + 링크 교체
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();          // 기본 EN, 사용자가 이전에 KR로 썼다면 KR
    reflectButtons(lang);
    updateLinksFor(lang);

    // 만약 HTML을 로드할 때 기본을 KR로 강제하고 싶다면:
    // const lang = "KR"; setLang(lang); reflectButtons(lang); updateLinksFor(lang);
  });

  // 버튼 핸들러
  if (btnEn) {
    btnEn.addEventListener("click", () => {
      setLang("EN");
      reflectButtons("EN");
      updateLinksFor("EN");
    });
  }
  if (btnKo) {
    btnKo.addEventListener("click", () => {
      setLang("KR");
      reflectButtons("KR");
      updateLinksFor("KR");
    });
  }

  // 혹시 클래스 추가를 깜빡한 카드가 있어도 안전하게: 클릭 순간 라우팅 보정
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    if (!a.classList.contains("details-link")) return;

    const lang = getLang();
    let href = a.getAttribute("href") || "";
    if (lang === "KR" && !/_KR\.html$/i.test(href)) {
      e.preventDefault();
      window.location.href = toKR(href);
    } else if (lang === "EN" && /_KR\.html$/i.test(href)) {
      e.preventDefault();
      window.location.href = toEN(href);
    }
  });
})();