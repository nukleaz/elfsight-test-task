import axios from 'axios';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(API_URL);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  });

  const fetchData = async (url) => {
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
    console.log(activePage);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    return `${API_URL}?${params.toString()}`;
  }, [activePage, filters]);

  useEffect(() => {
    const url = buildApiUrl();
    fetchData(url);
    if (!isFirstRender) {
      window.history.pushState(null, '', `/?${url.split('?')[1]}`);
    } else {
      setIsFirstRender(false);
    }
  }, [filters, activePage, buildApiUrl, isFirstRender]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const name = params.get('name');
    const status = params.get('status');
    const species = params.get('species');
    const type = params.get('type');
    const gender = params.get('gender');

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
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      if (page) {
        setActivePage(Number(page) - 1);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

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
      setFilters
    }),
    [activePage, apiURL, characters, isFetching, isError, info, filters]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
