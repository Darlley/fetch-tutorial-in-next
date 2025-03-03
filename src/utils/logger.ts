import type { Middleware, SWRResponse, Key, BareFetcher, SWRConfiguration } from 'swr';

export const logger: Middleware = (useSWRNext) => {
  return <Data = any, Error = any>(
    key: Key,
    fetcher: BareFetcher<Data> | null,
    config: SWRConfiguration<Data, Error>
  ): SWRResponse<Data, Error> => {
    // Extenda o fetcher para garantir que ele seja válido
    const extendedFetcher: BareFetcher<Data> = (...args) => {
      console.log('SWR Request:', key);
      if (!fetcher) throw new Error('Fetcher is required');
      return fetcher(...args); // Certifique-se de que retorna algo compatível
    };

    // Execute o próximo middleware com os parâmetros corretos
    return useSWRNext(key, extendedFetcher, config);
  };
};