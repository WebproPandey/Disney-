import { Link } from "react-router-dom"

const Recommanded = () => {
  
  return (
    <div className="Container md:px-6 md:mt-[2vw]  ">
        <h4 className="text-[1.7vw] font-semibold">Latest Releases</h4>
      <div className="wraper mt-[5px] w-full  flex   gap-6 overflow-x-auto py-[20px] "> 
        <div className="Viewerbox ">     
            <Link to="/">
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4683/1732508914683-v" alt="" />
            </Link>   
        </div>
        <div className="Viewerbox ">  
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4725/1731416764725-v" alt="" />
            </Link>      
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/1199/1731317591199-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5391/1732289795391-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7571/1731497207571-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8845/1731068038845-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/7960/1729950367960-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/8363/1729677008363-v" alt="" />
            </Link>       
        </div>
        <div className="Viewerbox "> 
            <Link to='/'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4916/1732591844916-v" alt="" />
            </Link>       
        </div>
      
       </div>
          
           
        
        
      
       

    </div>
  )
}

export default Recommanded