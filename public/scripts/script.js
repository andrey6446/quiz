const form = document.querySelector('.formAnswer');
const btnSend = form.querySelector('button');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { action, answer, method } = e.target;
    console.log(action, answer.value);
    if (answer.value !== '') {
      const res = await fetch(action, {
        method,
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          answer: answer.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'success') {
        form.insertAdjacentHTML('beforeend', data.html);
        form.removeChild(btnSend);
      }
    } else {
      alert('Поле ответа не может быть пустым!');
    }
  });
}
