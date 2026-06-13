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
  return `import * as React from "react";

const state = ${JSON.stringify(state, null, 2)};

function normalizeDateValue(value, pickerType) {
  if (!value) return "";
  if (pickerType === "datetime-local") return value.includes("T") ? value : value.replace(" ", "T");
  if (pickerType === "month") return value.slice(0, 7);
  if (pickerType === "week") return value.includes("W") ? value : "";
  return value.slice(0, 10);
}

export default function DatePickerComponent() {
  // Native modes supported by this single input: type="date", type="month", type="week", type="datetime-local".
  const invalid = state.invalid || state.previewState === "invalid";
  const disabled = state.disabled || state.previewState === "disabled";
  const success = state.showSuccess && !invalid;
  const message = invalid ? state.errorText : success ? state.successText : state.showHelper ? state.helper : "";
  const helpId = \`\${state.id}-help\`;
  const [value, setValue] = React.useState(() => normalizeDateValue(state.value, state.pickerType));

  React.useEffect(() => {
    setValue(normalizeDateValue(state.value, state.pickerType));
  }, []);

  return (
    <div
      style={{
        width: state.width,
        minHeight: state.height,
        padding: state.padding,
        display: "grid",
        alignContent: "center",
        gap: state.gap,
        borderRadius: state.radius,
        border: \`\${state.borderWidth}px solid \${invalid ? "#fb7185" : state.previewState === "focus" ? state.accent : state.border}\`,
        boxShadow: \`0 \${Math.round(state.shadow / 3)}px \${state.shadow}px rgba(0,0,0,.28)\`,
        background: state.background,
        color: state.foreground,
        fontFamily: state.fontFamily,
        opacity: disabled ? 0.55 : 1,
        outline: state.previewState === "focus" ? \`\${state.focusRing}px solid \${state.accent}\` : "none",
        transition: state.transitionDuration > 0 ? "$1" : "none",
      }}
    >
      <label htmlFor={state.id} style={{ fontSize: state.labelSize, fontWeight: state.fontWeight }}>
        {state.label}{state.required ? " *" : ""}
      </label>
      {state.description ? <p style={{ margin: 0, color: state.muted }}>{state.description}</p> : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderRadius: 16,
          border: \`1px solid \${invalid ? "#fb7185" : state.border}\`,
          padding: "8px 12px",
          background: "rgba(255,255,255,.06)",
        }}
      >
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
          aria-describedby={helpId}
          onChange={(event) => setValue(event.target.value)}
          style={{
            width: "100%",
            minWidth: 0,
            border: 0,
            outline: "none",
            background: "transparent",
            color: state.foreground,
            fontSize: state.inputSize,
          }}
        />
        {state.showClearAction && value && !disabled && !state.readOnly ? (
          <button type="button" aria-label="Clear date" onClick={() => setValue("")} style={{ border: 0, background: "transparent", color: state.muted, cursor: "pointer" }}>
            Clear
          </button>
        ) : null}
      </div>
      <small id={helpId} style={{ color: invalid ? "#fb7185" : success ? "#22c55e" : state.muted }}>
        {message}
      </small>
    </div>
  );
}
`;
}
