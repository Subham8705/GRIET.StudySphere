import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const placementData = [
    { year: '2018', placed: 85 },
    { year: '2019', placed: 90 },
    { year: '2020', placed: 88 },
    { year: '2021', placed: 92 },
    { year: '2022', placed: 95 },
  ];

  const gradeData = [
    { grade: 'A+', students: 120 },
    { grade: 'A', students: 250 },
    { grade: 'B+', students: 180 },
    { grade: 'B', students: 120 },
    { grade: 'C', students: 80 },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Placement Statistics Card */}
          <Card className="dark:bg-gray-800 dark:text-gray-300">
            <CardHeader>
              <CardTitle>Placement Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={placementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" className="dark:stroke-gray-600" />
                  <XAxis dataKey="year" stroke="#555" className="dark:stroke-gray-400" />
                  <YAxis stroke="#555" className="dark:stroke-gray-400" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#e2e8f0' }} />
                  <Legend wrapperStyle={{ color: 'inherit' }} />
                  <Bar dataKey="placed" name="Students Placed (%)" fill="hsl(210, 96%, 55%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Grade Distribution Card */}
          <Card className="dark:bg-gray-800 dark:text-gray-300">
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={gradeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" className="dark:stroke-gray-600" />
                  <XAxis dataKey="grade" stroke="#555" className="dark:stroke-gray-400" />
                  <YAxis stroke="#555" className="dark:stroke-gray-400" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#e2e8f0' }} />
                  <Legend wrapperStyle={{ color: 'inherit' }} />
                  <Bar dataKey="students" name="Number of Students" fill="hsl(145, 63%, 49%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Performance Trends Card */}
        <Card className="dark:bg-gray-800 dark:text-gray-300">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700 dark:text-gray-400">
              The analytics dashboard provides insights into student performance and placement trends over the years. 
              Use this data to understand patterns and make informed decisions about your academic journey.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Track placement statistics year-by-year</li>
              <li>Analyze grade distributions across departments</li>
              <li>Identify trends in academic performance</li>
              <li>Compare your progress with department averages</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Analytics;
