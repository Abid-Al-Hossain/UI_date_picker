"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { DatePickerStudioState } from "../types";

type Props = {
  state: DatePickerStudioState;
  update: <K extends keyof DatePickerStudioState>(key: K, value: DatePickerStudioState[K]) => void;
};

export default function ShadowSection({ state, update }: Props) {
  return (
    <SectionCard title="Shadow" subtitle="Depth controls that export as CSS.">
      <Slider label="Shadow" value={state.shadow} min={0} max={72} step={1} onChange={(value) => update("shadow", value)} />
    </SectionCard>
  );
}
