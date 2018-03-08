// IOC 容器
export class IOCContainer {
    constructor() {
        this.reg = (k, p) => {
            this.map[k] = p;
        };
        this.ioc = (k) => {
            return this.map[k];
        };
        this.map = {};
    }
}
let shared = new IOCContainer();
// 导出默认容器
export default shared;
//# sourceMappingURL=IOCContainer.js.map