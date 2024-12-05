import { Link } from "react-router-dom"

const Comedy = () => {
  return (
    <div className="Container md:px-6 md:mt-[2vw] ">
    <h4 className="text-[1.7vw] font-semibold">Comdey Movies</h4>
    <div className="wraper mt-[5px] w-full  flex   gap-6 overflow-x-auto py-[20px] "> 
    <div className="Viewerbox ">     
        <Link to="/">
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4606/1724530174606-v" alt="" />
        </Link>   
    </div>
    <div className="Viewerbox ">  
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9166/1710929909166-v" alt="" />
        </Link>      
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5953/525953-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8105/1118105-v-cf275eb3c3f2" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7309/177309-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7803/1712209007803-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/7132/1000007132/1000007132-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/old_images/vertical/MOVIE/9466/1000019466/1000019466-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7166/1477166-v-a1c62df76321" alt="" />
        </Link>       
    </div>
  
    </div>
</div>   )
}

export default Comedy