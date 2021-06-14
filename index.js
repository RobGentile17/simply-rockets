document.addEventListener("DOMContentLoaded", function(){
    const url = "https://api.spacexdata.com/v4/rockets"
    const heading = document.querySelector("div#rockets")
    const rocketName = document.querySelector("h3.name")
    const rocketImage = document.querySelector("img.rocket")
    const rocketDescription = document.querySelector("p#description")
    const rocketFlights = document.querySelector("span#date")
    const rocketHeight = document.querySelector("span#height")
    const rocketDiameter = document.querySelector("span#diameter")
    const rocketMass = document.querySelector("span#weight")
    const rocketStatus = document.querySelector("span#status")
    const rocketCost = document.querySelector("span#cost")
    const rocketLikes = document.querySelector("span.likes")
    const likeButton = document.querySelector("button.like-button")
    const commentForm = document.querySelector("ul.comments")
    const commentButton = document.querySelector("button.comment-button")

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(rocket => {
            const span = document.createElement("span")
            span.innerText = rocket.name
            span.id = rocket.id
            heading.append(span)

            span.addEventListener("click", (event) => {
                fetch(`${url}/${event.target.id}`)
                .then(resp => resp.json())
                .then(rocket => {
                    rocketName.innerHTML = rocket.name
                    rocketImage.src = rocket.flickr_images
                    rocketDescription.innerText = rocket.description
                    rocketFlights.innerText = rocket.first_flight
                    rocketHeight.innerText = `${rocket.height.feet} ft`
                    rocketDiameter.innerText = `${rocket.diameter.feet} ft`
                    rocketMass.innerText = `${numberWithCommas(rocket.mass.lb)} lbs`
                    rocketStatus.innerText = rocket.active
                    rocketCost.innerText = `$${numberWithCommas(rocket.cost_per_launch)}`
                    rocketLikes.innerText = "0 likes"
                })
            })
        })
    })
    commentButton.addEventListener("click", (event) => {
        event.preventDefault()

        const commentInput = document.querySelector("input.comment-input")
        const newComment = commentInput.value  
        newCommentItem = document.createElement("li")
        newCommentItem.innerText = newComment

        commentForm.append(newCommentItem)
        commentInput.value = ""

    })
    likeButton.addEventListener("click", () => {
        let numberOfLikes = parseInt(rocketLikes.innerText)
        numberOfLikes++
        rocketLikes.innerText = `${numberOfLikes} likes`
     })
})
