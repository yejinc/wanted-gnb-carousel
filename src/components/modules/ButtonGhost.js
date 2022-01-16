function Buttons() {
  return (
    <button className="btnGhost" aria-label="{배너 타이틀} 페이지로 바로 가기">
      <a href="{link}" alt="바로가기 링크">
        바로가기
        <img src="/assets/icons/arrow-right.svg" alt="오른쪽 화살표 아이콘" />
      </a>
    </button>
  )
}

export default Buttons
