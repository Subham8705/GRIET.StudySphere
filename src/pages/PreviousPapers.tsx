import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FolderOpen } from "lucide-react";

const pyqData: {
  [key: string]: {
    [year: string]: { subject: string; link: string; isNew?: boolean }[];
  };
} = {
  GR22: {
    "First Year": [
      { subject: "Engineering Chemistry I-I", link: "https://drive.google.com/drive/folders/1iVaD9igfex8ZNhbzXofL-vadWgW6nxwH?usp=sharing" },
      { subject: "Linear Algebra And Function Approximation I-I", link: "https://drive.google.com/drive/folders/16bsXZX8zMmt-Pg_-124WNzj1B3gqzASn?usp=sharing" },
      { subject: "Fundamentals Of Electrical Engineering I-I", link: "https://drive.google.com/drive/folders/1pOpftP2YrOFh5_5kOvSvV0qV5XQpkIj8?usp=sharing" },
      { subject: "Programming for Problem Solving I-I", link: "https://drive.google.com/file/d/1WNztUiCn9QvRDznUwz9Rmm_xtKFFKdXL/view?usp=drive_link" },
      { subject: "Data Structures and Algorithms I-II", link: "https://drive.google.com/drive/folders/1gqmru-dvR-D-tPQ8g0YsAWO7wFfe_8zU?usp=sharing" },
      { subject: "DEVC I-II", link: "https://drive.google.com/drive/folders/10D2y6rk58Kp2ntkyz-DZheaoxusPqJqQ" },
      { subject: "Applied Physics I-II", link: "https://drive.google.com/drive/folders/1i1zRC9zJaqCS3RIiToxLbXlXR6Am5nsw?usp=sharing" },
      { subject: "Graphical Engineering I-II", link: "https://drive.google.com/drive/folders/1lnaVe5FQB68VVb910xUKyNwZI2vvigcQ?usp=sharing" },
      { subject: "English I-II", link: "https://drive.google.com/drive/folders/1CFO7gM_giQtBkBmo9SfOUQDpPvwOdyXo?usp=sharing" },
    ],
    "Second Year": [
      { subject: "JAVA II-I", link: "https://drive.google.com/file/d/1bfUmeBqFaeZYJK3DtK7ACLaOrWkeUs6A/view?usp=drive_link" },
      { subject: "Digital Logic Design II-I", link: "https://drive.google.com/file/d/1M9TKMRFNDDCU9hCJ93DTyqm-eVy52iAJ/view?usp=sharing" },
      { subject: "Probability And Statistics II-I", link: "https://drive.google.com/file/d/1za1NH88jDYvBfd7MurXjNdy9fI6ZSaZd/view?usp=sharing" },
      { subject: "Discrete Mathematics II-I", link: "https://drive.google.com/file/d/16I1Z_HaRskXZnBPKpIHVH1wGRUlaIHf8/view?usp=sharing" },
      { subject: "Operating System II-II", link: "https://drive.google.com/drive/folders/1AjZDk3Lfj6h-tS8W2zhSPQ5Sr1_VN-Yg?usp=sharing" },
      { subject: "Effective Technical Communication II-II", link: "https://drive.google.com/drive/folders/1FFKuuyulUiVXClkIPIb0QfTqq62nue2J?usp=sharing" },
      { subject: "Design and Analysis Of Algorithms II-II", link: "https://drive.google.com/drive/folders/1YhGznKnC8EE5nSqCenqJek1Eko3O6G9F?usp=drive_link" },
      { subject: "Economics and Accounting For Engineers II-II", link: "https://drive.google.com/drive/folders/1zO9D_om78H94fsb7hte5wADbK56uxyYB?usp=sharing" },
      { subject: "Computer Organisation II-II", link: "https://drive.google.com/drive/folders/1xhKRFeeiQHT03OIHqp_rx6SXCLWUGy_l?usp=sharing" },
      { subject: "Environmental Science II-II", link: "https://drive.google.com/drive/folders/1awhcl5AI1cqxht5OZ4Ab2eZ64tqyf-tg?usp=sharing" },
      { subject: "Data Communication and Computer Networks II-II", link: "https://drive.google.com/drive/folders/1sm-valp3WSuIC5abWImufd6UDGi8njJy?usp=sharing" },
    ],
    "Third Year": [
      { subject: "Full Stack Development III-II", link: "https://drive.google.com/drive/folders/1zn2g3mD3tj6DaK08uLM0ns01hl_NSQfd?usp=sharing" },
      { subject: "UNIX Programming III-II", link: "https://drive.google.com/drive/folders/1nQStDwSesunAZUKpr53IRjIPMfr-5Gk1?usp=sharing" },
      { subject: "Fundamental of Management and Entrepreneurship III-II", link: "https://drive.google.com/drive/folders/1qhMJuPwvSlVwZz1PANWBvE6rsow164ow?usp=sharing" },
      { subject: "Machine Learning III-II", link: "https://drive.google.com/drive/folders/1yr6Z-VnaPo-YRD4mVwT6W2ZIK0NqkdCd?usp=sharing" },
      { subject: "Data Visualization III-II", link: "https://drive.google.com/drive/folders/1WP9fnDipWB9xbpeIc4TaBBU9fMWxZeDp?usp=sharing" },
    ],
    "Fourth Year": [
      { subject: "Software Project Management IV-II", link: "https://drive.google.com/drive/folders/10suhIptBfFwEBrPx5i0rzWWmTMMkDQfz?usp=sharing" },
      { subject: "Design Patterns IV-II", link: "https://drive.google.com/drive/folders/1QwDLCASDq1jRUDBnoaxKn2spPccLhGRz?usp=sharing" },
      { subject: "E-Commerce IV-II", link: "https://drive.google.com/drive/folders/12rTRnsuQMwcZarYC4MD5tVbzM-LKgzfa?usp=sharing" },
    ],
  },
  GR24: {
    "Second Year": [
      { subject: "JAVA II-I", link: "https://drive.google.com/file/d/1J6lqPWUyNY79yBBKI5K2RL6tWGBHFFHD/view?usp=drive_link", isNew: true },
      { subject: "Digital Logic Design II-I", link: "https://drive.google.com/file/d/1yTfirXc_gbogAAi3vxVGC6V3bJ4JF5G5/view?usp=drive_link", isNew: true },
      { subject: "Probability And Statistics II-I", link: "https://drive.google.com/file/d/1rx3SQ6zhsOaSxkrSzeRkWqis_VsiCivJ/view?usp=drive_link", isNew: true },
      { subject: "Discrete Mathematics II-I", link: "https://drive.google.com/file/d/1BOsHV9NyHyzdpRT29QtiyArMA8bLzwHP/view?usp=drive_link", isNew: true },
      { subject: "DataBase Management Systems II-I", link: "https://drive.google.com/file/d/1wEuUUG-DWWVVmqR8LVsHClk6Xa18BSfJ/view?usp=drive_link", isNew: true },
      { subject: "Operating System II-II", link: "https://drive.google.com/file/d/1rx3SQ6zhsOaSxkrSzeRkWqis_VsiCivJ/view?usp=drive_link", isNew: true },
      { subject: "Design and Analysis Of Algorithms II-II", link: "https://drive.google.com/file/d/1OnNET9l2rNLn9kxuN2i8x7ZeNmZiZUDE/view?usp=drive_link", isNew: true },
      { subject: "Economics and Accounting For Engineers II-II", link: "https://drive.google.com/file/d/1c1xVyIilsIn2gh-cUvuDplCdfnLZ63n8/view?usp=drive_link", isNew: true },
      { subject: "Computer Organisation and Architecture II-II", link: "https://drive.google.com/file/d/1WtgsjHKlS_nW0rC6iunRmDwZFw7eNuaJ/view?usp=drive_link", isNew: true },
      { subject: "Full Stack Web Development II-II", link: "https://drive.google.com/file/d/18FQ-NL3xbk1PNO0wANSBPZThDFQHx5AF/view?usp=drive_link", isNew: true },
    ],
  },
};

const PreviousPapers = () => {
  const [activeRegulation, setActiveRegulation] = useState<"GR22" | "GR24">("GR22");

  const yearWisePapers = pyqData[activeRegulation];

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">Previous Year Question Papers</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {activeRegulation === "GR24" && (
<span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-medium text-xs px-3 py-1 rounded-full">
  ✦ GR24 updated with Mid & Semester question papers
</span>
          )}
        </p>

        {/* Regulation Tabs */}
        <div className="flex space-x-4 mb-8">
          {(["GR22", "GR24"] as const).map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegulation(reg)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeRegulation === reg
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(yearWisePapers)
            .filter(([, papers]) => papers.length > 0)
            .map(([year, papers]) => (
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
                      <li key={index} className="flex items-center justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400 shrink-0" />
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            {paper.subject}
                          </a>
                        </div>
                        {paper.isNew && (
                          <span className="shrink-0 text-xs font-medium text-teal-700 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-300 px-2 py-0.5 rounded-full">
                            ✦ New
                          </span>
                        )}
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