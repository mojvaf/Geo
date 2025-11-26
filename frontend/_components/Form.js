// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
"use client";
import { useRouter } from "next/navigation";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const router = useRouter();
  return (
    <form className={`bg-primary-900 round-md p-3 flex flex-col gap-6`}>
      <div className="flex flex-col w-[350px] relative">
        <label>Country name</label>
        <input
          className="rounded-md bg-primary-200"
          //id="cityName"
          //onChange={(e) => setCityName(e.target.value)}
          //value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>
      <div className="flex flex-col w-[350px] rounded-md relative">
        <label>City name</label>
        <input
          className="rounded-md bg-primary-200"
          //id="cityName"
          //onChange={(e) => setCityName(e.target.value)}
          //value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className="flex flex-col w-[350px] rounded-md relative">
        <label htmlFor="date">When did you go to ?</label>
        <input
          className="rounded-md bg-primary-200"
          //id="date"
          //onChange={(e) => setDate(e.target.value)}
          //value={date}
        />
      </div>

      <div className="flex flex-col w-[400px] rounded-md relative">
        <label htmlFor="notes">Notes about your Bird seeing </label>
        <textarea
          className="rounded-md bg-primary-200"
          //id="notes"
          // onChange={(e) => setNotes(e.target.value)}
          // value={notes}
        />
      </div>

      <div className="flex justify-between">
        <button className="p-2 bg-primary-1000 rounded">Add</button>
        <button
          className="p-2 bg-primary-400 rounded"
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
}

export default Form;
