import { EnumMeasurement, NumericMeasurement } from "common";

export type LevitationData = {
    general_state: EnumMeasurement;
    specific_state: EnumMeasurement;
    slave_general_state: EnumMeasurement;
    slave_specific_state: EnumMeasurement;

    airgap_1: NumericMeasurement;
    airgap_2: NumericMeasurement;
    airgap_3: NumericMeasurement;
    airgap_4: NumericMeasurement;
    slave_airgap_5: NumericMeasurement;
    slave_airgap_6: NumericMeasurement;
    slave_airgap_7: NumericMeasurement;
    slave_airgap_8: NumericMeasurement;

    current_coil_1: NumericMeasurement;
    current_coil_2: NumericMeasurement;
    current_coil_3: NumericMeasurement;
    current_coil_4: NumericMeasurement;
    slave_current_coil_5: NumericMeasurement;
    slave_current_coil_6: NumericMeasurement;
    slave_current_coil_7: NumericMeasurement;
    slave_current_coil_8: NumericMeasurement;

    temperature_coil_1: NumericMeasurement;
    temperature_coil_2: NumericMeasurement;
    temperature_coil_3: NumericMeasurement;
    temperature_coil_4: NumericMeasurement;
    slave_temperature_coil_5: NumericMeasurement;
    slave_temperature_coil_6: NumericMeasurement;
    slave_temperature_coil_7: NumericMeasurement;
    slave_temperature_coil_8: NumericMeasurement;

    temperature_lpu_1: NumericMeasurement;
    temperature_lpu_2: NumericMeasurement;
    temperature_lpu_3: NumericMeasurement;
    temperature_lpu_4: NumericMeasurement;
    slave_temperature_lpu_5: NumericMeasurement;
    slave_temperature_lpu_6: NumericMeasurement;
    slave_temperature_lpu_7: NumericMeasurement;
    slave_temperature_lpu_8: NumericMeasurement;

    battery_voltage_1: NumericMeasurement;
    battery_voltage_2: NumericMeasurement;
    slave_battery_voltage_3: NumericMeasurement;
    slave_battery_voltage_4: NumericMeasurement;

    battery_current_1: NumericMeasurement;
    battery_current_2: NumericMeasurement;
    slave_battery_current_3: NumericMeasurement;
    slave_battery_current_4: NumericMeasurement;

    reference_current_1: NumericMeasurement;
    reference_current_2: NumericMeasurement;
    reference_current_3: NumericMeasurement;
    reference_current_4: NumericMeasurement;
    slave_reference_current_5: NumericMeasurement;
    slave_reference_current_6: NumericMeasurement;
    slave_reference_current_7: NumericMeasurement;
    slave_reference_current_8: NumericMeasurement;

    rot_x: NumericMeasurement;
    rot_y: NumericMeasurement;
    rot_z: NumericMeasurement;

    control_state: EnumMeasurement;
};
