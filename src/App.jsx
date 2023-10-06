import { Pie } from '@ant-design/plots';

function App() {
  const data = [
    {
      type: 'Эксплуатация',
      value: 8773153,
    },
    {
      type: 'Создание и развитие',
      value: 4752216,
    },
    {
      type: 'Инфраструктура',
      value: 6913380,
    },
  ];
  const config = {
    width: 575,
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.55,
    label: {
      type: 'inner',
      offset: '-50%',
      formatter: (valueObj) => {
        return `${Number(valueObj.percent * 100).toFixed(1)}%`;
      },
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
      autoRotate: false,
    },
    legend: {
      offsetX: -5,
      spacing: 25,
      itemSpacing: 55,
    },
    statistic: {
      title: {
        style: { fontSize: 14 },
        content: 'Итого',
      },
      content: {
        style: {
          fontSize: 14,
        },
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
      {
        type: 'pie-statistic-active',
      },
    ],
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pie {...config} />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('container'));

export default App;
