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


dict.en['details.snake.title'] = 'Snake Engine';
dict.en['details.snake.subtitle'] = 'Game Engine';

dict.en['details.snake.p1'] = "SNAKE_ENGINE is a lightweight C++ game engine that I personally designed and implemented. It integrates 2D rendering, input, sound, text, collision, and state management into a single framework based on OpenGL 4.6. With a modular (dependency/tag–based) structure, projects can selectively use only the systems they need. It also supports advanced optimizations such as runtime glyph baking, batching & instancing, and frustum culling/spatial hashing.";
dict.en['details.snake.p2'] = "While working at DigiPen Academy, I realized that the C++ framework provided to students was only distributed as a .lib file. This meant students could not optimize performance or extend functionality since the source code was inaccessible. To address this limitation, I decided to build my own engine from the ground up — one where the entire source is open, debuggable, and modifiable at any time.";
dict.en['details.snake.p3'] = "The engine was built with a focus on learnability and debugging accessibility, designed around exposed headers and a resource registry system. Through sample projects, users can immediately test rendering pipelines, collision systems, and text rendering. It can also be compiled as a static library (.lib) and linked to external projects.";

dict.en['details.snake.featuresTitle'] = 'Key Features';
dict.en['details.snake.feature1']  = 'State Transition Framework: Manageable at Load/Init/Update/Draw/Free/Unload level';
dict.en['details.snake.feature2']  = 'Rendering Optimization: Batching identical Mesh/Material pairs, instancing';
dict.en['details.snake.feature3']  = 'Camera & Frustum Culling: Camera2D–based off–screen object culling';
dict.en['details.snake.feature4']  = 'Text Engine: FreeType runtime glyph baking (alignment & multi-line support)';
dict.en['details.snake.feature5']  = 'Collision System: AABB/Circle colliders + Spatial Hash Grid + group/mask filtering';
dict.en['details.snake.feature6']  = 'Sound: miniaudio–based playback/pause with tag–level controls';
dict.en['details.snake.feature7']  = 'Asynchronous Loading: Background resource loading with progress tracking';
dict.en['details.snake.feature8']  = 'Debug Draw & Logger: Collision visualization and unified log levels';

dict.en['details.snake.archTitle'] = 'Architecture Overview';
dict.en['details.snake.arch1'] = 'WindowManager — GLFW/GLAD initialization, events, swap/clear';
dict.en['details.snake.arch2'] = 'InputManager — Key/mouse input, scroll, world coordinate conversion';
dict.en['details.snake.arch3'] = 'SoundManager — Sound loading, playback, and instance management';
dict.en['details.snake.arch4'] = 'RenderManager — Resource registry, batching/instancing, debug drawing';
dict.en['details.snake.arch5'] = 'StateManager — GameState switching, updating, and drawing';
dict.en['details.snake.arch6'] = 'ObjectManager — Object lifecycle, collision, and render submission';

dict.en['details.snake.p4'] = 'The engine is still under continuous development, and has been validated through sample projects that demonstrate rendering, collision, text, and sound features within actual game scenes.';

dict.en['details.snake.badges.releaseAlt'] = 'Latest release';
dict.en['details.snake.badges.changelogAlt'] = 'Changelog';

dict.en['details.snake.info.title']    = 'Project information';
dict.en['details.snake.info.category'] = 'Category';
dict.en['details.snake.info.categoryV']= '2D Game Engine';
dict.en['details.snake.info.team']     = 'Team size';
dict.en['details.snake.info.teamV']    = '1 Dev';
dict.en['details.snake.info.date']     = 'Project date';
dict.en['details.snake.info.dateV']    = 'Jul 2025 -';
dict.en['details.snake.info.url']      = 'Project URL';
dict.en['details.snake.info.download'] = 'Download Project';

dict.ko['details.snake.title'] = 'Snake Engine';
dict.ko['details.snake.subtitle'] = '게임 엔진';

dict.ko['details.snake.p1'] = "SNAKE_ENGINE은 제가 직접 설계·구현한 경량 C++ 게임 엔진으로, OpenGL 4.6 기반 2D 렌더링, 입력, 사운드, 텍스트, 충돌, 상태 관리를 하나의 프레임워크로 통합했습니다. 모듈형(의존성/태그 기반) 구조라 프로젝트에 필요한 시스템만 선택적으로 가져올 수 있으며, 런타임 글리프 베이킹, 배칭 및 인스턴싱, 프러스텀 컬링/공간 해싱 등 최적화 기법을 지원합니다.";
dict.ko['details.snake.p2'] = "현재 근무 중인 DigiPen Academy에서는 학생들에게 C++ 프레임워크를 .lib 파일 형태로만 제공하고 있습니다. 이 때문에 성능 최적화가 불가능하고, 기능 추가도 어려우며, 디버깅 역시 제한적이라는 문제를 직접 경험했습니다. 이러한 한계를 개선하기 위해, 언제든 내부 소스를 들여다보고 자유롭게 수정할 수 있는 엔진을 처음부터 직접 설계하고 개발하게 되었습니다.";
dict.ko['details.snake.p3'] = "엔진은 학습·디버깅 용이성을 중시해 공개 헤더/리소스 레지스트리 구조로 설계했습니다. 샘플 프로젝트를 통해 렌더링 파이프라인과 충돌 시스템, 텍스트 렌더링을 즉시 확인할 수 있고, 정적 라이브러리(.lib)로 빌드해 외부 프로젝트에 연결하는 것도 가능합니다.";

