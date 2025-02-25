
import { useState } from 'react';
import { BookOpen, GraduationCap, LineChart, FileText, Projector, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: GraduationCap, label: 'Placements', path: '/placements' },
    { icon: LineChart, label: 'Analytics', path: '/analytics' },
    { icon: FileText, label: 'Previous Papers', path: '/papers' },
    { icon: Projector, label: 'Projects', path: '/projects' },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out",
          !isSidebarOpen && "-translate-x-full"
        )}
      >
        <div className="h-full glass shadow-xl flex flex-col">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-grit-800">GRIT Resources</h2>
          </div>
          <nav className="flex-1 px-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-grit-100/50 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
        <header className="glass sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-grit-100/50 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-grit-600">Welcome to GRIT Student Resources</span>
          </div>
        </header>
        <main className="section-padding">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
