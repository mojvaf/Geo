import { redirect } from "next/navigation";

export const metadata = {
  title: "Adventure",
};

export default function AdventurePage() {
  redirect("/adventure/cities");
}
