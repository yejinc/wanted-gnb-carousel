function Modules() {
  return (
    <div className="Modules">
      <div className="navigators">
        <div className="prevBtn" aria-label="이전 배너로 넘기기 버트">
          <img src="/assets/icons/arrow-left.svg" alt="왼쪽 화살표 아이콘" />
        </div>
        <div className="nextBtn" aria-label="다음 배너로 넘기기">
          <img src="/assets/icons/arrow-right.svg" alt="오른쪽 화살표 아이콘" />
        </div>
      </div>

      <li className="moreUser">
        <button
          className="profileBtn"
          type="button"
          aria-label="프로필 사진 버튼"
        >
          <div className="avatarBorder">
            <div className="avatarDefault">
              <img
                src="/assets/images/profile-default.png"
                alt="기본 프로필 사진"
              />
            </div>
          </div>
        </button>

        <span className="profileNew" aria-label="새 알림이 있습니다">
          <img src="/assets/icons/new.svg" alt="나의 새 알람 아이콘" />
        </span>
      </li>

      <li className="moreDashboard">
        <button
          className="dashboardBtn"
          type="button"
          aria-label="기업 서비스 대시보드로 가기"
        >
          <a href="/dashboard">기업 서비스</a>
        </button>
      </li>
    </div>
  )
}

export default Modules
