import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter([...routes]);

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}

export default router;
