
export interface ServiceProtocol {

}

export class Services {

    map: { [key: string]: ServiceProtocol; }

    constructor() {
        this.map = {}
    }

    reg = function reg(k: string, p: ServiceProtocol): void {

        this.map[k] = p
    }

    ioc = function reg(k: string): ServiceProtocol {
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

export let shared = new Services()