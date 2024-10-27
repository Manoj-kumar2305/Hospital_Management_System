'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import AdminLayout from './layout';
import Sidebar from './Sidebar';

const data = [
  { month: 'Jan', income: 100000 },
  { month: 'Feb', income: 0 },
  { month: 'Mar', income: 0 },
  { month: 'Apr', income: 0 },
  { month: 'May', income: 0 },
  { month: 'Jun', income: 0 },
  { month: 'Jul', income: 0 },
  { month: 'Aug', income: 0 },
  { month: 'Sep', income: 0 },
  { month: 'Oct', income: 350000 },
  { month: 'Nov', income: 0 },
  { month: 'Dec', income: 0 },
];

const pieData = [
  { name: 'Monthly Subscription', value: 40 },
  { name: 'Yearly Subscription', value: 60 },
];

const COLORS = ['#0088FE', '#00C49F'];

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <AdminLayout>
      <style jsx>{`
        h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .card {
          background-color: var(--card-bg-color, #fff);
          color: white;
          border-radius: 0.5rem;
          padding: 1rem;
        }

        .card-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.5rem;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 500;
        }

        .card-content {
          font-size: 2rem;
          font-weight: bold;
        }

        .card.bg-cyan {
          --card-bg-color: #00bcd4;
        }

        .card.bg-green {
          --card-bg-color: #4caf50;
        }

        .card.bg-gray {
          --card-bg-color: #9e9e9e;
        }

        .card.bg-red {
          --card-bg-color: #f44336;
        }

        .chart-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .chart-grid {
            grid-template-columns: 2fr 1fr;
          }
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .chart-container {
          width: 100%;
          height: 300px;
        }

        .space-y-2 p {
          margin: 0.5rem 0;
        }

        .box {
          width: 100%;
          display: flex;
          flex-direction: row;
        }

        .box1 {
          overflow-y: auto;
          max-height: 100vh;
        }

        .box2 {
          margin-left: 20px;
          width: 80%;
          overflow-y: auto;
          max-height: 100vh;
        }
      `}</style>
      <div className="box">
        <div className="box1">
          <Sidebar />
        </div>
        <div className="box2">
          <h1>Welcome Super Admin</h1>

          <div className="card-grid">
            <Card className="card bg-cyan">
              <CardHeader className="card-header">
                <CardTitle className="card-title">Total hospitals</CardTitle>
              </CardHeader>
              <CardContent className="card-content">
                <div>3</div>
              </CardContent>
            </Card>

            <Card className="card bg-green">
              <CardHeader className="card-header">
                <CardTitle className="card-title">Active hospitals</CardTitle>
              </CardHeader>
              <CardContent className="card-content">
                <div>3</div>
              </CardContent>
            </Card>

            <Card className="card bg-gray">
              <CardHeader className="card-header">
                <CardTitle className="card-title">Inactive hospitals</CardTitle>
              </CardHeader>
              <CardContent className="card-content">
                <div>0</div>
              </CardContent>
            </Card>

            <Card className="card bg-red">
              <CardHeader className="card-header">
                <CardTitle className="card-title">Licence Expired</CardTitle>
              </CardHeader>
              <CardContent className="card-content">
                <div>0</div>
              </CardContent>
            </Card>
          </div>

          <div className="chart-grid">
            {isClient && (
              <>
                <Card className="card">
                  <CardHeader className="card-header">
                    <CardTitle className="card-title">
                      2024 Per Month Income / Expense
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="income" fill="#0088FE" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardHeader className="card-header">
                    <CardTitle className="card-title">October, 2024</CardTitle>
                  </CardHeader>
                  <CardContent className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value">
                          {pieData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          <div className="footer-grid">
            {['Sun 13 October, 2024', 'October, 2024', '2024'].map(
              (period, index) => (
                <Card key={index} className="card">
                  <CardHeader className="card-header">
                    <CardTitle className="card-title">{period}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      Monthly Subscription: ${' '}
                      {index === 0 ? '0.00' : index === 1 ? '10.00K' : '10.08K'}
                    </p>
                    <p>
                      Yearly Subscription: ${' '}
                      {index === 0
                        ? '0.00'
                        : index === 1
                        ? '300.00K'
                        : '400.00K'}
                    </p>
                    <p>
                      Total Income: ${' '}
                      {index === 0
                        ? '0.00'
                        : index === 1
                        ? '310.00K'
                        : '410.08K'}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
