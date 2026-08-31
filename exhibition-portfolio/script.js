const projects = [
    {
        id: 1,
        title: "젤리미스트 시딩 키트 기획/제작",
        category: "Influencer Seeding",
        year: "2026",
        role: "Seeding Intern",
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        situation: "신규 출시일에 맞춰 197개의 시딩 키트를 발송해야 했으나, 소량 발주 조건으로 인해 기존 협력 대행사 루트로는 납기 내 제작이 불가능한 악조건이었습니다.",
        task: "목표 노출률 30% 달성과 데드라인 준수라는 두 가지 미션을 위해, 대행사에 의존하지 않고 직접 수급 루트를 개척해야 했습니다.",
        action: "① 문제 진단: 병목이 대행사의 소량 거절임을 파악하고 전략을 우회했습니다.<br>② 직접 실행: 제조사에 직접 컨택하여 소량 발주 가능 업체를 찾고 사장님과 일정 및 샘플을 협의했습니다.<br>③ 프로세스 관리: 수급부터 발송까지 일정을 역산해 타임라인을 직접 설계했습니다.",
        result: "목표 노출률 30%를 뛰어넘어 초과 달성. 특히 자발적 2차 확산이 다수 발생하여, 키트 구성 자체가 인플루언서의 콘텐츠 동기를 강하게 자극했음을 증명했습니다.",
        kpis: [
            { label: "총 노출률", value: "36.5%" },
            { label: "자발적 숏폼", value: "8건" }
        ],
        tools: "키트 기획, 공장/업체 커뮤니케이션, 트위터/인스타"
    },
    {
        id: 2,
        title: "메가/마이크로 인플루언서 협업",
        category: "Influencer Marketing",
        year: "2026",
        role: "Project Assistant",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        situation: "브랜드 핏에 맞는 인플루언서를 발굴하고 섭외해야 했습니다.",
        task: "각 SKU(상품) 목표 수치에 맞춰 적합한 인플루언서를 리스트업하고 컨택하여 성공적인 콘텐츠 협업을 이끌어내는 것이 목표였습니다.",
        action: "계약서 작성부터 제품 출고, 콘텐츠 초안/최종본 확인 및 PM 피드백 전달까지 전 과정을 매니징했습니다. 특히 'AI 협업 영상', '잼민이 상담' 등 참신한 컨셉을 기획/제안하여 인플루언서(차오름 등)와의 성공적인 협업 콘텐츠를 이끌어냈습니다.",
        result: "모든 인플루언서 캠페인을 기한 내 성공적으로 완수하여 타겟 도달률을 극대화했습니다.",
        tools: "인플루언서 컨택, 계약서 작성, 스케줄 관리"
    },
    {
        id: 3,
        title: "언더 바이럴 및 매거진 노출",
        category: "Viral Marketing",
        year: "2026",
        role: "Marketing Intern",
        image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        situation: "오가닉한 입소문을 위해 다이소 등 오프라인 매장 진출과 맞물린 온라인 바이럴이 필요했습니다.",
        task: "소비자의 눈높이에 맞으면서도 신뢰감을 줄 수 있는 후킹 키워드를 발굴하고 확산시켜야 했습니다.",
        action: "상시 바이럴 마케팅 진행 시, '의사 추천' 등의 후킹 키워드를 직접 선정하고 기획했습니다. 대행사와 긴밀하게 소통하며 트위터, 파워페이지, 주요 뷰티 카페 커뮤니티 및 뷰티 매거진에 브랜드 노출을 실행했습니다.",
        result: "주요 커뮤니티 내 브랜드 언급량을 증대시키고 자연스러운 트래픽을 견인했습니다.",
        tools: "키워드 기획, 바이럴 대행사 커뮤니케이션"
    },
    {
        id: 4,
        title: "글로벌 뷰티 행사 및 VIP 초청",
        category: "Global Event",
        year: "2026",
        role: "Event Assistant",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        situation: "해외(키르기스스탄 등) 인플루언서를 초청하는 오프라인 행사 당일이 다가왔습니다.",
        task: "글로벌 VIP 응대 및 전용 굿즈(시딩 키트) 제작, 오프라인 세팅을 완벽히 준비해야 했습니다.",
        action: "행사 당일 현장 운영을 보조하고 브랜드/제품을 안내했습니다. 또한 해외 인플루언서를 위한 전용 시딩 키트에 들어갈 로고 스티커와 쇼핑백을 기획하고 제작 업체와 발주했습니다. 사내 초청 행사의 X배너, 다과 등도 직접 세팅했습니다.",
        result: "글로벌 인플루언서들의 높은 만족도를 이끌어내며 글로벌 네트워크 구축에 기여했습니다.",
        tools: "행사 운영 보조, VIP 응대, 굿즈 발주"
    },
    {
        id: 5,
        title: "메타 광고 소재 직접 기획·출연",
        category: "Content Creation & Performance",
        year: "2026",
        role: "Content Creator",
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        situation: "스킨케어 기획전을 앞두고 공식 SNS에 업로드할 숏폼 콘텐츠와 메타 광고 소재가 동시에 필요한 상황이었습니다.",
        task: "예산 및 제작 리소스의 한계 속에서, 오가닉 콘텐츠로서의 바이럴 가능성과 유료 광고 소재로서의 주목도(Hook)를 동시에 충족시키는 기획이 필요했습니다.",
        action: "① 기획 단계부터 메타 광고 소재 전환을 고려하여 첫 3초 내 시선을 끄는 Hook 구조를 설계했습니다.<br>② 낮은 비용으로 브랜드 친근감을 높일 수 있는 '내부자 관점'이 효율이 좋다고 판단, 직접 출연을 제안했습니다.<br>③ 업로드 전 PPT 기획안을 통해 스폰서드 광고 소재 활용 방향을 제안했습니다.",
        result: "오가닉 콘텐츠와 유료 광고 소재를 동시에 설계하는 훈련을 통해 퍼포먼스 마케팅의 흐름을 파악했습니다.",
        kpis: [
            { label: "채택 소재", value: "메타 FB/IG" },
            { label: "캠페인", value: "7월 기획전" }
        ],
        tools: "영상 촬영/기획, Meta Ads 소재 기획"
    },
    {
        id: 6,
        title: "샤홍슈(Xiaohongshu) 계정 운영",
        category: "Global Social Media",
        year: "2026",
        role: "Channel Manager",
        image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        situation: "중화권 타겟 마케팅을 위한 플랫폼 확장이 필요했습니다.",
        task: "뷰티 핵심 플랫폼인 샤홍슈(小红书) 공식 계정을 운영하며 글로벌 인지도를 확보하는 것이었습니다.",
        action: "현지 뷰티 트렌드와 K-뷰티 스킨케어의 강점을 결합한 맞춤형 콘텐츠를 발행하여 중국 소비자들과 지속적으로 소통했습니다.",
        result: "글로벌 채널의 트래픽을 늘리고 브랜드 인지도를 성공적으로 구축했습니다.<br><br><a href='https://xhslink.cn/m/89aPQA33lt5' target='_blank' style='display: inline-block; margin-top: 10px; color: #e63946; text-decoration: underline; font-weight: 600;'>👉 운영 중인 샤홍슈 계정 보러가기</a>",
        tools: "샤홍슈(Xiaohongshu), 중국 뷰티 트렌드 리서치"
    }
];

