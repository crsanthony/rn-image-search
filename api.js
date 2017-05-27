const key = '5480004-8d06e2ca3fd56c1769698f60e';
const rootUrl = "https://pixabay.com"

export default getImages(keywords) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    let keywords = keywords.join('+');
    const url = rootUrl + '?key=' + key + '&q=' + keywords + '&image_type=photo';
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
    return resolve(images)
  })
}
