import React from "react";

const Contact = () => {
  return (
    <>
      <div className="text-4xl container text-center bg-zinc-900 text-white ">
        <h1>Contact <span className="text-blue-500">Me:</span></h1>
      </div>
      <section
        id="contact"
        className="contact bg-zinc-900 text-white w-full  flex justify-center items-center px-8 py-12"
      >
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl w-full items-start justify-center">
          <div className="flex-1 flex flex-row  gap-8 justify-start">
            <ContactItem
              iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              title="Email"
              link="mailto:tatrasiamar123@gmail.com"
              text="tatrasiamar123@gmail.com"
            />

            <ContactItem
              iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              title="Phone"
              link="tel:+917330807277"
              text="+91 7330807277"
            />

            <ContactItem
              iconPath="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              title="LinkedIn"
              link="https://linkedin.com/in/amar-tatrasi"
              text="linkedin.com/in/amar-tatrasi"
            />

            <ContactItem
              iconPath="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              title="GitHub"
              link="https://github.com/tatrasiamar"
              text="github.com/tatrasiamar"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const ContactItem = ({ iconPath, title, link, text }) => (
  <div className="flex items-start space-x-4 w-72">
    <div className="text-blue-400 mt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={iconPath}
        />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-gray-300 hover:text-blue-400 transition-colors"
      >
        {text}
      </a>
    </div>
  </div>
);

export default Contact;
