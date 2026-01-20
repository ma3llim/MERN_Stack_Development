var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
export function useFetch(url) {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });
    useEffect(() => {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    setState((prev) => (Object.assign(Object.assign({}, prev), { loading: false })));
                    const res = yield fetch(url);
                    const data = yield res.json();
                    setState({ data, loading: false, error: null });
                }
                catch (error) {
                    setState({
                        data: null,
                        loading: false,
                        error: "Failed to fetch",
                    });
                }
            });
        }
        fetchData();
    }, [url]);
    return state;
}
