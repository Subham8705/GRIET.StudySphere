
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projectCategories = {
    "Micro Projects": [
      {
        title: "Weather App",
        description: "A simple weather application using OpenWeatherMap API",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/freeCodeCamp/weather-app",
        demo: "https://reactjs-weather-app.netlify.app/",
      },
      {
        title: "Todo List Manager",
        description: "A task management application with local storage",
        technologies: "React, Tailwind CSS",
        github: "https://github.com/ainthowry/React-Todo-List",
        demo: "https://react-todo-app-v2.netlify.app/",
      },
      {
        title: "Calculator",
        description: "A functional calculator with basic operations",
        technologies: "HTML, CSS, JavaScript",
        github: "https://github.com/ahfarmer/calculator",
        demo: "https://ahfarmer.github.io/calculator/",
      },
    ],
    "Mini Projects": [
      {
        title: "E-commerce Product Page",
        description: "A responsive product page with cart functionality",
        technologies: "React, Redux, Styled Components",
        github: "https://github.com/adrianhajdin/ecommerce_sanity_stripe",
        demo: "https://jsm-ecommerce.netlify.app/",
      },
      {
        title: "Blog Platform",
        description: "A simple blog platform with CRUD operations",
        technologies: "MERN Stack (MongoDB, Express, React, Node.js)",
        github: "https://github.com/safak/blog-app",
        demo: "https://mern-blog-app-client.netlify.app/",
      },
      {
        title: "Student Management System",
        description: "A system to manage student records and attendance",
        technologies: "PHP, MySQL, Bootstrap",
        github: "https://github.com/sandip-jadhav/school-management-system",
        demo: "https://student-management-system-demo.netlify.app/",
      },
    ],
    "Major Projects": [
      {
        title: "AI-based Crop Recommendation System",
        description: "An intelligent system that recommends crops based on soil parameters and climate conditions",
        technologies: "Python, TensorFlow, Flask, React",
        github: "https://github.com/Gladiator07/Crop-Recommendation-System",
        demo: "https://crop-recommendation-system.netlify.app/",
      },
      {
        title: "Smart Attendance System using Face Recognition",
        description: "An automated attendance system using facial recognition technology",
        technologies: "Python, OpenCV, TensorFlow, Django",
        github: "https://github.com/priya-dwivedi/face_and_emotion_detection",
        demo: "https://face-recognition-attendance.netlify.app/",
      },
      {
        title: "Telemedicine Platform",
        description: "A comprehensive platform connecting patients with doctors remotely",
        technologies: "MERN Stack, WebRTC, Socket.io",
        github: "https://github.com/Rahul-Roy-21/Doctor-Appointment-App",
        demo: "https://telemedicine-platform-demo.netlify.app/",
      },
      {
        title: "Blockchain-based Academic Credential Verification",
        description: "A secure system to verify academic credentials using blockchain technology",
        technologies: "Ethereum, Solidity, Web3.js, React",
        github: "https://github.com/lohitkolluri/Blockchain-Certificate-Verification",
        demo: "https://credential-verification-blockchain.netlify.app/",
      },
    ],
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Student Projects Showcase</h1>
        
        <Tabs defaultValue="Major Projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="Micro Projects">Micro Projects</TabsTrigger>
            <TabsTrigger value="Mini Projects">Mini Projects</TabsTrigger>
            <TabsTrigger value="Major Projects">Major Projects</TabsTrigger>
          </TabsList>
          
          {Object.entries(projectCategories).map(([category, projects]) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCode className="h-5 w-5" />
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>Technologies:</strong> {project.technologies}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4 border-t">
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" /> Source Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Projects;
