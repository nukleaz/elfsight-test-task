import { useEffect, useState } from 'react';

export const useQueryParams = () => {
  const [params, setParams] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const paramsObj = {};
    queryParams.forEach((value, key) => {
      paramsObj[key] = value;
    });
    setParams(paramsObj);
  }, []);

  const updateQueryParams = (newParams) => {
    const queryParams = new URLSearchParams(window.location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        queryParams.set(key, value);
      } else {
        queryParams.delete(key);
      }
    });
    window.history.pushState({}, '', `?${queryParams.toString()}`);
    setParams({ ...params, ...newParams });
  };

  return [params, updateQueryParams];
};
