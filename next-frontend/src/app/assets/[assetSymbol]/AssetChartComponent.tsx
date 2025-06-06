'use client';

import { useEffect, useRef } from "react";
import { ChartComponent, ChartComponentRef } from "@/app/components/ChartComponent";
import { Asset } from "@/app/models";
import { AssetShow } from "@/app/components/AssetShow";
import { Time } from "lightweight-charts";
import { socket } from "../../../socket-io";

export function AssetChartComponent( props: { 
    asset: Asset; 
    data?: { time: Time; value: number }[]; 
}){
    const chartRef = useRef<ChartComponentRef>(null);

    const symbol = props.asset.symbol;

    useEffect(() => {
        socket.connect();
        socket.emit('joinAsset', {symbol});

        socket.on('assets/daily-created', (assetDaily) => {
            chartRef.current?.update({
                time: (Date.parse(assetDaily.date) / 1000) as Time,
                value: assetDaily.price
            });
        });
    }, [symbol]);
    
    return <ChartComponent ref={chartRef} header={<AssetShow asset={props.asset} />} data={props.data} />
}