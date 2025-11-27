import { useDispatch } from "react-redux";
import { deleteCity } from "@/store/adventuresSlice";
import Link from "next/link";
import { useSelector } from "react-redux";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ feature }) {
  const dispatch = useDispatch();
  const currentCity = useSelector((state) => state.adventures.current);

  const {
    id,
    properties: { cityName, date },
    geometry: {
      coordinates: [lng, lat],
    },
  } = feature;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCity(id));
  };

  return (
    <li className="flex items-center gap-[1.6rem] bg-primary-800 overflow-y-auto">
      <Link
        className={`
    ${
      id === currentCity?.id
        ? "border-2 border-primary-1000 border-l-[5px] border-l-primary-1000"
        : ""
    }
    bg-primary-800 p-4 rounded-xl
  `}
        href={`${id}?lat=${lat}&lng=${lng}`}
      >
        <h3>{cityName}</h3>
        <time>{formatDate(date)}</time>
      </Link>
      <button onClick={handleDelete}>x</button>
    </li>
  );
}

export default CityItem;
