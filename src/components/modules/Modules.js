function Modules() {
  return (
    <div className="Modules">
      <div className="navigators">
        <div className="prevBtn" aria-label="이전 배너로 넘기기 버트">
          <img src="/assets/icons/arrow-left.svg" alt="left arrow" />
        </div>
        <div className="nextBtn" aria-label="다음 배너로 넘기기">
          <img src="/assets/icons/arrow-right.svg" alt="right arrow" />
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

        <strong className="profileNew" aria-label="새 알림이 있습니다">
          <img src="/assets/icons/new.svg" alt="나의 새 알람 아이콘" />
        </strong>
      </li>
    </div>
  )
}

export default Modules
