"use client";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCity } from "./../store/adventuresSlice";
import Message from "./Message";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const lat = parseFloat(searchParams.get("lat"));
  const lng = parseFloat(searchParams.get("lng"));
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else!"
          );
        setCityName(data.city || data.locality || "");
        setCountry(data.country || data.countryCode || "");
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    if (lat != null && lng != null) fetchData();
  }, [lat, lng]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [lng, lat],
      },
      properties: {
        cityName,
        country,
        date: date.toISOString().split("T")[0],
        notes,
      },
    };
    dispatch(createCity(newCity));
    router.push("/adventure/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;
  if (!lat && !lng)
    return <Message message="Please select a point on the map." />;
  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`bg-primary-900 round-md p-3 flex flex-col gap-6`}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-[350px] relative">
        <label>Country name</label>
        <input
          className="rounded-md bg-primary-500 pl-3"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
      </div>
      <div className="flex flex-col w-[350px] rounded-md relative">
        <label>City name</label>
        <input
          className="rounded-md bg-primary-500 pl-3"
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div className="flex flex-col w-[350px] rounded-md relative">
        <label htmlFor="date">When did you go to ?</label>

        <DatePicker
          className="rounded-md bg-primary-500 pl-3"
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <div className="flex flex-col w-[400px] rounded-md relative">
        <label htmlFor="notes">Notes about your Bird seeing </label>
        <textarea
          className="rounded-md bg-primary-500"
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="flex justify-between">
        <button className="p-2 bg-primary-1000 rounded">Add</button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
