import { h2Styles, h3Styles, sectionStyles } from "../styles";
import BodyBg from "../images/fullpic.png";

const liStyle = `p-4 my-4 text-center w-1/2 md:w-1/4 flex flex-col justify-center`
const dropdownButton = `flex justify-between align-center py-5 w-full`

const HomePage = () => {
  return (
	<>
	<div style={{ backgroundImage:`url(${BodyBg})`,backgroundRepeat:"no-repeat" ,backgroundSize:"cover",
	}}>

		<header className="mt-0 px-4 mb-8">
			<h1 className="w-48 font-extrabold text-2xl">Check yourself before hitting send.</h1>

			<button><a href="message">Get Started</a></button>
		</header>
		

		<section id="start" className={`${sectionStyles}`}>
			<h2 className={`${h2Styles} mt-60`}>Are you ready?</h2>
			<p className="pl-0 pr-60 mt-2 mb-12">
				We're now sharing things with large and varied audiences that in the past, 
				would have been limited to more private, one-on-one interactions. 
				As more conversations move online, privacy boundaries blur, audiences become larger, 
				and the responses/reactions we can expect our posts to get begin to vary widely. 
			</p>

			<ul className="flex flex-wrap justify-center my-5">
				<li className={`${liStyle} ` }>
					<img src="/emotion.png" alt="Icon Cancel" />
					<p>Know Your Emotion</p>
				</li>

				<li className={`${liStyle}`}>
					<img src="/clock.png" alt="Icon Cancel"/>
					<p>Give Yourself a Second</p>
				</li>

				<li className={`${liStyle}`}>
					<img src="/cancel.png" alt="Icon Cancel"/>
					<p>Don't Get Cancelled</p>
				</li>

				<li className={`${liStyle}`}>
					<img src="/positivity.png" alt="Icon Cancel"/>
					<p>Be More Positive</p>
				</li>
			</ul>
		</section>
		
		<section id="about" className={`${sectionStyles} flex`}>
			<div className="w-1/2 relative">
				{/* <img src="/logo192.png" alt="Jiminy" /> */}
			</div>
			
			<div className="w-1/2">
				<h2 className={`${h2Styles} mt-20` }>We Can Be Your Safety Net</h2>
				<p>
					Some things are not meant for public consumption. We all have wished we didn't send a message 
					or post tweet. Maybe you want to make sure your emotions are accurately portrayed.
					Now with a quick "test" message you can see the reactions and responses your peers will have!       
					 
				</p>
			</div>
		</section>

		<section id="faq" className={`${sectionStyles}`}>
			<h2 className={`${h2Styles} text-center mt-60`}>FAQ</h2>
			
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
						Nope, let it all out! Response times may vary for longer text messages.
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
		</div>
		
	</>
  );
};
export default HomePage;