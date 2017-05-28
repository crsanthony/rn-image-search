const key = '5480004-8d06e2ca3fd56c1769698f60e';
const rootUrl = "https://pixabay.com/api";
const resultsLimit = 200;

export default getImages = (keywords) => {
  this.keywords = keywords;
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let keywords = this.keywords.join('+');
    const url = rootUrl + '?key=' + key + '&q=' + keywords + '&per_page=' + resultsLimit;
    xhr.open("GET", url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  })
}
