import { redirect } from "remix";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = () => {
    return redirect("/home");
}
export default function Index() {
    return <div></div>;
}
