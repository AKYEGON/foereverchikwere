
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Her' },
    { path: '/poem', label: 'Love Poem' },
    { path: '/gratitude', label: 'Gratitude' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-pink-300 transition-colors">
            <Heart className="w-6 h-6 text-pink-400 animate-heart-beat" />
            <span className="font-dancing text-xl">For Chikwere</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-crimson transition-colors ${
                  location.pathname === item.path
                    ? 'text-pink-300 border-b border-pink-300'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-crimson transition-colors ${
                    location.pathname === item.path
                      ? 'text-pink-300'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