dict.ko['details.snake.featuresTitle'] = '주요 기능';
dict.ko['details.snake.feature1']  = '상태 전환 프레임워크: Load/Init/Update/Draw/Free/Unload 단위 관리';
dict.ko['details.snake.feature2']  = '렌더링 최적화: 동일 Mesh/Material 배칭, 인스턴싱';
dict.ko['details.snake.feature3']  = '카메라 & 프러스텀 컬링: Camera2D 기반 화면 외부 오브젝트 컬링';
dict.ko['details.snake.feature4']  = '텍스트 엔진: FreeType 런타임 글리프 베이킹(정렬/멀티라인 지원)';
dict.ko['details.snake.feature5']  = '충돌 시스템: AABB/원형 콜라이더 + Spatial Hash Grid + 그룹/마스크';
dict.ko['details.snake.feature6']  = '사운드: miniaudio 기반 재생/일시정지/태그 단위 제어';
dict.ko['details.snake.feature7']  = '비동기 로딩: 백그라운드 리소스 로딩과 진행률 추적';
dict.ko['details.snake.feature8']  = '디버그 드로우 & 로거: 충돌 시각화, 통합 로그 레벨';

dict.ko['details.snake.archTitle'] = '아키텍처 개요';
dict.ko['details.snake.arch1'] = 'WindowManager — GLFW/GLAD 초기화, 이벤트, 스왑/클리어';
dict.ko['details.snake.arch2'] = 'InputManager — 키/마우스, 스크롤, 월드 좌표 변환';
dict.ko['details.snake.arch3'] = 'SoundManager — 사운드 로딩/플레이/인스턴스 관리';
dict.ko['details.snake.arch4'] = 'RenderManager — 리소스 레지스트리, 배칭/인스턴싱, 디버그 드로우';
dict.ko['details.snake.arch5'] = 'StateManager — GameState 전환/업데이트/드로우';
dict.ko['details.snake.arch6'] = 'ObjectManager — 오브젝트 수명/충돌/렌더 제출';

dict.ko['details.snake.p4'] = '현재도 지속적으로 업데이트 중이며, 샘플 프로젝트를 통해 실제 게임 씬에서의 렌더링·충돌·텍스트·사운드 동작을 검증했습니다.';

dict.ko['details.snake.badges.releaseAlt'] = '최신 릴리스';
dict.ko['details.snake.badges.changelogAlt'] = '변경 이력';

