const Contact = () => {
  return (
    <div className="contact w-screen min-h-screen bg-orange-400 flex justify-center items-center px-5">

      <div className="bg-white max-w-2xl w-full rounded-3xl p-8 shadow-2xl">

        <h1 className="text-center text-orange-500 font-bold text-4xl">
          Contact Me
        </h1>

        <div className="mt-8 flex flex-col gap-5">

          <h3 className="italic text-gray-700 font-semibold text-2xl">
            Get in touch with me!
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            Feel free to reach out to me via email or connect with me on
            WhatsApp. I'm always open to discussing new projects,
            collaborations, or just saying hello!
          </p>

          {/* Email */}
          <p className="text-lg font-medium text-gray-700">
            Email:
          </p>

          <a
            href="mailto:thegreenguy48@gmail.com"
            className="bg-orange-100 hover:bg-orange-200 transition duration-300 text-orange-600 px-5 py-3 rounded-2xl font-semibold w-fit"
          >
            thegreenguy48@gmail.com
          </a>

          {/* WhatsApp */}
          <p className="text-lg font-medium text-gray-700">
            WhatsApp:
          </p>

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 hover:bg-green-200 transition duration-300 text-green-600 px-5 py-3 rounded-2xl font-semibold w-fit"
          >
            +92 312 412 3581
          </a>
          <img src="/pakistaniFlag.jpg" alt="Pakistani Flag" className="w-12 h-12 rounded-4xl absolute transform translate-y-103 translate-x-50 cursor-default pakImg" />
          <div className="text-lg font-bold text-gray-700 pakName">
            PAKISTAN ZINDABAD!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;