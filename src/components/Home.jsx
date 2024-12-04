import ImageSlider from "./ImageSlider"
import Viewers from "./Viewers"

const Home = () => {
  return (
    <div className="homepage relative  text-white text-[3vw] min-h-[70vh]  w-full  px-6 pt-[12vh] ">
      <ImageSlider/>
      <Viewers/>
    </div>
  )
}

export default Home