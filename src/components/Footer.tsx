import viteSvg from "../assets/house.png";

function Footer() {
  return (
    <footer
      className="bg-[#F8F8F8] text-lg  shadow-inner drop-shadow-2xl p-8  lg:flex justify-between mt-7
    "
    >
      <div className="flex flex-col items-center lg:flex-row   gap-1">
        <img src={viteSvg} className="w-12  mr-2" />
        <h4 className="text-2xl">Central Imóveis</h4>
      </div>

      <nav className="text-light-gray font-normal text-center flex flex-col gap-4 m-3 lg:text-right">
        <a href="">Atendimento</a>
      </nav>
    </footer>
  );
}

export default Footer;
