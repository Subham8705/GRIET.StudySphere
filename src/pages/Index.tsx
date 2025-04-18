import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import { Card } from '@/components/ui/card';
import { BookOpen, FileText, Projector,NotebookTabs } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Study Resources",
      description: "Access comprehensive study materials and previous year question papers",
      link: "/resources"
    },
    {
      icon: NotebookTabs,
      title: "Notes",
      description: "Find semester-wise subject notes with unit-wise PDFs for easy reference",
      link: "/notes"
    },    
    {
      icon: FileText,
      title: "Previous Sem Papers",
      description: "Access past semester question papers to prepare effectively",
      link: "/papers"
    },    
    {
      icon: Projector,
      title: "Project Showcase",
      description: "Explore innovative projects by senior students",
      link: "/projects"
    }
  ];

  const handleCardClick = (link?: string) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="glass rounded-2xl p-12 mb-8 dark:bg-gray-800 dark:text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-grit-800 dark:text-white mb-6">
              Welcome to GRIET Student Resources
            </h1>
            <p className="text-xl text-grit-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your complete academic companion for success at Gokaraju Rangaraju Institute of Engineering and Technology
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass p-6 hover:shadow-lg transition-shadow cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => handleCardClick(feature.link)}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-grit-100 dark:bg-gray-700">
                  <feature.icon className="h-6 w-6 text-grit-600 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-grit-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-grit-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* Stats Section */}
        <section className="glass rounded-2xl p-8 dark:bg-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-grit-800 dark:text-white mb-2">95%</div>
              <div className="text-grit-600 dark:text-gray-400">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-grit-800 dark:text-white mb-2">100+</div>
              <div className="text-grit-600 dark:text-gray-400">Resources Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-grit-800 dark:text-white mb-2">50+</div>
              <div className="text-grit-600 dark:text-gray-400">Student Projects</div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
