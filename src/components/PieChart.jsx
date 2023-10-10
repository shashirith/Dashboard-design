import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import PieChartLegend from './PieChartLegend';
import useViewport from '../viewport/useViewport';

Chart.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 15],
            backgroundColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484',
            ],
            borderWidth: 1,
            borderRadius: 50,
            spacing: -20,
            animation: false
        },
    ],
};

const PieChartData = [
    {
        name: "Basic Trees",
        percent: "55%",
        color: '#98D89E'
    },
    {
        name: "Custom Short Pants",
        percent: "31%",
        color: '#F6DC7D'
    },
    {
        name: "Super Hoodies",
        percent: "14%",
        color: "#EE8484"
    }
]

const PieChart = () => {

    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    const {width} = useViewport()

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                cutout: width > 560 ? 60 : 45,
            },
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className=' vsm:h-[150px] sm:h-[180px] flex flex-row justify-end'>
            {/* <canvas ref={canvasRef}/> */}
            {/* <Doughnut className='absolute vsm:left-[-10px] vsm:bottom-[50px] sm:left-[15px] sm:bottom-[40px] h-[180px]' data={data} options={
                {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    cutout: 60,
                }
            } /> */}
            <canvas className='absolute vsm:left-[5px] vsm:bottom-[60px] sm:left-[15px] sm:bottom-[40px] h-[180px]' ref={canvasRef} />
            <div className='justify-evenly flex flex-col vsm:mr-[10px] sm:m-[0px] vsm:mt-[20px] sm:mr-[28px]'>
                {
                    PieChartData.map((item, index) => {
                        return (
                            <PieChartLegend key={index} name={item.name} percent={item.percent} color={item.color} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PieChart
