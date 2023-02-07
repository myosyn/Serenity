import * as ReactDOM from "react-dom/client"
import {ChakraProvider} from "@chakra-ui/react";
import React from "react";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider>

        </ChakraProvider>
    </React.StrictMode>
)
