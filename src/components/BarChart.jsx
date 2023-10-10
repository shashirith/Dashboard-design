import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-plugin-style';

const legendMargin = {
    id: "legendMargin",
    beforeInit(chart, legend, options) {
        const fitValue = chart.legend.fit
        chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            return this.height += 40;
        }
    }
}

const legendExtraSpace = {
    id: "legendExtraSpace",
    beforeInit(chart, legend, options) {
        const fitValue = chart.legend.fit
        chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            let width = this.width += 50;
            return width;
        }
    }
}
Chart.register(legendMargin, legendExtraSpace);

const BarChart = (props) => {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    const { chartData } = props

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: "User",
                    data: chartData.datasets[0].data,
                    backgroundColor: "#98D89E",
                    borderWidth: 1,
                    barThickness: 'flex',
                    borderRadius: 8,
                    borderSkipped: false,
                    barPercentage: 0.9,
                    categoryPercentage: 0.4,
                },
                {
                    label: "Guest",
                    data: chartData.datasets[0].data2,
                    backgroundColor: "#EE8484",
                    borderWidth: 1,
                    barThickness: 'flex',
                    borderRadius: 8,
                    borderSkipped: false,
                    barPercentage: 0.9,
                    categoryPercentage: 0.4,
                }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 100,
                            font: {
                                family: "Lato"
                            }
                        },
                        border: {
                            display: false
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: "Lato"
                            },
                            padding: 2
                        },
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    }
                },
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 6,
                            boxHeight: 6,
                            padding: 35,
                            font: {
                                family: "Lato",
                                size: 14,
                                weight: 400,
                            },
                            color: "#000",
                            textAlign: 'right'
                        }
                    }
                }
            },
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [chartData]);

    return (
        <div className='w-full h-[320px]'>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default BarChart;
