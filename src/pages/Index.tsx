
import MainLayout from '../components/MainLayout';
import { Card } from '@/components/ui/card';
import { GraduationCap, BookOpen, LineChart, Projector } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Study Resources",
      description: "Access comprehensive study materials and previous year question papers"
    },
    {
      icon: GraduationCap,
      title: "Placement Support",
      description: "Track placement statistics and prepare with industry insights"
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Monitor academic progress and identify improvement areas"
    },
    {
      icon: Projector,
      title: "Project Showcase",
      description: "Explore innovative projects by senior students"
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="glass rounded-2xl p-12 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-grit-800 mb-6">
              Welcome to GRIT Student Resources
            </h1>
            <p className="text-xl text-grit-600 max-w-3xl mx-auto">
              Your complete academic companion for success at Gokaraju Rangaraju Institute of Technology
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="glass p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-grit-100">
                  <feature.icon className="h-6 w-6 text-grit-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-grit-800">{feature.title}</h3>
                  <p className="text-grit-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* Stats Section */}
        <section className="glass rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-grit-800 mb-2">95%</div>
              <div className="text-grit-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-grit-800 mb-2">500+</div>
              <div className="text-grit-600">Resources Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-grit-800 mb-2">200+</div>
              <div className="text-grit-600">Student Projects</div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
