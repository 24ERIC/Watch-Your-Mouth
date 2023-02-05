import HeaderBg from "../images/bg-filler.png";

const ReviewMessage = () => {
  return (
	<div style={{ backgroundImage:`url(${HeaderBg})`,backgroundSize:"cover", width:"auto", height:"800px"
	}}>
  		<label for="message" class="block ml-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
		<textarea id="message" rows="4" class="  block p-2.5 w-full text-sm  rounded-lg border 
		border-gray-300 focus:ring-blue-500 focus:border-blue-200 dark:bg-gray-800 
		dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		placeholder="Write your thoughts here...">
		</textarea>
	</div>
  );
};
export default ReviewMessage;