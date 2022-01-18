import data from './DataTopCarousel'
import ButtonGhost from './modules/ButtonGhost'

function TopCarousel() {
  function Card() {
    return (
      <div className="carousel-card">
        <div className="carousel-card-image">
          <a
            href={data[0].url}
            aria-label="{data[0].title} 바로가기"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="xs-sm-only"
              src={data[0].imgSM}
              alt="{data[0].title} 이미지"
            />
            <img
              className="md-lg-xl-xxl-only"
              src={data[0].imgMD}
              alt="{data[0].title} 이미지"
            />
          </a>
        </div>
        <div className="carousel-card-text-group">
          <div className="title-group">
            <h2 className="title">{data[0].title}</h2>
            <h3 className="desc">{data[0].desc}</h3>
          </div>

          <div className="btn-carousel-cta">
            <ButtonGhost />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel-top">
      <div className="carousel">
        <div className="carousel-list">
          <div className="carousel-list-track">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopCarousel
