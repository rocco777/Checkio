function twoTeams(sailors) {
    var first = []
    var sec = []
    var names = Object.keys(sailors)
    var i

    for (i = 0; i < names.length; i++) {
        if (sailors[names[i]] > 40 || sailors[names[i]] < 20) {
            first.push(names[i]);
            console.log(first);
        } else {
            sec.push(names[i]);
            console.log(sec);
        }
    }
    first.sort();
    sec.sort();
    return [
        first,
        sec
    ]
}
