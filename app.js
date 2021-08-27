

const addQuote=() =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displyData(data));
}

const displyData =(quote)=>{
    const element= document.getElementById('block-quate');
   element.innerText= quote.quote;
}