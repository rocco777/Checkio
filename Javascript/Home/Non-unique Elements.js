function nonUniqueElements(data) {
    let i
    let j
    let count = 0
    let ans = []
    for (i = 0; i < data.length; i++) {
        count = 0
        for (j = 0; j < data.length; j++) {
            if (data[i] == data[j]) {
                count++;
                if (cont > 1) {
                    ans.push(data[i]);
                    count = 0;
                    break
                }
            }
        }
    }
    console.log(ans)
    return ans;
}
