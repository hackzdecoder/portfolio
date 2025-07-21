import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext();

export const useViewContext = () => useContext(SectionContext);

export function PageContext({ children }) {
    const [activeStatePage, setStateActivePage] = useState('about');

    return (
        <SectionContext.Provider value={{ activeStatePage, setStateActivePage }}>
            { children }
        </SectionContext.Provider>
    );
}
