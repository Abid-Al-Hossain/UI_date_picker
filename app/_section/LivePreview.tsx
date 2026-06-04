"use client";

import type { CSSProperties } from "react";
import type { DatePickerStudioState } from "../types";

function shellStyle(state: DatePickerStudioState): CSSProperties {
  const invalid = state.invalid || state.previewState === "invalid";
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
    opacity: state.disabled || state.previewState === "disabled" ? 0.55 : 1,
    outline: state.previewState === "focus" ? `${state.focusRing}px solid ${state.accent}` : "none",
  };
}

export default function LivePreview({ state }: { state: DatePickerStudioState }) {
  const invalid = state.invalid || state.previewState === "invalid";
  const success = state.showSuccess && !invalid;
  return (
    <div style={shellStyle(state)} className="grid content-center">
      <label htmlFor={state.id} style={{ fontSize: state.labelSize, fontWeight: state.fontWeight }}>{state.label}{state.required ? " *" : ""}</label>
      <p className="text-sm" style={{ color: state.muted }}>{state.description}</p>
      <div className="flex items-center gap-2 rounded-2xl border px-3 py-2" style={{ borderColor: invalid ? "#fb7185" : state.border, background: "rgba(255,255,255,.06)" }}>
        {state.showCalendarIcon && <span aria-hidden="true">◷</span>}
        <input id={state.id} name={state.name} title={state.title} tabIndex={state.tabIndex} dir={state.dir} lang={state.lang} type={state.pickerType} value={state.value} min={state.min} max={state.max} step={state.step} required={state.required} disabled={state.disabled || state.previewState === "disabled"} readOnly={state.readOnly} autoComplete={state.autocomplete} inputMode={state.inputMode} enterKeyHint={state.enterKeyHint} aria-invalid={invalid || undefined} aria-describedby={`${state.id}-help`} className="w-full bg-transparent outline-none" style={{ color: state.foreground, fontSize: state.inputSize }} onChange={() => undefined} />
        {state.showClearAction && <button type="button" aria-label="Clear date" className="rounded-lg px-2" style={{ color: state.muted }}>×</button>}
      </div>
      <small id={`${state.id}-help`} style={{ color: invalid ? "#fb7185" : success ? "#22c55e" : state.muted }}>{invalid ? state.errorText : success ? state.successText : state.showHelper ? state.helper : ""}</small>
    </div>
  );
}
