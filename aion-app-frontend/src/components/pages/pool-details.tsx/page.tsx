'use client'

import { Ocupancy } from "@/components/shared/occupancy/ocupancy";
import { PoolInfo } from "@/components/shared/pool-details/info";
import { PoolMetrics } from "@/components/shared/pool-details/metrics";
import { useVaultContext } from "@/components/context/vault";


export default function PoolDetailsPage() {
    const { vault } = useVaultContext();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col space-y-6">
        <PoolInfo vault={vault} />
        <Ocupancy vault={vault} />
        </div>
        <div className="col-span-1">
        <PoolMetrics vault={vault} />
        </div>
        </div>
    )
}