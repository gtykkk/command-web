import { QuestionTypes } from "../types/types";

// 객체에서 랜덤 문제 가져오는 함수
export function getRandomQuestion(items: QuestionTypes[]): QuestionTypes {
    return items[Math.floor(Math.random() * items.length)]
}

// 정답이 아닌 것을 구하는 함수
export function incorrectAnswers<T>(items: T[], itemToExclude: T): T[] {
    return items.filter(item => item !== itemToExclude);
}

// 정답을 하나 포함하고 정답이 아닌 것을 세개 넣어 섞는 함수
export function shuffleAnswers(items: { question: string, answer: string }[], correctQuestion: { question: string, answer: string }) {
    const notAnswers = incorrectAnswers(items, correctQuestion).map(item => item.answer);
    const randomIncorrectAnswers = notAnswers.sort(() => Math.random() - 0.5).slice(0, 3);

    // 질문이 아직 로드 중이면 빈 문자열(배열) 반환
    {correctQuestion?.answer? correctQuestion.answer : []}

    const choices = [correctQuestion?.answer, ...randomIncorrectAnswers];
    return choices.sort(() => 0.5 - Math.random()); // 선택지를 랜덤으로 섞음(잘 안섞이는 것 같아서 바꿀 예정)
}

export function checkAnswer(answer: string) {
    
}