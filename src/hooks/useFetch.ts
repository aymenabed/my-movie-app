import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string, options?: RequestInit): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setState({ data: null, isLoading: true, error: null });
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!didCancel) {
          setState({ data, isLoading: false, error: null });
        }
      } catch (error) {
        if (!didCancel) {
          setState({ data: null, isLoading: false, error: error as Error });
        }
      }
    };

    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url, options]);

  return state;
}

export default useFetch;
