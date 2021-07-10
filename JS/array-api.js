// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    //A1. join: 배열->string
    const result = fruits.join('|');//구분자가 | 이다 (default는 쉼표)
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';

    //A2. split: string -> 배열
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];

    //A3. reverse
    const result = array.reverse();
    console.log(result);
    console.log(array); //기존의 array도 바뀜

}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];

    //A4. splice or slice
    /*
    const result = array.splice(0, 2); //index 0 부터 2개
    console.log(result);//1,2
    console.log(array); //3,4,5 --> array가 바뀌기에 적절하지 않음
    */
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array); //array도 변하지 않아쓰 - 적절!
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    //A5. find - 90점인 학생 return
    const result = students.find((student) => student.score === 90); //true면 return이 된다
    //console.log(student, index)

    console.log(result);
}

// Q6. make an array of enrolled students
{
    //A6. filter
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    //A7. map
    const result = students.map((student) => student.score);
    console.log(result);

}

// Q8. check if there is a student with the score lower than 50
{
    //A8. some
    const result = students.some((student) => student.score < 50); // 한명만 50보다 작아도 true
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); // 모두 50보다 크거나 같아야 true
    console.log(result);
}

// Q9. compute students' average score
{
    //A9. reduce
    //reduce right는 거꾸로
    //prev: 이전에 콜백함수에서의 리턴값이 전달됨
    //curr: 배열의 item 순차적으로 전달받음
    const result = students.reduce((prev, curr) => {
        //console.log('---------');
        //console.log(prev);
        //console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    //A10.
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50) //50점 이상만 출력할 경우
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}