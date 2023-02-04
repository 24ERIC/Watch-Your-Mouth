import { h2Styles, h3Styles, sectionStyles } from "../styles";

const liStyle = `p-3 my-5 text-center w-1/2 md:w-1/4 flex flex-col justify-center`
const dropdownButton = `flex justify-between align-center py-2 w-full`

const HomePage = () => {
  return (
	<>
		<header className="my-20 px-3">
			<h1 className="w-48 font-extrabold text-2xl">Check yourself before hitting send.</h1>

			<button>Get Started</button>
		</header>
		

		<section id="start" className={`${sectionStyles}`}>
			<h2 className={`${h2Styles}`}>Are you ready?</h2>
			<p>
				We're now sharing things with large and varied audiences that, in the past, 
				would have been limited to more private, one-on-one interactions. 
				As conversations move online, privacy boundaries blur, audiences become large and invisible, 
				and the responses we can expect our posts to get begin to vary widely. 
			</p>

			<ul className="flex flex-wrap justify-center my-5">
				<li className={`${liStyle}`}>
					<img src="/logo192.png" alt="Icon Cancel" />
					<p>Know your emotion</p>
				</li>

				<li className={`${liStyle}`}>
					<img src="/logo192.png" alt="Icon Cancel" />
					<p>Give yourself a second</p>
				</li>

				<li className={`${liStyle}`}>
					<img src="/logo192.png" alt="Icon Cancel" />
					<p>Don't get cancelled</p>
				</li>

				<li className={`${liStyle}`}>
					<img src="/logo192.png" alt="Icon Cancel" />
					<p>Sound more positive</p>
				</li>
			</ul>
		</section>
		
		<section id="about" className={`${sectionStyles} flex`}>
			<div className="w-1/2 relative">
				<img src="/logo192.png" alt="Jiminy" />
			</div>
			
			<div className="w-1/2">
				<h2 className={`${h2Styles}`}>We can be your Jiminy Cricket</h2>
				<p>
					Some things are not meant for public consumption. We all have wished we didn't a message 
					or post that one comment. Maybe you want to make sure your emotions are accurately portrayed.
					Now with a quick "test" message you can make all your dreams come true! 
					<span className="italic text-sm">
						(Well at least you won't have to hide your embarrassment anymore!)
					</span>
				</p>
			</div>
		</section>

		<section id="faq" className={`${sectionStyles}`}>
			<h2 className={`${h2Styles} text-center`}>FAQ</h2>
			
			<ul className="list-none mt-10">
				<li>
					<button className={`${dropdownButton} ${h3Styles}`}>Is it free? <span>{'\u2193'}</span></button>
					<p>WYM is free and open to the public! 
						<span className="italics text-sm">*Standard carrier charges may apply*</span>
					</p>
				</li>

				<li>
					<button className={`${dropdownButton} ${h3Styles}`}>But why would I need to test my message? <span>{'\u2193'}</span></button>
					<p>
						If Kevin Hart can get cancelled because of a 10 year-old tweet so can you.
					</p>
				</li>

				<li>
					<button className={`${dropdownButton} ${h3Styles}`}>Is there a limit to how long the message can be? <span>{'\u2193'}</span></button>
					<p>
						Nope, shout let it all out! Response times may be a little longer for longer text messages.
					</p>
				</li>	

				<li>
					<button className={`${dropdownButton} ${h3Styles}`}>How can I thank you? <span>{'\u2193'}</span></button>
					<p>
						No thanks necessary! Remember, not all heroes wear capes!
					</p>
				</li>	
			</ul>
		</section>
	</>
  );
};
export default HomePage;