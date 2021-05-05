function solution(nums) {
    let answer = 0;
    let temp = [];
    for(let i = 0; i <= nums.length-1; i++){
        for(let j = i+1; j <= nums.length-1; j++){
            for(let k = j+1; k <= nums.length-1; k++){
                let sum = nums[i] + nums[j] + nums[k];
                temp.push(sum);
            }            
        }
    }
    for(let i = 0; i <= temp.length -1; i++){
        if (primenum(temp[i])){
            answer++;
        }   
    }    
    return answer;
}

function primenum(num){
    for(let l = 2; l*l <= num; l++){
        if(num % l === 0)
            return false;
    }
    return true;
}