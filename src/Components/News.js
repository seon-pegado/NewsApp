import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const News = (props) => {
  let articles = [
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": "Mary Madigan",
        "title": "Op shop find reveals Australia’s lost it",
        "description": "There&rsquo;s a second-hand jacket by the mid-priced brand Sportsgirl currently on sale for $120 at a charity shop run by The Salvation Army in Sydney&rsquo;s inner city, and it puts the cost of living crisis into perspective.",
        "url": "https://www.news.com.au/finance/economy/australian-economy/the-cost-of-living-crisis-has-even-made-op-shopping-expensive/news-story/f72cd08418a424eb98b83e2570bf4423",
        "urlToImage": "https://content.api.news/v3/images/bin/66a43cef55bc247a8ef63e1920572fb5",
        "publishedAt": "2023-06-27T04:49:00Z",
        "content": "There’s a second-hand jacket by the mid-priced brand Sportsgirl currently on sale for $120 at a charity shop run by The Salvation Army in Sydney’s inner city, and it puts the cost of living crisis in… [+4210 chars]"
    },
    {
        "source": {
            "id": "breitbart-news",
            "name": "Breitbart News"
        },
        "author": "Warner Todd Huston",
        "title": "Trans Cyclist Austin Killips Says Men Are 'Underrepresented' in Women's Sports",
        "description": "Austin Killips, the man who has won a growing number of women's titles, has complained that men are \"underrepresented\" in woman's sports",
        "url": "http://www.breitbart.com/sports/2023/06/26/trans-cyclist-austin-killips-says-men-are-underrepresented-in-womens-sports/",
        "urlToImage": "https://media.breitbart.com/media/2023/05/DAVID-PINTENS_BELGA-MAG_AFP-via-Getty-Images-640x480-1-640x335.jpg",
        "publishedAt": "2023-06-27T01:24:29Z",
        "content": "Austin Killips, the man who has won a growing number of women’s titles in professional cycling, has complained that men are “underrepresented” in woman’s sports and blasted the “nature of the discour… [+4006 chars]"
    },
    {
        "source": {
            "id": "talksport",
            "name": "TalkSport"
        },
        "author": "Connor Andrews",
        "title": "Bayern Munich ‘optimistic’ of landing Harry Kane as Tottenham striker chooses ‘preferred desti...",
        "description": "Harry Kane could move to Bayern Munich this summer according to sensational reports from Germany. Sky Sports claim that the Tottenham striker and the Bundesliga side have held renewed talks in rece…",
        "url": "https://talksport.com/football/1478824/bayern-munich-optimistic-harry-kane-transfer-tottenham/",
        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/06/SD-SPORT-KANE-MUNICH.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
        "publishedAt": "2023-06-26T20:46:41Z",
        "content": "Harry Kane could move to Bayern Munich this summer according to sensational reports from Germany.\r\nSky Sports claim that the Tottenham striker and the Bundesliga side have held renewed talks in recen… [+1510 chars]"
    }
  ]
  const [data, setData] =useState({
    articles : articles,
    loading : false
  })
  
  const defaultUrl = 'https://www.bing.com/images/search?view=detailV2&ccid=yg9K7%2fUf&id=210E4EF20E92D74B99C720C849548F8211409E78&thid=OIP.yg9K7_Uf9-FcRAgWVG93MAHaD0&mediaurl=https%3a%2f%2favalos.sv%2fwp-content%2fuploads%2fdefault-featured-image.png&exph=396&expw=768&q=default+news+img&simid=608012926900466443&FORM=IRPRST&ck=93885579BB547FBAE08CF179F11E2913&selectedIndex=32'

  const fetchingData = async()=>{
    const getData = await fetch(props.url)
    const news = await getData.json()
    console.log(news)
    setData({articles : news.articles})
  }
  
  useEffect(() => {
    fetchingData()
  });

  return (
    <>
      <div className = 'container my-5'>
        <h2>TOP HEADLINES NEWS OF {props.title}</h2>
        <div className = 'row my-10'>
          {data.articles.map((element)=>{
              return <div className='col-md-4'>
                    <NewsItem key = {element.url} title={element.title?element.title:''} desc = {element.description?element.description:''} imgUrl ={element.urlToImage?element.urlToImage:defaultUrl} newsUrl = {element.url}/>
                </div>
                
            })}
        </div>
      </div>
    </>
  )
}

export default News