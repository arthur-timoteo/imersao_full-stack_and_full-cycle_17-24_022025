'use client';

import { useRef } from "react";
import { ChartComponent, ChartComponentRef } from "@/app/components/ChartComponent";
import { Asset } from "@/app/models";
import { AssetShow } from "@/app/components/AssetShow";
import { Time } from "lightweight-charts";

export function AssetChartComponent( props: { 
    asset: Asset; 
    data?: { time: Time; value: number }[]; 
}){
    const chartRef = useRef<ChartComponentRef>(null);
    
    return <ChartComponent ref={chartRef} header={<AssetShow asset={props.asset} />} data={props.data} />
}