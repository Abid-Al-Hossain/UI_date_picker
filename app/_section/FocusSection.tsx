"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import Switch from "@/components/shared/input/Switch";
import type { DatePickerStudioState } from "../types";

type Props = {
  state: DatePickerStudioState;
  update: <K extends keyof DatePickerStudioState>(key: K, value: DatePickerStudioState[K]) => void;
};

export default function FocusSection({ state, update }: Props) {
  return (
    <SectionCard title="Focus" subtitle="Focus and selected-state affordances.">
      <Slider label="Focus ring" value={state.focusRing} min={0} max={8} step={1} onChange={(value) => update("focusRing", value)} />
    </SectionCard>
  );
}
