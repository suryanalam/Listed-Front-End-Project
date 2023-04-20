import './Chart.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pdata = [
  {
    name: "Week 1",
    uv: 200,
    pv: 100,
    amt: 52,
    id: "1",
  },
  {
    name: "Week 2",
    uv: 390,
    pv: 410,
    amt: 83,
    id: "2",
  },
  {
    name: "Week 3",
    uv: 200,
    pv: 150,
    amt: 85,
    id: "3",
  },
  {
    name: "Week 4",
    uv: 300,
    pv: 420,
    amt: 14,
    id: "4",
  },
  {
    name: "Week 5",
    uv: 210,
    pv: 250,
    amt: 14,
    id: "4",
  },
];

function Chart() {
  return (
    <div>
          <h1 className="chart-heading">Line Chart</h1>
          <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <LineChart
              data={pdata}
              height={200}
              margin={{ bottom: 235, right: 40 }}
            >
              <CartesianGrid />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis />
              <Tooltip />
              <Line dataKey="uv"/>
              <Line dataKey="pv" />
            </LineChart>
          </ResponsiveContainer>
    </div>
  );
}

export default Chart;
