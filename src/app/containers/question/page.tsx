import { useState } from "react";

const answer = () => {
  const [question, setQuestion] = useState(''); // 문제

  return (
    // 이미지 클릭 시 파일 이름과 동일한 문제를 띄운다.
    <>
        {/* if 윈도우 클릭 << 윈도우 문제 화면 띄우기 */}
        {/* if unix / linux << unix / linux 문제 화면 띄우기 */}
        <h1>문제 화면</h1>
        {/* {question == 'windows' ? <windows /> : <unix />} */}
    </>
  )
}

export default answer;