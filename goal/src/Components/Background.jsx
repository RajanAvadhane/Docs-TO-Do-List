const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="absolute mt-5 w-full h-10 flex text-zinc-900 justify-center items-center">
          Document
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex text-[11vw]  leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
