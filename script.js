function calcular() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        alert('Por favor, insira pelo menos um número.');
        return;
    }

    const media = calcularMedia(numbers);
    const mediana = calcularMediana(numbers);
    const moda = calcularModa(numbers);

    document.getElementById('media').innerText = media;
    document.getElementById('mediana').innerText = mediana;
    document.getElementById('moda').innerText = moda;
}

function calcularMedia(nums) {
    const soma = nums.reduce((a, b) => a + b, 0);
    return (soma / nums.length).toFixed(2);
}

function calcularMediana(nums) {
    nums.sort((a, b) => a - b);
    const meio = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[meio] : ((nums[meio - 1] + nums[meio]) / 2).toFixed(2);
}

function calcularModa(nums) {
    const contagem = {};
    nums.forEach(num => {
        contagem[num] = (contagem[num] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(contagem));
    const modas = Object.keys(contagem).filter(num => contagem[num] === maxCount);

    return modas.length === nums.length ? 'Não há moda' : modas.join(', ');
}
