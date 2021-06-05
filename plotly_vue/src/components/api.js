import axios from 'axios'

const api = {

    getHistogram() {
        return axios.get('http://localhost:3000/histogram')
        //.then((response) => {
        //     console.log('get response', response)
        //     return(response.data);
        // }).catch(err => {
        //     console.log("hmm", err)
        // })
    },
}

export default api