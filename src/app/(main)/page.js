import { redirect } from "next/navigation";

const defaultCategory = "01";
export default function Home() {
  redirect(`/category/${defaultCategory}`);
}
