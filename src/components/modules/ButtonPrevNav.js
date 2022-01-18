function ButtonPrevNav(props) {
  const { onClick } = props

  return (
    <div className="ButtonPrevNav xxl-only">
      <button
        type="button"
        className="prevBtn"
        aria-label="이전 배너로 넘기기 버튼"
        style={{ display: 'flex', opacity: 0.5 }}
        onClick={onClick}
      >
        <img src="/assets/icons/arrow-left.svg" alt="왼쪽 화살표 아이콘" />
      </button>
    </div>
  )
}

export default ButtonPrevNav
