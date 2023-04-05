const getQuotes = async function () {
  const showQuote = await fetch(
    "https://api.quotable.io/quotes?author=maya-angelou&limit=1"
  );
  const data = await showQuote.json();
  console.log(showQuote);
  console.log(data);
};

getQuotes();
