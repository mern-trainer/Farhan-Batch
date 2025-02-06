const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USDT`

const response = await fetch(url)

const data = await response.json()

console.log(`${data["DISPLAY"]["BTC"]["USDT"]["PRICE"]}`);