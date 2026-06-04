import type { DatePickerStudioState } from "../types";

export type ExportPayload = {
  fileName: string;
  mimeType: "text/plain;charset=utf-8";
  content: string;
};

export function buildExportPayload(state: DatePickerStudioState, fileName = "date-picker") : ExportPayload {
  return {
    fileName: `${fileName || "date-picker"}.jsx`,
    mimeType: "text/plain;charset=utf-8",
    content: buildReactCode(state),
  };
}

export function buildReactCode(state: DatePickerStudioState) {
  return [
    "import * as React from \"react\";",
    "",
    "const state = " + JSON.stringify(state, null, 2) + ";",
    "",
    "export default function DatePickerComponent() {",
    "  return (",
        "    <div style={{ width: state.width, padding: state.padding, borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, background: state.background, color: state.foreground, fontFamily: state.fontFamily }}>",
    "      <label htmlFor={state.id}>{state.label}{state.required ? \" *\" : \"\"}</label>",
    "      <input id={state.id} name={state.name} title={state.title} tabIndex={state.tabIndex} dir={state.dir} lang={state.lang} type={state.pickerType} value={state.value} min={state.min} max={state.max} step={state.step} required={state.required} disabled={state.disabled} readOnly={state.readOnly} autoComplete={state.autocomplete} inputMode={state.inputMode} enterKeyHint={state.enterKeyHint} aria-invalid={state.invalid || undefined} onChange={() => undefined} />",
    "      <small>{state.invalid ? state.errorText : state.showSuccess ? state.successText : state.helper}</small>",
    "    </div>",
    "  );",
    "}",
    "",
  ].join("\n");
}
