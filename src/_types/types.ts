export interface MenuTypes {
    Windows: {
        name: string,
        icon: string,
        src? : string,
        alt? : string,
        value? : string,
        label? : string,
        width? : number,
        height? : number,
        priority? : boolean,
    },
    Unix: {
        name: string,
        icon: string,
        src? : string,
        alt? : string,
        value? : string,
        label? : string,
        width? : number,
        height? : number,
        priority? : boolean,
    },
}

export interface QuestionTypes {
    question: string,
    answer: string,
    id: string,
}

export interface AnswerTypes {
    answer: string,
    isCorrect: boolean,
}