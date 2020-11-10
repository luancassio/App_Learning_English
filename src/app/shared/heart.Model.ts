export class Heart{

    constructor(
        public full: boolean,
        public urlFullHeart: string = '/assets/coracao_cheio.png',
        public urlEmptyHeart:string = '/assets/coracao_vazio.png'
){}

heartDisplay(): string{
    if (this.full) {
        return this.urlFullHeart;
    } else {
        return this.urlEmptyHeart;
    }
  }
}