import { Navbar } from "../components/navbar";

export default function About() {
  return (
    <div className="flex flex-col">
        <div className="mb-40">
            <Navbar />
        </div>
      <p className="text-lg mt-4">We are here to make your experience better.</p>
    </div>
  );
}
