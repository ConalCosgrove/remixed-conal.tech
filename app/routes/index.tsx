import { type LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = () => {
    return redirect("/home");
}
export default function Index() {
    return <div></div>;
}
