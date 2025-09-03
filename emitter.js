class CustomEmitter {
    constructor () {
        this.events = new Map();
    }

    on (event, listner) {
        this.events.set(event, new Set())
        this.events.get(event).add(listner);
    }

    off (event, listner) {
        if (this.events.has(event)) {
            this.events.get(event).delete(listner);
            if (this.events.get(event).size === 0) {
                this.events.delete(event)
            }
        }
    }

    once (event, listner) {
        const fn = (...args) => {
            listner(...args);
            this.off(event, listner);
        }

        this.on(event, fn);
    }

    emit (event, ...args) {
        if (this.events.has(event)) {
            for (let listner of this.events.get(event)) {
                listner(...args);
            }
        }
    }
}

const invoice = new CustomEmitter();
invoice.on("id", function (name) {
    console.log(name);
})
invoice.on("id", (name) => console.log(`Hi ${name}`));

invoice.emit("id", "super")

