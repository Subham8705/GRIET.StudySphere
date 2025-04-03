import { Card } from "@/components/ui/card";
import MainLayout from "../components/MainLayout";
import { ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  notes?: string;
  videoUrl: string;
}

interface ResourceCategory {
  name: string;
  description: string;
  resources: Resource[];
}

const resourceCategories: ResourceCategory[] = [
  {
    name: "Data Structures & Algorithms",
    description: "Master fundamental DSA concepts with comprehensive resources",
    resources: [
      {
        title: "Introduction to DSA",
        description: "Basic concepts and importance of Data Structures",
        notes: "Covers Arrays, Linked Lists, Stacks, and Queues",
        videoUrl: "https://www.youtube.com/watch?v=5_5oE5lgrhw",
      },
      {
        title: "Sorting Algorithms",
        description: "Learn different sorting techniques and their implementations",
        notes: "Includes Bubble Sort, Quick Sort, and Merge Sort",
        videoUrl: "https://www.youtube.com/watch?v=kgBjXUE_Nwc",
      },
      {
        title: "Graph Algorithms",
        description: "Understanding graph traversal and shortest path algorithms",
        notes: "BFS, DFS, Dijkstra's Algorithm",
        videoUrl: "https://www.youtube.com/watch?v=tWVWeAqZ0WU",
      },
    ],
  },
  {
    name: "Python Programming",
    description: "Learn Python programming from basics to advanced concepts",
    resources: [
      {
        title: "Python Basics",
        description: "Introduction to Python syntax and basic programming concepts",
        notes: "Variables, Data Types, Control Flow",
        videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
      },
      {
        title: "Object-Oriented Programming in Python",
        description: "Learn OOP concepts using Python",
        notes: "Classes, Objects, Inheritance, Polymorphism",
        videoUrl: "https://www.youtube.com/watch?v=JeznW_7DlB0",
      },
      {
        title: "Python Libraries and Frameworks",
        description: "Popular Python libraries for development",
        notes: "NumPy, Pandas, Django basics",
        videoUrl: "https://www.youtube.com/watch?v=WGJJIrtnfpk",
      },
    ],
  },
  {
    name: "Java Programming",
    description: "Comprehensive Java programming resources",
    resources: [
      {
        title: "Java Fundamentals",
        description: "Core Java concepts and syntax",
        notes: "Basic syntax, OOP concepts, Exception handling",
        videoUrl: "https://www.youtube.com/watch?v=eIrMbAQSU34",
      },
      {
        title: "Java Collections Framework",
        description: "Understanding Java collections and their implementations",
        notes: "Lists, Sets, Maps, and their use cases",
        videoUrl: "https://www.youtube.com/watch?v=GdAon80-0KA",
      },
      {
        title: "Java Multithreading",
        description: "Learn concurrent programming in Java",
        notes: "Threads, Synchronization, Thread Pools",
        videoUrl: "https://www.youtube.com/watch?v=mTGdtC9f4EU",
      },
    ],
  },
];

const Resources = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-grit-800 dark:text-white">Learning Resources</h1>
        
        <div className="space-y-12">
          {resourceCategories.map((category, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold mb-4 text-grit-800 dark:text-gray-200">{category.name}</h2>
              <p className="text-grit-600 dark:text-gray-400 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card 
                    key={resourceIndex} 
                    className="glass p-6 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-grit-800 dark:text-white">{resource.title}</h3>
                    <p className="text-grit-600 dark:text-gray-400 mb-4">{resource.description}</p>
                    
                    {resource.notes && (
                      <div className="mb-4">
                        <strong className="text-grit-700 dark:text-gray-300">Notes:</strong>
                        <p className="text-grit-600 dark:text-gray-400">{resource.notes}</p>
                      </div>
                    )}

                    <a
                      href={resource.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition-colors"
                    >
                      Watch Video <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
