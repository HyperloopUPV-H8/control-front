import styles from "./Tube.module.scss";
import { ReactComponent as TeamLogo } from "assets/svg/team_logo.svg";
import { Kenos } from "./Kenos/Kenos";
import { useMeasurements } from "pages/VehiclePage/useMeasurements";

const SECTIONS_BY_SIDE = 6;

export const Tube = () => {
    const sectionsArray = new Array(SECTIONS_BY_SIDE).fill(0);
    const measurements = useMeasurements();
    const pos = measurements["position"].value as number;
    console.log(pos);
    //console.log(measurements);

    return (
        <div className={styles.tube}>
            {sectionsArray.map((_, index) => {
                return <div key={index} className={styles.leftSection} />;
            })}
            <div className={styles.section}>
                <TeamLogo className={styles.logo} />
            </div>
            {sectionsArray.map((_, index) => {
                return <div key={index} className={styles.rightSection} />;
            })}
            {/* //TODO: Change position to a measurement with addUseSelector */}
            <Kenos position={pos} />
        </div>
    );
};
