import React,{useRef,useState,useEffect} from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import music from './TMC Song Dj Remix Mamata Di Arek Bar Dj BulBul Mixing.mp3'
import Slider from '@material-ui/core/Slider';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';
import img from '../../Assets/mamatadi rekbaar.jpg'
function PlayerControls() {
    
    const audioele=useRef();
    const slider=useRef(1);
    const [play,setplay]=useState(false);
    const [currduration,setduration]=useState(0);
    const [currtime,setcurrtime]=useState(0);
    const [position,setposition]=useState(0);
    const [sliderposition,setsliderposition]=useState(0);
    let sliderpos=0; 
    
    useEffect(()=>{
        if(play===true)
        {
            audioele.current.play();
        }
        else
        {
            audioele.current.pause();
        }

    },[play])
    
    // console.log( audioele.current.currentTime);

    function onchange(e)
    {
        // slider.current.defaultValue=
      
    }
   function loadeddata()
   {
    const interval = setInterval(() => {
        setslider();
       }, 1000);

    // sliderpos=audioele.current.duration*(slider.current.value / 100);
    // audioele.current.currentTime=sliderpos;

   
   }
   function setslider()
   {
       if(currduration)
       {
           setposition((currtime/60) * (100/(currduration/60)));
       }
   }
    return (
        <div className="d-flex justify-content-between py-2">
            <div>

            <div className="d-flex px-5" style={{width:'100%'}}>
           <div style={{width:'100%'}}>
           <img src={img} height="100" width="100"/>
           </div>
            <h5 style={{color:'#fff',padding:'7px',textTransform:'capitalize',fontSize:'15px',fontWeight:'lighter'}}>mamatadi rekbaar</h5>
         
            </div>
            </div>
           
            <div style={{width:'100%',margin:'5px'}}>
             <audio ref={audioele} 
             onLoadedData={(e)=>{
                setduration(e.currentTarget.duration)
             }}

             onTimeUpdate={(e)=>{
               
                setcurrtime(e.currentTarget.currentTime)
                setslider();
             }}
             src={music} ></audio>
            
            <div className="d-flex justify-content-center align-items-center">
            <div> 
             <button  style={{background:'transparent',height:'30px',width:'30px',border:'1px solid transparent',outline:'none'}}>
                <ShuffleIcon style={{color:"#fff",height:'20px',width:'20px'}}/>
            </button>
            </div>
           
            <div> 
             <button  style={{background:'transparent',height:'30px',width:'30px',border:'1px solid transparent',outline:'none',margin:'0px 5px'}}>
                <SkipPreviousIcon style={{color:"#fff",height:'30px',width:'30px'}}/>
            </button>
            </div>

            <div>
            <button onClick={()=>setplay(!play)} style={{background:'transparent',height:'50px',width:'50px',border:'1px solid transparent',outline:'none',marginLeft:'5px'}}>
                <PlayCircleFilledIcon style={{color:"#fff",height:'40px',width:'40px',display:play===false?'block':'none'}}/>
                <PauseCircleFilledIcon style={{color:"#fff",height:'40px',width:'40px',display:play===true?'block':'none'}}/>
            </button>
            </div>

            <div>
            <button  style={{background:'transparent',height:'30px',width:'30px',border:'1px solid transparent',outline:'none',margin:'0px 5px'}}>
                <SkipNextIcon style={{color:"#fff",height:'30px',width:'30px'}}/>
            </button>
            </div>

            <div> 
             <button  style={{background:'transparent',height:'30px',width:'30px',border:'1px solid transparent',outline:'none'}}>
                <ReplayIcon style={{color:"#fff",height:'20px',width:'20px'}}/>
            </button>
            </div>
                </div>
        
    {/* slider */}
        <div style={{display:'flex',justifyContent:'center',fontSize:'10px',color:'#fff'}}>
       <div><p style={{margin:'5px 15px 15px 0px'}}>{(currtime/60).toFixed(2)}</p></div>
        <Slider
        draggable
        ref={slider}
        style={{width:'50%',color:'#FFCC00'}}
        defaultValue={0}
        value={position}
        aria-labelledby="discrete-slider-small-steps"
        step={0.1}
        marks
        min={0}
        max={100}
        onChange={(e)=>setsliderposition(e.target.value)}
      />
       <div><p style={{margin:'5px 0px 15px 7px'}}>{(currduration/60).toFixed(2)}</p></div>
        </div>
       
        </div>

        <div>

            <div>
            <img src={img} />
            <h1>mamatadi rekbaar</h1>
            </div>
            </div>
        </div>

        

    )
}

export default PlayerControls
