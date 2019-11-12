var api = require('./config.js');
//网络请求模块


function request(url, data, successCb, errorCb, completeCb) {
  wx.request({
    url: url,
    method: 'GET',
    data: data,
    success: successCb,
    error: errorCb,
    complete: completeCb
  });
}

function requestBookList() {
  console.log(book_category_index + '@@@' + book_categories[book_category_index])
  wx.cloud.init({
    env: 'exist-0nmi1'
  });
  const db = wx.cloud.database();
  db.collection('articles').where({

  }).get({
    success: res => {
      const data = res.data
      this.setData({
        booklist: data
      })
    }
  })
}

//搜索图书 
function searchBook(data, successCb, errorCb, completeCb) {
  request(api.searchBook, data, successCb, errorCb, completeCb);
}
//获取图书详细信息
function getBookById(id, successCb, errorCb, completeCb) {
  request(api.getBookById + id, "", successCb, errorCb, completeCb);
}
//获取丛书列表
function getBookList(id, data, successCb, errorCb, completeCb) {
  request(api.getBookList.replace(':id', id), data, successCb, errorCb, completeCb);
}

function getBookCategory() {
  requestBookList();
}
//
module.exports = {
  searchBook: searchBook,
  getBookById: getBookById,
  getBookList: getBookList,
  getBookCategory: getBookCategory
}