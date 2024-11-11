import axios from 'axios';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useQueryParams } from './useQueryParams';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const DataProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(API_URL);
  const [filters, setFilters] = useState({});
  const [queryParams, updateQueryParams] = useQueryParams();

  const fetchData = (url) => {
    setIsFetching(true);
    setIsError(false);

    axios
      .get(url)
      .then(({ data }) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((e) => {
        setIsError(true);
        console.error(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const buildApiUrl = useCallback(() => {
    const params = new URLSearchParams();
    params.append('page', activePage + 1);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    return `${API_URL}?${params.toString()}`;
  }, [activePage, filters]);

  useEffect(() => {
    const { page, name, status, species, type, gender } = queryParams;

    if (page) {
      setActivePage(Number(page) - 1);
    }

    if (name || status || species || type || gender) {
      setFilters({
        name: name || '',
        status: status || '',
        species: species || '',
        type: type || '',
        gender: gender || ''
      });
    }
  }, [queryParams]);

  useEffect(() => {
    const url = buildApiUrl();
    setApiURL(url);
  }, [filters, activePage, buildApiUrl]);

  useEffect(() => {
    fetchData(apiURL);
  }, [apiURL]);

  const onFilterChange = useCallback(
    (name, value) => {
      setFilters((prevFilters) => {
        const newFilters = {
          ...prevFilters,
          [name]: value
        };
        updateQueryParams({ ...newFilters, page: 1 });
        return newFilters;
      });
    },
    [updateQueryParams]
  );

  const onPageChange = useCallback(
    (newPage) => {
      setActivePage(newPage);
      updateQueryParams({ ...queryParams, page: newPage + 1 });
    },
    [updateQueryParams]
  );

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      characters,
      isFetching,
      isError,
      info,
      filters,
      setFilters,
      onFilterChange,
      onPageChange
    }),
    [
      activePage,
      apiURL,
      characters,
      isFetching,
      isError,
      info,
      filters,
      onFilterChange,
      onPageChange
    ]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
};

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
