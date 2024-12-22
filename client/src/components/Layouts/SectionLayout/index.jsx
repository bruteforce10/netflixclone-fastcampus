/* eslint-disable react/prop-types */
const SectionLayout = ({ children }) => {
  return (
    <section className="bg-black text-white relative w-full">
      <div className="grid sm:grid-cols-2 max-w-7xl mx-auto justify-center items-center py-16 gap-16 text-center sm:text-left">
        {children}
      </div>
      <div className="bg-stone-700 w-full absolute top-0 left-0 h-2"></div>
    </section>
  );
};

export default SectionLayout;
