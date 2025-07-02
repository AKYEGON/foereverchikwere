
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const Poem = () => {
  const [visibleStanzas, setVisibleStanzas] = useState(0);

  const stanzas = [
    {
      lines: [
        "Your smile outshines the dawning skies,",
        "Your skin—gold dipped in honey's rise,",
        "Your eyes are galaxies divine,",
        "A universe I claim as mine."
      ]
    },
    {
      lines: [
        "Mama Alpha, your grace is rare,",
        "Each curve a verse, beyond compare,",
        "In your arms, I find my peace,",
        "A love that makes all chaos cease."
      ]
    },
    {
      lines: [
        "Chemu, my heart sings you alone,",
        "My soul was dust 'til you were known,",
        "Your name—my prayer, my morning light,",
        "My breath, my home, my Moon at night."
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleStanzas(prev => prev < 3 ? prev + 1 : prev);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen py-24 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-4">
            To My Moonlight
          </h1>
          <h2 className="font-dancing text-3xl md:text-4xl text-pink-300">
            Chikwere
          </h2>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-12">
            {stanzas.map((stanza, stanzaIndex) => (
              <div
                key={stanzaIndex}
                className={`transition-all duration-1000 ${
                  visibleStanzas > stanzaIndex 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <div className="space-y-3">
                  {stanza.lines.map((line, lineIndex) => (
                    <p 
                      key={lineIndex}
                      className="font-crimson text-xl md:text-2xl text-white/90 leading-relaxed italic"
                      style={{
                        animationDelay: `${(stanzaIndex * 2 + lineIndex * 0.3)}s`
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                {stanzaIndex < stanzas.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <Heart className="w-6 h-6 text-pink-400/60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="font-dancing text-2xl text-pink-300 italic">
              Forever yours, with all my love
            </p>
            <div className="flex justify-center mt-4">
              <Heart className="w-8 h-8 text-pink-400 animate-heart-beat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poem;
