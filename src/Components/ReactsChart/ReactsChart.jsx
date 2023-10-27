import { Bar, BarChart, ResponsiveContainer } from "recharts";
const ReactsChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
          <div className="flex justify-between">
              {/* chart */}
        <div className="flex gap-x-2 h-32">
          <div className="flex flex-col justify-center gap-y-4 h-full">
            <i className="fa-sharp fa-regular fa-heart"></i>
            <i className="fa-sharp fa-regular fa-heart"></i>
            <i className="fa-sharp fa-regular fa-heart"></i>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="w-[100px] h-[200px] relative rotate-90 translate-x-[50px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barSize={10}>
                  <Bar
                    dataKey="pv"
                    fill="#D85545"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
              </div>
      </div>
    </div>
  );
};

export default ReactsChart;
