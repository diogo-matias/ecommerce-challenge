import { getPaginationArray } from "@/utils/getPaginationArray";

export type PaginationType = {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
};

export type PaginationPropTypes = {
  fetchProducts: (page: string) => void;
} & PaginationType;

export default function Pagination({
  currentPage = 1,
  totalPages,
  fetchProducts,
}: PaginationPropTypes) {
  const { pagination } = getPaginationArray(currentPage, totalPages);

  function handleClick(page: string | number) {
    fetchProducts(page.toString());
  }

  function renderItem(item: number | string) {
    const isSelected = currentPage == item;
    const isSelectItem = item === "select1" || item === "select2";

    return (
      <button
        onClick={!isSelectItem ? () => handleClick(item) : () => {}}
        style={{
          boxShadow: isSelected ? "0px 0px 4px black" : "",
        }}
        className="flex items-center justify-center font-roboto font-normal bg-background w-[22px] h-[22px] rounded-full "
      >
        {isSelectItem ? "..." : item}
      </button>
    );
  }

  function renderPaginationItems() {
    return (
      <ol className="flex gap-2">
        {pagination.map((item, index) => {
          return <li key={`${item}-${index}`}>{renderItem(item)}</li>;
        })}
      </ol>
    );
  }

  return <nav aria-label="pagination">{renderPaginationItems()}</nav>;
}
