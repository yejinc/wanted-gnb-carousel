function Avatar() {
  return (
    <li className="moreUser">
      <button
        className="profileBtn"
        type="button"
        aria-label="프로필 사진 버튼"
      >
        <div className="avatarBorder">
          <div className="avatarDefault">
            <img
              src="./assets/images/profile-default.png"
              alt="기본 프로필 사진"
            />
          </div>
        </div>
      </button>

      <span className="is-active" aria-label="새 알림이 있습니다">
        <img
          src="https://yejinc.github.io/wanted-gnb-carousel/assets/icons/new.svg"
          alt="나의 새 알람 아이콘"
        />
      </span>
    </li>
  )
}

export default Avatar
