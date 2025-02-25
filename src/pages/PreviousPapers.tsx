
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FolderOpen } from "lucide-react";

const PreviousPapers = () => {
  const yearWisePapers = {
    "First Year": [
      {
        subject: "Engineering Mathematics - I",
        link: "https://drive.google.com/file/sample1",
      },
      {
        subject: "Engineering Physics",
        link: "https://drive.google.com/file/sample2",
      },
      {
        subject: "Programming in C",
        link: "https://drive.google.com/file/sample3",
      },
    ],
    "Second Year": [
      {
        subject: "Data Structures",
        link: "https://drive.google.com/file/sample4",
      },
      {
        subject: "Digital Logic Design",
        link: "https://drive.google.com/file/sample5",
      },
      {
        subject: "Object Oriented Programming",
        link: "https://drive.google.com/file/sample6",
      },
    ],
    "Third Year": [
      {
        subject: "Database Management Systems",
        link: "https://drive.google.com/file/sample7",
      },
      {
        subject: "Operating Systems",
        link: "https://drive.google.com/file/sample8",
      },
      {
        subject: "Computer Networks",
        link: "https://drive.google.com/file/sample9",
      },
    ],
    "Fourth Year": [
      {
        subject: "Software Engineering",
        link: "https://drive.google.com/file/sample10",
      },
      {
        subject: "Machine Learning",
        link: "https://drive.google.com/file/sample11",
      },
      {
        subject: "Cloud Computing",
        link: "https://drive.google.com/file/sample12",
      },
    ],
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Previous Year Question Papers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(yearWisePapers).map(([year, papers]) => (
            <Card key={year} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">
                  <FolderOpen className="inline-block mr-2 h-6 w-6" />
                  {year}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {papers.map((paper, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {paper.subject}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default PreviousPapers;
