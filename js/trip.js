
const _body = document.querySelector("body");

const nextUp = document.querySelector(".next");

const _destination = document.querySelectorAll('input[name="destination"]');
const _location = document.querySelectorAll('input[name="location"]');

const _toLocFull = document.querySelector(".fromLocation .fullLocName");
const _fromLocFull = document.querySelector(".toDestination .fullLocName");

const _toshortHandLoc = document.querySelector(".fromLocation .shorthandName");
const _fromshortHandLoc = document.querySelector(".toDestination .shorthandName");

const _letter = document.querySelector(".fromLocation .letter");
const _fromletter = document.querySelector(".toDestination .letter");


const _fromEditBtn = document.querySelector(".arrow.from");
const _toEditBtn = document.querySelector(".arrow.to");

const dateClasstoggle = document.querySelector(".dateSelector");

const _departureDate = document.querySelectorAll('input[name="date"]')


const _checkoutBtn = document.querySelector(".checkoutBtn");
const _confirmCheckout = document.querySelector(".confirmChekckout");

const _ticketBtn = document.querySelector(".ticketBtn");


// Shitty forms
const _formName = document.querySelector("input[name='full-name']")
const _passenger = document.querySelector(".line.passenger h1");
const _class = document.querySelector(".line.class")



nextUp.addEventListener("click", function(e){
	e.preventDefault()
	tripSwiper.slideNext(500, false);
	if(_formName.value != ""){
		_passenger.innerText = _formName.value
	}else{
		_formName.classList.add("error");
		_body.classList.add("form-error")

	}
	console.log(_formName.value)

})
_ticketBtn.addEventListener("click", function(e){
	e.preventDefault();


	tripSwiper.slideNext(500, false);
})


dateClasstoggle.addEventListener("click", function(){
	_body.classList.toggle("dates--open")
})


// eventlisterners

_fromEditBtn.addEventListener("click", function(e){
	e.preventDefault();

	tripSwiper.slideTo(0,500,false)
	_body.classList.add("edit")
})

_toEditBtn.addEventListener("click", function(e){
	e.preventDefault();

	tripSwiper.slideTo(1,500,false)
	_body.classList.add("edit")

})


_destination.forEach(function(radioItem, i){
	radioItem.addEventListener("change", function(){
		if(this.checked){
			console.log(radioItem.id)
			// make swiper go to next slide

			tripSwiper.slideNext(500,false);
			// find the fill div and populate it with result

			_toLocFull.innerHTML = radioItem.id;
			let shortHand = _toLocFull.innerText.slice(0,3);
			_toshortHandLoc.innerHTML = shortHand;
			let locationLetter = _toLocFull.innerText.slice(0,1);
			_letter.innerHTML = locationLetter;	
		}
	})
})


_location.forEach(function(radioItems, i){
	radioItems.addEventListener("change", function(){
		if(this.checked){
			// console.log(`${radioItems.id} inside second function`)
			// make swiper go to next slide

			tripSwiper.slideNext(500,false);
			// find the fill div and populate it with result

			_fromLocFull.innerHTML = radioItems.id;
			let shortHand = _fromLocFull.innerText.slice(0,3);
			_fromshortHandLoc.innerHTML = shortHand;
			let locationLetter = _fromLocFull.innerText.slice(0,1);
			_fromletter.innerHTML = locationLetter;	
			// console.log(shortHand, locationLetter)

		}
	})
})

// console.log(_departureDate)
_departureDate.forEach(function(dateItem,i){
	
	dateItem.addEventListener("change", function(){
		if(this.checked){
			dateClasstoggle.innerHTML = `Going from ${_toLocFull.innerText.toLowerCase()} to ${_fromLocFull.innerText.toLowerCase()} ${dateItem.id}  &#128516;`;
			_body.classList.add('date--chosen')
			_body.classList.remove('dates--open')

		}
	})

})

_checkoutBtn.addEventListener("click", function(e){
	e.preventDefault();

	tripSwiper.slideNext(500,false)
	console.log("click")
})


_confirmCheckout.addEventListener("click", function(e){
	e.preventDefault();
	_body.classList.add("payments--confirmed");
	
})



const swiperOptions = {
	loop:false
}

const tripSwiper = new Swiper(".destination", swiperOptions)