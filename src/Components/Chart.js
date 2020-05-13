import React, { useState } from 'react';
import styled from 'styled-components';
import {
  XYPlot,
  LineMarkSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Hint,
} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';

const Container = styled.div`
  width: 100%;
  overflow: auto;
`;

const Content = styled.div`
  width: 100%;
`;

const HintStyle = styled.div`
  background-color: #007892;
  border-radius: 5px;
  padding: 10px;
  p {
    font-size: 12px;
    color: #fff;
    font-weight: 700;
  }
`;

const axisStyle = {
  line: { stroke: '#888888' },
  ticks: { stroke: '#f0f0f0' },
  text: { stroke: 'none', fill: '#6b6b76', fontWeight: 400 },
};

const chartStyle = {
  strokeWidth: 2,
  strokeLinejoin: 'round',
};

const Chart = ({ weather, time }) => {
  const [temp, setTemp] = useState({});
  // console.log(weather);

  let tempData = [];
  weather.map((w, idx) => {
    let hour = parseInt(time.substr(0, 2)) + idx;
    tempData.push({ x: hour, y: w.temp });
  });

  const getTick = (val) => {
    let today = new Date().toString().substr(8, 2);
    let date = parseInt(today) + Math.floor(val / 24);
    return val % 24 < 13
      ? `${val % 24}am(${date})`
      : `${(val % 24) - 12}pm(${date})`;
  };

  return weather ? (
    <Container>
      <Content>
        <XYPlot width={1200} height={300} xType="time">
          <HorizontalGridLines style={{ stroke: '#dae1e7' }} />
          <VerticalGridLines style={{ stroke: '#dae1e7' }} />
          <XAxis
            title="Hour(Day)"
            position="middle"
            style={axisStyle}
            tickFormat={(v) => getTick(v)}
          />
          <YAxis style={axisStyle} title="Temperature(℃)" />
          <LineMarkSeries
            data={tempData}
            curve={'curveMonotoneX'}
            style={chartStyle}
            size={1}
            onNearestXY={(v) => setTemp(v)}
          />
          <Hint value={temp}>
            <HintStyle>
              <p>{temp.y}℃</p>
            </HintStyle>
          </Hint>
        </XYPlot>
      </Content>
    </Container>
  ) : null;
};

export default Chart;
