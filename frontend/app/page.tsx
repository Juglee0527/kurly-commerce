const heroCards = [
  {
    id: 1,
    badge: "Kurly Only",
    title: "오늘 저녁 준비, 10분이면 충분해요",
    desc: "간편식부터 신선식품까지 컬리 감성으로 담아보세요.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    badge: "Fresh",
    title: "아침에 문 앞에서 만나는 신선함",
    desc: "프리미엄 장보기 경험을 홈 화면에서 바로 시작하세요.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
];

const products = [
  {
    id: 1,
    name: "[Kurly's] 유기농 채소 샐러드",
    price: "6,900원",
    originalPrice: "8,900원",
    discount: "22%",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "[Kurly's] 무항생제 달걀 15구",
    price: "7,490원",
    originalPrice: "9,500원",
    discount: "21%",
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "[Kurly's] 오늘의 과일 박스",
    price: "15,900원",
    originalPrice: "19,900원",
    discount: "20%",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "[Kurly's] 프리미엄 브런치 세트",
    price: "13,500원",
    originalPrice: "16,800원",
    discount: "19%",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "채소",
  "과일·견과",
  "정육·수산",
  "샐러드·간편식",
  "면·양념·오일",
  "생수·음료",
  "간식·베이커리",
  "뷰티",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <TopBanner />
      <Header />
      <CategoryNav />

      <section className="mx-auto max-w-[1050px] px-4 pb-16 pt-8">
        <div className="grid gap-5 md:grid-cols-[1.35fr_0.65fr]">
          <HeroBanner card={heroCards[0]} large />
          <div className="grid gap-5">
            <HeroBanner card={heroCards[1]} />
            <div className="rounded-3xl bg-[#f8f5fb] p-6">
              <p className="text-sm font-semibold text-[#5f0080]">샛별배송</p>
              <h3 className="mt-2 text-2xl font-bold leading-snug">
                밤 11시 전 주문하면
                <br />
                내일 아침 도착
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                컬리 감성의 빠른 장보기 경험을 사이드 프로젝트로 구현합니다.
              </p>
              <button className="mt-5 rounded-full bg-[#5f0080] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4a0064]">
                배송 정책 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1050px] px-4 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-[#5f0080]">추천 상품</p>
            <h2 className="mt-1 text-2xl font-bold">이 상품, 지금 가장 많이 담고 있어요</h2>
          </div>
          <button className="text-sm font-medium text-neutral-500 hover:text-[#5f0080]">
            전체보기
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-3 right-3 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#5f0080] shadow-sm">
                  담기
                </button>
              </div>

              <div className="p-4">
                <p className="mb-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-neutral-800">
                  {product.name}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-[#fa622f]">
                    {product.discount}
                  </span>
                  <span className="text-lg font-bold text-neutral-900">
                    {product.price}
                  </span>
                </div>

                <p className="mt-1 text-sm text-neutral-400 line-through">
                  {product.originalPrice}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-16">
        <div className="mx-auto max-w-[1050px] px-4">
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#5f0080]">카테고리</p>
            <h2 className="mt-1 text-2xl font-bold">원하는 상품을 빠르게 찾아보세요</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-5 text-left text-sm font-semibold text-neutral-800 transition hover:border-[#5f0080] hover:text-[#5f0080]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TopBanner() {
  return (
    <div className="bg-[#5f0080]">
      <div className="mx-auto flex h-11 max-w-[1050px] items-center justify-center px-4 text-center text-sm font-medium text-white">
        가입하고 인기 상품 100원딜 혜택 받기
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1050px] px-4">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-8">
            <a href="#" className="text-[28px] font-extrabold tracking-[-0.03em] text-[#5f0080]">
              Kurly
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              <a href="#" className="font-semibold text-[#5f0080]">
                마켓컬리
              </a>
              <a href="#" className="font-semibold text-neutral-400">
                뷰티컬리
              </a>
            </nav>
          </div>

          <div className="hidden flex-1 px-10 md:block">
            <div className="flex h-12 items-center rounded-full border-2 border-[#5f0080] px-5">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
              />
              <span className="text-lg text-[#5f0080]">⌕</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-neutral-700">
            <button>로그인</button>
            <span className="text-neutral-300">|</span>
            <button>회원가입</button>
            <span className="text-neutral-300">|</span>
            <button>고객센터</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function CategoryNav() {
  return (
    <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1050px] items-center gap-8 px-4 text-sm font-semibold">
        <button className="flex items-center gap-2 text-neutral-900">
          <span>☰</span>
          <span>카테고리</span>
        </button>
        <a href="#" className="text-neutral-900">
          신상품
        </a>
        <a href="#" className="text-neutral-900">
          베스트
        </a>
        <a href="#" className="text-neutral-900">
          알뜰쇼핑
        </a>
        <a href="#" className="text-neutral-900">
          특가/혜택
        </a>
      </div>
    </div>
  );
}

function HeroBanner({
  card,
  large = false,
}: {
  card: {
    badge: string;
    title: string;
    desc: string;
    image: string;
  };
  large?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${
        large ? "min-h-[460px]" : "min-h-[220px]"
      }`}
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-8 text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/90">
          {card.badge}
        </p>
        <h2 className={`${large ? "text-4xl" : "text-2xl"} font-bold leading-tight`}>
          {card.title}
        </h2>
        <p className="mt-3 max-w-[420px] text-sm leading-6 text-white/90">{card.desc}</p>
      </div>
    </div>
  );
}