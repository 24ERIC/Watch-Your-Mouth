import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./navigation";

const Page = () => {
  return (
	<div className="container relative min-h-screen mx-auto max-w-4xl">
		<Navigation />
		<Outlet />
		<Footer />
	</div>
  );
};
export default Page;