import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        async function fetchData() {
            try {
                setState((prev) => ({ ...prev, loading: false }));

                const res = await fetch(url);
                const data: T = await res.json();

                setState({ data, loading: false, error: null });
            } catch (error) {
                setState({
                    data: null,
                    loading: false,
                    error: "Failed to fetch",
                });
            }
        }

        fetchData();
    }, [url]);

    return state;
}
