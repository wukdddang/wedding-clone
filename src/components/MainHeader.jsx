function MainHeader() {
  return (
    <header className="w-full text-center">
      <div className="wedding-datetime title">
        <div className="pt-6 pb-4">
          <span>23</span>
          <span className="before:content-['|'] before:px-2 after:content-['|'] after:p-2 ">
            05
          </span>
          <span>20</span>
        </div>
        <div className="uppercase text-wider wedding-day">Saturday</div>
      </div>
    </header>
  );
}

export default MainHeader;
