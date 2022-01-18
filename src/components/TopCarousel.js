import data from './DataTopCarousel'
import ButtonGhost from './modules/ButtonGhost'

function TopCarousel() {
  // let [data] = useState(DataTopCarousel)

  function Card(props, className) {
    return (
      <div className="carousel-card">
        <div className="carousel-card-image">
          <a
            href={props.data.url}
            aria-label="{props.data.title} 바로가기"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="xs-sm-only"
              src={props.data.imgSM}
              alt="{props.data.title} 이미지"
            />
            <img
              className="md-lg-xl-xxl-only"
              src={props.data.imgMD}
              alt="{props.data.title} 이미지"
            />
          </a>
        </div>
        <div className="carousel-card-text-group">
          <h2 className="title">{props.data.title}</h2>
          <h3 className="desc">{props.data.desc}</h3>
          <hr className="divider" />
          <ButtonGhost />
        </div>
      </div>
    )
  }

  return (
    <div className="carousel-top">
      <div className="carousel">
        <div className="carousel-list carousel-initialised">
          <div className="carousel-list-track">
            <Card data={data[0]} />
            <Card data={data[1]} />
            <Card data={data[2]} />
            {/* <Card data={data[3]} />
            <Card data={data[4]} />
            <Card data={data[5]} />
            <Card data={data[6]} />
            <Card data={data[7]} />
            <Card data={data[8]} />
            <Card data={data[9]} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopCarousel
