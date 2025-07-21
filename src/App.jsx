import React from "react";
import Routing from "./routes/router";

import { PageContext } from "@context";


const App = () => {
    return (
        <PageContext>
            <Routing />
        </PageContext>
    );
};

export default App;
