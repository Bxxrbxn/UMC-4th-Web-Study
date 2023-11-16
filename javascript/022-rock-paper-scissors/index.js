const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');


const result = ['가위', '바위', '보'];

const show = (user, computer, result) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = result;
}

const game = (user, computer) => {
    let message;

    if (user == computer){
        console.log('무승부');
    }
    else {
    switch(user + computer) {
        case '가위보':
        case '바위가위': 
        case '보가위':
            message = '사용자 승리!';
            break;
        case '가위바위':
        case '바위보':
        case '보가위':
            message = '컴퓨터 승리!';
            break;
        }
    }

    show(user, computer, message);
};

const play = (event) => {
    
    //사용자의 선택
    const user = event.target.innerText;

    //정수가 나오지 않기 때문에 floor 사용
    // *3은 원하는 범위의 최대값. random() < 3으로 생각하면 됨
    const randomIndex = Math.floor(Math.random() * 3); 
    const computer = result[randomIndex];
    game(user, computer);
    
};

buttons.forEach((button) => {
    button.addEventListener('click', play);
});

