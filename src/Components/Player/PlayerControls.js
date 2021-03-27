import React,{useRef,useState,useEffect} from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import music from './TMC Song Dj Remix Mamata Di Arek Bar Dj BulBul Mixing.mp3'
import Slider from '@material-ui/core/Slider';
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
           setposition(currtime  * (100/currduration));
       }
   }
    return (
        <div>
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
                <SkipPreviousIcon style={{color:"#fff",height:'30px',width:'30px'}}/>
            </button>
            </div>

            <div>
            <button onClick={()=>setplay(!play)} style={{background:'transparent',height:'50px',width:'50px',border:'1px solid transparent',outline:'none'}}>
                <PlayCircleFilledIcon style={{color:"#fff",height:'50px',width:'50px',display:play===false?'block':'none'}}/>
                <PauseCircleFilledIcon style={{color:"#fff",height:'50px',width:'50px',display:play===true?'block':'none'}}/>
            </button>
            </div>

            <div>
            <button  style={{background:'transparent',height:'30px',width:'30px',border:'1px solid transparent',outline:'none'}}>
                <SkipNextIcon style={{color:"#fff",height:'30px',width:'30px'}}/>
            </button>
            </div>
                </div>
        
    {/* slider */}
        <div style={{display:'flex',justifyContent:'center'}}>
        <Slider
        ref={slider}
        style={{width:'20%'}}
        defaultValue={0}
        value={position}
        aria-labelledby="discrete-slider-small-steps"
        step={0.1}
        marks
        min={0}
        max={100}
        onChange={(e)=>setsliderposition(e.target.value)}
      />
        </div>

        </div>

    )
}

export default PlayerControls
