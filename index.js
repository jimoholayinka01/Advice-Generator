fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(json =>{
      document.querySelector('.status').hidden = true
      document.getElementById('advice').innerHTML = ` "${json.slip.advice}"`
      document.getElementById('adviceNo').innerHTML = `Advice #${json.slip.id}` 
    })
    setTimeout(() => {
      window.location.reload()
    }, 15000);