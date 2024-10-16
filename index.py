from flask import Flask, render_template, request
from collections import Counter

app = Flask(__name__)

def calcular_moda(numeros):
    contagem = Counter(numeros)
    max_ocorrencias = max(contagem.values())
    modas = [num for num, occ in contagem.items() if occ == max_ocorrencias]
    return modas

def calcular_media(numeros):
    return sum(numeros) / len(numeros) if numeros else 0

def calcular_mediana(numeros):
    numeros.sort()
    n = len(numeros)
    meio = n // 2
    if n % 2 == 0:
        return (numeros[meio - 1] + numeros[meio]) / 2
    else:
        return numeros[meio]

@app.route('/', methods=['GET', 'POST'])
def index():
    resultados = {}
    if request.method == 'POST':
        entrada = request.form['numeros']
        numeros = list(map(float, entrada.split(',')))
        
        resultados['moda'] = calcular_moda(numeros)
        resultados['media'] = calcular_media(numeros)
        resultados['mediana'] = calcular_mediana(numeros)

    return render_template('index.html', resultados=resultados)

if __name__ == '__main__':
    app.run(debug=True)
