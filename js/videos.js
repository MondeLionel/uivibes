(function(){
	const body = document.querySelector("body")

	const videoWrapper = document.querySelector(".videos")
	const videoWrappers = document.querySelectorAll(".video");
	// console.log(videoWrappers)

	const videos = document.querySelectorAll("video")
// console.log(videos)

	const videoLinks = document.querySelectorAll(".vid")
	const linkWrapper = document.querySelector(".linkWrapper")



	const checkBodyClass = function(){
			body.addEventListener("click", function(e){
			e.preventDefault();
			this.classList.replace("video--show", "video--stop");
			videos.forEach(function(video, i){
				if (!video.paused){
					console.log(`paused`)
					video.pause()
					video.currentTime = 0;
					video.style = `opacity:0`
				}	
			})
		})
	}

	linkWrapper.addEventListener("mouseenter", function(e){
		e.preventDefault();
		this.classList.add("links--active")
	})

	linkWrapper.addEventListener("mouseleave", function(e){
		e.preventDefault();
		this.classList.remove("links--active");
		body.classList.remove("video--show")
	})


videoLinks.forEach(function(link,i){
	link.addEventListener("mouseleave", function(e){
				link.classList.remove("active")
		})


	link.addEventListener("mouseenter", function(e){
		e.preventDefault();
		checkBodyClass()


		link.classList.add("active");
		videoWrapper.setAttribute("data-video-playing", e.target.dataset.vid)
		videos.forEach(function(video,j){

				

		if(body.classList.contains("video--show")){
			if (videoWrapper.dataset.videoPlaying == video.id){
					video.style = `opacity:1;`

					video.play();
					body.classList.remove("video--stop")
				}else{
					video.style = `opacity:0;`;
					video.pause()
				}
			}

		if(body.classList.contains("video--stop")){
			video.style = `opacity:0;`;
			video.pause()

			console.log("stop videos")
		}
	})



		body.classList.add("video--show");
	})
})




})()