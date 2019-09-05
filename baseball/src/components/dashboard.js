import React, {useState} from 'react';
import Display from './display.js';

const Dashboard = () => {
    const [balls, setBalls] = useState('');
    const [strikes, setStrikes] = useState('');
    const [fouls, setFouls] = useState('');
    const [hits, setHits] = useState('');

    

    const foulCounter = () => {
        if(strikes === 0){
            setStrikes(1);
        } else if (strikes === 1) {
            setStrikes(2);
        } else {
            setStrikes(strikes);
        }
    }

    const strikeCounter = () => {
        if(strikes < 3) {
            setStrikes(strikes + 1);
        } else {
            setStrikes(0)
        }
    }
    const ballCounter = () => {
        if (balls >= 3){
            setBalls(0)
        }else{
           setBalls(balls + 1)
        }
    }
    return(
        <>
            <h1>Dash</h1>
            <button onClick={() => strikeCounter()}>Strike</button>
            <button onClick={() => ballCounter()}>Ball</button>
            <button onClick={() => foulCounter()}>Foul</button>
            
            <Display balls={balls}
                    setBalls={setBalls}
                    strikes={strikes}
                    setStrikes={setStrikes}
                    fouls={fouls}
                    setFouls={setFouls}
                    hits={hits}
                    setHits={setHits}
            />
            


        </>
    )
}

export default Dashboard;