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
      {
        subject: "Operating System II-II",
        link: "https://drive.google.com/drive/folders/1AjZDk3Lfj6h-tS8W2zhSPQ5Sr1_VN-Yg?usp=sharing",
      },
      {
        subject: "Effective Technical Communication II-II",
        link: "https://drive.google.com/drive/folders/1FFKuuyulUiVXClkIPIb0QfTqq62nue2J?usp=sharing",
      },
      {
        subject: "Design and Analysis Of Algorithms II-II",
        link: "https://drive.google.com/drive/folders/1YhGznKnC8EE5nSqCenqJek1Eko3O6G9F?usp=drive_link",
      },
      {
        subject: "Economics and Accounting For Engineers II-II",
        link: "https://drive.google.com/drive/folders/1zO9D_om78H94fsb7hte5wADbK56uxyYB?usp=sharing",
      },
      {
        subject: "Computer Organisation II-II",
        link: "https://drive.google.com/drive/folders/1xhKRFeeiQHT03OIHqp_rx6SXCLWUGy_l?usp=sharing",
      },
      {
        subject: "Environmental Science II-II",
        link: "https://drive.google.com/drive/folders/1awhcl5AI1cqxht5OZ4Ab2eZ64tqyf-tg?usp=sharing",
      },
      {
        subject: "Data Communication and Computer Networks II-II",
        link: "https://drive.google.com/drive/folders/1sm-valp3WSuIC5abWImufd6UDGi8njJy?usp=sharing",
      },
      
    ],
    "Third Year": [
      {
        subject: "Full Stack Development III-II",
        link: "https://drive.google.com/drive/folders/1zn2g3mD3tj6DaK08uLM0ns01hl_NSQfd?usp=sharing",
      },
      {
        subject: "UNIX Programming III-II",
        link: "https://drive.google.com/drive/folders/1nQStDwSesunAZUKpr53IRjIPMfr-5Gk1?usp=sharing",
      },
      {
        subject: "Fundamental of Management and Entrepreneurship III-II",
        link: "https://drive.google.com/drive/folders/1qhMJuPwvSlVwZz1PANWBvE6rsow164ow?usp=sharing",
      },
      {
        subject: "Machine Learning III-II",
        link: "https://drive.google.com/drive/folders/1yr6Z-VnaPo-YRD4mVwT6W2ZIK0NqkdCd?usp=sharing",
      },
      {
        subject: "Data Visualization III-II",
        link: "https://drive.google.com/drive/folders/1WP9fnDipWB9xbpeIc4TaBBU9fMWxZeDp?usp=sharing",
      },
    ],
    "Fourth Year": [
      {
        subject: "Software Project Management IV-II",
        link: "https://drive.google.com/drive/folders/10suhIptBfFwEBrPx5i0rzWWmTMMkDQfz?usp=sharing",
      },
      {
        subject: "Design Patterns IV-II",
        link: "https://drive.google.com/drive/folders/1QwDLCASDq1jRUDBnoaxKn2spPccLhGRz?usp=sharing",
      },
      {
        subject: "E-Commerce IV-II",
        link: "https://drive.google.com/drive/folders/12rTRnsuQMwcZarYC4MD5tVbzM-LKgzfa?usp=sharing",
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
