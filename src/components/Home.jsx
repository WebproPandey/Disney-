import Comedy from "./Comedy"
import CommingSoon from "./CommingSoon"
import DisneyMovies from "./DisneyMovies"
import EntermentesRounde from "./EntermentesRounde"
import ImageSlider from "./ImageSlider"
import Recommanded from "./Recommanded"
import Viewers from "./Viewers"

const Home = () => {
  return (
    <div className="homepage relative  text-white text-[3vw] min-h-[70vh]  w-full  px-6  pt-[12vh] ">
      <ImageSlider/>
      <Viewers/>
      <Recommanded/>
      <EntermentesRounde/>
      <Comedy/>
      <DisneyMovies/>
      <CommingSoon/>
    </div>
  )
}

export default Home