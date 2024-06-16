import { Link, useRouteError } from "react-router-dom";
type Error = {
  status: number;
  statusText: string;
  message: string;
};
export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-2">
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="hover:underline">返回首页</Link>
    </div>
  );
}
