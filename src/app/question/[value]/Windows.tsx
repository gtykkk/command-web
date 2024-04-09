import { QuestionTypes } from "@/app/types/types";
import { incorrectAnswers, getRandomQuestion, shuffleAnswers } from "@/app/utils/random";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Windows() {
    const [question, setQuestion] = useState<QuestionTypes[]>([]);
    const [randomQuestion, setRandomQuestion] = useState<QuestionTypes | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:9998/` + params.value, {
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
            const newRandomQuestion = getRandomQuestion(question);
            setRandomQuestion(newRandomQuestion);

            const otherItems = incorrectAnswers(question, newRandomQuestion);
            const newAnswers = shuffleAnswers(otherItems, newRandomQuestion);
            setAnswers(newAnswers);
        } else {
            alert('틀렸습니다!');
        }
    }

    return (
        <div className="flex flex-col justify-evenly min-h-svh">
            <h1 className="flex justify-center">{randomQuestion?.question ? randomQuestion.question : 'Loading...'}</h1>
            <div className="grid grid-cols-2 gap-5">
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
    )
}