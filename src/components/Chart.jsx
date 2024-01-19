import { Bar, Doughnut } from 'react-chartjs-2';
import PropTypes  from 'prop-types';

function Chart({ value }) {

  const totalLenderBaseOnIsland = value.total_lender_based_on_island;
  const totalLenderBaseOnAge = value.total_lender_based_on_age;

  const { male, female, unknown } = totalLenderBaseOnAge;
  const { 
    sumatera, 
    sulawesi, 
    kalimantan, 
    jawa, 
    malukuPapua, 
    baliAndNtt 
  } = totalLenderBaseOnIsland;
  
  const ageSummary = {
    labels: ["Laki-laki", "Perempuan", "Tidak diketahui"],
    datasets: [{
      label: "Total Pemberi Pinjaman Berdasarkan Usia",
      data: [male, female, unknown],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const islandSummary = {
    labels: [
      "Sumatera",
      "Sulawesi",
      "Kalimantan",
      "Jawa",
      "Maluku dan Papua",
      "Bali dan NTT"
    ],
    datasets: [{
      axis: 'y',
      label: "Total Pemberi Pinjaman Berdasarkan Pulau",
      data: [sumatera, sulawesi, kalimantan, jawa, malukuPapua, baliAndNtt],
      backgroundColor: [
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)',
        'rgba(201, 203, 207)'
      ],
    }],
    hoverOffset: 4
  }

  return (
    <>
      <div className="chart-container">
        <Doughnut data={ageSummary} />
        <Bar data={islandSummary} />
      </div>
    </>
  )
}

Chart.propTypes = {
  value: PropTypes.object
}

export default Chart;