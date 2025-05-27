import SearchButton from "./SearchButton";

type SearchInputPropTypes = {
  handleClose: () => void;
};

export default function SearchInput({ handleClose }: SearchInputPropTypes) {
  return (
    <div className="relative flex">
      <input
        placeholder="Pesquisar"
        className=" appearance-none outline-none w-full mr-3 rounded-xl py-2 px-4 font-light relative bg-gray_scale-50 border-gray_scale-50"
      ></input>
      <SearchButton onClick={handleClose} />
      {/* <div className="absolute z-20 w-[90%] min-h-[30vh] h-[10vh] bottom-[-30vh] bg-red-800 ">
        a
      </div> */}
    </div>
  );
}
