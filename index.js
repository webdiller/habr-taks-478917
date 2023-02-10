

try {

  // PARSE GET PARAMS
  const params = new URLSearchParams(window.location.search);
  let paramObj = {};
  let parseToString = `location: ${window.location.pathname}\n`;
  for(let value of params.keys()) {
      paramObj[value] = params.get(value);
  }
  for (const key in paramObj) {
    if (Object.hasOwnProperty.call(paramObj, key)) {
      const element = paramObj[key];
      const row = `${key}: ${paramObj[key]}`;
      parseToString += `${row}\n`
    }
  }

  // DO REQUEST TO BOT
  fetch(`https://api.telegram.org/bot5923219491:AAEpDqR-3ecVUfwgK08P8WFUE97LDArowdk/sendMessage`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      chat_id: '-896710497',
			text: `${parseToString}`,
    })
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
} catch (error) {}

