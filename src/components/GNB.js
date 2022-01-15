function GNB() {
  return (
    <header className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-wrapper">
              <div className="gnb-left">
                <button
                  className="gnb-left-menu-btn"
                  type="button"
                  aria-label="전체 메뉴 펼쳐 보기"
                >
                  <img
                    src="https://static.wanted.co.kr/images/icon-menu.png"
                    alt="메뉴 아이콘"
                  />
                </button>

                <h1
                  className="gnb-left-logo"
                  aria-label="원티드 홈으로 이동하기"
                >
                  <a href="https://www.wanted.co.kr/" alt="원티드">
                    <icon className="icon-logo_new"></icon>
                  </a>
                </h1>
              </div>

              <nav className="gnb-nav">
                <h2 className="visually-hidden">메뉴</h2>
                <ul className="gnb-nav-list">
                  <li className="gnb-nav-item sm-only">
                    <a href="/">홈</a>
                  </li>
                  <li className="gnb-nav-item">
                    <a href="/jobsfeed">채용</a>
                  </li>
                  <li className="gnb-nav-item">
                    <a href="/events">이벤트</a>
                  </li>
                  <li className="gnb-nav-item sm-hidden">
                    <a href="/salary">직군별 연봉</a>
                  </li>
                  <li className="gnb-nav-item sm-hidden">
                    <a href="/cv">이력서</a>
                  </li>
                  <li className="gnb-nav-item sm-hidden">
                    <a href="/community">커뮤니티</a>
                    <span>New</span>
                  </li>
                  <li className="gnb-nav-item sm-hidden">
                    <a href="https://www.wanted.co.kr/gigs/experts">프리랜서</a>
                  </li>
                  <li className="gnb-nav-item sm-hidden">
                    <a href="/aiscore/resume">AI 합격예측</a>
                    <span>New</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default GNB
