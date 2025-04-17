import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, LineChart, FileText, Projector, Menu, ArrowLeft, Home, NotebookPen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSidebarOpen(isHovering);
    }, 200);
    return () => clearTimeout(timer);
  }, [isHovering]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: GraduationCap, label: 'Placements', path: '/placements' },
    // { icon: LineChart, label: 'Analytics', path: '/analytics' },
    {icon: NotebookPen, label: 'Notes', path: '/notes'},
    { icon: FileText, label: 'Previous Papers', path: '/papers' },
    { icon: Projector, label: 'Projects', path: '/projects' },
  ];

  return (
    <div
      className="min-h-screen flex relative bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://sefet.in/assets/img/griet-campus.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/80 z-0" />

      {/* Hover Detection */}
      <div
        className="fixed inset-y-0 left-0 w-2 z-50 cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out",
          !isSidebarOpen && "-translate-x-full"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="h-full glass dark:bg-gray-800/80 dark:shadow-md shadow-xl flex flex-col relative z-10">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-grit-800 dark:text-gray-200">GRIET Resources</h2>
          </div>
          <nav className="flex-1 px-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-grit-100/50 dark:hover:bg-gray-700 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "flex-1 transition-all duration-300 relative z-10",
          isSidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        <header className="glass dark:bg-gray-800 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-grit-100/50 dark:hover:bg-gray-700 transition-colors"
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            {!isHomePage && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleGoBack}
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://img.collegepravesh.com/2021/06/GRIET-Hyderabad-Logo.png"
              alt="GRIET Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-sm text-grit-600 dark:text-gray-400">Welcome to GRIET Student Resources</span>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Section */}
        <main className="section-padding dark:bg-transparent dark:text-gray-200">
          <div className="animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
