import { useDispatch } from "react-redux";
import { deleteCity } from "@/store/adventuresSlice";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ feature }) {
  const dispatch = useDispatch();

  const { id, properties } = feature;
  const { cityName, date } = properties;

  const handleDelete = () => {
    dispatch(deleteCity(id));
  };

  return (
    <li className="flex items-center gap-[1.6rem] bg-primary-800 overflow-y-auto">
      <h3>{cityName}</h3>
      <time>{formatDate(date)}</time>
      <button onClick={handleDelete}>x</button>
    </li>
  );
}

export default CityItem;
