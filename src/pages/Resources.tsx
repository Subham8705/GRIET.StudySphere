import { useState } from "react";
import { Card } from "@/components/ui/card";
import MainLayout from "../components/MainLayout";
import { ExternalLink, X } from "lucide-react";

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
    name: "Introduction to Programming (with C)",
    description: "Learn the basics of Programming",
    resources:[
      {
        title: "Introduction Programming and C",
        description: "Basic about Programming",
        notes: "Covers about programming, What is C",
        videoUrl: "https://www.youtube.com/watch?v=EjavYOFoJJ0",
      },
      {
        title: "Basic of C",
        description: "Basic about C programming ",
        notes: "Covers all the basic Programming concepts about C",
        videoUrl: "https://www.youtube.com/watch?v=87SH2Cn0s9A",
      },
      {
        title: "Pointers and Structures in C",
        description: "Pointer to Structure in C",
        notes: "Idea of Pointers, Defining Structures, declaring and initialisation of both",
        videoUrl: "https://www.youtube.com/watch?v=f0Uw1x8albM",
      },
      {
        title: "File Handling and Preprocessor",
        description: "File Handling | Preprocessor | Dynamic Memory Allocation",
        notes: "FIle Handling, Preprocessor, DMA,",
        videoUrl: "https://www.youtube.com/watch?v=4DljBbiC2p4",
      },
    ]
  },
  {
    name: "Data Structures & Algorithms",
    description: "Master fundamental DSA concepts with comprehensive resources",
    resources: [
      {
        title: "Introduction to DSA",
        description: "Basic concepts and importance of Data Structures",
        notes: "Covers starting and to be known concepts related to DSA",
        videoUrl: "https://www.youtube.com/watch?v=5_5oE5lgrhw",
      },
      {
        title: "Time Complexity",
        description: "How to Calculate Time Complexity of an Algorithm",
        notes: "Trick + Questions on Time Complexity",
        videoUrl: "https://www.youtube.com/watch?v=STL8ESuETmM",
      },
      {
        title: "Arrays in DSA",
        description: "Introduction in the concepts of Arrays",
        notes: "Increases understanding and uses about arrays",
        videoUrl: "https://www.youtube.com/watch?v=AT14lCXuMKI",
      },
      {
        title: "Stacks in DSA",
        description: "Introduction in the concepts of Stacks",
        notes: "Increases understanding and uses about stacks",
        videoUrl: "https://www.youtube.com/watch?v=-n2rVJE4vto",
      },
      {
        title: "Queue in DSA",
        description: "Introduction in the concepts of Queues",
        notes: "Increases understanding and uses about stacks",
        videoUrl: "https://www.youtube.com/watch?v=zp6pBNbUB2U",
      },
      {
        title: "Linked List in DSA",
        description: "Introduction in the concepts of Linked List",
        notes: "Increases understanding and uses about Linked List",
        videoUrl: "https://www.youtube.com/watch?v=dmb1i4oN5oE",
      },
      {
        title: "Sorting Algorithms",
        description: "Learn different sorting techniques and their implementations",
        notes: "Includes Bubble Sort, Selection , Insertion , Quick, Radix, Shell, Counting, Heap Sort",
        videoUrl: "https://www.youtube.com/watch?v=o4bAoo_gFBU&list=PLuZ_bd9XlByzTIP5j1aWXo7smCIxvzd2D",
      },
      {
        title: "Binary Search Trees in DSA",
        description: "Everything you need to know about Trees",
        notes: "Contains a playlist of Binary Search Tree(traversal, code,insertion,deletion) and AVL Tree",
        videoUrl: "https://www.youtube.com/watch?v=YAdLFsTG70w&list=PLAuemBFSZV1oE256PESc8ku8MX3xMQYJF",
      },
      {
        title: "Hashing Technique to Resolve Collision",
        description: "Teaches the technique to solve Collisions",
        notes: "Seperate Chaining and Linear Probing",
        videoUrl: "https://www.youtube.com/watch?v=zeMa9sg-VJM",
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
        notes: "Video to start your journey in Python",
        videoUrl: "https://www.youtube.com/watch?v=qHJjMvHLJdg",
      },
      {
        title: "Object-Oriented Programming in Python",
        description: "Learn OOP concepts using Python",
        notes: "Classes, Objects, Constructors, Instances, Abstraction and Encapsulation",
        videoUrl: "https://www.youtube.com/watch?v=HeW-D6KpDwY",
      },
      {
        title: "Python Libraries and Frameworks",
        description: "Popular Python libraries for development",
        notes: "Information about every Python library you need to know",
        videoUrl: "https://www.youtube.com/watch?v=Yh5gcLG6C3Q",
      },
      {
        title: "Basics of making website frontend using python (Django)",
        description: "Python Website Full Tutorial",
        notes: "Flask, Authentication, Database and More",
        videoUrl: "https://www.youtube.com/watch?v=dam0GPOAvVI&pp=ygUUd2Vic2l0ZSB1c2luZyBweXRob24%3D",
      },
      {
        title: "Tutorial of Python Machine Learning",
        description: "Python Machine Learning Tutorial (Data Science)",
        notes: "Preparing the Data, Learning and predicting, Calculating Accuracy, Persisting Models",
        videoUrl: "https://www.youtube.com/watch?v=Yh5gcLG6C3Q",
      },
    ],
  },
  {
    name: "Java Programming",
    description: "Comprehensive Java programming resources",
    resources: [
      {
        title: "Java For Beginners",
        description: "Java concepts and syntax",
        notes: "Syntax, operators, loops, etc",
        videoUrl: "https://www.youtube.com/watch?v=UmnCZ7-9yDY",
      },
      {
        title: "Java Collections Framework",
        description: "Understanding Java collections and their implementations",
        notes: "Lists, Sets, Maps, and their use cases",
        videoUrl: "https://www.youtube.com/watch?v=rH0winlka8A",
      },
      {
        title: "Java String Methods",
        description: "Understanding in depth about Strings Methods and changes which can be done using this concept",
        notes: "All the methods present in String class",
        videoUrl: "https://www.youtube.com/watch?v=1SJK4Y4axXs",
      },
      {
        title: "Java StringBuilder",
        description: "Understanding in depth about Strings and StringBuilders in Java",
        notes: "String Working, Comparision, Builder, etc.",
        videoUrl: "https://www.youtube.com/watch?v=ZLDwskEhIFg",
      },
      {
        title: "Java OOPS concept",
        description: "Understanding and learning about OOPS concept through JAVA",
        notes: "Polymorphism, Inheritence, Packages, Access Modifiers, Encapsulation, Abstraction, Static keyword",
        videoUrl: "https://www.youtube.com/watch?v=GdAon80-0KA",
      },
      {
        title: "Java Multithreading",
        description: "Learn concurrent programming in Java",
        notes: "Threads, Synchronization, Thread Pools",
        videoUrl: "https://www.youtube.com/watch?v=mTGdtC9f4EU",
      },
      {
        title: "Java Exception Handling",
        description: "Handling Specific Exceptions in Java",
        notes: "Teaches how to handle Specific Exceptions in java and also teaches required concepts",
        videoUrl: "https://www.youtube.com/watch?v=UXvMSMnYAzE",
      },
      {
        title: "Introduction to Applets",
        description: "Introduction to Applets and Applet Life Cycle",
        notes: "Teaches about basics of applets and it's life cycle",
        videoUrl: "https://www.youtube.com/watch?v=YEzX3l6PXCk",
      },
      {
        title: "Event Handling in Java",
        description: "All Event Handling in Java",
        notes: "Mouse events, Key events and AWT controls",
        videoUrl: "https://www.youtube.com/watch?v=DNmXTT-hZBM&list=PLUXrqpAZjXYoHPSc0c3Oyz_HC1GRA0ZIn",
      },
      {
        title: "DSA using JAVA",
        description: "Learn Data Structures and Algorithms (DSA) in Java",
        notes: "Declaring and using all the collections and some problems based on them",
        videoUrl: "https://www.youtube.com/watch?v=4_HOnhB64Dg",
      },
    ],
  },
  {
    name: "Database Management System",
    description: "Comprehensive Database resources",
    resources:[
      {
        title: "Theories of DBMS",
        description: "All theories in DBMS",
        notes: "Covers almost all topics you need to know about DBMS",
        videoUrl: "https://www.youtube.com/watch?v=T7AxM7Vqvaw&list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc",
      },
      {
        title: "Oracle SQL",
        description: "Oracle SQL Tutorial and Questions",
        notes: "Covers about the SQL commands used in oracle",
        videoUrl: "https://www.youtube.com/watch?v=ObbNGhcxXJA",
      },
      {
        title: "MongoDB Tutorial",
        description: "Tutorial which teaches basics about MongoDB",
        notes: "Covers about the MongoDB",
        videoUrl: "https://www.youtube.com/watch?v=J6mDkcqU_ZE",
      },
    ]
  },
];


