const form = document.getElementById('transaction-form');
const list = document.getElementById('transaction-list');
const balance = document.getElementById('balance');

let transactions = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const desc = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);

  const transaction = {
    id: Date.now(),
    desc,
    amount
  };

  transactions.push(transaction);
  updateUI();
  form.reset();
});

function updateUI() {
  list.innerHTML = '';
  let total = 0;

  transactions.forEach((t) => {
    const li = document.createElement('li');
    li.textContent = `${t.desc}: ₹${t.amount}`;
    li.classList.add(t.amount < 0 ? 'expense' : 'income');
    list.appendChild(li);
    total += t.amount;
  });

  balance.textContent = total;
}
