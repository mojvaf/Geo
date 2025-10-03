async function CityItem() {
  const res = await fetch("https:", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return (
    <div className="text-6xl text-primary-50 mb-20 tracking-tight font-normal">
      This City Item
    </div>
  );
}

export default CityItem;
