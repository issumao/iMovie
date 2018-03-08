// IOC Container
export interface IOCProtocol {

}

// IOC 容器
export class IOCContainer {

    map: { [key: string]: IOCProtocol; }

    constructor() {
        this.map = {}
    }

    reg = (k: string, p: IOCProtocol) => {

        this.map[k] = p
    }

    ioc = (k: string): IOCProtocol => {
        return this.map[k]
    }

    // static getType(input: any): string {
    //     let regex = /function (.{1,})\(/;
    //     let res = regex.exec(
    //         input.constructor.toString()
    //     )
    //     return (res && res.length > 1) ? res[1] : ''
    // }
}

let shared = new IOCContainer()

// 导出默认容器
export default shared