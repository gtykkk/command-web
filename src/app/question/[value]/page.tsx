"use client";

import { QuestionTypes } from "@/_types/types";
import { incorrectAnswers, getRandomQuestion, shuffleAnswers } from "@/_utils/random";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Question() {
  const [question, setQuestion] = useState<QuestionTypes[]>([]);
  const [randomQuestion, setRandomQuestion] = useState<QuestionTypes | null>(null);
  const [selectAnswer, setSelectAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [cnt, setCnt] = useState(0);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/db.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (res.status === 200) {
          const data = await res.json();
          const questions = data[params.value.toString()] as QuestionTypes[];

          setQuestion(questions);

          if (questions.length > 0) {
            const newRandomQuestion = getRandomQuestion(questions);
            setRandomQuestion(newRandomQuestion);
          }
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

  // 정답확인 함수
  const checkAnswer = (selectAnswer: string) => {
    if (selectAnswer === randomQuestion?.answer) {
      // alert('정답입니다!');
      // 정답일 경우 새로운 문항을 가져옴(겹칠 수도 있음, 추후 수정 예정)s
      const newRandomQuestion = getRandomQuestion(question);
      setRandomQuestion(newRandomQuestion);

      const otherItems = incorrectAnswers(question, newRandomQuestion);
      const newAnswers = shuffleAnswers(otherItems, newRandomQuestion);
      setCnt(cnt + 1);
      setAnswers(newAnswers);
      setSelectAnswer(null);
    } else {
      setSelectAnswer(selectAnswer);
      // 오답일 경우 그 문항을 그대로 보여줌
      // alert('틀렸습니다!');
    }
  }

  return (
    <main className="">
      <div className="flex justify-center ">
        <div className="flex justify-center text-xs min-h-svh md:w-[600px] md:text-lg px-8">
          <div className="flex flex-col justify-evenly text-center">
            <div className="flex justify-center">
              <span className="text-xs md:text-base">
                정보처리 산업기사 실기 공부하다가 안외워져서 만들어본 문제 맞추기.
              </span>
            </div>
            <div className="px-2 py-12 md:px-8 md:py-8 bg-gray-800 rounded-xl">
              {/* 점수기능 추후 생성 */}
              <h1 className="flex justify-center mb-5 md:mb-10">{randomQuestion?.question ? randomQuestion.question : 'Loading...'}</h1>
              <div className="grid grid-cols-2 gap-3 place-items-center">
                {answers.map((answer, index) => (
                  <button
                    className={`btn justify-center items-center ${answer === selectAnswer ? answer === randomQuestion?.answer ? 'bg-green-500 hover:bg-green-500' : 'bg-red-500 hover:bg-red-500' : 'bg-gray-800'}`}
                    key={index}
                    onClick={() => checkAnswer(answer)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}