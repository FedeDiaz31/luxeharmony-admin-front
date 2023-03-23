function Header() {
  return (
    <div className=" h-[70px] w-screen items-center flex bg-bgPrimaryColor shadow">
      <div className=" pl-[130px] flex justify-end items-center w-full pr-10">
        {/*  <h2 className="font-bold text-xl">Board</h2> */}
        <button className="flex gap-3 items-center border rounded-full px-3 py-1">
          <h2 className="font-semibold text-sm">Juan Andrés</h2>
          <img
            className="w-8"
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
