import { Doughnut } from 'react-chartjs-2';
import PropTypes  from 'prop-types';

function DoughnutComp({ value }) {

  const { data } = value;
  const chartName = Object.keys(data[0])[0];
  const labels = Object.keys(data[0][chartName][0]);
  const dataValues = labels.map(label => data[0][chartName][0][label]);
  const backgroundColor = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
  ];

  const resultData = {
    labels: labels,
    datasets: [{
      label: chartName,
      data: dataValues,
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  };

  return <Doughnut data={resultData} />
}

DoughnutComp.propTypes = {
  value: PropTypes.object
}

export default DoughnutComp;