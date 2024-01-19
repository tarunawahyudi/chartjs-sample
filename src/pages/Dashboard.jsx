import dataSummary from '../response-1.json';
import { useEffect, useState } from "react";
import '../configs/chartjsConfig';
import Chart from '../components/Chart';

function Dashboard() {
  const [data1, setData1] = useState({});

  useEffect(() => {
    setData1(dataSummary);
  }, []);

  if (data1) {
    return (
      <>
        <Chart value={dataSummary} />
      </>
    )
  }
}
export default Dashboard;