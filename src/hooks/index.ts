import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "app/store";

/**
 * useSelector
 * 리덕스 스토어 상태값에서 필요한 데이터 조회 가능
 * 상태값 변경시 re-render 한다.
 *
 * useDispatch
 * store 자체에 직접 접근할 필요 없이 dispatch method 사용 가능
 */

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;