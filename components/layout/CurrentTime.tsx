'use client';

import { useEffect, useState } from 'react';
import Text from '@/components/ui/Text';

const useCurrentTime = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Europe/Warsaw',
        hour: '2-digit',
        minute: '2-digit',
      });
      const [currentHours, currentMinutes] = formattedTime.split(':');
      setHours(currentHours);
      setMinutes(currentMinutes);
    };

    const interval = setInterval(() => {
      updateClock();
    }, 1000);

    updateClock();

    return () => clearInterval(interval);
  }, []);

  return { hours, minutes };
};

const CurrentTimeWidget = () => {
  const { hours, minutes } = useCurrentTime();

  return (
    <div className="flex flex-col items-end gap-1">
      <Text size="sm">My current time</Text>
      <Text>
        {!hours && !minutes ? (
          <span>...</span>
        ) : (
          <>
            <span>{hours}</span>
            <span className="mx-1 animate-blink-slow">:</span>
            <span>{minutes}</span>
          </>
        )}
      </Text>
    </div>
  );
};

export default CurrentTimeWidget;
