interface IPortfolioItem {
    name: string,
    desc: string,
    github: string,
    images: string[],
    link?: string,
    listOfTechnologies: string[]
  }
  
  class PortfolioItem implements IPortfolioItem {
    constructor(
         public name: string,
         public desc: string,
         public github: string,
         public images: string[],
         public link?: string,
         public listOfTechnologies: string[]
         ) {
      this.name = name;
      this.desc = desc;
      this.github = github;
      this.images = images; 
      this.link = link;
      this.listOfTechnologies = listOfTechnologies;
    }
  }
  
  export const portfolioItems: IPortfolioItem[] = [
   new PortfolioItem(
     "Crypto table",
     "This work has the most up-to-date code listed. This is my first job using Typescript in conjunction with React. The application accesses the API and receives the ten most expensive cryptocurrencies in terms of capitalization. The application also provides a calculator in order to compare the price of one cryptocurrency with another.",
     "https://github.com/qxie11/crypto-app",
     [
      'https://i.postimg.cc/Y9Z39FVv/crypto-table1.jpg',
      'https://i.postimg.cc/44HP087V/crypto-table2.jpg',
      'https://i.postimg.cc/7hzNT68m/crypto-table3.jpg'
     ],
     "https://crypto-app-55ae59.netlify.app/",
     ['React', 'Redux', 'Typescript', 'SASS']
     ),
     new PortfolioItem(
      "Covid monitorig",
      "In the midst of the coronavirus, I decided to do my bit as a developer. I created an application in React with which you can find out the number of cases, recovered and deaths in any country in the world. This is the first time I've used Material-ui in this app. Also, chart-js was used to create charts.",
      "https://github.com/qxie11/covid",
      [
       'https://i.postimg.cc/RhkzxmLb/covid1.jpg',
       'https://i.postimg.cc/YqFHf4pc/covid2.jpg',
       'https://i.postimg.cc/fWps97Qj/covid3.jpg'
      ],
      "https://qxie11.github.io/covid/",
      ['React', 'SASS', 'Chart JS', 'Material UI']
      ),
      new PortfolioItem(
        "Crypto table",
         "Monitorig crypto currency",
        "https://github.com/qxie11/crypto-app",
        [
         'https://i.postimg.cc/Y9Z39FVv/crypto-table1.jpg',
         'https://i.postimg.cc/44HP087V/crypto-table2.jpg',
         'https://i.postimg.cc/7hzNT68m/crypto-table3.jpg'
        ],
        "https://crypto-app-55ae59.netlify.app/",
        ['React', 'Redux', 'Typescript', 'SASS']
        ),
        new PortfolioItem(
          "Crypto table",
           "Monitorig crypto currency",
          "https://github.com/qxie11/crypto-app",
          [
           'https://i.postimg.cc/Y9Z39FVv/crypto-table1.jpg',
           'https://i.postimg.cc/44HP087V/crypto-table2.jpg',
           'https://i.postimg.cc/7hzNT68m/crypto-table3.jpg'
          ],
          "https://crypto-app-55ae59.netlify.app/",
          ['React', 'Redux', 'Typescript', 'SASS']
          )
  ]