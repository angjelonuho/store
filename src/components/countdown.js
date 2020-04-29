import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import '../css/countdown.css';
import explainImage from '../images/explain.png';


const countdownDate = "2020-06-25 00:00";

export const calculateCountdownFromNow = nextDate => {
    const now = new Date().getTime();
  
    const distance = new Date(nextDate).getTime() - now;
  
    if (distance < 0) {
      return {
        expired: true,
        values: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      };
    }
  
    return {
      expired: false,
      values: {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      }
    };
}

export default function CountdownTimer() {
  const [
    {
      expired,
      values: { days, hours, minutes, seconds }
    },
    setResult
  ] = useState(() => calculateCountdownFromNow(countdownDate));

  useEffect(() => {
    if (expired) return undefined;
    const intervalId = setInterval(
      () => setResult(calculateCountdownFromNow(countdownDate)),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [expired]);
  return (
    <Box maxWidth="xl"  className='waveBox'>

     

      {expired ? "It's the time" :
      <ul className='countGroup'>
      <li className='countList'><img  className='countImage' src={explainImage} alt='say less'/></li>
      <li className='countList'><span><Typography className='countText' variant="h1">{days}</Typography></span>DAYS</li>
      <li className='countList'><span><Typography className='countText' variant="h1">{hours}</Typography></span>HOURS</li>
      <li className='countList'><span><Typography className='countText' variant="h1">{minutes}</Typography></span>MINUTES</li>
      <li className='countList'><span><Typography className='countText' variant="h1">{seconds}</Typography></span>SECONDS</li>
     </ul>}


    <svg className='waves' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className='parallax'>
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="#2C7FBE" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="#32BAFA" />
      </g>
    </svg>
      
    </Box>
  );
}

