function ButtonNextNav(props) {
  const { onClick } = props

  return (
    <div className="ButtonNextNav xxl-only">
      <button
        type="button"
        className="nextBtn"
        aria-label="다음 배너로 넘기기"
        style={{ display: 'flex', opacity: 0.5 }}
        onClick={onClick}
      >
        <img src="/assets/icons/arrow-right.svg" alt="오른쪽 화살표 아이콘" />
      </button>
    </div>
  )
}

export default ButtonNextNav
