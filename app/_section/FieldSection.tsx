"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import Select from "@/components/shared/input/Select";
import Switch from "@/components/shared/input/Switch";
import type { DatePickerStudioState } from "../types";

type Props = {
  state: DatePickerStudioState;
  update: <K extends keyof DatePickerStudioState>(key: K, value: DatePickerStudioState[K]) => void;
};

export default function FieldSection({ state, update }: Props) {
  return (
    <SectionCard title="Field" subtitle="Native field value and adornment behavior.">
      <Select label="Picker type" value={state.pickerType} options={[
  "date",
  "month",
  "week",
  "datetime-local"
]} onChange={(value) => update("pickerType", value)} />
      <Input label="Value (start)" value={state.value} onChange={(value) => update("value", value)} />
      {state.rangeMode && <Input label="Value (end)" value={state.valueEnd} onChange={(value) => update("valueEnd", value)} />}
      <Switch label="Calendar icon" checked={state.showCalendarIcon} onChange={(value) => update("showCalendarIcon", value)} />
      <Switch label="Clear action" checked={state.showClearAction} onChange={(value) => update("showClearAction", value)} />
    </SectionCard>
  );
}
