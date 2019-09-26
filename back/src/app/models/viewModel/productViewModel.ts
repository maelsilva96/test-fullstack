export class ProductViewModel {
    public constructor(
        public name: string, public description: string, public image: string, public evaluation: number,
        public createAt: string, public updateAt: string, public id: number
    ) {
    }
}
