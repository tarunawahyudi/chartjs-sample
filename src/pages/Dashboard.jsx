import DoughnutComp from '../components/DoughnutComp';
import data from '../data.json';
import { useEffect, useState } from "react";
import '../configs/chartjsConfig';

function Dashboard() {
  const [data1, setData1] = useState({});

  useEffect(() => {
    setData1(data);
  }, []);

  if (data1) {
    return (
      <>
        <DoughnutComp value={data} />
      </>
    )
  }
}
export default Dashboard;