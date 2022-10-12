import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../../Rechart/Rechart';

const Statistics = () => {
    const chart = useLoaderData()
    const charts =chart.data;
    console.log(charts)
    return (
        <div>
            <h2>this is statistics part</h2>
            {
                charts.map(chart => <Rechart
                key={chart.id}
                chart={chart}
                ></Rechart> )
            }
        </div>
    );
};

export default Statistics;