import {Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale, //x axis
	LinearScale, //y axis
	PointElement
} from 'chart.js';

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement
)

function LineChart() {
	const data = {
		labels: ['0','2004','2008','2012','2016','2020'],
		datasets: [{
			label : 'Medals',
			data:['0','1','3','6','2','7'],
			backgroundColor: '#8294C4',
			borderColor: '#ff9b9b',
			pointBorderColor: '#8294C4',
			
			
		}]
	}

	const options = {
		plugins: {
			legend:{
				position: 'top',
			} 
		},
		scales:{
			y:{
				
			}
		}
	}

	return (
		<div className='Chart'>
			<Line
			data = {data}
			options={options}
			></Line>
		</div>
	)
}

export default LineChart