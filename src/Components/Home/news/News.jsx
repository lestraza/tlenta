import React, { Component } from 'react';
import { getNews } from '../../requests/requests'
import NewsItem from './components/NewsItem';


export default class News extends Component {
    state = {
        news: []
    }
    
    componentDidMount() {
        getNews().then(response => {
            this.setState({
                news: response.data.headlines
            })
        })
    }

    renderNews = () => {
        const { news } = this.state
        return (
            news.map(newsItem => {
                return <NewsItem  newsItem={newsItem}/>
            })
        )
    }
    
    render() {    
        
        const { news } = this.state
        return (
            <div className='news_container'>
                {news && news.length && this.renderNews()}                
            </div>
        )
    }
}
