'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './page.module.css';
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
    <div className={styles.box}>
      <div className={styles.box2}>
        <h1>Welcome Super Admin</h1>

        <div className={styles.cardGrid}>
          <Card className={styles.card + ' ' + styles.bgCyan}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                Total hospitals
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.cardContent}>
              <div>3</div>
            </CardContent>
          </Card>

          <Card className={styles.card + ' ' + styles.bgGreen}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                Active hospitals
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.cardContent}>
              <div>3</div>
            </CardContent>
          </Card>

          <Card className={styles.card + ' ' + styles.bgGray}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                Inactive hospitals
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.cardContent}>
              <div>0</div>
            </CardContent>
          </Card>

          <Card className={styles.card + ' ' + styles.bgRed}>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>
                Licence Expired
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.cardContent}>
              <div>0</div>
            </CardContent>
          </Card>
        </div>

        <div className={styles.chartGrid}>
          {isClient && (
            <>
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    2024 Per Month Income / Expense
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.chartContainer}>
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

              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    October, 2024
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.chartContainer}>
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

        <div className={styles.footerGrid}>
          {['Sun 13 October, 2024', 'October, 2024', '2024'].map(
            (period, index) => (
              <Card key={index} className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>{period}</CardTitle>
                </CardHeader>
                <CardContent className={styles.spaceY2}>
                  <p>
                    Monthly Subscription: ₹{' '}
                    {index === 0 ? '0.00' : index === 1 ? '10.00K' : '10.08K'}
                  </p>
                  <p>
                    Yearly Subscription: ₹{' '}
                    {index === 0 ? '0.00' : index === 1 ? '300.00K' : '400.00K'}
                  </p>
                  <p>
                    Total Income: ₹{' '}
                    {index === 0 ? '0.00' : index === 1 ? '310.00K' : '410.08K'}
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}
