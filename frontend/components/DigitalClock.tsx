'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface TimeZone {
  name: string;
  zone: string;
  country: string;
  flag: string;
  offset: string;
}

const TIME_ZONES: TimeZone[] = [
  { name: 'Istanbul', zone: 'Europe/Istanbul', country: 'Türkiye', flag: '🇹🇷', offset: 'UTC+3' },
  { name: 'London', zone: 'Europe/London', country: 'İngiltere', flag: '🇬🇧', offset: 'UTC+0' },
  { name: 'New York', zone: 'America/New_York', country: 'ABD', flag: '🇺🇸', offset: 'UTC-4' },
  { name: 'Los Angeles', zone: 'America/Los_Angeles', country: 'ABD', flag: '🇺🇸', offset: 'UTC-7' },
  { name: 'Tokyo', zone: 'Asia/Tokyo', country: 'Japonya', flag: '🇯🇵', offset: 'UTC+9' },
  { name: 'Dubai', zone: 'Asia/Dubai', country: 'UAE', flag: '🇦🇪', offset: 'UTC+4' },
  { name: 'Sydney', zone: 'Australia/Sydney', country: 'Avustralya', flag: '🇦🇺', offset: 'UTC+10' },
  { name: 'Berlin', zone: 'Europe/Berlin', country: 'Almanya', flag: '🇩🇪', offset: 'UTC+2' },
];

export default function DigitalClock() {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [times, setTimes] = useState<Record<string, string>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      setTime(format(now, 'HH:mm:ss'));
      setDate(format(now, 'EEEE, dd MMMM yyyy', { locale: require('date-fns/locale/tr') }));

      // Farklı zaman dilimlerinde saatleri güncelle
      const timeZoneMap: Record<string, string> = {};
      TIME_ZONES.forEach((tz) => {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: tz.zone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        };
        const zonedTime = new Intl.DateTimeFormat('en-US', options).format(now);
        timeZoneMap[tz.zone] = zonedTime;
      });
      setTimes(timeZoneMap);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 text-white">
      {/* Ana Saat */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold mb-2 opacity-90">Şu Anda</h2>
        <div className="text-6xl font-bold font-mono tracking-wider">
          {time || '00:00:00'}
        </div>
        <p className="text-sm mt-4 opacity-75">{date || 'Tarih yükleniyor...'}</p>
        <p className="text-sm mt-2 opacity-75">Türkiye (İstanbul)</p>
      </div>

      {/* Zaman Dilimi Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TIME_ZONES.map((tz) => (
          <div
            key={tz.zone}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm">
                <span className="mr-2">{tz.flag}</span>
                {tz.name}
              </h3>
            </div>
            <div className="text-2xl font-mono font-bold">
              {times[tz.zone] || '00:00:00'}
            </div>
            <p className="text-xs opacity-70 mt-1">{tz.country}</p>
            <p className="text-xs opacity-60 mt-1">{tz.offset}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
