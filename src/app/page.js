"use client";
import Image from "next/image";
import App from "./App";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  let name = ["osama", "anas", "amjad"];
  const router = useRouter();

  const navigate = (link) => {
    router.push(link);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Hello Next App</h1>
      <button
        className=" bg-orange-400 border-2 border-black rounded-full p-4"
        onClick={() => alert("Hello g")}
      >
        click me
      </button>

      <Link href={"/about"}>Click here For About Page</Link>

      <button
        className=" bg-orange-400 border-2 border-black rounded-full p-4"
        onClick={() => router.push("/contact")}
      >
        click here for Contact Page
      </button>
      <button
        className=" bg-orange-400 border-2 border-black rounded-full p-4"
        onClick={() => navigate("/booking")}
      >
        click here for Booking Page
      </button>

      <App name={name} date="05/06/2000" />
    </main>
  );
}
