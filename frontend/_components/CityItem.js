function CityItem({ feature }) {
  const { cityName, date } = feature.properties;

  const formatDate = () =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <li className="text-6xl text-primary-50 mb-20 tracking-tight font-normal">
      <h3>{cityName}</h3>
      <time>({formatDate(date)})</time>
      <button>x</button>
    </li>
  );
}

export default CityItem;
