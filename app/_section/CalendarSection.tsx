"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import { SegmentedControl } from "@/components/shared/input/SegmentedControl";
import type { DatePickerStudioState } from "../types";

type Props = {
  state: DatePickerStudioState;
  update: <K extends keyof DatePickerStudioState>(key: K, value: DatePickerStudioState[K]) => void;
};

export default function CalendarSection({ state, update }: Props) {
  return (
    <SectionCard title="Calendar" subtitle="Calendar-related picker behavior.">
      <SegmentedControl label="Calendar density" value={state.calendarDensity} options={[
  {
    "value": "compact",
    "label": "Compact"
  },
  {
    "value": "balanced",
    "label": "Balanced"
  },
  {
    "value": "spacious",
    "label": "Spacious"
  }
]} onChange={(value) => update("calendarDensity", value)} />
      <Select label="First day" value={state.firstDayOfWeek} options={[
  "sunday",
  "monday",
  "saturday"
]} onChange={(value) => update("firstDayOfWeek", value)} />
      <Select label="Autocomplete" value={state.autocomplete} options={[
  "off",
  "bday",
  "bday-day",
  "bday-month",
  "bday-year"
]} onChange={(value) => update("autocomplete", value)} />
    </SectionCard>
  );
}
