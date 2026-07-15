import { useState, useEffect } from 'react'
import { TimeLeft } from './types';


export function useTimer(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const endDate = new Date(targetDate);
    endDate.setHours(23, 59, 59, 999);
    
    const endTime = endDate.getTime();
    let intervalId: ReturnType<typeof setInterval>;

    const calculate = () => {
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        clearInterval(intervalId);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
      setIsExpired(false);
    };

    calculate();
    intervalId = setInterval(calculate, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return { ...timeLeft, isExpired };
}