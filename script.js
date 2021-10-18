const calcular = document.querySelector("input#calcular")
calcular.addEventListener('click', pace);
function pace()
{
    const nome = document.getElementById("nome").value
    const distancia = document.getElementById("distancia").value
    const peso = document.getElementById("peso").value
    const tempo = document.getElementById("tempo").value


    const div_resultado = document.getElementById("div-resultado")
    div_resultado.innerHTML = '<textarea id="result" disabled>uiui</textarea>'

    const footer = document.querySelector('footer#info')

    const resultado = document.getElementById("result")

    if(nome !== "" && nome !== "" && peso !=="" && distancia !=="" && tempo !=="")
    {

        const tempo_corte = tempo.split(':');
        const horas = parseInt(tempo_corte[0])
        const minutos = parseInt(tempo_corte[1])
        const segundos = parseInt(tempo_corte[2])

        const tempo_horas = horas + minutos/60 + segundos / 3600

        const tempo_minutos = horas * 60 + minutos + segundos/60

        const velocidade = (distancia/tempo_horas).toFixed(2)
        
        const pace = (60/velocidade).toFixed(2)

        const calorias = (velocidade*peso*0.0175*tempo_minutos).toFixed(2)

        resultado.textContent = `Olá, ${nome}! Você percorreu ${distancia}km em ${horas}h ${minutos}min ${segundos}s, o que implica em uma velocidade média de ${velocidade}km/h ou pace de ${pace}min/km. Estima-se que você tenha consumido ${calorias}Kcal!`
        footer.textContent = "Atenção! Estes resultados devem ser interpretados por um(a) profissional de saúde!"
    }

    else
    {
        footer.textContent = ''
        resultado.innerText += `Favor preencher corretamente todos os campos!`
    }
    
}
