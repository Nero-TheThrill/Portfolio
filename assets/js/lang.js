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
      'hero.title': 'Graphics Engineer & Game Developer',
      'about.title': 'About',
      'about.role': 'Graphics Engineer & Game Developer',
      'about.subtitle': 'It works on my machine!',
      'about.githubLabel': 'Github:',
      'about.regionLabel': 'Region:',
      'about.region': 'South Korea',
      'about.degreeLabel': 'Degree:',
      'about.degree': 'Bachelor of Science in Computer Science in Real-Time Interactive Simulation',
      'about.emailLabel': 'Email:',
      'about.desc': 'I am a graphics engineer and a game developer with a background in real-time rendering and GPU performance optimization. My experience spans from optimizing graphics for VR devices to implementing advanced rendering techniques such as Deferred Shading, Adaptive Resolution, and Poisson PCF filtering. My expertise lies in optimizing real-time graphics performance, debugging rendering issues, and developing custom shaders to achieve high-quality visual effects. I enjoy writing shaders to push rendering quality and efficiency, experimenting with new techniques to create immersive and visually striking experiences. I am always excited about pushing the boundaries of real-time graphics and exploring innovative rendering techniques.',
      'portfolio.title': 'Portfolio',
      'portfolio.filters.all': 'All',
      'portfolio.filters.graphics': 'Computer Graphics',
      'portfolio.filters.engine': 'Unity/Unreal',
      'portfolio.filters.others': 'Others',
      'portfolio.items.snake.title': 'Snake Engine',
      'portfolio.items.snake.desc': 'Custom 2D Game Engine',
      'portfolio.items.gfx1.title': 'PBR, IBL Simulator',
      'portfolio.items.gfx1.desc': 'Custom Engine, OpenGL, PBR, IBL',
      'portfolio.items.blog.title': 'Unity: URP optimization/bug fix',
      'portfolio.items.blog.desc': 'Universal Rendering Pipeline, Blog post, XR',
      'portfolio.items.raccoon.title': 'Unity: Dodge-Blue racoon',
      'portfolio.items.raccoon.desc': 'Mobile game, Hyper Casual, Unity',
      'portfolio.items.tetris.title': 'Multi-Board Tetris',
      'portfolio.items.tetris.desc': 'Game, C',
      'portfolio.items.gfx2.title': 'Lighting, Reflaction, OBJ Loader...etc',
      'portfolio.items.gfx2.desc': 'Custom Engine, OpenGL, OBJ Loader, Fundamentals',
      'portfolio.items.deferred.title': 'Guest Lecture - Deferred Shading',
      'portfolio.items.deferred.desc': 'Lecture, ppt, Deferred Shading',
      'portfolio.items.curve.title': 'Curve Simulator',
      'portfolio.items.curve.desc': 'Interpolating Polynomials, 3D, Custom Engine',
      'portfolio.items.home.title': 'Way Back Home',
      'portfolio.items.home.desc': 'Custom Engine, 2D topdown puzzle game',
      'portfolio.items.accounting.title': 'Unity: Learn Accounting or Die',
      'portfolio.items.accounting.desc': 'Mobile game, Unity, Commissioned App',
      'portfolio.items.pinata.title': 'UE4: Pinata Panic',
      'portfolio.items.pinata.desc': 'Unreal Engine 4, 3D, VFX',
      'resume.title': 'Resume',
      'resume.education': 'Education',
      'resume.edu.dit.title': 'Bachelor of Science in Computer Science in Real-Time Interactive Simulation',
      'resume.edu.dit.period': '2017.03 - 2023.04',
      'resume.edu.dit.school': 'Digipen Institute of Technology, Redmond, WA',
      'resume.extra': 'Additional Experience',
      'resume.military.title': 'Military service',
      'resume.military.period': '2019.08 - 2021.02',
      'resume.military.place': 'Paju, ko',
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
      'resume.byte.b5': 'Improved GPU usage by 10% and reduced GPU memory consumption by 10% to 50% across general Unity-built VR applications ',
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
      'resume.tiktok.b3': 'Implemented Temporal Anti-Aliasing, and integrated Deferred shading with Forward Shading',
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
    // 네비게이션
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.portfolio': '포트폴리오',
    'nav.resume': '이력서',
    'nav.skills': '기술',
    'nav.rec': '추천사',
    'nav.contact': '연락처',

    // 히어로
    'hero.noVideo': '이 브라우저는 video 태그를 지원하지 않습니다.',
    'hero.name': '최 진우',
    'hero.title': '그래픽스 엔지니어 & 게임 개발자',

    // 소개
    'about.title': '소개',
    'about.role': '그래픽스 엔지니어 & 게임 개발자',
    'about.subtitle': '제 컴퓨터에서는 잘 돌아가는데요?',
    'about.githubLabel': 'GitHub:',
    'about.regionLabel': '지역:',
    'about.region': '대한민국',
    'about.degreeLabel': '학위:',
    'about.degree': '컴퓨터공학 학사',
    'about.emailLabel': '이메일:',
    'about.desc': '저는 실시간 렌더링과 GPU 성능 최적화에 전문성을 갖춘 그래픽스 엔지니어이자 게임 개발자입니다. VR 디바이스 그래픽스 최적화부터 Deferred Shading, Adaptive Resolution, Poisson PCF와 같은 고급 렌더링 기법 구현까지 폭넓은 경험을 쌓았습니다. 특히 실시간 그래픽스 성능 향상, 렌더링 문제 해결, 고품질 비주얼 효과를 위한 셰이더 개발에 강점을 가지고 있습니다. 렌더링 품질과 효율을 끌어올리는 셰이더 작성, 새로운 기술 실험을 즐기며, 몰입감 있고 인상적인 비주얼 경험을 만드는 데 열정을 쏟고 있습니다.',

    // 포트폴리오
    'portfolio.title': '포트폴리오',
    'portfolio.filters.all': '전체',
    'portfolio.filters.graphics': '컴퓨터 그래픽스',
    'portfolio.filters.engine': 'Unity/Unreal',
    'portfolio.filters.others': '기타',

    'portfolio.items.snake.title': 'Snake Engine',
    'portfolio.items.snake.desc': '커스텀 2D 게임 엔진',

    'portfolio.items.gfx1.title': 'PBR, IBL 시뮬레이터',
    'portfolio.items.gfx1.desc': '커스텀 엔진, OpenGL, PBR, IBL',

    'portfolio.items.blog.title': '유니티: URP package 최적화 / 버그수정',
    'portfolio.items.blog.desc': 'Universal Rendering Pipeline, Blog Post, XR',

    'portfolio.items.raccoon.title': '유니티: Dodge-Blue Racoon',
    'portfolio.items.raccoon.desc': '모바일 게임, 하이퍼 캐쥬얼, Unity',

    'portfolio.items.tetris.title': '다중 보드 테트리스',
    'portfolio.items.tetris.desc': 'C 언어 기반 게임',

    'portfolio.items.gfx2.title': '빛 계산, 반사 구현, OBJ Loader...',
    'portfolio.items.gfx2.desc': '커스텀 엔진, OpenGL, OBJ File Loader, 렌더링 기초',

    'portfolio.items.deferred.title': '초청 강연: Deferred Shading',
    'portfolio.items.deferred.desc': '강의 자료 (PPT), Deferred Shading',

    'portfolio.items.curve.title': 'Curve Simulator',
    'portfolio.items.curve.desc': '보간 다항식, 3D, 커스텀 엔진',

    'portfolio.items.home.title': 'Way Back Home',
    'portfolio.items.home.desc': '커스텀 엔진, 2D 탑다운 퍼즐 게임',

    'portfolio.items.accounting.title': '유니티: Learn Accounting or Die',
    'portfolio.items.accounting.desc': '모바일 게임, Unity, 외주 프로젝트',

    'portfolio.items.pinata.title': '언리얼 엔진4: Pinata Panic',
    'portfolio.items.pinata.desc': 'Unreal Engine 4, 3D, VFX',

    // 이력서
    'resume.title': '이력서',
    'resume.education': '학력',
    'resume.edu.dit.title': '컴퓨터공학 학사',
    'resume.edu.dit.period': '2017.03 - 2023.04',
    'resume.edu.dit.school': 'Digipen Institute of Technology (Redmond, WA)',

    'resume.extra': '기타 경험',
    'resume.military.title': '군 복무',
    'resume.military.period': '2019.08 - 2021.02',
    'resume.military.place': '병장 만기전역 (파주, 대한민국)',

    'resume.prof': '경력',

    'resume.lecturer.title': '강사, 디지펜 아카데미 부산',
    'resume.lecturer.period': '2025.02 - ',
    'resume.lecturer.place': '디지펜 아카데미 (부산, 대한민국)',

    'resume.byte.title': 'XR 엔진 & 런타임 소프트웨어 엔지니어',
    'resume.byte.period': '2023.05 - 2024.10',
    'resume.byte.place': 'ByteDance(PICO) (Mountain View, CA)',
    'resume.byte.blogLabel': 'Blog Post:',
    'resume.byte.b1': 'VR 디바이스용 URP Bloom에서 GPU 사용량 15~30% 절감',
    'resume.byte.b2': 'Unity 내장 파이프라인 Multiview 깊이 왜곡 보정',
    'resume.byte.b3': 'Poisson PCF 구현으로 GPU 사용량 8~10% 개선',
    'resume.byte.b4': 'Adaptive/Super Resolution 및 Sharpening 기능 Unity XR SDK 통합',
    'resume.byte.b5': '일반적인 Unity VR 앱에서 GPU 사용량 10% 개선, 메모리 사용량 10%~50% 절감',
    'resume.byte.b6': 'Pico 제품/Unity 엔진 특화 성능 이슈 분석 및 Unity에 해결책 제안',
    'resume.byte.b7': 'Unity UI/Particles 성능 벤치마크 및 분석',
    'resume.byte.b8': 'visionOS용 Unity Polyspatial 데모/테스트 앱 제작',
    'resume.byte.b9': '플랫폼 간 파티클 데이터 추출·복제를 위한 Unity 파서 구현',
    'resume.byte.b10': 'URP-AR 해상도 호환성 이슈 해결 및 최대 해상도 확장',
    'resume.byte.b11': 'XR Interaction Toolkit을 통해 사용자 입력을 분석하기 위한 프로젝트 개발',

    'resume.tiktok.title': 'AR 이펙트 소프트웨어 엔지니어 인턴',
    'resume.tiktok.period': '2022.05 - 2022.08',
    'resume.tiktok.place': 'ByteDance(TikTok) (Mountain View, CA)',
    'resume.tiktok.b1': 'TikTok 스티커의 성능 한계를 개선하기 위해 6000줄 이상의 우버 셰이더(Uber Shader)에 지연 셰이딩(Deferred Shading)을 구현',
    'resume.tiktok.b2': '지연 셰이딩에 물리 기반 렌더링(PBR), 환경 매핑, UV, 노멀 텍스처, 프레넬(Fresnel) 효과를 통합',
    'resume.tiktok.b3': '셰이더에 TAA(Temporal Anti-Aliasing)를 구현하고, 지연 셰이딩을 포워드 셰이딩과 통합',


    'resume.ta.title': '학부 조교',
    'resume.ta.period': '2021.09 - 2021.12',
    'resume.ta.place': 'Digipen Institute of Technology (Redmond, WA)',
    'resume.ta.b1': '그래픽스 기술 강의 자료 제작 및 발표',
    'resume.ta.view': '발표 자료 보기',

    // 기술
    'skills.title': '기술',
    'skills.items.graphics': '컴퓨터 그래픽스',
    'skills.items.opengl': 'OpenGL',
    'skills.items.vulkan': 'Vulkan',
    'skills.items.renderdoc': 'RenderDoc',
    'skills.items.cpp': 'C/C++',
    'skills.items.engines': 'Unity/Unreal',
    'skills.items.xr': 'XR',

    // 추천사
    'recs.title': '추천사',
    'recs.subtitle': 'LinkedIn 추천사에서 발췌',
    'recs.items.seth.text': "PICO에서 Jinwoo와 함께 일할 수 있어 즐거웠습니다. Jinwoo는 우리의 Unity 렌더링 파이프라인을 최적화하는 데 큰 성과를 냈으며, 여러 중요한 Unity 관련 프로젝트에도 참여했습니다. 그는 긍정적인 태도로 함께 일하기 쉬운 동료입니다. 저는 Jinwoo를 강력히 추천하며, 다시 함께 일할 수 있기를 바랍니다.",
    'recs.items.seth.role': '소프트웨어 엔지니어 - ByteDance(PICO) 동료',

    'recs.items.john.text': "높은 적응력과 빠른 학습 능력을 가진 Jinwoo는 제너럴리스트로서의 기술적 역량뿐만 아니라 베타 소프트웨어에서 발생하는 수많은 버그와 크래시를 끈기 있게 해결할 수 있는 정신력도 갖추고 있습니다. 개인적으로는 그래픽스 전문가로 일할 때 가장 행복할 것이라 생각하지만, 팀 내 다른 공백을 메울 수 있는 충분한 역량 또한 가지고 있습니다.",
    'recs.items.john.role': '소프트웨어 엔지니어 - ByteDance(PICO) 동료',

    'recs.items.anda.text': "올해 여름 Jinwoo는 제 팀에서 인턴으로 일했습니다. 그는 우리 AR 엔진에서 PBR 라이팅, 그림자, 투명도, TAA 등 다양한 기능을 지원하는 지연 셰이딩 파이프라인을 완성했습니다. Jinwoo는 매우 성실하고 업무를 빠르게, 그리고 높은 품질로 마무리합니다. 또한 다른 인턴이나 팀의 새로운 구성원을 기꺼이 도와주며, 이 일에 대한 그의 큰 열정을 느낄 수 있었습니다.",
    'recs.items.anda.role': '소프트웨어 엔지니어 - TikTok',

    'recs.items.pushpak.text': "Jinwoo는 제가 맡았던 컴퓨터 그래픽스 수업에서 최고의 학생 중 한 명이었습니다. 이후에는 조교(TA)로 활동하기도 했습니다. 그는 매우 근면하고 실시간 렌더링에 큰 열정을 가진 학생으로, 과제 요구 사항을 뛰어넘어 자신의 그래픽스 엔진 디자인을 발전시키곤 했습니다. TA로서도 학생들을 존중하며, 많은 이들에게 귀중한 멘토 역할을 했습니다. 저는 Jinwoo를 귀하의 조직에 매우 가치 있는 팀원으로 강력히 추천합니다.",
    'recs.items.pushpak.role': '디지펜 공과대학 학과장',

    'recs.items.rudy.text': "저는 Jinwoo Choi를 뛰어난 전문가로서 강력히 추천합니다. DigiPen Institute of Technology에서 Jinwoo를 가르쳤을 때, 그의 성실함, 끈기, 그리고 도전적인 과제에서도 뛰어난 성과를 내는 능력에 깊은 인상을 받았습니다. TA로 활동하면서는 리더십과 컴퓨터 그래픽스 과목에 대한 전문성을 보여주었고, 동료들에게 큰 도움을 주었습니다. 소프트웨어 개발자이자 그래픽스 프로그래머로서 Jinwoo의 기술적 능력과 문제 해결 능력은 탁월합니다. 그는 앞으로도 계속 뛰어난 성과를 낼 인재이기에, 어떤 기회에서도 자신 있게 추천할 수 있습니다.",
    'recs.items.rudy.role': '디지펜 공과대학 교수',

    'recs.items.jina.text': "저는 Jinwoo와 세 번의 다른 프로젝트에서 함께 일했습니다. 그는 함께 일하기 즐겁고 훌륭한 팀원입니다! 제가 문제를 해결하지 못할 때 항상 기꺼이 도와주었고, 그의 설명은 이해하기 쉬웠습니다. 우리의 마지막 팀 프로젝트에서 Jinwoo가 담당했던 PBR 덕분에 프로젝트의 완성도가 크게 향상되었습니다.",
    'recs.items.jina.role': '소프트웨어 엔지니어 - 대학 프로젝트 동료',

    // 연락처
    'contact.title': '연락처',

    // 푸터
    'footer.copy1': 'Copyright',
    'footer.copy2': 'All Rights Reserved',
    'footer.designedBy': 'Designed by',
    'footer.distributedBy': 'Distributed by'
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
    const toggleBox = document.querySelector('.language-toggle');
     if (toggleBox) toggleBox.setAttribute('data-active', lang);
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
    const detailLinks = () => document.querySelectorAll(".details-link");
    const saved = localStorage.getItem('lang');
    const initial = saved || 'en';
    apply(initial);
  });
})();

