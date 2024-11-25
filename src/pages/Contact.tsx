import ContactForm from "@/components/contact-us/ContactForm";
import FaqAccordion from "@/components/contact-us/FaqAccordion";
import SocialLinks from "@/components/contact-us/SocialLinks";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-between p-8 gap-4 ">
          <div className="flex md:flex-row flex-col gap-4 w-full mt-12">
            {/* Contact Form */}
            <div className="flex-1 bg-white dark:bg-gray-800/50  p-10 rounded-lg shadow-md ">
              <h2 className="md:text-5xl text-4xl font-bold mb-2 text-center">
                Get in Touch
              </h2>
              <p className="text-lg mb-6 text-center">
                We'd love to hear from you! Whether you have a question,
                <p>
                  need support, or just want to share your thoughts, feel free
                  to reach out.
                </p>
              </p>
              <ContactForm />
            </div>

            {/* FAQ Accordion */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800/50 ">
              <h2 className="md:text-5xl text-4xl font-bold mb-2 mt-2 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg mb-10 text-center">
                Here are some common questions users ask about UI-Topia.
                <p>
                  If you can't find what you're looking for, don't hesitate to
                  contact us.
                </p>
              </p>
              <FaqAccordion />
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full bg-white p-2 rounded-lg shadow-md dark:bg-gray-800/50">
            <SocialLinks />
          </div>
        </div>
      </motion.div>
    </>
  );
}
