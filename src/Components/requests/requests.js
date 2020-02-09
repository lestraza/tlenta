import axios from 'axios';

export function getCurrency () {
    return axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
}

export function getWeather () {
    return axios.get('https://api.darksky.net/forecast/a02a9283e9d1bfde03e84f9c34381ae2/55.742177,37.617697?units=ca')
}

export function getNews() {
    return axios.get('https://api.lenta.ru//lists/latest')
}