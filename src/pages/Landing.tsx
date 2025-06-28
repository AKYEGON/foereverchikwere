
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuote(true), 1000);
    const timer2 = setTimeout(() => setShowSecondSection(true), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <FloatingHearts />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
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
              <Button variant="outline" className="border-pink-300/50 text-pink-200 hover:bg-pink-300/10 hover:border-pink-300 px-8 py-3 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105">
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
      </section>

      {/* Love Declaration Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {showSecondSection && (
            <div className="animate-fade-in">
              <Sparkles className="w-12 h-12 text-purple-300 mx-auto mb-8 animate-pulse" />
              <h2 className="font-playfair text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-8">
                My Universe in Human Form
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="font-dancing text-2xl text-pink-300 mb-4">Mama Alpha</h3>
                  <p className="font-crimson text-white/80 text-sm">
                    Your strength guides me, your love protects me, your presence completes me
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Star className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="font-dancing text-2xl text-purple-300 mb-4">Moonlight</h3>
                  <p className="font-crimson text-white/80 text-sm">
                    You illuminate my darkest nights and brighten my every dawn
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-dancing text-2xl text-blue-300 mb-4">Chemu</h3>
                  <p className="font-crimson text-white/80 text-sm">
                    My beloved, my treasure, my heart's eternal home
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-12">
              Explore Our Love Story
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/about" className="group">
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:animate-heart-beat" />
                  <h3 className="font-dancing text-xl text-pink-300 mb-2">About Her</h3>
                  <p className="font-crimson text-white/70 text-sm">Discover her divine beauty</p>
                </div>
              </Link>
              
              <Link to="/poem" className="group">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-purple-500/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105">
                  <Star className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
                  <h3 className="font-dancing text-xl text-purple-300 mb-2">Love Poem</h3>
                  <p className="font-crimson text-white/70 text-sm">Read verses of devotion</p>
                </div>
              </Link>
              
              <Link to="/gratitude" className="group">
                <div className="bg-gradient-to-br from-blue-500/20 to-pink-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-blue-500/30 hover:to-pink-600/30 transition-all duration-300 transform hover:scale-105">
                  <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-spin" />
                  <h3 className="font-dancing text-xl text-blue-300 mb-2">Gratitude</h3>
                  <p className="font-crimson text-white/70 text-sm">Messages of thankfulness</p>
                </div>
              </Link>
              
              <Link to="/gallery" className="group">
                <div className="bg-gradient-to-br from-pink-500/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:from-pink-500/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="font-dancing text-xl text-pink-300 mb-2">Gallery</h3>
                  <p className="font-crimson text-white/70 text-sm">Moments of pure beauty</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
