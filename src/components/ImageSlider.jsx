import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    }

  return (
     <div className='SliderWraper  md:h-full  w-full md:px-6'>
        <Slider  {...settings} > 
            <div className='Imagewrape h-[30vh] md:h-full'>
                <a>
                    <img  src="/image/slider-badging.jpg" alt="" />
                </a>
            </div>
            <div className='Imagewrape  h-[30vh] md:h-full'>
                <a>
                    <img src="/image/slider-badag.jpg" alt="" />
                </a>
            </div>
            <div className='Imagewrape  h-[30vh] md:h-full'>
                <a>
                    <img src="/image/slider-scale.jpg" alt="" />
                </a>
            </div>
            <div className='Imagewrape  h-[30vh] md:h-full'>
                <a>
                    <img src="/image/slider-scales.jpg" alt="" />
                </a>
            </div>
            {/* <div className='Imagewrape  h-[30vh] md:h-full'>
                <a>
                    <img src="/image/Slider-Crew.webp" alt="" />
                </a>
            </div> */}
           
        </Slider> 
     </div> 
    )
}

export default ImageSlider