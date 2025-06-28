
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuote(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
      <FloatingHearts />
      
      <div className="text-center space-y-8 max-w-4xl mx-auto relative z-20">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-gradient-shift mb-4">
            To My Moonlight
          </h1>
          <h2 className="font-dancing text-4xl md:text-6xl text-white/90 mb-8">
            Chikwere
          </h2>
        </div>

        {showQuote && (
          <div className="animate-fade-in">
            <blockquote className="font-crimson text-xl md:text-2xl text-white/80 italic leading-relaxed mb-8">
              "To love you is to breathe in poetry with every moment,<br />
              to find galaxies in your eyes,<br />
              and to discover that home was never a place—<br />
              it was always you."
            </blockquote>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Link to="/about">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105">
              Discover Her Beauty
            </Button>
          </Link>
          
          <Link to="/poem">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105">
              Read Love Poem
            </Button>
          </Link>
        </div>

        <div className="mt-12 animate-float">
          <Heart className="w-16 h-16 text-pink-400 mx-auto animate-heart-beat" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-white/60 text-sm font-crimson">
          Scroll to explore this love letter
        </div>
      </div>
    </div>
  );
};

export default Landing;
