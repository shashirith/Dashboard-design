import React, {useEffect, useState} from 'react'
import BarChart from './BarChart';
import Paper from './Paper';

const count = [
    {
        title: "",
        id: "",
    },
    {
        title: "",
        id: "",
    }
]

{
    count.map((item) => { })
}

const generateRandom = () => {
    const min = 0;
    const max = 16909;

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    return randomNumber;
}

const ChartComponent = (props) => {

    const [data,setData] = useState()
    const [displayData1, setDisplayData1] = useState()
    const [displayData2, setDisplayData2] = useState()

    const fetchData = async () => {
        try {
            const res = await fetch("../data.json");
            const d = await res.json();
            setData(d);
            setDisplayData1([d[generateRandom()].wd, d[generateRandom()].wd, d[generateRandom()].wd, d[generateRandom()].wd])
            setDisplayData2([d[generateRandom()].rh, d[generateRandom()].rh, d[generateRandom()].rh, d[generateRandom()].rh])
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const userChartData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Rain",
                data: displayData1,
                data2: displayData2,
                shadingRange: [
                    { min: 3 }
                ]
            }
        ]
    }

    return (
        <Paper classnames='vsm:w-[90vw] sm:w-full relative h-[365px] flex justify-center items-center vsm:p-[10px] sm:pt-[30px] sm:px-[40px] sm:pb-[42px] mt-[40.83px] drop-shadow-4xl'>
            <div className='absolute top-[30px] left-[40px]'>
                <h1 className='font-["Montserrat"] text-[18px] font-bold text-[#000]'>Activities</h1>
                <h1 className='font-["Montserrat"] text-[14px] font-normal text-[#858585]' >May - June 2021</h1>
            </div>
            <BarChart chartData={userChartData} />
        </Paper>
    )
}

export default ChartComponent