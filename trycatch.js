// try {
//     alert('1');
//     alert('2');
// } catch (err) {
//     alert('error');
// }

try {
    alert('try 블록 시작');  // (1) <--
    lalala; // 에러, 변수가 정의되지 않음!
    alert('try 블록 끝(절대 도달하지 않음)');  // (2)
} catch (err) {
    alert(`에러가 발생했습니다!`); // (3) <--
}