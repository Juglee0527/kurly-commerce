const Separator = () => (
  <svg
    width="1"
    height="10"
    viewBox="0 0 1 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-2 inline-block"
  >
    <line x1="0.5" y1="0" x2="0.5" y2="10" stroke="#ccc" />
  </svg>
);

const navLinks = [
  { label: '회사소개', href: 'https://newsroom.kurlycorp.com/', external: true },
  {
    label: '컬리소개영상',
    href: 'https://www.youtube.com/embed/WEep7BcboMQ?rel=0&showinfo=0&wmode=opaque&enablejsapi=1',
    external: false,
  },
  {
    label: '투자정보',
    href: 'https://newsroom.kurlycorp.com/ir/%ec%9e%ac%eb%ac%b4%ec%a0%95%eb%b3%b4/',
    external: true,
  },
  { label: '인재채용', href: 'https://kurly.career.greetinghr.com', external: true },
  { label: '이용약관', href: '/user-terms/agreement', external: false },
  {
    label: '개인정보처리방침',
    href: 'https://privacy.kurly.com/kurly/privacypolicy',
    external: true,
    bold: true,
  },
  { label: '이용안내', href: '/user-guide', external: false },
  {
    label: '입점신청',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScKI_Kd1lQAp68r-SIhiOWj0J43C99IvNbgFeT7-X9YLIqteA/viewform?usp=dialog',
    external: true,
    bold: true,
  },
];

const socialLinks = [
  {
    href: 'https://instagram.com/marketkurly',
    src: 'https://res.kurly.com/pc/ico/1810/ico_instagram.png',
    alt: '컬리 인스타그램 바로가기',
  },
  {
    href: 'https://www.facebook.com/marketkurly',
    src: 'https://res.kurly.com/pc/ico/1810/ico_fb.png',
    alt: '컬리 페이스북 바로가기',
  },
  {
    href: 'https://blog.naver.com/marketkurly',
    src: 'https://res.kurly.com/pc/ico/1810/ico_blog.png',
    alt: '컬리 네이버블로그 바로가기',
  },
  {
    href: 'https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg',
    src: 'https://res.kurly.com/pc/ico/1810/ico_youtube.png',
    alt: '컬리 유튜브 바로가기',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e2e2] bg-[#f7f7f7] py-10 px-6 text-stone-700">
      <div className="mx-auto flex max-w-5xl gap-10">
        {/* 고객행복센터 */}
        <div className="w-60 shrink-0">
          <p className="text-xs text-stone-500">고객행복센터</p>
          <strong className="mt-1 block text-2xl font-bold text-stone-900">
            1644-1107
            <span className="mt-1 block text-xs font-normal text-stone-500">
              월~토요일 오전 7시 - 오후 6시
            </span>
          </strong>

          <div className="mt-4 space-y-3">
            {/* 카카오톡 문의 */}
            <div>
              <button className="w-full rounded border border-[#5f0080] py-2 text-sm font-semibold text-[#5f0080] transition-colors hover:bg-[#5f0080] hover:text-white">
                카카오톡 문의
              </button>
              <p className="mt-1 text-xs text-stone-500">
                월~토요일
                <Separator />
                오전 7시 - 오후 6시
                <br />
                일/공휴일
                <Separator />
                오전 7시 - 오후 1시
              </p>
            </div>

            {/* 1:1 문의 */}
            <div>
              <button className="w-full rounded border border-stone-300 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100">
                1:1 문의
              </button>
              <p className="mt-1 text-xs text-stone-500">
                365일
                <br />
                고객센터 운영시간에 순차적으로 답변드리겠습니다.
              </p>
            </div>

            {/* 대량주문 문의 */}
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScWcjRuN6eWJK-G8x3NwBfE8IyKZIOq7jhD3fUXuKSWwPqzJw/viewform"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded border border-stone-300 py-2 text-center text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100"
              >
                대량주문 문의
              </a>
              <p className="mt-1 text-xs text-stone-500">
                월~금요일
                <Separator />
                오전 9시 - 오후 6시
                <br />
                점심시간
                <Separator />
                낮 12시 - 오후 1시
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-stone-500">
            비회원 문의 :{' '}
            <a href="mailto:help@kurlycorp.com" className="underline hover:text-stone-700">
              help@kurlycorp.com
            </a>
          </p>
        </div>

        {/* 우측 정보 영역 */}
        <div className="flex-1">
          {/* 내비게이션 링크 */}
          <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-1">
            {navLinks.map(({ label, href, external, bold }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : '_self'}
                  rel={external ? 'noreferrer' : undefined}
                  className={`text-sm text-stone-600 hover:underline ${bold ? 'font-bold' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* 사업자 정보 */}
          <p className="text-xs leading-6 text-stone-500">
            법인명 (상호) : 주식회사 컬리{' '}
            <span className="mx-2 inline-block h-2 w-px bg-stone-300" />
            사업자등록번호 : 261-81-23567{' '}
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no="
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-stone-700"
            >
              사업자정보 확인
            </a>
            <br />
            통신판매업 : 제 2018-서울강남-01646 호
            <br />
            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동){' '}
            <span className="mx-2 inline-block h-2 w-px bg-stone-300" />
            대표이사 : 김슬아
            <br />
            채용문의 :{' '}
            <a
              href="mailto:recruit@kurlycorp.com"
              className="underline hover:text-stone-700"
            >
              recruit@kurlycorp.com
            </a>
            <br />
            팩스: 070 - 7500 - 6098
          </p>

          {/* 소셜 아이콘 */}
          <ul className="mt-4 flex gap-3">
            {socialLinks.map(({ href, src, alt }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} width={28} height={28} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
