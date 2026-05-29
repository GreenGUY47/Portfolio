const CV = () => {
  return (
    <div className="w-screen h-screen bg-orange-400  sm:hidden">
      <h1 className="text-center text-white font-bold text-2xl">AZAM's CV</h1>
      <div className="detail">
        <p className="text-center text-white mt-10">
          This is my CV, you can download it by clicking the button below
        </p>
        <div className="w-11/12 mx-auto">
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="/CV.png"
              alt="CV"
              className="w-full h-auto mt-5 cursor-pointer hover:scale-[1.03] transition duration-300"
            />
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <a
            href="/CV.pdf"
            download
            className="bg-white text-orange-400 font-bold py-2 px-4 rounded"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV;
