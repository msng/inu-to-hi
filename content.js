{
  const replacement = document.createElement('span');
  replacement.textContent = 'ヒ';
  replacement.style.fontSize = '24px';
  replacement.style.color = 'rgb(29, 155, 240)';

  function replaceIcon() {
    const inu = document.querySelector('a[href="/home"][aria-label="Twitter"] svg');

    if (inu) {
      inu.replaceWith(replacement);
    } else {
      setTimeout(replaceIcon, 100);
    }
  }

  replaceIcon();
}
