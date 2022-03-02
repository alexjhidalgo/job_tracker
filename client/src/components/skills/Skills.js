import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Tooltip } from "recharts";
import LoadingSpinner from "../LoadingSpinner";

function Skills() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTotalApplications = async () => {
      // TODO: make fetch request
      return 4;
    };

    const getSkills = async () => {
      const res = await fetch("/skills/count", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const results = await res.json();

      if (results.error) {
        console.log(results.error);
        return null;
      }
      return results;
    };

    const buildData = (results, total) => {
      const graphData = [];

      for (const entry of results) {
        graphData.push({
          name: entry.name,
          percent: Math.round((entry.count / total) * 100),
        });
      }
      graphData.sort((a, b) => b.percent - a.percent);

      return graphData;
    };

    const showData = async () => {
      const appTotal = await getTotalApplications();
      const results = await getSkills();
      if (results === null || appTotal === null) return alert("Error occurred while loading skills.");

      setData(buildData(results, appTotal));
      setLoading(false);
    };

    showData();
  }, []);

  const customNameLabel = ({ x, y, value }) => {
    return (
      <text x={x} y={y} dy={-10} dx={3} fontSize={20}>
        {value}
      </text>
    );
  };

  const customTooltip = ({ active, payload, label }) => {
    return active ? (
      <div className="bg-white p-2 border border-black">
        <p>{`${label} appears in ${payload[0].value}% of your applications.`}</p>
      </div>
    ) : (
      <div />
    );
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col justify-start w-[90%] py-10">
        <h1 className="text-4xl sm:text-5xl text-slate-900">Skills Overview</h1>
        <div className="w-full py-3">
          {loading ? (
            <LoadingSpinner />
          ) : data.length === 0 ? (
            <p className="text-lg text-slate-900">No skills are recorded in your applications.</p>
          ) : (
            <>
              <p className="text-lg text-slate-900 py-3 italic">
                This graph shows the percentage of your applications that contains a specific skill.
              </p>
              <ResponsiveContainer width="100%" height={data.length * 120}>
                <BarChart layout="vertical" data={data} margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
                  <XAxis
                    type="number"
                    tickFormatter={(tick) => `${tick}%`}
                    domain={[0, 100]}
                    interval="preserveStartEnd"
                  />
                  <YAxis dataKey="name" type="category" hide />
                  <Tooltip cursor={{ fill: "transparent" }} content={customTooltip} />
                  <Bar
                    dataKey="percent"
                    label={{
                      position: "insideRight",
                      fill: "white",
                      formatter: (val) => val + "%",
                    }}
                    barSize={35}
                    fill="#0f172a"
                  >
                    <LabelList dataKey="name" position="top" content={customNameLabel}></LabelList>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
