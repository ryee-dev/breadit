export class Post {
  constructor(
    public id: string,
    public upvotes: number,
    public title: string,
    public user: string,
    public subbreaddit: string,
    public toasted: boolean,
    public date: Date
  ) { }
}
