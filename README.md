# 🕹️ Jogo Detona Ralph

Um jogo de navegador estilo "Whack-a-Mole" (acerte o alvo) inspirado no personagem Ralph do filme _Detona Ralph_. O objetivo é clicar no Ralph conforme ele aparece aleatoriamente no painel para somar pontos antes que o tempo acabe.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação dos elementos do jogo.
- **CSS3**: Estilização com temática retrô e layouts flexíveis.
- **JavaScript (ES6+)**: Lógica de estados, manipulação de DOM e temporizadores.
- **Google Fonts**: Uso da fonte `'Press Start 2P'` para um visual 8-bit.

## 🛠️ Funcionalidades

- **Controle de Jogo**: Botões para Iniciar, Pausar e Reiniciar a partida.
- **Sistema de Pontuação**: Incremento de pontos a cada clique certeiro no inimigo.
- **Temporizador**: Contador regressivo de 60 segundos que encerra o jogo ao chegar em zero.
- **Efeitos Sonoros**: Feedback auditivo ao atingir o alvo.
- **Dificuldade**: Ralph alterna entre os quadrados em um intervalo de tempo definido (`gameVelocity`).

## 🎮 Como Jogar

1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Clique no botão **Iniciar** para começar a contagem regressiva e o movimento do Ralph.
3. Clique rapidamente sobre o quadrado onde o Ralph aparecer para ganhar 1 ponto.
4. Use o botão **Pausar** se precisar interromper a jogatina e **Reiniciar** para zerar o placar e o tempo.
5. O jogo termina quando o cronômetro chega a `0`.

## 📂 Estrutura de Arquivos

```text
src/
 ├── audios/     # Efeitos sonoros (.m4a)
 ├── images/     # Sprites e fundos (.png)
 ├── scripts/    # Lógica principal (engine.js)
 └── styles/     # Arquivos de estilo (main.css, reset.css)
index.html       # Estrutura principal
```

## 📝 Licença

Este projeto foi desenvolvido para fins de estudo e prática de manipulação de DOM com JavaScript.
