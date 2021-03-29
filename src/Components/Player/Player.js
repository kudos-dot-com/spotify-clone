import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PlayerControl from './PlayerControls'
function Player() {
    return (
       
        <div>
         
        <Typography component="div" style={{ backgroundColor: '#181818',borderTop:'1px solid #282828', height: '17vh',width:'100%' }} >
       <PlayerControl />
          </Typography>
      </div>
        
    )
}

export default Player
