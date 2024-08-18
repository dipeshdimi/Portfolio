import img1 from "/contact.avif";
import Icon from "../Home/Icon";

const Contact = () => {
  return (
    <div id="contact" className="bg-neutral-900 text-gray-100">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 xl:py-24 text-center border-b border-gray-700"
      >
        <h3 className="text-secondary-500 text-lg uppercase tracking-wider">Contact</h3>
        <h2 className="mt-4 mb-12 text-neutral-300 text-3xl lg:text-4xl xl:text-6xl font-bold">
          Contact Me Today
        </h2>
        <div
          data-aos="fade-up"
          className="flex justify-center"
        >
          <div className="w-full max-w-md lg:max-w-2xl bg-[#202328] rounded-md shadow-lg overflow-hidden">
            <img
              src={img1}
              alt="Nevine Acotanza"
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-6">
              <h2 className="text-neutral-400 text-2xl lg:text-3xl font-semibold mb-2">
                Dipesh Mishra
              </h2>
              <p className="text-lg mb-4">Software Engineer</p>
              <p className="text-lg mb-4">
                I am open to exploring full-time, freelance, and contractual opportunities, and I am eager to contribute my skills to new and exciting projects.
              </p>
              <div className="mb-4">
                <p className="text-lg">
                  Phone: <span className="font-medium">+91 7428553034</span>
                </p>
                <p className="text-lg">
                  Email: <a href="mailto:dipeshdimi@gmail.com" className="text-blue-400 hover:underline">dipeshdimi@gmail.com</a>
                </p>
              </div>
              <Icon item1 title1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