const scrollContainer = document.getElementById('scroll-container');
const modalOverlay = document.getElementById('case-study-overlay');
const closeBtn = document.getElementById('close-modal');

// Inject Projects
projects.forEach((proj, index) => {
    const section = document.createElement('section');
    section.className = 'panel project-panel';
    section.innerHTML = `
        <div class="frame" data-id="${proj.id}">
            <img src="${proj.image}" alt="${proj.title}">
        </div>
        <div class="project-info">
            <div>
                <p class="project-category">${proj.category}</p>
                <h2>0${index + 1}</h2>
            </div>
        </div>
    `;
    // Insert before outro panel
    scrollContainer.insertBefore(section, document.querySelector('.outro-panel'));
});

// Horizontal Scroll Hijacking (Desktop only)
const scrollWrapper = document.querySelector('.scroll-wrapper');
let isMobile = window.innerWidth <= 900;

window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 900;
});

scrollWrapper.addEventListener('wheel', (evt) => {
    if (!isMobile) {
        evt.preventDefault();
        scrollWrapper.scrollLeft += evt.deltaY;
        updateDots();
    }
});

// Keyboard Navigation
window.addEventListener('keydown', (evt) => {
    if (!isMobile && !modalOverlay.classList.contains('active')) {
        if (evt.key === 'ArrowRight') {
            scrollWrapper.scrollBy({ left: window.innerWidth * 0.5, behavior: 'smooth' });
        } else if (evt.key === 'ArrowLeft') {
            scrollWrapper.scrollBy({ left: -window.innerWidth * 0.5, behavior: 'smooth' });
        }
    }
});

