function median(data) {
    let right
    let mid
    let length
    let ans
    let type
    right = data.sort(function(a, b){return a-b})
    /// 數字排序
    length = data.length/2
    mid = ((data.length-1)/2)+1
    type = (right[right.length/2] + right[right.length/2-1])/2

    function isInteger(obj) {
        return obj%1 === 0
    }
    /// 檢查是否為整數

    if (isInteger(length) == false) {
        ans = data[mid-1]
    } else {
        ans = type
    }
    return ans;
}
