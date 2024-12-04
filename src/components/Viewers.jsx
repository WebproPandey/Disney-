
const Viewers = () => {
  return (
    <div className="Viewers mt-[30px] px-6 grid gap-6 grid-cols-1 md:grid-cols-5 ">
    <div className="Viewerbox">
        <img src="/image/viewers-disney.png" alt="" />
        <video  src="/videos/disney.mp4" autoPlay={true} loop={true} playsInline={true}></video>
    </div>
    <div className="Viewerbox">
        <img src="/image/viewers-marvel.png" alt="" />
        <video src="/videos/marvel.mp4" autoPlay={true} loop={true} playsInline={true}></video>

    </div>
    <div className="Viewerbox">
        <img src="/image/viewers-starwars.png" alt="" />
        <video src="/videos/star-wars.mp4" autoPlay={true} loop={true} playsInline={true}></video>

    </div>
    <div className="Viewerbox">
        <img src="/image/viewers-pixar.png" alt="" />
        <video src="/videos/pixar.mp4" autoPlay={true} loop={true} playsInline={true}></video>

    </div>
    <div className="Viewerbox">
        <img src="/image/viewers-national.png" alt="" />
        <video src="/videos/national-geographic.mp4" autoPlay={true} loop={true} playsInline={true}></video>

    </div>
  </div>
  
  )
}

export default Viewers