dict.ko['details.snake.info.title']    = '프로젝트 정보';
dict.ko['details.snake.info.category'] = '카테고리';
dict.ko['details.snake.info.categoryV']= '2D 게임 엔진';
dict.ko['details.snake.info.team']     = '팀 규모';
dict.ko['details.snake.info.teamV']    = '개발자 1명';
dict.ko['details.snake.info.date']     = '프로젝트 기간';
dict.ko['details.snake.info.dateV']    = '2025년 7월 ~';
dict.ko['details.snake.info.url']      = '프로젝트 URL';
dict.ko['details.snake.info.download'] = '프로젝트 다운로드';

  const toggle = document.querySelector('.language-toggle');
  if (!toggle) return;

  const btnEn = document.querySelector('#btn-en');
  const btnKo = document.querySelector('#btn-ko');

  const setLang = (lang) => {
    window.setLanguage(lang);
  };

  if (btnEn) btnEn.addEventListener('click', () => setLang('en'));
  if (btnKo) btnKo.addEventListener('click', () => setLang('ko'));

  function toko(href) {
    if (/_ko\.html$/i.test(href)) return href;
    return href.replace(/\.html$/i, "_ko.html");
  }
  function toen(href) {
    return href.replace(/_ko\.html$/i, ".html");
  }
  function rewriteDetailLinks(lang) {
    document.querySelectorAll(".details-link").forEach((a) => {
      const base = a.getAttribute("href") || "";
      const next = lang === "ko" ? toko(base) : toen(base);
      if (next !== base) a.setAttribute("href", next);
    });
  }
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
     rewriteDetailLinks(lang);
  }

  // Expose globally
  window.setLanguage = function(lang) {
    localStorage.setItem('lang', lang);
    apply(lang);
    window.dispatchEvent(new Event('language:changed'));
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



// -----------------------
// LANGUAGE TOGGLE VISIBILITY (show after scroll stops)
// -----------------------
(() => {
  const toggle = document.querySelector('.language-toggle');
  if (!toggle) return;

  const header  = document.querySelector('.header');
  const menuBtn = document.querySelector('.header-toggle');

  const SHOW_DELAY_MS        = 1200;
  const SCROLL_HIDE_MIN_Y    = 520;
  const TOP_ALWAYS_SHOW_Y    = 520;

  let hidden  = false;
  let timerId = null;

  const setHidden = (next) => {
    if (hidden === next) return;
    hidden = next;
    requestAnimationFrame(() => {
      toggle.classList.toggle('is-hidden', hidden);
    });
  };

  const scheduleShow = () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      const menuOpen = header && header.classList.contains('header-show');
      if (!menuOpen) setHidden(false);
    }, SHOW_DELAY_MS);
  };

  const onScroll = () => {
    const y = window.scrollY || 0;

    if (y < TOP_ALWAYS_SHOW_Y) {
      if (timerId) clearTimeout(timerId);
      setHidden(false);
      return;
    }

    const menuOpen = header && header.classList.contains('header-show');
    if (menuOpen) {
      if (timerId) clearTimeout(timerId);
      setHidden(true);
      return;
    }

    if (y > SCROLL_HIDE_MIN_Y) {
      setHidden(true);
      scheduleShow();
    } else {
      if (timerId) clearTimeout(timerId);
      setHidden(false);
    }
  };

  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      setTimeout(() => {
        const open = header && header.classList.contains('header-show');
        if (open) {
          if (timerId) clearTimeout(timerId);
          setHidden(true);
        } else {
          scheduleShow();
        }
      }, 0);
    });
  }

  if (header) {
    const mo = new MutationObserver(() => {
      const open = header.classList.contains('header-show');
      if (open) {
        if (timerId) clearTimeout(timerId);
        setHidden(true);
      } else {
        scheduleShow();
      }
    });
    mo.observe(header, { attributes: true, attributeFilter: ['class'] });
  }
})();

(function () {
  const getLang = () =>
    document.querySelector(".language-toggle")?.getAttribute("data-active") ||
    localStorage.getItem("lang") || "en";

  const toko = (href) => /_ko\.html$/i.test(href) ? href : href.replace(/\.html$/i, "_ko.html");
  const toen = (href) => href.replace(/_ko\.html$/i, ".html");

  const mount = document.querySelector("#portfolio-inline");

  const mountContainer = mount?.querySelector(".container");

  async function fetchInlineHTML(href) {
    const res = await fetch(href, { credentials: "omit" });
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const container = doc.querySelector("#portfolio-details .container");
    return container ? container.innerHTML : "";
  }

  function initSwipers(root) {
    root.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const cfgEl = swiperElement.querySelector(".swiper-config");
      if (!cfgEl) return;
      let config = {};
      try { config = JSON.parse(cfgEl.textContent.trim()); } catch {}
      if (swiperElement.swiper) {
        swiperElement.swiper.update();
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

 async function loadDetailsInline(hrefBase, opts = {}) {
    if (!mount || !mountContainer) return;

    const { scroll = false } = opts;

    const lang = getLang();
    const href = (lang === "ko") ? toko(hrefBase) : toen(hrefBase);
    mount.dataset.hrefBase = hrefBase;

    mount.style.display = "block";
    mountContainer.innerHTML = `<div style="padding:24px;text-align:center;opacity:.7;">Loading...</div>`;

    try {
      const inner = await fetchInlineHTML(href);
      if (!inner) throw new Error("No content");
      mountContainer.innerHTML = inner;

      initSwipers(mount);

      if (typeof window.AOS?.refreshHard === "function") window.AOS.refreshHard();
      else if (typeof window.AOS?.refresh === "function") window.AOS.refresh();

      if (scroll) {
        const y = mount.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } catch (e) {
      mountContainer.innerHTML = `<div style="padding:24px;color:#b00020;">Failed to load content.</div>`;
      console.error(e);
    }
  }


  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.details-link");
    if (!a) return;
    e.preventDefault();
    const href = a.getAttribute("href") || "";
    if (!href) return;
    loadDetailsInline(href,{ scroll: true });
  });

  window.addEventListener("language:changed", () => {
    if (mount && mount.dataset.hrefBase) {
      loadDetailsInline(mount.dataset.hrefBase, { scroll: false });
    }
  });
  window.addEventListener("DOMContentLoaded", () => {
    if (mount && !mount.dataset.hrefBase) {
      loadDetailsInline("details0.html", { scroll: false });
    }
  });
})();