function solution(D) {
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const res = {}
    
    for (let d in D) {
        const day = days[new Date(d).getDay()]
        res[day] = (res[day] || 0) + D[d]
    }

    const idx = {Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6, Sun:0}
    const ordered = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    
    for (let i=0; i<ordered.length; i++) {
        const k = ordered[i]
        if (res[k]===undefined) {
            let prev = i-1>=0 ? res[ordered[i-1]] : null
            let next = i+1<ordered.length ? res[ordered[i+1]] : null
            if (prev==null) prev = res['Sun']
            if (next==null) next = res['Mon']
            res[k] = Math.floor((prev + next)/2)
        }
    }
    return res
}

// test cases
console.log(solution({'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':6,'2020-01-07':2,'2020-01-08':-2}))
console.log(solution({'2020-01-01':6,'2020-01-04':12,'2020-01-05':14,'2020-01-06':2,'2020-01-07':4}))
