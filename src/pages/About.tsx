import { Navbar } from "../components/navbar";
import profile2 from "../assets/profile2.jpg"; // Import the image properly
import profile3 from "../assets/profile3.jpg";
import profile1 from "../assets/profile1.jpeg";
import codeImage from "../assets/code-image.jpeg"; // Replace with the actual path to your code image
import linkedIn from "../assets/317750_linkedin_icon.png"
import gitHub from "../assets/github-logo.png"
import gmail from "../assets/Gmail_Logo_24px.png"

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="mb-40">
        <Navbar />
      </div>

      {/* Header */}
      <h1 className="text-lg mt-4 text-center text-xl font-bold mb-4">Meet The Creators Of UI-Topia</h1>

      {/* Creators Section */}
      <section className="flex flex-wrap justify-center gap-6 px-4 py-8">
        {/* Creator Card 1 */}
        <div className="bg-white border rounded-lg shadow-md w-64 text-center p-4">
          <img
            src={profile2} // Adjust this path if needed
            alt="Creator 1"
            className="rounded-lg w-full h-auto object-contain mb-30"
          />
          <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/adityapai05/" target="_blank">
              <img src={linkedIn} alt="GitHub" className="w-6 h-6 m-5" />
            </a>
            <a href="https://www.linkedin.com/in/adityapai05/" target="_blank">
              <img src={gitHub} alt="GitHub" className="w-6 h-6 m-5" />
            </a>
            <a href="mailto:adityapai.main@gmail.com" >
              <img src={gmail} alt="Mail" className="w-6 h-6 m-5"  />
            </a>
          </div>
        </div>

        {/* Creator Card 2 */}
        <div className="bg-white border rounded-lg shadow-md w-64 text-center p-4">
          <img
            src={profile3}
            alt="Creator 2"
            className="rounded-lg w-full h-auto object-contain mb-30"
          />
          <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/monil-parikh-8228b033a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank">
              <img src={linkedIn} alt="GitHub" className="w-6 h-6 m-5" />
            </a>
            <a href="https://github.com/skymonil"  target="_blank">
              <img src={gitHub} alt="GitHub" className="w-6 h-6 m-5" />
            </a>
            <a href="mailto:monilparikh11@gmail.com" >
              <img src={gmail} alt="Mail" className="w-6 h-6 m-5"  />
            </a>
          </div>
        </div>

        {/* Creator Card 3 */}
        <div className="bg-white border rounded-lg shadow-md w-64 text-center p-4">
          <img
            src={profile1}
            alt="Creator 3"
            className="rounded-lg w-full h-64 object-cover mb-50"
          />
          <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/chiragvaru03/" target="_blank">
              <img src={linkedIn} alt="GitHub" className="w-6 h-6 m-5" />
            </a>
            <a href="https://github.com/Chirag-varu" target="_blank">
              <img src={gitHub} alt="GitHub" className="w-6 h-6 m-5" />
            </a>
            <a href="mailto:chiragvaru03@gmail.com" >
              <img src={gmail} alt="Mail" className="w-6 h-6 m-5"  />
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-wrap gap-8 items-center">
        <div className="flex-1">
          <img
            src={codeImage}
            alt="Code Example"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">
            Our Vision: Empowering Developers to Build Exceptional Interfaces
            Effortlessly
          </h2>
          <p className="text-gray-600">
            Success for us means empowering your success by providing tools that
            make UI development intuitive, efficient, and a joy to work with,
            enabling you to craft user experiences that truly stand out.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-wrap gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            In 2024, three friends—Monil Parikh, Aditya Pai, and Chirag Varu—
            realized the immense potential of technology to solve real-life
            problems. As passionate B.Sc. IT students, they shared a vision to
            simplify and enhance the way people interact with technology. United
            by their enthusiasm for innovation, they founded UI-Topia to empower
            developers with intuitive and efficient tools for building
            exceptional user experiences.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md h-64 bg-gray-200 border-2 border-dashed border-gray-400 flex justify-center items-center text-gray-500 text-sm font-semibold rounded-lg">
            OUR PICTURE
          </div>
        </div>
      </section>
    </div>
  );
}
