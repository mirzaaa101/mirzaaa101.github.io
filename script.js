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

  function showZoomedImage(imageSrc) {
    var modal = document.createElement('div');
    modal.style.border = "50% solid #ffffff";
    modal.classList.add('zoom-modal');
    var zoomedImage = document.createElement('img');
    zoomedImage.src = imageSrc;
    zoomedImage.classList.add('zoomed-image');
    modal.appendChild(zoomedImage);
    document.body.appendChild(modal);
    modal.onclick = function () {
      document.body.removeChild(modal);
    };
  }