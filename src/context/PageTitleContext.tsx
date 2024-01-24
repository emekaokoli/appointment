
import React, { createContext, Dispatch, SetStateAction } from 'react';

interface TitleContextValue {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

type ReactChildren = {
  children: React.ReactNode;
}

export const titleContext = createContext<TitleContextValue>(
  {} as TitleContextValue
);

const PageTitleProvider = ({ children }: ReactChildren) => {
  const [title, setTitle] = React.useState<string>('');

  return (
    <titleContext.Provider value={{ title, setTitle }}>
      {children}
    </titleContext.Provider>
  );
};

export default PageTitleProvider;
