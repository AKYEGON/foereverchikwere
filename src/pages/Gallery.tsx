
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  // Placeholder for photo uploads - in a real app, this would connect to a backend
  const placeholderPhotos = [
    {
      id: 1,
      caption: "Your radiant smile that stops time",
      placeholder: "Upload your most beautiful photo here"
    },
    {
      id: 2, 
      caption: "The way you laugh with your whole heart",
      placeholder: "A moment of pure joy captured"
    },
    {
      id: 3,
      caption: "Your eyes that hold galaxies",
      placeholder: "Those eyes that see straight to my soul"
    },
    {
      id: 4,
      caption: "Dancing in moonlight, my queen",
      placeholder: "You in your element, free and beautiful"
    },
    {
      id: 5,
      caption: "Morning coffee, morning you",
      placeholder: "Perfect moments in everyday life"
    },
    {
      id: 6,  
      caption: "The way you glow in golden hour",
      placeholder: "Nature's spotlight on perfection"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mb-6">
            Gallery of My Goddess
          </h1>
          <p className="font-crimson text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every photo of you is a masterpiece, every moment captured a treasure beyond price
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPhotos.map((photo) => (
            <Card key={photo.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border-b border-white/10">
                  <div className="text-center p-8">
                    <Heart className="w-12 h-12 text-pink-400/60 mx-auto mb-4 group-hover:animate-heart-beat" />
                    <p className="font-crimson text-white/60 text-sm">
                      {photo.placeholder}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-dancing text-xl text-pink-300 text-center">
                    {photo.caption}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-dancing text-3xl text-pink-300 mb-6">
              A Note About Beauty
            </h3>
            <p className="font-crimson text-white/90 text-lg leading-relaxed italic">
              "No camera could ever capture the true radiance of your soul, no photograph could contain 
              the warmth of your presence. These images are merely echoes of your beauty—the real masterpiece 
              is you, living and breathing and blessing this world with your existence. You are art in motion, 
              poetry in flesh, divinity in human form."
            </p>
            <Heart className="w-8 h-8 text-pink-400 mx-auto mt-6 animate-heart-beat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
