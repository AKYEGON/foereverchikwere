
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const Gratitude = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);

  const gratitudeMessages = [
    "Thank you for being my strength when the world felt heavy",
    "Thank you for never leaving my side, even in my darkest moments",
    "Thank you for loving me unconditionally, flaws and all",
    "Thank you for making every day feel like a blessing",
    "Thank you for your patience when I stumble and fall",
    "Thank you for believing in me when I couldn't believe in myself",
    "Thank you for your gentle touch that heals my soul",
    "Thank you for your laughter that lights up my world",
    "Thank you for choosing me, again and again",
    "Thank you for being my home, my peace, my everything",
    "Thank you for showing me what true love really means",
    "Thank you for being exactly who you are, my Moonlight"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages(prev => 
        prev < gratitudeMessages.length ? prev + 1 : prev
      );
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-6">
            Gratitude Wall
          </h1>
          <p className="font-crimson text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every heartbeat whispers thank you, every breath carries my gratitude for you
          </p>
        </div>

        <div className="space-y-6">
          {gratitudeMessages.map((message, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                visibleMessages > index
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 transform translate-x-12'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={`p-6 rounded-2xl backdrop-blur-sm border border-white/20 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-r from-pink-500/10 to-purple-600/10 ml-0 mr-8' 
                  : 'bg-gradient-to-l from-blue-500/10 to-purple-600/10 ml-8 mr-0'
              }`}>
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <p className="font-crimson text-lg md:text-xl text-white/90 leading-relaxed">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-heart-beat" />
            <h3 className="font-dancing text-3xl text-pink-300 mb-4">
              My Eternal Promise
            </h3>
            <p className="font-crimson text-white/90 text-xl leading-relaxed italic">
              "For every star in the sky, I have a reason to be grateful for you. 
              For every wave in the ocean, I have a way you've made my life better. 
              My gratitude for you is infinite, my love—deeper than any word could ever express."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
