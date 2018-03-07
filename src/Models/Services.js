export class Services {
    constructor() {
        this.reg = function reg(k, p) {
            this.map[k] = p;
        };
        this.ioc = function reg(k) {
            return this.map[k];
        };
        this.map = {};
    }
}
export let shared = new Services();
//# sourceMappingURL=Services.js.map