(function () {
  const btnEn = document.getElementById("btn-en");
  const btnKo = document.getElementById("btn-ko");

  function toko(href) {
    if (/_ko\.html$/i.test(href)) return href;
    return href.replace(/\.html$/i, "_ko.html");
  }
  function toen(href) {
    return href.replace(/_ko\.html$/i, ".html");
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    if (!a.classList.contains("details-link")) return;

    const lang = document.querySelector(".language-toggle")?.getAttribute("data-active") || "en";
    let href = a.getAttribute("href") || "";
    if (lang === "ko" && !/_ko\.html$/i.test(href)) {
      e.preventDefault();
      window.location.href = toko(href);
    } else if (lang === "en" && /_ko\.html$/i.test(href)) {
      e.preventDefault();
      window.location.href = toen(href);
    }
  });

})();

(() => {
  const toggle = document.querySelector('.language-toggle');
  if (!toggle) return;

  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.header-toggle');
  const aboutImg = document.querySelector('#about img.img-fluid');
  const aboutSection = document.querySelector('#about');

  const getBottomY = (el) => {
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    return r.top + window.scrollY + r.height;
  };

  let thresholdY = 0;
  const recalc = () => {
    thresholdY = aboutImg ? getBottomY(aboutImg) :
                 aboutSection ? (aboutSection.getBoundingClientRect().top + window.scrollY + aboutSection.offsetHeight * 0.7) :
                 0;
    apply();
  };

  let hidden = false;
  const setHidden = (next) => {
    if (next === hidden) return;
    hidden = next;
    requestAnimationFrame(() => {
      toggle.classList.toggle('is-hidden', hidden);
    });
  };

  const apply = () => {
    const y = window.scrollY || window.pageYOffset;
    const belowImage = thresholdY ? (y > thresholdY+9999) : false;
    const menuOpen = header && header.classList.contains('header-show');
    setHidden(belowImage || menuOpen);
  };

  recalc();
  window.addEventListener('scroll', apply, { passive: true });
  window.addEventListener('resize', recalc);

  if (aboutImg) {
    if (aboutImg.complete) recalc();
    else aboutImg.addEventListener('load', recalc);
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      setTimeout(apply, 0);
    });
  }

  if (header) {
    const mo = new MutationObserver(apply);
    mo.observe(header, { attributes: true, attributeFilter: ['class'] });
  }
})();


(() => {
  const toggle = document.querySelector('.language-toggle');
  if (!toggle) return;

  const btnEn = document.querySelector('#btn-en');
  const btnKo = document.querySelector('#btn-ko');

  let active = toggle.dataset.active || 'en';

  const setLang = (lang) => {
    if (lang === active) return;
    active = lang;
    toggle.setAttribute('data-active', lang);

  };

  if (btnEn) btnEn.addEventListener('click', () => setLang('en'));
  if (btnKo) btnKo.addEventListener('click', () => setLang('ko'));
})();