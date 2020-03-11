import { Record } from "immutable";

interface IPaginate {
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  totalCount: number;
  totalPages: number;
}

/**
 * ページング
 */
export default class Paginate extends Record<IPaginate>({
  currentPage: 1,
  nextPage: null,
  prevPage: null,
  totalCount: 0,
  totalPages: 1
}) {}
