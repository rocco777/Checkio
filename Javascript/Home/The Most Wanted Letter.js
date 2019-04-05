function mostWanted(data) {

    data = data.toLowerCase(); //變小寫
    data = data.replace(/[\s|\d+]/g, ""); //移除空白, number
    data = data.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, ""); //移除符號

    let word //計算當前的字母
    let Maxword //最多次字母
    let Maxcount = 0 //最多次的次數
    let count //計算當前的次數
    let strword = ""
    let strMaxword = ""

    for (let i = 0; i < data.length; i++) {
        count = 0;
        for (let j = i; j < data.length; j++) {
            strword = "";
            strMaxword = "";
            if (data[i] == data[j]) {
                count++;
                word = data[i];
            } 
            
            if (Maxcount < count) {
                Maxcount = count;
                Maxword = word;
            } else if (Maxcount == count) {
                strword = strword + word;
                strMaxword = strMaxword + Maxword;
                if (strword.charCodeAt() < strMaxword.charCodeAt()) {
                    
                    Maxword = word;
                }
            }
        }
    }
    return Maxword;
};
