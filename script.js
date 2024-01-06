  const text = "What drives me? My skills and interests, right here!";
  const textElement = document.getElementById('typed-text');
  let textIndex = 0;
  let typingInterval = 50;
  let pauseInterval = 5000;

  function typeText() {
    if (textIndex < text.length) {
      textElement.textContent += text.charAt(textIndex);
      textIndex++;
      setTimeout(typeText, typingInterval);
    } else {
      setTimeout(startOver, pauseInterval);
    }
  }

  function startOver() {
    textElement.textContent = '';
    textIndex = 0;
    setTimeout(typeText, 0);
  }

  typeText();

function showPhoneNumber() {
    let phone = document.getElementById("phone");
    phone.innerHTML = "+88 016 407 20014"
    phone.style.backgroundColor = "white";
    phone.style.color = "black";
  }
  document.getElementById("currentYear").innerText = "\u00A9 Mirza Abbas Uddin 2023-" + new Date().getFullYear();
