export class Post {
  public id: string;
  public date: Date = new Date();
  public toasted: boolean;
  public user: string;
  public thumbnail: string;
  public upvotes: number;
  constructor(
    public link: string,
    public title: string,
    public text: string,
    public subbreaddit: string
  ) { }
}
