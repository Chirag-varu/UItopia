import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent!");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-lg font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave us a message!"
          required
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-transparent"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-black text-white dark:bg-white dark:text-black font-semibold  rounded-md"
      >
        Submit Message
      </button>
    </form>
  );
};

export default ContactForm;
