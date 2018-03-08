// IOC Container
export interface IOCProtocol {

}

// IOC 容器
export class IOCContainer {

    map: { [key: string]: IOCProtocol } = {}

    reg = (k: string, p: IOCProtocol) => {

        this.map[k] = p
    }

    get = (k: string): IOCProtocol => {
        return this.map[k]
    }

    ioc2 = <T extends IOCProtocol>(k: string): T => {
        return this.map[k] as T
    }
    
    // static getType(input: any): string {
    //     let regex = /function (.{1,})\(/;
    //     let res = regex.exec(
    //         input.constructor.toString()
    //     )
    //     return (res && res.length > 1) ? res[1] : ''
    // }
}

// let map: { [key: string]: IOCProtocol; } = {}

// function identity<T extends IOCProtocol>(arg: string): T {
//     return map[k]
// }


let shared = new IOCContainer()

// 导出默认容器
export default shared