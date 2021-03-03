import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js';
// Page

function HomePage(props) {
	let chartRef = useRef();
	let lineRef = useRef();

	// ComponentDidMount using React Hook
	useEffect(() => {
		let chart = new Chart(chartRef.current, {
			type: 'bar',
			data: {
				labels: ['Week 1', 'Week 2', 'Week 3'],
				datasets: [{
					label: 'Cookies per week',
					data: [6, 5, 7],
					backgroundColor: '#00ff00'
				},
				{
					label: 'Brownies per week',
					data: [7, 3, 5],
					backgroundColor: '#ff0000'
				}]
			},
			options: {
				legend: {
					labels: {
						fontColor: 'rgb(229, 229, 229)',
						fontSize: 14
					}
				},
				scales: {
					yAxes: [{
						gridLines: {
							color: "#777"
						},
						ticks: {
							fontColor: "white",
							beginAtZero: true
						}
					}],
					xAxes: [{
						gridLines: {
							color: "#777"
						},
						ticks: {
							fontColor: "white"
						}
					}]
				}
			}
		});
		let lineChart = new Chart(lineRef.current, {
			type: 'line',
			data: {
				labels: ['1', '2', '3'],
				datasets: [{
					label: 'Cookies per week',
					data: [10, 4, 7],
					borderColor: '#00ff00',
					fill: false
				},
				{
					label: 'Brownies per week',
					data: [4, 2, 3],
					borderColor: '#ff0000',
					fill: false
				},
				{
					label: 'Coffee per week',
					data: [5, 5, 4],
					borderColor: '#0000ff',
					fill: false
				}]
			},
			options: {
				legend: {
					labels: {
						fontColor: 'rgb(229, 229, 229)',
						fontSize: 14
					}
				},
				scales: {
					yAxes: [{
						gridLines: {
							color: "#777"
						},
						ticks: {
							fontColor: "white",
							beginAtZero: true
						}
					}],
					xAxes: [{
						gridLines: {
							color: "#777"
						},
						ticks: {
							fontColor: "white"
						}
					}]
				}
			}
		});
	})

	// Render
	return (
		<div>
			<div className="chart-container">
				<h2>Bar Chart</h2>
				<canvas id="myChart" ref={chartRef} />
			</div>
			<div className="chart-container">
				<h2>Line Chart</h2>
				<canvas id="lineChart" ref={lineRef} />
			</div>
		</div>
	)
}

export default HomePage