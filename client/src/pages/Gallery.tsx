
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const photos = [
    {
      id: 1,
      src: "/lovable-uploads/a3f68482-3397-445e-bd7c-e41af74a237b.png",
      caption: "Your radiant smile that stops time",
      description: "Together we create magic, my love and my light"
    },
    {
      id: 2, 
      src: "/lovable-uploads/7f3dd896-7cfc-475a-8de9-c7e922130e79.png",
      caption: "The way you glow in golden hour",
      description: "Natural beauty that needs no filter, perfect as you are"
    },
    {
      id: 3,
      src: "/lovable-uploads/64fff9b6-a2d7-4ae0-8e52-14ca68612bfe.png",
      caption: "Sending love through every gesture",
      description: "Even your playful moments take my breath away"
    },
    {
      id: 4,
      src: "/lovable-uploads/622d664c-bcb6-4ee9-ac02-9c7fa9008053.png",
      caption: "Natural elegance, effortless grace",
      description: "The earth itself seems to celebrate your presence"
    },
    {
      id: 5,
      src: "/lovable-uploads/0bdef80d-41ad-4c4a-b574-44adea25db66.png",
      caption: "Joy personified, happiness incarnate",
      description: "Your laughter is the soundtrack to my soul"
    },
    {
      id: 6,  
      src: "/lovable-uploads/16f077c8-c337-41a7-8ab5-50bd68ac7f25.png",
      caption: "Profile of perfection",
      description: "Every angle tells the story of divine creation"
    },
    {
      id: 7,
      src: "/lovable-uploads/68767f82-ed55-49a8-8d31-7b56c4b04206.png",
      caption: "Free spirit, beautiful soul",
      description: "Movement and grace in perfect harmony"
    },
    {
      id: 8,
      src: "/lovable-uploads/d5c21b43-a5b1-47ab-92c8-5b53332832d1.png",
      caption: "Artistic beauty in every light",
      description: "Even filtered in green, your beauty shines through"
    },
    {
      id: 9,
      src: "/lovable-uploads/b700d6ec-ba6f-403c-a6f5-ff15e6229a68.png",
      caption: "Elegance defined, beauty refined",
      description: "Traditional architecture pales beside your natural beauty"
    },
    {
      id: 10,
      src: "/lovable-uploads/b06afff1-5ea1-44a5-a1d1-bc52f55d7c60.png",
      caption: "Love reflected in our eyes",
      description: "Together we are complete, forever intertwined"
    },
    {
      id: 11,
      src: "/lovable-uploads/d1745a43-a655-4b67-8a78-d587beb2ff20.png",
      caption: "Two hearts, one soul",
      description: "Our love story written in strength and devotion - celebrating 4 months of pure bliss"
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
          {photos.map((photo) => (
            <Card key={photo.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-dancing text-xl text-pink-300 text-center mb-2">
                    {photo.caption}
                  </h3>
                  <p className="font-crimson text-white/70 text-sm text-center italic">
                    {photo.description}
                  </p>
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
              poetry in flesh, divinity in human form, my beloved Chikwere."
            </p>
            <Heart className="w-8 h-8 text-pink-400 mx-auto mt-6 animate-heart-beat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
