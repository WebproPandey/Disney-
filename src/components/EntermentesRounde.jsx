import { Link } from "react-router-dom"

const EntermentesRounde = () => {
  return (
    <div className="Container md:px-6 md:mt-[2vw] ">
    <h4 className="text-[1.7vw] font-semibold">Entertainment All-Rouders</h4>
    <div className="wraper mt-[5px] w-full  flex   gap-6 overflow-x-auto py-[20px] "> 
    <div className="Viewerbox ">     
        <Link to="/">
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/9003/1639003-v-31cc8eeb198f" alt="" />
        </Link>   
    </div>
    <div className="Viewerbox ">  
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6092/1710929776092-v" alt="" />
        </Link>      
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1064/1710950101064-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/2215/1492215-v-956967a1404f" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3649/1711465823649-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1327/441327-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3879/1710936653879-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/3261/1710950343261-v" alt="" />
        </Link>       
    </div>
    <div className="Viewerbox "> 
        <Link to='/'>
         <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7416/957416-v" alt="" />
        </Link>       
    </div>
  
    </div>
</div> 
 )
}

export default EntermentesRounde