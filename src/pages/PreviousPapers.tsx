import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FolderOpen } from "lucide-react";

const PreviousPapers = () => {
  const yearWisePapers = {
    "First Year": [
      {
        subject: "Engineering Chemistry I-I",
        link: "https://drive.google.com/drive/folders/1iVaD9igfex8ZNhbzXofL-vadWgW6nxwH?usp=sharing",
      },
      {
        subject: "Linear Algebra And Function Approximation I-I",
        link: "https://drive.google.com/drive/folders/16bsXZX8zMmt-Pg_-124WNzj1B3gqzASn?usp=sharing",
      },
      {
        subject: "Fundamentals Of Electrical Engineering I-I",
        link: "https://drive.google.com/drive/folders/1pOpftP2YrOFh5_5kOvSvV0qV5XQpkIj8?usp=sharing",
      },
      {
        subject: "Programming for Problem Solving I-I",
        link: "https://drive.google.com/file/d/1WNztUiCn9QvRDznUwz9Rmm_xtKFFKdXL/view?usp=drive_link",
      },
      {
        subject: "Data Structures and Algorithms I-II",
        link: "https://drive.google.com/drive/folders/1gqmru-dvR-D-tPQ8g0YsAWO7wFfe_8zU?usp=sharing",
      },
      {
        subject: "DEVC I-II",
        link: "https://drive.google.com/drive/folders/10D2y6rk58Kp2ntkyz-DZheaoxusPqJqQ",
      },
      {
        subject: "Applied Physics I-II",
        link: "https://drive.google.com/drive/folders/1i1zRC9zJaqCS3RIiToxLbXlXR6Am5nsw?usp=sharing",
      },
      {
        subject: "Graphical Engineering I-II",
        link: "https://drive.google.com/drive/folders/1lnaVe5FQB68VVb910xUKyNwZI2vvigcQ?usp=sharing",
      },
      {
        subject: "English I-II",
        link: "https://drive.google.com/drive/folders/1CFO7gM_giQtBkBmo9SfOUQDpPvwOdyXo?usp=sharing",
      },
    ],
    "Second Year": [
      {
        subject: "JAVA II-I",
        link: "https://drive.google.com/file/d/1bfUmeBqFaeZYJK3DtK7ACLaOrWkeUs6A/view?usp=drive_link",
      },
      {
        subject: "Digital Logic Design II-I",
        link: "https://drive.google.com/file/d/1M9TKMRFNDDCU9hCJ93DTyqm-eVy52iAJ/view?usp=sharing",
      },
      {
        subject: "Probability And Statistics II-I",
        link: "https://drive.google.com/file/d/1za1NH88jDYvBfd7MurXjNdy9fI6ZSaZd/view?usp=sharing",
      },
      {
        subject: "Discrete Mathematics II-I",
        link: "https://drive.google.com/file/d/16I1Z_HaRskXZnBPKpIHVH1wGRUlaIHf8/view?usp=sharing",
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
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Previous Year Question Papers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(yearWisePapers).map(([year, papers]) => (
            <Card key={year} className="hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold dark:text-white">
                  <FolderOpen className="inline-block mr-2 h-6 w-6" />
                  {year}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {papers.map((paper, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
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
