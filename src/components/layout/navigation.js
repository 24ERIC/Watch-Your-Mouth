import { Link } from 'react-router-dom'

const navStyles = `
	flex justify-between 
	p-3 align-center
	h-10 w-full
`

const liStyles = `mx-2 hover:underline`

const Navigation = () => {
  return (
	<nav id="navigation" className={`${navStyles}`}>
		<a href="/">WYM</a>
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
  );
};
export default Navigation;