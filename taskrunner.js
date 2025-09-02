class TaskRunner {
    constructor (concurrency) {
        this.concurrency = concurrency;
        this.currentTask = 0;
        this.task = [];
    }

    addTask (task) {
        this.task.push(task);
        return this;
    }

    async nextTask () {
        if (this.task.length === 0 || this.currentTask >= this.concurrency) return

        try {
            this.currentTask++
            const task = this.task.shift();
            const res = await task()
            console.log(res)
        } catch (error) {
            console.log("task failed", error)
        }
        finally {
            this.currentTask--
            this.nextTask();
        }
    }

    startTask () {
        for (let i = 0; i < this.concurrency; i++) {
            this.nextTask()
        }
    }
}

const t1 =() => new Promise((resolve) => setTimeout(() => {resolve("completed")}, 3000))
const t2 =()  => new Promise((resolve) => setTimeout(() => {resolve("completed")}, 3000))
const t3 = () => new Promise((resolve) => setTimeout(() => {resolve("completed")}, 3000))
const t4 =()=> new Promise((resolve) => setTimeout(() => {resolve("completed")}, 3000))
const t5 = () => new Promise((resolve) => setTimeout(() => {resolve("completed")}, 3000))

const runner = new TaskRunner(2);
runner.addTask(t1)
runner.addTask(t2)
runner.addTask(t3)
runner.addTask(t4)
runner.addTask(t5)
 
runner.startTask();