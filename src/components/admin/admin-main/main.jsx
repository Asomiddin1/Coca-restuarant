import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, MultiColoredLineSeries } from '@syncfusion/ej2-react-charts'


const Main = () => {
    let date = [
        {
            text: 'Coffeetalk',
            earn: '1,432',
            percent: '3',
            color: 'border-violet-500'
        }, {
            text: 'Low n slow',
            earn: '2,124',
            percent: '5',
            color: 'border-red-500'
        }, {
            text: "Cold 'n brew",
            earn: '9,692',
            percent: '12',
            color: 'border-yellow-500'
        }, {
            text: 'Eplus space',
            earn: '0,902',
            percent: '1',
            color: 'border-lime-500'
        }, {
            text: 'Sinergy space',
            earn: '6,431',
            percent: '9',
            color: 'border-lime-400'
        },

    ]

    const data = [[
        { x: ' ', y: 292, color: '#FECF24' },
        { x: 'Mon, 20', y: 335, color: '#FECF24' },
        { x: 'Tue, 21', y: 414, color: '#FECF24' },
        { x: 'Wed, 22', y: 365, color: '#FECF24' },
        { x: 'Thu, 23', y: 343, color: '#FECF24' },
        { x: 'Fri, 24', y: 357, color: '#FECF24' },
        { x: 'Sat, 25', y: 213, color: '#FECF24' },
        { x: 'Sun, 26', y: 400, color: '#FECF24' },
        { x: 'Mon, 27', y: 381, color: '#FECF24' },
        { x: 'Tue, 28', y: 404, color: '#FECF24' },
    ], [
        { x: ' ', y: 274, color: '#B1E71D' },
        { x: 'Mon, 20', y: 304, color: '#B1E71D' },
        { x: 'Tue, 21', y: 401, color: '#B1E71D' },
        { x: 'Wed, 22', y: 352, color: '#B1E71D' },
        { x: 'Thu, 23', y: 436, color: '#B1E71D' },
        { x: 'Fri, 24', y: 404, color: '#B1E71D' },
        { x: 'Sat, 25', y: 446, color: '#B1E71D' },
        { x: 'Sun, 26', y: 298, color: '#B1E71D' },
        { x: 'Mon, 27', y: 293, color: '#B1E71D' },
        { x: 'Tue, 28', y: 307, color: '#B1E71D' },
    ], [
        { x: ' ', y: 265, color: '#FF736A' },
        { x: 'Mon, 20', y: 281, color: '#FF736A' },
        { x: 'Tue, 21', y: 292, color: '#FF736A' },
        { x: 'Wed, 22', y: 341, color: '#FF736A' },
        { x: 'Thu, 23', y: 338, color: '#FF736A' },
        { x: 'Fri, 24', y: 314, color: '#FF736A' },
        { x: 'Sat, 25', y: 327, color: '#FF736A' },
        { x: 'Sun, 26', y: 423, color: '#FF736A' },
        { x: 'Mon, 27', y: 415, color: '#FF736A' },
        { x: 'Tue, 28', y: 407, color: '#FF736A' },
    ], [
        { x: ' ', y: 241, color: '#73CB50' },
        { x: 'Mon, 20', y: 274, color: '#73CB50' },
        { x: 'Tue, 21', y: 284, color: '#73CB50' },
        { x: 'Wed, 22', y: 271, color: '#73CB50' },
        { x: 'Thu, 23', y: 316, color: '#73CB50' },
        { x: 'Fri, 24', y: 294, color: '#73CB50' },
        { x: 'Sat, 25', y: 296, color: '#73CB50' },
        { x: 'Sun, 26', y: 378, color: '#73CB50' },
        { x: 'Mon, 27', y: 438, color: '#73CB50' },
        { x: 'Tue, 28', y: 407, color: '#73CB50' },
    ], [
        { x: ' ', y: 178, color: '#8569F6' },
        { x: 'Mon, 20', y: 198, color: '#8569F6' },
        { x: 'Tue, 21', y: 249, color: '#8569F6' },
        { x: 'Wed, 22', y: 310, color: '#8569F6' },
        { x: 'Thu, 23', y: 283, color: '#8569F6' },
        { x: 'Fri, 24', y: 297, color: '#8569F6' },
        { x: 'Sat, 25', y: 186, color: '#8569F6' },
        { x: 'Sun, 26', y: 316, color: '#8569F6' },
        { x: 'Mon, 27', y: 389, color: '#8569F6' },
        { x: 'Tue, 28', y: 397, color: '#8569F6' },
    ],]
    const marker = { visible: true, width: 4, height: 4 };
    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="p-6 w-11/12 mx-auto md:w-2/3 bg-white rounded-xl">
                <div className="ext-zinc-900 text-base font-medium leading-normal mb-8">Selected location</div>
                <div className=" justify-start items-start gap-2 flex flex-wrap">
                    {
                        date.map(({ text, earn, percent, color }) => {
                            return (
                                <div className={`grow shrink basis-0 h-[100px] p-3 bg-white rounded-sm shadow border-t-2 ${color} flex-col justify-start items-start gap-4 inline-flex`}>
                                    <div className="self-stretch text-zinc-500 text-xs font-medium leading-[18px]">{text}</div>
                                    <div className="self-stretch justify-start items-baseline gap-1 inline-flex">
                                        <div className="text-zinc-900 text-xl font-semibold leading-[30px]">${earn}</div>
                                        <div className="grow shrink basis-0 text-lime-500 text-xs font-normal leading-[18px]">+{percent}</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="w-[630px]">
                        <ChartComponent
                            id='line-chart'
                            height="220px"
                            primaryXAxis={{
                                valueType: 'Category'
                            }}
                            tooltip={{
                                enable: true, format: '<b>${point.x} /  ${point.y}</b>'
                            }}
                            primaryYAxis={{
                                minimum: 100, maximum: 500, interval: 200,
                                lineStyle: { width: 0 },
                                majorTickLines: { width: 0 },
                                minorTickLines: { width: 0 },

                                rangePadding: 'None',
                            }}

                            legendSettings={{ background: 'white' }}
                            chartArea={{ border: { width: 0 } }}
                        // markerSettings={{ visible: ['All'], size: 2.5, fill: 'red' }}
                        ><Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category, MultiColoredLineSeries]} />
                            <SeriesCollectionDirective>
                                <SeriesDirective type='MultiColoredLine' pointColorMapping='color' marker={marker} dataSource={data[0]} xName='x' yName='y' width={2}>
                                </SeriesDirective>
                                <SeriesDirective type='MultiColoredLine' pointColorMapping='color' marker={marker} dataSource={data[1]} xName='x' yName='y' width={2}>
                                </SeriesDirective>
                                <SeriesDirective type='MultiColoredLine' pointColorMapping='color' marker={marker} dataSource={data[2]} xName='x' yName='y' width={2}>
                                </SeriesDirective>
                                <SeriesDirective type='MultiColoredLine' pointColorMapping='color' marker={marker} dataSource={data[3]} xName='x' yName='y' width={2}>
                                </SeriesDirective>
                                <SeriesDirective type='MultiColoredLine' pointColorMapping='color' marker={marker} dataSource={data[4]} xName='x' yName='y' width={2}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main