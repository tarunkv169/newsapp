import React,{useState,useEffect} from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default function News(props){

  // articles = [
  //   {
  //     "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
  //     "author": "Virginia Trioli",
  //     "title": "This week I watched my old friend Sam Mostyn named governor-general and her success felt sweet",
  //     "description": "In the Bluey Cricket episode Rusty's parents would have lived every moment of the failing and succeeding that got him to the top. I've watched something similar happen this week from a much greater distance.",
  //     "url": "https://www.abc.net.au/news/2024-04-06/bluey-cricket-sam-mostyn-success-of-friends/103674140",
  //     "urlToImage": "https://live-production.wcms.abc-cdn.net.au/e409d4a2f00e84295d45739617f63887?impolicy=wcms_watermark_news&cropH=2793&cropW=4965&xPos=0&yPos=0&width=862&height=485&imformat=generic",
  //     "publishedAt": "2024-04-05T20:00:00Z",
  //     "content": "There's that one moment in that one Bluey episode when two hands meet one small, awkward and from the past; one gloved, grown and in the very real present of an Australian Test game that gets me ever… [+4545 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]


  


  const capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  
  
  // constructor(props){
    //   super(props);
    //   this.state={
      //     articles: [],     // this.articles
  //     loading: false,
  //     page: 1,
  //     totalResults: 0
  //   }
  
  //   document.title=`${this.capitalize(props.category)}-NewsMonkey`;
  // }
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  
  
  
  

 // async updateNews(){
 //   props.setprogress(0);
 //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${this.state.page}&pageSize=${props.pageSize}`;
 //   this.setState({loading: true});
 //   let data = await fetch(url);
 //   props.setprogress(30);
 //   let parse = await data.json();
 //   props.setprogress(70);
 //   this.setState({
   //     articles: parse.articles,
   //     totalResults: parse.totalResults,
 //     loading: false
 //   })
 //   props.setprogress(100);
 // }
 
 const updateNews=async()=>{
   props.setprogress(0);
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setprogress(30);
    let parse = await data.json();
    props.setprogress(70);
    
    setArticles(parse.articles);
    setTotalResults(parse.totalResults);
    setLoading(false);

    props.setprogress(100);
  }
  
  



  
  // async componentDidMount(){
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=1acfd473475b44f8a988fa59f9b924be&${this.state.page}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parse = await data.json();
  //   // this.setState({
    //   //   articles: parse.articles,
    //   //   totalResults: parse.totalResults,
  //   //   loading: false
  //   // })
  
  //   this.updateNews()
  // }
  useEffect(() => {
    document.title = `${capitalize(props.category)}-NewsMonkey`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    updateNews();
  }, [props.category]);
  
  

  
  
  
  
  // const onhandle_previous=async()=>{
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=1acfd473475b44f8a988fa59f9b924be&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true})
  //   // let data = await fetch(url);
  //   // let parse = await data.json();
  //   // console.log("previous clicked");
  //   // this.setState({
  //   //   articles: parse.articles,
  //   //   page: this.state.page-1,
  //   //   loading:false
  //   // })


  //   // this.setState({ page: this.state.page-1});
  //   setPage(page-1);
  //   // this.updateNews();
  //   updateNews();
    
  // }
  
  // pagesize=20;

  // const onhandle_next=async()=>
  // {
  //    if(!(page + 1 > Math.ceil(totalResults/props.pageSize)))
  //    {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=1acfd473475b44f8a988fa59f9b924be&page=${this.state.page+1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parse = await data.json();
  //   // console.log("next clicked");
  //   // this.setState({
  //   //     articles: parse.articles,
  //   //     page: this.state.page+1,
  //   //     loading: false
  //   //   })

  //   // this.setState({ page: this.state.page+1});
  //   // this.updateNews();
  //   setPage(page+1);
  //   updateNews();
  //    }
  // }



  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${nextPage}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parse = await data.json();
    setArticles(prevArticles => [...prevArticles, ...parse.articles]); // Update state by concatenating new articles
    setTotalResults(parse.totalResults);
    setPage(nextPage);
  };
  
  

  

    return (
      <div className="container my-4">
        <h1 className="text-center"  style={{margin:'33px',marginTop:'65px'}}>NewsMonkey- Top {capitalize(props.category)} Headlines</h1>
          {loading && <Spinner />}
           <InfiniteScroll
           dataLength={articles ? articles.length : 0} // Check if articles is not undefined
           next={fetchMoreData}
           hasMore={articles ? articles.length !== totalResults : false} // Check if articles is not undefined
           loader={<Spinner />}
             > 
              <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">    
                   {articles && articles.map((element) => {
                        return (
                             <div className="col mb-4" key={element.url}>        
                                   <Newsitems  title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                             </div>
                               );
                    })}

               </div>
               </div>  
          </InfiniteScroll>


        

          {/* <div className="d-flex justify-content-between my-5">                 
             <button disabled={this.state.page<=1} type="button" className="btn btn-dark me-2" onClick={this.onhandle_previous}>&larr; Previous</button>
             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.onhandle_next}>Next &rarr;</button>
          </div> */}


      </div>
    );
  
}



News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
  
}

News.defaultProps={
   country: "in",
   pageSize: 5,
   category: "general"
 }