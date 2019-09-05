import React, {useState} from 'react';

const Display = (props) => {
   

    return(<>
    <h1>Scoreboard</h1>
    <div>
       Balls: {props.balls}
       Strikes: {props.strikes}
        {props.fouls}
        {props.hits}
    </div>
    </>)

}

export default Display;