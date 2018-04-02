export class Post {
  public date: Date;
  constructor(
    public id: string,
    public upvotes: number,
    public title: string,
    public user: string,
    public subbreaddit: string,
    public toasted: boolean,
    public link: string,
    public thumbnail: string
  ) { }
}
