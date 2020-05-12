import React from 'react';
import styled from 'styled-components';
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';

const Container = styled.div`
  width: 100%;
  overflow: auto;
`;

const Content = styled.div`
  width: 100%;
`;

const axisStyle = {
  line: { stroke: '#ADDDE1' },
  ticks: { stroke: '#ADDDE1' },
  text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 },
};

const chartStyle = {
  strokeWidth: 2,
  strokeLinejoin: 'round',
};

const Chart = ({ weather, time }) => {
  console.log(weather);
  let tempData = [];
  let today = new Date().toString().substr(8, 2);
  weather.map((w, idx) => {
    let hour = parseInt(time.substr(0, 2)) + idx;
    let date = parseInt(today) + Math.floor(hour / 24);
    tempData.push({ x: hour, y: w.temp });
  });

  console.log(tempData);
  return weather ? (
    <Container>
      <Content>
        <XYPlot width={1200} height={300}>
          <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
          <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
          <XAxis title="Time" style={axisStyle} />
          <YAxis title="Temperature" />
          <LineSeries
            data={tempData}
            curve={'curveMonotoneX'}
            style={chartStyle}
          />
        </XYPlot>
      </Content>
    </Container>
  ) : null;
};

export default Chart;
