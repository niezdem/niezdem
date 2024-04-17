'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from './ui/Card';
import Text from './ui/Text';

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

const CurrentLocationWidget = () => {
  const { hours, minutes } = useCurrentTime();

  return (
    <Card title="Current Location & Time">
      <div className="flex items-center gap-4">
        <Image
          width={60}
          height={40}
          src="/images/flag_pl.svg"
          alt="Poland flag"
          title="Poland"
        />
        <div>
          <Text>Wrocław, Poland</Text>
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
      </div>
    </Card>
  );
};

export default CurrentLocationWidget;
