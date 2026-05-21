import {
  CalendarDaysIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import img1 from "/contact.avif";
import Icon from "../Home/Icon";

const Contact = () => {
  const contactDetails = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+91 7428553034",
      href: "tel:+917428553034",
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "dipeshdimi@gmail.com",
      href: "mailto:dipeshdimi@gmail.com",
    },
    {
      icon: MapPinIcon,
      label: "Address",
      value:
        "Flat G1 - First Floor, Satbir Apartments, Street in front of Shiv Mandir, Maidan Garhi, Delhi, Delhi, PIN: 110068",
    },
    {
      icon: CalendarDaysIcon,
      label: "Last updated",
      value: "21-05-2026 20:47:26 IST",
    },
  ];

  return (
    <div id="contact" className="bg-neutral-900 text-gray-100">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-12 xl:py-24 text-center border-b border-gray-700"
      >
        <h3 className="text-secondary-500 text-lg uppercase tracking-wider">
          Contact
        </h3>
        <h2 className="mt-4 mb-12 text-neutral-300 text-3xl lg:text-4xl xl:text-6xl font-bold">
          Contact Me Today
        </h2>

        <div data-aos="fade-up" className="flex justify-center">
          <div className="w-full max-w-5xl bg-[#202328] rounded-lg border border-gray-800 button-box-shadow4 overflow-hidden text-left">
            <img
              src={img1}
              alt="Dipesh Mishra"
              className="w-full h-56 md:h-72 object-cover"
            />

            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div>
                <p className="text-secondary-500 text-sm uppercase tracking-wider">
                  Software Engineer
                </p>
                <h2 className="mt-3 text-neutral-300 text-2xl lg:text-4xl font-semibold">
                  Dipesh Mishra
                </h2>
                <p className="mt-5 text-neutral-400 leading-7">
                  I am open to exploring full-time, freelance, and contractual
                  opportunities, and I am eager to contribute my skills to new
                  and exciting projects.
                </p>

                <div className="mt-8">
                  <Icon item1 title1 />
                </div>
              </div>

              <div className="grid gap-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-md bg-neutral-900/60 p-4 border border-gray-800"
                  >
                    <detail.icon className="h-6 w-6 text-secondary-500" />
                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-500">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1 block text-neutral-300 hover:text-secondary-500 transition-colors break-words"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-neutral-300 leading-7">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
