import React from "react";

const InteractiveComponent = () => {
//   const three_avg = (x: number, y: number, z: number): number => {
//     const avg = (x + y + z) / 3;
//     console.log("average of three numbers", avg);
//     return avg;
//   };

//   const square_num = (x: number): number => {
//     return Math.pow(x, 2);
//   };

//   const isEven = (x: number): boolean => {
//     return x % 2 === 0;
//   };

//   const isOdd = (x: number): boolean => {
//     // return x % 2 === 1;
//     return !isEven(x);
//   };

//   const cube_num = (x: number): number => {
//     // return Math.pow(x,3);
//     // return x*x*x;
//     return x ** 3;
//   };

//   const is_vowel = (chr: string): boolean => {
//     const vowel_list = ['a','e','i','o','u']
//     let ch = chr.toLowerCase()
//     // let ch = chr.toUpperCase()
//     // if (ch ==='a' || ch ==='e' || ch ==='i' || ch ==='o' || ch ==='u') {
//     //       return true;
//     // }
//     // return false;
//     return (vowel_list.includes(ch))
//   };

//   const is_consonant = (chr: string):boolean =>{
//     return !is_vowel(chr)
//   }

//   const is_upper = (char: string):boolean =>{
//     return (char ==  char.toUpperCase())
//   }

const table_count =(n:number)=>{
         for(let i=1; i<=10; i++){
        //    const table = n*i;
        //    console.log(`${table}`);
            console.log(n*i)

         }

}
  return (
    <div>
      {/* Interactive Component
      <h1>Average:{three_avg(1, 1, 1)}</h1>
      <h1>Square:{square_num(9)}</h1>
      Is Even:{isEven(2) ? <h1>yes</h1> : <h2>no</h2>}
      Is Odd: {isOdd(2) ? <h1>yes</h1> : <h2>no</h2>}
      <h1>Cube:{cube_num(2)}</h1>
      <h1>{is_vowel('y') ? "is a vowel " : "is consonant"}</h1>
      <h1>{is_consonant('i')? "is a consonant": "is vowel"}</h1>
      <h1>{is_upper("NIMRA")? "is upper case": " is not upper case"}</h1> */}
      <button onClick={()=> table_count(2)}>Table of 2</button>
      </div>
  );
};

export default InteractiveComponent;