const getYoutubeEmbedUrl = (url: string) => {
  const videoId = new URL(url).searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
};

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const toggleCategoryExpansion = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const filteredCategories =
    selectedCategory === "All"
      ? resourceCategories
      : resourceCategories.filter((cat) => cat.name === selectedCategory);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-grit-800 dark:text-white">Learning Resources</h1>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setActiveVideo(null); // Reset open video when category changes
            }}
            className="w-full sm:w-auto border dark:border-gray-700 p-2 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            <option value="All">All Categories</option>
            {resourceCategories.map((category, idx) => (
              <option key={idx} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-12">
          {filteredCategories.map((category, index) => {
            const isExpanded = expandedCategories[category.name];
            const resourcesToShow =
              selectedCategory === "All" && !isExpanded
                ? category.resources.slice(0, 3)
                : category.resources;

            return (
              <section key={index}>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-grit-800 dark:text-gray-200">
                  {category.name}
                </h2>
                <p className="text-grit-600 dark:text-gray-400 mb-6">{category.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resourcesToShow.map((resource, resourceIndex) => {
                    const embedUrl = getYoutubeEmbedUrl(resource.videoUrl);
                    const isActive = activeVideo === embedUrl;

                    return (
                      <Card
                        key={resourceIndex}
                        className="glass p-4 sm:p-6 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
                      >
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-grit-800 dark:text-white">
                          {resource.title}
                        </h3>
                        <p className="text-grit-600 dark:text-gray-400 mb-4">{resource.description}</p>

                        {resource.notes && (
                          <div className="mb-4">
                            <strong className="text-grit-700 dark:text-gray-300">Notes:</strong>
                            <p className="text-grit-600 dark:text-gray-400">{resource.notes}</p>
                          </div>
                        )}

                        <button
                          onClick={() => setActiveVideo(isActive ? null : embedUrl)}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition-colors font-medium"
                        >
                          {isActive ? "Hide Video" : "Watch Video"}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </button>

                        {isActive && (
                          <div className="mt-4 aspect-w-16 aspect-h-9">
                            <iframe
                              src={embedUrl}
                              title={resource.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-64 sm:h-72 rounded-lg"
                            ></iframe>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>

                {selectedCategory === "All" && category.resources.length > 3 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => toggleCategoryExpansion(category.name)}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 font-medium text-base sm:text-lg px-4 py-2"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;