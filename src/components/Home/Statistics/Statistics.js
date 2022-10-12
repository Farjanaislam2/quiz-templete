import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Rechart from '../../Rechart/Rechart';
import { Tooltip, PieChart, Pie } from 'recharts';

const Statistics = () => {
    const chart = useLoaderData()
    const charts =chart.data;
    console.log(charts)
    return (
        <div className="flex">
        <PieChart width={1000} height={400}>
            <Pie
                dataKey="total"
                isAnimationActive={false}
                data={charts}
                cx={350}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
    </div>
    );
};

export default Statistics;