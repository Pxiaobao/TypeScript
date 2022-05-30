function longestCommonSubsequence(text1: string, text2: string): number {
    let arr:number[][] = new Array(text1.length + 1).fill(0).map(()=>{
        return new Array(text2.length + 1).fill(0)
    })
    for(let i =1;i<text1.length+1;i++){
        for(let j=1;j<text2.length+1;j++){
            if(text1[i-1]==text2[j-1]){
                arr[i][j]=arr[i-1][j-1]+1
            }else{
                arr[i][j] = Math.max(arr[i-1][j],arr[i][j-1])
            }
        }
    }
    let res:number=0;
    arr.forEach(item=>{
        res = Math.max(res,Math.max(...item))
    })
    return res
};
console.log(longestCommonSubsequence('abcdefg','cdfga'))
const aa:string='a'