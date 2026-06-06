"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type { DatePickerStudioState } from "../types";

function shellStyle(state: DatePickerStudioState): CSSProperties {
  const invalid = state.invalid || state.previewState === "invalid";
  const disabled = state.disabled || state.previewState === "disabled";

  return {
    width: state.width,
    minHeight: state.height,
    padding: state.padding,
    gap: state.gap,
    borderRadius: state.radius,
    border: `${state.borderWidth}px solid ${invalid ? "#fb7185" : state.previewState === "focus" ? state.accent : state.border}`,
    boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`,
    background: state.background,
    color: state.foreground,
    fontFamily: state.fontFamily,
    opacity: disabled ? 0.55 : 1,
    outline: state.previewState === "focus" ? `${state.focusRing}px solid ${state.accent}` : "none",
    transition: state.motion ? "all 180ms ease" : "none",
  };
}

function normalizeDateValue(value: string, pickerType: DatePickerStudioState["pickerType"]) {
  if (!value) return "";
  if (pickerType === "datetime-local") return value.includes("T") ? value : value.replace(" ", "T");
  if (pickerType === "month") return value.slice(0, 7);
  if (pickerType === "week") return value.includes("W") ? value : "";
  return value.slice(0, 10);
}

export default function LivePreview({ state }: { state: DatePickerStudioState }) {
  const invalid = state.invalid || state.previewState === "invalid";
  const disabled = state.disabled || state.previewState === "disabled";
  const success = state.showSuccess && !invalid;
  const [value, setValue] = useState(() => normalizeDateValue(state.value, state.pickerType));
  const describedBy = `${state.id}-help`;
  const message = invalid ? state.errorText : success ? state.successText : state.showHelper ? state.helper : "";

  useEffect(() => {
    setValue(normalizeDateValue(state.value, state.pickerType));
  }, [state.value, state.pickerType]);

  return (
    <div style={shellStyle(state)} className="grid content-center">
      <label htmlFor={state.id} style={{ fontSize: state.labelSize, fontWeight: state.fontWeight }}>
        {state.label}{state.required ? " *" : ""}
      </label>
      {state.description ? <p className="text-sm" style={{ color: state.muted }}>{state.description}</p> : null}
      <div className="flex items-center gap-2 rounded-2xl border px-3 py-2" style={{ borderColor: invalid ? "#fb7185" : state.border, background: "rgba(255,255,255,.06)" }}>
        {state.showCalendarIcon ? <span aria-hidden="true" style={{ color: state.accent }}>calendar</span> : null}
        <input
          id={state.id}
          name={state.name}
          title={state.title}
          tabIndex={state.tabIndex}
          dir={state.dir}
          lang={state.lang}
          type={state.pickerType}
          value={value}
          min={normalizeDateValue(state.min, state.pickerType)}
          max={normalizeDateValue(state.max, state.pickerType)}
          step={state.step}
          required={state.required}
          disabled={disabled}
          readOnly={state.readOnly}
          autoComplete={state.autocomplete}
          inputMode={state.inputMode}
          enterKeyHint={state.enterKeyHint}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className="w-full bg-transparent outline-none"
          style={{ color: state.foreground, fontSize: state.inputSize }}
          onChange={(event) => setValue(event.target.value)}
        />
        {state.showClearAction && value && !disabled && !state.readOnly ? (
          <button type="button" aria-label="Clear date" className="rounded-lg px-2" style={{ color: state.muted }} onClick={() => setValue("")}>
            Clear
          </button>
        ) : null}
      </div>
      <small id={describedBy} style={{ color: invalid ? "#fb7185" : success ? "#22c55e" : state.muted }}>{message}</small>
    </div>
  );
}
