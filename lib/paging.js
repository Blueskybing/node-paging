/**
 * Created by Bluesky on 2015/10/16.
 * Description：分页工具类
 */
"use strict";

/**
 * 分页插件类
 * @param current_page {Number} 当前页
 * @param page_size {Number} 每页记录数
 * @param total_count {Number} 总记录数
 * @constructor
 */

function Paging(current_page, page_size, total_count) {

    if (!current_page || isNaN(current_page) || current_page < 1) {
        current_page = 1;
    }
    if (!page_size || isNaN(page_size) || page_size < 1 || page_size > 50) {
        page_size = 10;
    }
    if (!total_count || isNaN(total_count) || total_count < 0) {
        total_count = 0;
    }

    this.page_size = parseInt(page_size);
    this.total_count = parseInt(total_count);
    this.total_page = parseInt((this.total_count + this.page_size - 1) / this.page_size);
    this.current_page = this.total_page < parseInt(current_page) ? this.total_page : parseInt(current_page);
    this.prev_page = this.current_page > 1 ? this.current_page - 1 : '';
    this.next_page = this.current_page < this.total_page ? (this.current_page + 1) : '';
    this.data_list = [];
}

/**
 * 设置数据集合
 * @param page {Number}
 */
Paging.prototype.setDataList = function (data_list) {
    this.data_list = data_list;
}

module.exports = Paging;
