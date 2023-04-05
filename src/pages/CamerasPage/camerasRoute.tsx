import { loadPodData } from "pages/VehiclePage/loadPodData";
import { CamerasPage } from "./CamerasPage";

export const camerasRoute = {
    path: "/cameras",
    loader: loadPodData,
    element: <CamerasPage />,
};
