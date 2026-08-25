

export default function SearchPopup() {
  return (
    <div className="popup-search-box">
      <button
        className="searchClose"
        onClick={() =>
          document
            .getElementsByClassName("popup-search-box")[0]
            ?.classList.toggle("show")
        }
      >
        <img
          src="/assets/img/icon/close.svg"
          alt="img"
        />
      </button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search Here.." />
        <button type="submit">
          <img
            src="/assets/img/icon/search-white.svg"
            alt="img"
          />
        </button>
      </form>
    </div>
  );
}
