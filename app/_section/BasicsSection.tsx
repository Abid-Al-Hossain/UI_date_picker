"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import type { DatePickerStudioState } from "../types";

type Props = {
  state: DatePickerStudioState;
  update: <K extends keyof DatePickerStudioState>(key: K, value: DatePickerStudioState[K]) => void;
};

export default function BasicsSection({ state, update }: Props) {
  return (
    <SectionCard title="Basics" subtitle="Core identity and buyer-facing copy.">
      <Input label="Label" value={state.label} onChange={(value) => update("label", value)} />
      <Input label="Description" value={state.description} onChange={(value) => update("description", value)} />
      <Input label="Helper text" value={state.helper} onChange={(value) => update("helper", value)} />
      <Input label="Placeholder" value={state.placeholder} onChange={(value) => update("placeholder", value)} />
    </SectionCard>
  );
}
