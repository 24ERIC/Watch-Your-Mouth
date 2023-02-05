import { Link } from 'react-router-dom'
import HeaderBg from "../../images/bg-filler.png";

const navStyles = `
	flex justify-between 
	p-3 align-center
	h-10 w-full
`

const liStyles = `mx-2 hover:underline`

const Navigation = () => {
  return (
	<div style={{ backgroundImage:`url(${HeaderBg})`, backgroundRepeat:"no-repeat" ,backgroundSize:"cover", height:100  }}>
	<nav id="navigation" className={`${navStyles}`}>
		<a href="/">WatchYourMouth</a>
		<ul className="list-none flex">
			<li className={`${liStyles}`}>
				<Link to='message'>
					Review a Message
				</Link>
			</li>
			
			<li className={`${liStyles}`}>
				<a href="https://github.com/24ERIC/Watch-Your-Mouth">
					Github
				</a>
			</li>
		</ul>
	</nav>
	</div>
  );
};
export default Navigation;