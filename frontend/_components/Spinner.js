function Spinner() {
  return (
    <div className="h-full flex item-center justify-center">
      <div
        className="spinner w-24 h-24 round-full animate-round ]"
        style={{
          WebkitMask:
            "radial-gradient(farthest-side, transparent_calc(100% - 8px), theme('colors.primary.950'))",
        }}
      ></div>
    </div>
  );
}

export default Spinner;
