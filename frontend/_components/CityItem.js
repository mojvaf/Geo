function CityItem({ feature }) {
  return (
    <li className="text-6xl text-primary-50 mb-20 tracking-tight font-normal">
      <strong>{feature.properties.cityName}</strong>
    </li>
  );
}

export default CityItem;
