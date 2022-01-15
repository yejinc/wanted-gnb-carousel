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

                <h1 className="gnb-left-logo">
                  <a href="https://www.wanted.co.kr/">
                    <icon className="icon-logo_new"></icon>
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default GNB
