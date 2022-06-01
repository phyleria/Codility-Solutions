function solution(N){

    let binaryN = ( N >>> 0).toString(2) //changes the binary number N to a string*
    let maxGap = 0; //Automatically sets the maximum gap to 0

    for(i = 0; i< binaryN.length; i++) //Loops the pointer i through the length of the binary string
    {
        for(j = 0; binaryN.length; j++) //Loops the pointer j throught the length of the binary string
        {
            if(binaryN[i]==1 && binaryN[j]==1 && i!=J) //Checks whether both pointers i & j are set to 1 and are not equal 
            {
                if(maxGap<j-i-1) //sets maximum gap to the number of zeros found between ones after one loop 
                {
                maxGap = j-i-1; //sets the maximum gap to the number found after each loop
            }
        }
    }
    i=j;
}
    return maxGap;
}