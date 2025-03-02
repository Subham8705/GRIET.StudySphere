
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
        <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Placement Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={placementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="placed" name="Students Placed (%)" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={gradeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="grade" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" name="Number of Students" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
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
