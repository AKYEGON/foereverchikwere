
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const heartArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      size: 16 + Math.random() * 12,
    }));
    
    setHearts(heartArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            bottom: '-20px',
          }}
        >
          <Heart
            size={heart.size}
            className="text-pink-400/30 animate-sparkle"
            style={{ animationDelay: `${heart.delay}s` }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
