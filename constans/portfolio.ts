interface IPortfolioItem {
    name: string,
    desc: string,
    github: string,
    images: string[],
    link?: string,
  }
  
  class PortfolioItem implements IPortfolioItem {
    constructor(
         public name: string,
         public desc: string,
         public github: string,
         public images: string[],
         public link?: string
         ) {
      this.name = name;
      this.desc = desc;
      this.github = github;
      this.images = images; 
     this.link = link;
    }
  }
  
  export const portfolioItems: IPortfolioItem[] = [
   new PortfolioItem("Crypto table",
    "Monitorig crypto currency",
     "https://github.com/qxie11/crypto-app",
     [
      'https://i.postimg.cc/Y9Z39FVv/crypto-table1.jpg',
      'https://i.postimg.cc/44HP087V/crypto-table2.jpg',
      'https://i.postimg.cc/7hzNT68m/crypto-table3.jpg'
     ],
     "https://crypto-app-55ae59.netlify.app/"
     )
  ]