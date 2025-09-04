/*
const prom = new Promise ((resolve, reject) => {
        resolve(value) //
        reject(value)
    })

prom.then((app) => console.log(apple))
.then()
.catch()
.then
// fulfilled, pending, rejected
*/
const states = {
    f: "FULFILLED",
    r: "REJECTED",
    p: "PENDING"
}
const getState = (it) => states[it];
class MyPromise {


    constructor(executer) {
        this.state = getState("p");
        this.value = null;
        this.thenCallbacks = [];
        this.errorCallbacks = [];

        const resolve = (value) => {
            if (this.state !== getState("p")) return;
            this.state = getState("f");
            this.value = value;
            this.thenCallbacks.push(cb => cb(value))

        }

        const reject = (value) => {
            if (this.state !== getState("p")) return;
            this.state = getState("r");
            this.value = value;
            this.errorCallbacks.push(cb => cb(value))
        }

        executer(resolve, reject)

    }

    then (cb) {
        if (this.state === getState("f")) {
            cb(this.value)
        }
        else {
            this.thenCallbacks.push(cb);
        }
        return this
    }
    catch (cb) {
        if (this.state === getState("r")) {
            cb(this.value);
        }
        else {
            this.errorCallbacks.push(cb);
        }
        return this
    }
}
