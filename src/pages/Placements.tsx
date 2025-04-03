import MainLayout from '../components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Placements = () => {
  const yearWisePlacements = [
    { year: '2019', placements: 850, companies: 120 },
    { year: '2020', placements: 920, companies: 135 },
    { year: '2021', placements: 980, companies: 150 },
    { year: '2022', placements: 1050, companies: 165 },
    { year: '2023', placements: 1100, companies: 180 },
  ];

  const sectorWiseData = [
    { name: 'IT & Software', value: 45 },
    { name: 'Core Engineering', value: 25 },
    { name: 'Analytics & Consulting', value: 15 },
    { name: 'Product Companies', value: 15 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const topCompanies = [
    "Microsoft", "Amazon", "Infosys", "TCS", "Wipro",
    "Accenture", "Cognizant", "IBM", "Tech Mahindra", "Capgemini"
  ];

  const salaryRanges = [
    { range: '3-5 LPA', percentage: 35 },
    { range: '5-8 LPA', percentage: 40 },
    { range: '8-12 LPA', percentage: 15 },
    { range: '12+ LPA', percentage: 10 },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">GRIET Placement Analysis</h1>
        
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Average Placement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold dark:text-gray-300">95%</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400">Last 5 years</p>
            </CardContent>
          </Card>
          <Card className="glass dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Highest Package</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold dark:text-gray-300">45 LPA</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400">2023 Batch</p>
            </CardContent>
          </Card>
          <Card className="glass dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Average Package</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold dark:text-gray-300">6.5 LPA</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400">2023 Batch</p>
            </CardContent>
          </Card>
        </div>

        {/* Year-wise Placements Chart */}
        <Card className="glass mb-8 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-white">Year-wise Placement Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearWisePlacements}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="placements" name="Students Placed" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="companies" name="Companies Visited" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Sector-wise Distribution */}
          <Card className="glass dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Sector-wise Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorWiseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sectorWiseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Salary Distribution */}
          <Card className="glass dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Salary Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salaryRanges} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" unit="%" />
                    <YAxis dataKey="range" type="category" />
                    <Tooltip />
                    <Bar dataKey="percentage" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Recruiting Companies */}
        <Card className="glass dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-white">Top Recruiting Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {topCompanies.map((company, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted dark:bg-gray-700 dark:text-white">
                  {company}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Placements;
