import "./Toggle.css";

// Light/dark switch, framed as inspecting the credential under daylight or a UV lamp.
export const ToggleDarkmode = ({ handleChange, isChecked }) => {
  return (
    <button
      type="button"
      className={`uv-toggle ${isChecked ? "is-uv" : ""}`}
      onClick={handleChange}
      aria-pressed={isChecked}
      aria-label={isChecked ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="uv-toggle__track" aria-hidden="true">
        <span className="uv-toggle__knob">
          <i className={`uil ${isChecked ? "uil-moon" : "uil-sun"}`} />
        </span>
      </span>
      <span className="uv-toggle__label">{isChecked ? "UV lamp" : "Daylight"}</span>
    </button>
  );
};
