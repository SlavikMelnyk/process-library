import { createContext, useEffect, useMemo, useState } from "react";
import { getMetaData } from "./api";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const mds = useMemo(() => data.mds, [data]);
    const reportStatus = useMemo(() => data.reportStatus, [data]);

    useEffect(() => {
        getMetaData(setData);
    }, []);

    const contextValue = useMemo(() => ({
        mds,
        reportStatus,
    }), [
        mds,
        reportStatus,
    ]);
  
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };