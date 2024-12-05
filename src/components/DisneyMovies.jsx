import { Link } from "react-router-dom"

const DisneyMovies = () => {
    return (
        <div className="Container md:px-6 md:mt-[2vw] ">
        <h4 className="text-[1.7vw] font-semibold">Disney Movies</h4>
        <div className="wraper mt-[5px] w-full  flex   gap-6 overflow-x-auto py-[20px] "> 
        <div className="Viewerbox ">     
            <Link to="/">
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5151/875151-v" alt="" />
            </Link>   
        </div>
        <div className="Viewerbox ">  
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5241/875241-v" alt="" />
            </Link>      
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5557/675557-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5402/675402-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5908/1075908-v-74780cbd6355" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5454/675454-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1220/871220-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5450/675450-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5541/675541-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5231/875231-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5517/675517-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4364/674364-v" alt="" />
            </Link>       
        </div>
      
        </div>
    </div>  )
}

export default DisneyMovies