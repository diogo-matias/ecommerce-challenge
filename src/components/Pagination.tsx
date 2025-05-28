import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { EcommerceActions } from "@/store/modules/ecommerce";
import { getPaginationArray } from "@/utils/getPaginationArray";

export type PaginationType = {
    currentPage: number;
    totalPages: number;
    totalItems?: number;
};

export type PaginationPropTypes = PaginationType;

export default function Pagination() {
    const paginationInfo = useAppSelector(
        (state: any) => state.ecommerce.paginationInfo
    );
    const { pagination } = getPaginationArray(
        paginationInfo.currentPage,
        paginationInfo.totalPages
    );
    const currentCategory = useAppSelector((state) => state.ecommerce.category);
    const dispatch = useAppDispatch();

    function handlePagination(page: string | number) {
        dispatch(
            EcommerceActions.getAllProducts({
                page: page.toString(),
                category: currentCategory,
            })
        );
    }

    function renderItem(item: number | string) {
        const isSelected = paginationInfo.currentPage == item;
        const isSelectItem = item === "select1" || item === "select2";

        return (
            <button
                onClick={
                    !isSelectItem ? () => handlePagination(item) : () => {}
                }
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
