// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs

   var username = document.getElementById("formUsername");
   var caption = document.getElementById("formCaption");
   var img = document.getElementById("formImg");
   // Pass values to addNewPost()
   addNewPost(username, caption, img);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   var parentDiv = document.createElement("div");
   parentDiv.className = "post";

   // Create a span for the user
   var spanUser = document.createElement("span");
   var user = document.createTextNode(username.value);
   spanUser.appendChild(user);

   // Create image element
   var imageElement = document.createElement("img");
   imageElement.src = fileLocations[imgLocation.value];
   imageElement.alt = caption.value;


   // Create overlay element
   var postOverlay = document.createElement("div");
   postOverlay.className = "postOverlay";
   var cap = document.createTextNode(caption.value);
   postOverlay.appendChild(cap);


   // Add all child elements (order matters)

   parentDiv.appendChild(spanUser);
   parentDiv.appendChild(imageElement);
   parentDiv.appendChild(postOverlay);

   // Add event listeners to post
   parentDiv.addEventListener(this, MouseEvent);
   parentDiv.onmouseover = function(){
      postOverlay.style.opacity = 1;
   };
   parentDiv.onmouseleave = function(){
      postOverlay.style.opacity = 0;
   };
   // Add post element to post list
   var postList = document.getElementById("postList");
   postList.appendChild(parentDiv);
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};