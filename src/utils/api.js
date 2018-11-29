import axios from 'axios'

const defaultUrl = "http://localhost/";

const apiCall = (url, method, {props, data}) => new Promise((resolve, reject) => {
  axios({
    method: method,
    url: defaultUrl+url,
    props: props,
    data: data
  }).then(function (response) {
    resolve(response.data);
  }).catch(function (err) {
    reject(err);
  });
});

export default apiCall
