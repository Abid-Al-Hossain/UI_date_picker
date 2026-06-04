"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import Switch from "@/components/shared/input/Switch";
import type { DatePickerStudioState } from "../types";

type Props = {
  state: DatePickerStudioState;
  update: <K extends keyof DatePickerStudioState>(key: K, value: DatePickerStudioState[K]) => void;
};

export default function StatesSection({ state, update }: Props) {
  return (
    <SectionCard title="State Preview" subtitle="Forced preview states for QA.">
      <Select label="Preview state" value={state.previewState} options={[
  "default",
  "hover",
  "focus",
  "active",
  "disabled",
  "invalid",
  "loading",
  "empty"
]} onChange={(value) => update("previewState", value)} />
      <Switch label="Disabled" checked={state.disabled} onChange={(value) => update("disabled", value)} />
      <Switch label="Invalid" checked={state.invalid} onChange={(value) => update("invalid", value)} />
      <Switch label="Show helper" checked={state.showHelper} onChange={(value) => update("showHelper", value)} />
      <Switch label="Show success" checked={state.showSuccess} onChange={(value) => update("showSuccess", value)} />
    </SectionCard>
  );
}
