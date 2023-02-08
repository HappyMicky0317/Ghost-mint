import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChart = ({ data, margin }) => (
    <ResponsiveLine
        data={data}
        margin={margin}
        colors={'#1d49bb'}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        enablePoints={false}
        axisTop={null}
        axisRight={null}
        enableGridX={false}
        enableGridY={false}
        axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 8,
            tickRotation: 1,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle' 
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineChart;