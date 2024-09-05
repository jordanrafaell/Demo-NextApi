'use client'
import libs from '../utils/libs/libs.js'
import '../utils/import-css/style.js'

const { motion, Script, React, PureComponent, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } = libs;

const CustomTick = ({ x, y, payload }) => (
  <text x={x} y={y} dy={14} textAnchor="middle" fill="white">
    {payload.value}
  </text>
);

// Dados do gráfico
const data = [
  {
    name: 'NextAPI',
    responseTime: 150, // Tempo de resposta em ms
    successRate: 99.9, // Taxa de sucesso em %
  },
  {
    name: 'Market Avg',
    responseTime: 250, // Tempo médio de resposta no mercado
    successRate: 95.0, // Taxa média de sucesso no mercado
  },
  {
    name: 'Service A',
    responseTime: 300,
    successRate: 97.5,
  },
  {
    name: 'Service B',
    responseTime: 280,
    successRate: 96.0,
  },
];

// Componente Dashboard
class Dashboard extends PureComponent {
  render() {
    return (
      <>

        <section className="Dashboard">
          <h1>API Efficiency</h1>
          <div className="container_dashboard">
            <motion.div
              className="container_text_api"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: -100 }}
              transition={{ duration: 3 }}
            >
                <h2>Superior Performance</h2>
                <p>
                  Our APIs are engineered for top-notch speed and reliability. With response
                  times significantly faster than the industry average, our APIs ensure your
                  services run smoothly and efficiently, even under high demand.
                </p>
                <p>
                  Our high success rate minimizes interruptions and technical issues, allowing
                  you to focus on your business. The chart below compares our performance against
                  the market average and leading competitors, highlighting our efficiency.
                </p>
                <p>
                  <span className="strong">Legend:</span> The chart illustrates response times
                  and success rates, showing how our APIs excel in both areas.
                </p>
            </motion.div>

            <motion.div
              className="container_graphic"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
              // animate={{opacity: 1, x: 0, y: 0}}
            >
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={data}>
                  <XAxis dataKey="name" tick={<CustomTick />} />
                  <YAxis yAxisId="left" orientation="left" stroke="white" />
                  <YAxis yAxisId="right" orientation="right" stroke="white" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="responseTime" fill="white" name="Response Time (ms)" />
                  <Bar yAxisId="right" dataKey="successRate" fill="black" name="Success Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </section>




      </>
    );
  }
}

export default Dashboard;
