
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import ErrorFallback from "./components/ErrorFallback";

interface Props {
    children: React.ReactNode;
}

const App: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();

    const handleErrorReset = () => {
        navigate("/");
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
            {children}
        </ErrorBoundary>
    );
};

export default App;
