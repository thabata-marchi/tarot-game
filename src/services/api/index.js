import axios from 'axios';

const api = {

  ShowCards : () => {
    return axios.get('https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json')
  }

}

export default api;