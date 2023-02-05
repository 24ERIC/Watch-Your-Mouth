import HeaderBg from "../../images/bg-filler.png";

const Footer = () => {
  return (
	<div style={{ backgroundImage:`url(${HeaderBg})`, backgroundRepeat:"no-repeat" ,backgroundSize:"cover", height:100}}>
  	<footer className="relative bottom-0 text-center py-10">
		<p>Made with ☕️ 2023</p>
	</footer>
	</div>
  );
};
export default Footer;