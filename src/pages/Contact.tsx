import { Navbar } from "../components/navbar";

export default function Contact() {
  return (
    <div className="flex flex-col">
        <div className="mb-40">
            <Navbar />
        </div>
      <p className="text-lg mt-4">Feel free to reach out at contact@example.com.</p>
    </div>
  );
}
