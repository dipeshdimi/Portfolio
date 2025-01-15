import {
  BackwardIcon,
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div id="timeline" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-20 border-b border-gray-800 text-center">
        <h3 className="text-gray-400 text-lg uppercase tracking-wider">
          Education & Experience
        </h3>
        <h2 className="my-8 uppercase text-white text-2xl xl:text-6xl font-semibold">
          Timeline
        </h2>
        <div className="grid mt-20 text-start">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#000",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #000",
              }}
              date="Sep 2024 - Present"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="text-xl font-semibold underline">Web Developer</h3>
              <h4 className="text-lg font-medium italic">BrightR Club (ScrapLabs)</h4>
              <ul className="list-disc ml-4 mt-2">
                <li>Revamped the company website towards a fresh look using React, Tailwind CSS, and Redux Toolkit.</li>
                <li>Implemented API integrations & redesigns to improve site functionality and user experience across multiple platforms, including customer, admin and delivery side applications.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#b20238",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #b20238",
              }}
              date="Jul 2024 - Sep 2024"
              iconStyle={{ background: "#b20238", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="text-xl font-semibold underline">Full Stack Engineer (Contractual)</h3>
              <h4 className="text-lg font-medium italic">AI Art War</h4>
              <ul className="list-disc ml-4 mt-2">
                <li>Developed the company website with MERN stack and Next.js for server-side rendering and static site generation</li>
                <li>Integrated Stripe for secure payments, Tailwind CSS for responsive UI, and implemented user authentication (using JWT for Token Management, Zod for form validation, and Resend for email verification) & API integrations.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#0047ab",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #0047ab",
              }}
              date="Jun 2024 - Jul 2024"
              iconStyle={{ background: "#0047ab", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="text-xl font-semibold underline">React Developer Intern</h3>
              <h4 className="text-lg font-medium italic">TechOn Pixel</h4>
              <ul className="list-disc ml-4 mt-2">
                <li>Contributed to the development of National People’s Party (NPP)’s official website using Next.js and TypeScript.</li>
                <li>Translated Figma designs into interactive UI components using Mantine & SCSS/Sass on company & client applications.</li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#004953",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #004953",
              }}
              date="Oct 2020 - May 2024"
              iconStyle={{ background: "#004953", color: "#fff" }}
              icon={<BackwardIcon />}
            >
              <h3 className="text-xl font-semibold underline">Student</h3>
              <h4 className="text-lg font-medium italic">Indian Institute of Information Technology (IIIT), Dharwad</h4>
              <p>Bachelor of Technology (B.Tech) in Computer Science & Engineering (CSE)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#000",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #000",
              }}
              date="Apr 2018 - Mar 2019"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<BackwardIcon />}
            >
              <h3 className="text-xl font-semibold underline">Student</h3>
              <h4 className="text-lg font-medium italic">Central Board of Secondary Education (CBSE)</h4>
              <p>XII Standard [CBSE] - 95.2%</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#b20238",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #b20238",
              }}
              date="April 2016 - Mar 2017"
              iconStyle={{ background: "#b20238", color: "#fff" }}
              icon={<BackwardIcon />}
            >
              <h3 className="text-xl font-semibold underline">Student</h3>
              <h4 className="text-lg font-medium italic">Central Board of Secondary Education (CBSE)</h4>
              <p>X Standard [CBSE] - 9.6 CGPA</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "#EFB5A3", color: "#fff" }}
              icon={<StarIcon />}
            />

          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
