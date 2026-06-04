export type SectionId = "presets" | "basics" | "metadata" | "field" | "calendar" | "validation" | "layout" | "sizing" | "colors" | "border" | "radius" | "shadow" | "typography" | "focus" | "states" | "accessibility";

export type DatePickerStudioState = {
  label: string;
  description: string;
  helper: string;
  errorText: string;
  successText: string;
  placeholder: string;
  value: string;
  min: string;
  max: string;
  step: number;
  id: string;
  name: string;
  title: string;
  tabIndex: number;
  dir: "ltr" | "rtl" | "auto";
  lang: string;
  autocomplete: "off" | "bday" | "bday-day" | "bday-month" | "bday-year";
  inputMode: "none" | "text" | "numeric" | "decimal";
  enterKeyHint: "enter" | "done" | "go" | "next" | "search" | "send";
  pickerType: "date" | "month" | "week" | "datetime-local";
  calendarDensity: "compact" | "balanced" | "spacious";
  firstDayOfWeek: "sunday" | "monday" | "saturday";
  showCalendarIcon: boolean;
  showClearAction: boolean;
  showHelper: boolean;
  showSuccess: boolean;
  required: boolean;
  disabled: boolean;
  readOnly: boolean;
  invalid: boolean;
  width: number;
  height: number;
  gap: number;
  padding: number;
  radius: number;
  borderWidth: number;
  shadow: number;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  border: string;
  fontFamily: string;
  labelSize: number;
  inputSize: number;
  fontWeight: number;
  focusRing: number;
  motion: boolean;
  previewState: "default" | "hover" | "focus" | "active" | "disabled" | "invalid" | "loading" | "empty";
};

export type StudioPreset = {
  id: string;
  family: string;
  archetype: string;
  variant: string;
  size: string;
  tags: string[];
  state: DatePickerStudioState;
};

export const SECTIONS: Array<{ id: SectionId; label: string }> = [
  {
    "id": "presets",
    "label": "Presets"
  },
  {
    "id": "basics",
    "label": "Basics"
  },
  {
    "id": "metadata",
    "label": "Metadata"
  },
  {
    "id": "field",
    "label": "Field"
  },
  {
    "id": "calendar",
    "label": "Calendar"
  },
  {
    "id": "validation",
    "label": "Validation"
  },
  {
    "id": "layout",
    "label": "Layout"
  },
  {
    "id": "sizing",
    "label": "Sizing"
  },
  {
    "id": "colors",
    "label": "Colors"
  },
  {
    "id": "border",
    "label": "Border"
  },
  {
    "id": "radius",
    "label": "Radius"
  },
  {
    "id": "shadow",
    "label": "Shadow"
  },
  {
    "id": "typography",
    "label": "Typography"
  },
  {
    "id": "focus",
    "label": "Focus"
  },
  {
    "id": "states",
    "label": "State Preview"
  },
  {
    "id": "accessibility",
    "label": "Accessibility"
  }
];
