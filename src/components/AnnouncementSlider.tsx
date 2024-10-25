import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Announcement {
  id: number;
  text: string;
  image?: string;
}

const AnnouncementSlider = () => {
  const announcements: Announcement[] = [
    {
      id: 1,
      text: "🎉 New user bonus: Spin the wheel and get 100 USDT!",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      text: "🔥 Double rewards active for the next 2 hours!",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      text: "🎁 Invite friends and earn 50% of their rewards!",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoplay]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="relative w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="relative aspect-[21/9]">
        <div 
          className="absolute inset-0 transition-transform duration-500 ease-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {announcements.map((announcement) => (
            <div 
              key={announcement.id}
              className="relative w-full flex-shrink-0"
            >
              {announcement.image && (
                <img 
                  src={announcement.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-end">
                <p className="p-6 text-white text-lg font-medium">
                  {announcement.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <button 
          onClick={handlePrevious}
          className="p-2 m-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button 
          onClick={handleNext}
          className="p-2 m-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSlider;