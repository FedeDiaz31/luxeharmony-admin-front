function CardDashboard({ title, value }) {
  return (
    <div className="border rounded bg-bgPrimaryColor shadow text-center">
      <div className="p-3 cursor-default">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h4 className="m-0 p-0">{title}</h4>
          <h5 className="text-[2rem] font-semibold m-0 p-0">{value}</h5>
        </div>
      </div>
      <div className="bg-bgSecondaryColor mt-3 text-center p-3 text-bgPrimaryColor font-semibold cursor-pointer hover:bg-headerAndFooterColor rounded transition-all duration-200">
        <h3>More info</h3>
      </div>
    </div>
  );
}

export default CardDashboard;
