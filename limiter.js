const time = 1000 * 60;
const limitMap = new Map();
function limiter (path, limit) {
    if (!limitMap.has(path))  {
        const firstTime = Date.now();
        limitMap.set(path,{
            count: 1,
            firstReq: firstTime,
        })
        return true;
    }
    else {
        const now = Date.now();
        if (now - limitMap.get(path).firstReq > time) { 
            limitMap.set(path, {
                count: 1,
                firstReq: now,
            })
            return true
        }
        else {
            if (limitMap.get(path).count < limit) {
                const oldRes = limitMap.get(path);
                limitMap.set(path, {
                ...oldRes,
                count: oldRes.count + 1,
            })
            return true;
            }
            else {
                return false;
            }
        }
    }
}
