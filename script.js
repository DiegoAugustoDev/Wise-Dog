let url = "https://api.adviceslip.com/advice"

    fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            let slip = data.slip.advice
            console.log(slip)
            document.getElementById("advice").innerHTML = slip
        })
