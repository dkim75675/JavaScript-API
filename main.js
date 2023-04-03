let endpoint = 'live'
let access_key = 'a5ce08a7283c4d3160f04d6a30609d2d';


$.ajax({
    url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {
        const bitcoin = json.rates.BTC
        const ethereum = json.rates.ETC
        const litecoin = json.rates.LTC
        const dogecoin = json.rates.DOGE
        const currency = json.target

        document.querySelector('.btc-price').insertAdjacentHTML('beforeend', bitcoin)
        document.querySelector('.btc-price').insertAdjacentHTML('beforeend', currency)

        document.querySelector('.etc-price').insertAdjacentHTML('beforeend', ethereum)
        document.querySelector('.etc-price').insertAdjacentHTML('beforeend', currency)
        

        document.querySelector('.ltc-price').insertAdjacentHTML('beforeend', litecoin)
        document.querySelector('.ltc-price').insertAdjacentHTML('beforeend', currency)

        document.querySelector('.doge-price').insertAdjacentHTML('beforeend', dogecoin)
        document.querySelector('.doge-price').insertAdjacentHTML('beforeend', currency)
        

        
    }
});

