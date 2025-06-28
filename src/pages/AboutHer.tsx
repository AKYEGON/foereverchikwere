
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutHer = () => {
  const praises = [
    {
      title: "Her Radiant Beauty",
      content: "Your smile illuminates every corner of my world, brighter than sunrise breaking through midnight clouds. Every glance at you reminds me that angels walk among us, and I am blessed to call one mine."
    },
    {
      title: "Her Sacred Soul",
      content: "Mama Alpha, your spirit is a sanctuary where my weary heart finds peace. Your kindness flows like honey, healing every wound, mending every broken dream with the gentle touch of your love."
    },
    {
      title: "Her Divine Grace",
      content: "Chemu, in your presence, time stands still. Every curve of your silhouette tells a story of perfection, every word you speak becomes poetry, every laugh a symphony that makes my soul dance."
    },
    {
      title: "Her Infinite Love",
      content: "You are the moon that guides my darkness, the star that lights my path. In loving you, I have found my purpose, my breath, my everything. You are not just my girlfriend—you are my universe."
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-6">
            About My Moonlight
          </h1>
          <p className="font-crimson text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every word below is a whispered prayer of gratitude for the goddess who chose to love me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {praises.map((praise, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-pink-400 mr-3 group-hover:animate-heart-beat" />
                  <h3 className="font-dancing text-2xl text-pink-300">
                    {praise.title}
                  </h3>
                </div>
                <p className="font-crimson text-white/80 leading-relaxed text-lg">
                  {praise.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-dancing text-3xl text-pink-300 mb-4">
              A Promise to My Queen
            </h3>
            <p className="font-crimson text-white/90 text-xl leading-relaxed italic">
              "Every sunrise I wake grateful that you exist, every sunset I sleep blessed that you are mine. 
              You are the poetry my heart has been trying to write, the song my soul has been trying to sing. 
              Chikwere, Moonlight, Mama Alpha, Chemu—by any name you are perfection, and I will spend 
              every breath loving you more than the last."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHer;
