import { Portfoio } from "../../data/data";

const Portfolio = () => {
  const handleClick = (liveLink?: string, githubLink?: string) => {
    const url = liveLink || githubLink;
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div id="portfolio" className="bg-gray-900">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto py-20 px-4 lg:px-8 xl:px-16 text-center border-b border-gray-700"
      >
        <h3 className="text-teal-400 text-lg">
          💎 BROWSE THROUGH MY PROJECTS
        </h3>
        <h2 className="mt-8 mb-16 uppercase text-gray-200 text-3xl xl:text-6xl font-semibold">
          My Portfolio
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
        >
          {Portfoio.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleClick(item.liveLink, item.githubLink)}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-48 object-cover rounded-md transition-transform transform group-hover:scale-110"
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col items-start gap-4 my-6">
                <span className="text-teal-400 text-lg">{item.stack}</span>
                <div className="flex gap-4">
                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
                    >
                      Live Link
                    </a>
                  )}
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                      GitHub Link
                    </a>
                  )}
                </div>
              </div>
              <h3 className="my-4 text-left text-2xl text-gray-300">
                {item.title}
              </h3>
              <p className="text-gray-300 text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
