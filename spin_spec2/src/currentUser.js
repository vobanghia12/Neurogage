import React from "react";
import "./whole_page.css"
import {MdOutlineVerifiedUser} from "react-icons/md";
import { useBaseline, useMetrics } from "./hooks/api.hooks";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["12:00:01","12:00:02", "12:00:03", "12:00:04", "12:00:05"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};


function CurrentUser(props){
    const { heartRate, rates } = useMetrics(props.id);
    const baseline = useBaseline(props.id);
    const data2 = {
      labels,
      datasets: [
        {
          label: "Heart Rate",
          data: rates,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ]
    };
    console.log(rates)
    
    return (
        <article 
          style={{
            display: "block",
            margin: "20px",
            padding: "10px",
            borderRadius: "2px",
            background: "rgb(40,40,40)",
            color: "yellow",
            // boxShadow: "0 3px 6px 0 rgb(40,40,40), 0 6px 10px 0 rgb(40,40,40)",
            borderColor: "rgb(90,90,90)",
            borderWidth: 1,
            borderStyle: "solid",
            width: "300px",
            height: "450px",
            borderRadius: "40px",
          }}
        >
            <h4>{props.name}</h4>
            <p>{props.isOnline}</p>
            <p>Heart Rate: {heartRate}</p>
            <p>Base Line: {baseline}</p>
            {(heartRate - baseline > 10) ? 
              <p className = "p10"> Melt down <MdOutlineVerifiedUser/></p>
              :
              <p style={{ color: "yellow" }}> Normal </p>
            }
         

         <Line options={options} data = {data2} ></Line>
        </article>
      );
}
export default CurrentUser