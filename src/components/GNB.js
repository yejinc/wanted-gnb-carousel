import Avatar from './modules/Avatar'
import ButtonOutlined from './modules/ButtonOutlined'

function GNB() {
  return (
    <header className="gnb">
      <div className="gnb-wrapper">
        <div className="gnb-left">
          <button
            className="gnb-left-job-category-btn"
            type="button"
            aria-label="직군 전체 열어보기 버튼"
          >
            <img
              src="https://static.wanted.co.kr/images/icon-menu.png"
              alt="메뉴 아이콘"
            />
          </button>

          <h1 className="gnb-left-logo" aria-label="원티드 홈으로 이동하기">
            <a href="https://www.wanted.co.kr/" alt="원티드">
              <icon className="icon-logo_new"></icon>
            </a>
          </h1>
        </div>

        <nav className="gnb-nav">
          <h2 className="visually-hidden">메뉴</h2>
          <ul className="gnb-nav-list">
            <li className="gnb-nav-item xs-sm-only">
              <a href="/">홈</a>
            </li>
            <li className="gnb-nav-item">
              <a href="/jobsfeed">채용</a>
            </li>
            <li className="gnb-nav-item">
              <a href="/events">이벤트</a>
            </li>
            <li className="gnb-nav-item xs-sm-hidden">
              <a href="/salary">직군별 연봉</a>
            </li>
            <li className="gnb-nav-item xs-sm-hidden">
              <a href="/cv">이력서</a>
            </li>
            <li className="gnb-nav-item community xs-sm-hidden">
              <a href="/community">
                커뮤니티
                <strong>New</strong>
              </a>
            </li>
            <li className="gnb-nav-item xs-sm-hidden">
              <a href="https://www.wanted.co.kr/gigs/experts">프리랜서</a>
            </li>
            <li className="gnb-nav-item aiscore xs-sm-hidden">
              <a href="/aiscore/resume">
                AI 합격예측
                <strong>New</strong>
              </a>
            </li>
          </ul>
        </nav>

        <div className="gnb-right">
          <ul className="gnb-buttons">
            <li className="gnb-buttons-item">
              <button
                class="gnb-icon-search"
                type="button"
                aria-label="검색 열기 버튼"
              >
                <img src="/assets/icons/search.svg" alt="검색 아이콘" />
              </button>
            </li>
            <li className="gnb-buttons-item">
              <button
                class="gnb-icon-noti"
                type="button"
                aria-label="내 소식 열기 버튼"
              >
                <img
                  src="/assets/icons/notification.svg"
                  alt="내 소식 아이콘"
                />
              </button>
            </li>
            <li className="gnb-buttons-item">
              <button
                class="gnb-icon-more xs-sm-only"
                type="button"
                aria-label="내 메뉴 열기 버튼"
              >
                <img src="/assets/icons/more.svg" alt="내 메뉴 아이콘" />
              </button>
            </li>

            <li className="gnb-buttons-item is-avatar xs-sm-md-hidden">
              <Avatar />
            </li>

            <span className="gnb-buttons-divider xs-sm-md-hidden" aria-hidden />

            <li className="gnb-buttons-item is-cta xs-sm-md-hidden">
              <ButtonOutlined />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default GNB
