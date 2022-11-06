export type CharactersTypes = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

export type FilterTypes = {
  id: number;
  title: string;
  characters: {
    collectionURI: string;
  };
};

export type SelectFilterType = {
  value: string;
  label: string;
};

export interface ContextTypes {
  characters: CharactersTypes[];
  filter: FilterTypes[];
  fetchCharacters: () => Promise<void>;
  fetchFilters: (typeFilter: string) => Promise<void>;
}