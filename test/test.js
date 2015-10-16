var Paging = require("../lib/paging");

var pg = new Paging(1, 10, 45);
pg.setDataList({});

console.log(pg);