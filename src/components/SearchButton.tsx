type SearchButtonPropTypes = {
  onClick?: () => void;
};

export default function SearchButton({ onClick }: SearchButtonPropTypes) {
  function searchSVG() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_325_107)">
          <path
            d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z"
            stroke="#4C4D4C"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.9625 10.9625L14 14"
            stroke="#4C4D4C"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_325_107">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <button
      aria-label="search-button"
      onClick={onClick}
      className="flex items-center justify-center rounded-full w-9 h-9 bg-gray_scale "
    >
      {searchSVG()}
    </button>
  );
}
