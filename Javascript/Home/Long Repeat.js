function longRepeat(line) {
    let i;
    let j;
    let count;
    let maxcount= 0;

    for (i=0; i<line.length; i++) {
        count = 0;
        for (j=i; j<line.length; j++) {
            if (line[i] == line[j]) {
                count++;
            } else if (line[i] != line[j]) {
                break;
            }
            if (maxcount < count) {
                maxcount = count;
            }
        }
    }

    return maxcount;
}
