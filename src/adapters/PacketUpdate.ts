import { MeasurementUpdate } from "adapters/MeasurementUpdate";

export type PacketUpdate = {
    id: number;
    hexValue: number;
    cycleTime: number;
    count: number;
    measurementUpdates: Record<string, MeasurementUpdate>;
};
