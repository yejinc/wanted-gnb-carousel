import React, { Component } from 'react'
import styled from 'styled-components'
import data from './DataTopCarousel'
import ButtonGhost from './modules/ButtonGhost'
import ButtonNextNav from './modules/ButtonNextNav'
import ButtonPrevNav from './modules/ButtonPrevNav'
import Carousel from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const StyledCarousel = styled(Carousel)`
  .slick-slide.slick-current {
    .carousel-card .carousel-card-image {
      filter: brightness(100%);
      transition: filter 300ms ease-in-out;
    }
    .carousel-card .carousel-card-text-group {
      opacity: 1;
      transition: opacity 300ms ease-in-out;
    }
  }

  @media screen and (min-width: 1200px) {
    .slick-slide {
      width: 1060px;
      padding: 0 12px;
      /* box-sizing: content-box; */
    }
  }
`

function Card(props) {
  return (
    <li className="carousel-card ">
      <div className="carousel-card-image">
        <a
          href={props.data.url}
          aria-label="배너 바로가기"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="xs-sm-only"
            src={props.data.imgSM}
            alt="배너 이미지"
          />
          <img
            className="md-lg-xl-xxl-only"
            src={props.data.imgMD}
            alt="배너 이미지"
          />
        </a>
      </div>
      <div className="carousel-card-text-group">
        <h2 className="title">{props.data.title}</h2>
        <h3 className="desc">{props.data.desc}</h3>
        <hr className="divider xxl-only" />
        <ButtonGhost />
      </div>
    </li>
  )
}

export default class CustomSlide extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.state = {
      isOn: true,
    }
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    const settings = {
      className: 'center',
      slide: 'li',
      centerMode: true,
      centerPadding: '50px',
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: '40px',
            arrows: false,
          },
        },
      ],
    }

    return (
      <ol className="TopCarousel">
        <StyledCarousel ref={(c) => (this.slider = c)} {...settings}>
          <Card data={data[0]} />
          <Card data={data[1]} />
          <Card data={data[2]} />
          <Card data={data[3]} />
          <Card data={data[4]} />
          <Card data={data[5]} />
          <Card data={data[6]} />
          <Card data={data[7]} />
          <Card data={data[8]} />
        </StyledCarousel>

        <div className="Navigators">
          <ButtonPrevNav onClick={this.previous} />
          <ButtonNextNav onClick={this.next} />
        </div>
      </ol>
    )
  }
}
