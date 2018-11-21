console.log('Working')

fetch('https://api.exchangeratesapi.io/latest')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
                console.log("exchange rate data");
            });

// When the user clicks on the button, 
// toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function render(){
    let chart = document.querySelector("#currency-chart");
    chart.innerHTML='';
    //let height = 70;
    //let bar = document.createElement("section");
    for (let bar of currencyChart) {
        let bar = document.createElement('');
        bar.classList.add("Bar");
        bar.style.height = height + "rates";
        chart.appendChild(bar);
        }
    }

/*const barGraph = {
    base: 'Currency Base'
    rate: 'Current Rates'
};


/* 
original code that broke stuff:
    function updateGraph() {
    graph.rate = rates;
    graph.bar = bar-graph;
    let barGraph = document.querySelector("#bar-graph");
    const exchRate.data = document.querySelector('#rates');
     
    let parent = document.getElementByID(rates);
    let child = document.getElementByID("bar1");
    render();
};


    

// GET https://api.exchangeratesapi.io/latest HTTP/1.1

// ASK ABOUT HELPER FUNCTIONS data.forEach(rate => {

   //const card = document.createElement('div');
   // card.setAttribute('class', 'card'); << might be useful

/*{
  "base": "EUR",
  "date": "2018-04-08",
  "rates": {
    "CAD": 1.565,
    "CHF": 1.1798,
    "GBP": 0.87295,
    "SEK": 10.2983,
    "EUR": 1.092,
    "USD": 1.2234,
    ...
  }
}
fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => { 
                console.log("Current Exchange Rates", data) 
                for (let datum in data) {
                    console.log('test', datum.rates)
                    for (let item in datum.rates) 
                        console.log('item', item);
                }});

                for (let datum in data){
                    function data(datumrates){
                        return rates;
                    }
                    }
            
// (currency => {

// const graph = document.createElement('div');
// graph.setAttribute('class','graph');

// const graph = document.createElement('graph');
// graph.textContent = currency.value;

//         });

{"BGN":1.9558,"CAD":1.4949,"BRL":4.2772,"HUF":321.99,"DKK":7.4622,"JPY":128.16,"ILS":4.1776,"TRY":6.1047,"RON":4.665,"GBP":0.8837,"PHP":59.614,"HRK":7.427,"NOK":9.6028,"USD":1.1305,"MXN":23.0659,"AUD":1.5564,"IDR":16599.19,"KRW":1277.99,"HKD":8.8558,"ZAR":16.1238,"ISK":140.4,"CZK":25.985,"THB":37.278,"MYR":4.7358,"NZD":1.6601,"PLN":4.2933,"SEK":10.2553,"RUB":75.2446,"CNY":7.8448,"SGD":1.557,"CHF":1.1365,"INR":81.37},"base":"EUR"}
*/
