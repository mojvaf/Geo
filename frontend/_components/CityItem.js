import { useDispatch } from "react-redux";
import { deleteCity } from "@/store/adventuresSlice";
import Link from "next/link";

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

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCity(id));
  };

  return (
    <li className="flex items-center gap-[1.6rem] bg-primary-800 overflow-y-auto">
      <Link href={`${id}`}>
        <h3>{cityName}</h3>
        <time>{formatDate(date)}</time>
      </Link>
      <button onClick={handleDelete}>x</button>
    </li>
  );
}

export default CityItem;
