// IOC 容器
export class IOCContainer {
    constructor() {
        this.map = {};
        this.reg = (k, p) => {
            this.map[k] = p;
        };
        // get = (k: string): IOCProtocol => {
        //     return this.map[k]
        // }
        this.get = (k) => {
            return this.map[k];
        };
        // static getType(input: any): string {
        //     let regex = /function (.{1,})\(/;
        //     let res = regex.exec(
        //         input.constructor.toString()
        //     )
        //     return (res && res.length > 1) ? res[1] : ''
        // }
    }
}
// let map: { [key: string]: IOCProtocol; } = {}
// function identity<T extends IOCProtocol>(arg: string): T {
//     return map[k]
// }
let shared = new IOCContainer();
// 导出默认容器
export default shared;
//# sourceMappingURL=IOCContainer.js.map