// Setup Dots
const dotsContainer = document.getElementById('scroll-dots');
const totalPanels = document.querySelectorAll('.panel').length;
for (let i = 0; i < totalPanels; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
}

function updateDots() {
    const scrollPos = scrollWrapper.scrollLeft;
    const panelWidth = window.innerWidth * 0.7; // Approx panel width
    let currentIndex = Math.round(scrollPos / panelWidth);
    
    // Bounds check
    if(currentIndex >= totalPanels) currentIndex = totalPanels - 1;
    if(currentIndex < 0) currentIndex = 0;

    const dots = document.querySelectorAll('.dot');
    dots.forEach(d => d.classList.remove('active'));
    if(dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
}
scrollWrapper.addEventListener('scroll', updateDots);

// Scroll Hint Overlay
const hintOverlay = document.getElementById('scroll-hint');
if (!isMobile) {
    setTimeout(() => {
        hintOverlay.classList.add('show');
        setTimeout(() => {
            hintOverlay.classList.remove('show');
        }, 2500);
    }, 500);
}

// Open Modal
document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('click', () => {
        const id = parseInt(frame.getAttribute('data-id'));
        const proj = projects.find(p => p.id === id);
        
        document.getElementById('cs-image').src = proj.image;
        document.getElementById('cs-category').innerText = proj.category;
        document.getElementById('cs-title').innerText = proj.title;
        document.getElementById('cap-campaign').innerText = proj.title;
        document.getElementById('cap-year').innerText = proj.year;
        document.getElementById('cap-role').innerText = proj.role;
        document.getElementById('cs-tools').innerText = proj.tools;
        
        const bodyContent = document.getElementById('cs-body-content');
        
        // Build STAR HTML
        let html = `
            <div class="star-section">
                <div class="star-label">Situation</div>
                <div class="star-text">${proj.situation}</div>
            </div>
            <div class="star-section">
                <div class="star-label">Task</div>
                <div class="star-text">${proj.task}</div>
            </div>
            <div class="star-section">
                <div class="star-label">Action</div>
                <div class="star-text">${proj.action}</div>
            </div>
            <div class="star-section">
                <div class="star-label">Result</div>
        `;

        if (proj.kpis && proj.kpis.length > 0) {
            html += `<div class="kpi-container">`;
            proj.kpis.forEach(kpi => {
                html += `
                    <div class="kpi-card">
                        <span class="kpi-value">${kpi.value}</span>
                        <span class="kpi-label">${kpi.label}</span>
                    </div>
                `;
            });
            html += `</div>`;
        }

        html += `
                <div class="star-text">${proj.result}</div>
            </div>
        `;
        
        bodyContent.innerHTML = html;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    if(isMobile) {
        document.body.style.overflow = 'auto';
    }
});

// Escape key to close
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        if(isMobile) {
            document.body.style.overflow = 'auto';
        }
    }
});
