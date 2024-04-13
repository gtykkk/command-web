import { QuestionTypes } from "@/_types/types";
import { incorrectAnswers, getRandomQuestion, shuffleAnswers } from "@/_utils/random";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Windows() {
    const [question, setQuestion] = useState<QuestionTypes[]>([]);
    const [randomQuestion, setRandomQuestion] = useState<QuestionTypes | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);
    const [cnt, setCnt] = useState(0);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + params.value, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (res.status === 200) {
                    const questions = await res.json();
                    setQuestion(questions);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [params.value]);

    useEffect(() => {
        if (question.length > 0) {
            const newRandomQuestion = getRandomQuestion(question);
            setRandomQuestion(newRandomQuestion);

            const otherItems = incorrectAnswers(question, newRandomQuestion);
            const newAnswers = shuffleAnswers(otherItems, newRandomQuestion);
            setAnswers(newAnswers);
        }
    }, [question]);

    const checkAnswer = (selectAnswer: string) => {
        if (selectAnswer === randomQuestion?.answer) {
            alert('정답입니다!');
            // 정답일 경우 새로운 문항을 가져옴(겹칠 수도 있음)
            const newRandomQuestion = getRandomQuestion(question);
            setRandomQuestion(newRandomQuestion);

            const otherItems = incorrectAnswers(question, newRandomQuestion);
            const newAnswers = shuffleAnswers(otherItems, newRandomQuestion);
            setCnt(cnt + 1);
            setAnswers(newAnswers);
        } else {
            // 오답일 경우 그 문항을 그대로 보여줌
            alert('틀렸습니다!');
        }
    }

    return (
        <div className="flex flex-col justify-evenly min-h-svh">
            <div className="flex justify-center">
                <span>
                    정보처리 산업기사 실기 공부하다가 안외워져서 만들어본 명령어 사이트.
                </span>
            </div>
            <div className="px-20 py-32 bg-gray-800 rounded-xl">
                <span>점수 : {cnt}</span>
                <h1 className="flex justify-center text-xl mb-20">{randomQuestion?.question ? randomQuestion.question : 'Loading...'}</h1>
                <div className="grid grid-cols-2 gap-3">
                    {answers.map((answer, index) => (
                        <button
                            className="flex flex-col btn items-center justify-center w-full xs:w-1/2 mt-10 rounded-"
                            key={index}
                            onClick={() => checkAnswer(answer)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}