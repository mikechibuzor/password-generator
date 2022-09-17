const Wrapper = (props) => {
  return (
    <main className='h-screen w-full bg-black flex flex-col gap-y-5 items-center pt-20 lg:pt-0  lg:justify-center'>
      {props.children}
    </main>
  );
};
export default Wrapper;
