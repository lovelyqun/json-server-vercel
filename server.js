// See https://github.com/typicode/json-server#module
const fs = require("fs");
var express = require("express");
const jsonServer = require("json-server");
var path = require("path");
const server = jsonServer.create();
var bodyParser = require("body-parser");
var multer = require("multer");
const { v4: uuidv4 } = require("uuid");
server.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", "3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  let headers = req.headers;
  headers["content-type"] = headers["content-type"] || "application/json";
  next();
});
server.use(bodyParser.json({ limit: "50mb" }));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.get("/timeout", function (req, res) {
  setTimeout(function () {
    res.send(data);
  }, 10000);
});
// 配置存储选项
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("destination");
    cb(null, "static/"); // 确保这个文件夹已经存在，否则会报错
  },
  filename: function (req, file, cb) {
    console.log("filename");
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage, limits: { fileSize: 100 * 1024 * 1024 } });

server.get("/list", function (req, res) {
  let query = toJSON(req.query);
  // index++
  let content = [
    {
      ID: "ecd644c67f4e469ca1a569c5b0824853",
      ORDER_CODE: "RK2209010001",
      WAREHOUSE_ID: "aac5bfe53af1448a51fa4c248d7765b",
      TYPE: 2,
      DATE: "2022-09-01",
      WAREHOUSECODE: "74785445",
      WAREHOUSE: "半成品仓库",
      INOUTTYPECODE: "RK_QTRK",
      INOUTTYPE: "其他入库",
      QUANTITY: 20,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
      RN: 13,
    },
    {
      ID: "88fa150373f54e5d8bad875fee9f5514",
      ORDER_CODE: "RK2209010004",
      WAREHOUSE_ID: "aac5bfe53af1448a51fa4c248d7765b",
      TYPE: 2,
      DATE: "2022-09-01",
      WAREHOUSECODE: "74785445",
      WAREHOUSE: "半成品仓库",
      INOUTTYPECODE: "RK_QTRK",
      INOUTTYPE: "其他入库",
      QUANTITY: 20,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
      RN: 12,
    },
    {
      ID: "ca372871c7284d62808436f52f225112",
      ORDER_CODE: "RK2208080002",
      WAREHOUSE_ID: "aac5bfe53af1448a51fa4c248d7765b",
      TYPE: 2,
      DATE: "2022-08-08",
      WAREHOUSECODE: "74785445",
      WAREHOUSE: "半成品仓库",
      INOUTTYPECODE: "RK_SCRK",
      INOUTTYPE: "生产入库",
      QUANTITY: 100,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 1,
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
      RN: 11,
    },
    {
      ID: "941e290349534c70958212a17d4fffbc",
      ORDER_CODE: "RK2208010001",
      WAREHOUSE_ID: "0b845bdb1c864e96a0673db32f3532d",
      TYPE: 2,
      DATE: "2022-08-01",
      WAREHOUSECODE: "YCLCK",
      WAREHOUSE: "原材料仓库",
      INOUTTYPECODE: "RK_CGRK",
      INOUTTYPE: "采购入库",
      QUANTITY: 40,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: "f885edfa4e224adbab0ea9c89c1459dc",
      LOCATION_NAME: "原材料库位01",
      RN: 10,
    },
    {
      ID: "7a0ea0201fd24d5b9c34ffd2b12788cc",
      ORDER_CODE: "RK2208010002",
      WAREHOUSE_ID: "0b845bdb1c864e96a0673db32f3532d",
      TYPE: 2,
      DATE: "2022-08-01",
      WAREHOUSECODE: "YCLCK",
      WAREHOUSE: "原材料仓库",
      INOUTTYPECODE: "RK_CGRK",
      INOUTTYPE: "采购入库",
      QUANTITY: 200,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: "f885edfa4e224adbab0ea9c89c1459dc",
      LOCATION_NAME: "原材料库位01",
      RN: 9,
    },
    {
      ID: "f16ebd0f06dd4fe18cef7898f1fcb3d9",
      ORDER_CODE: "RK2207160001",
      WAREHOUSE_ID: "aac5bfe53af1448a51fa4c248d7765b",
      TYPE: 2,
      DATE: "2022-07-16",
      WAREHOUSECODE: "74785445",
      WAREHOUSE: "半成品仓库",
      INOUTTYPECODE: "RK_SCRK",
      INOUTTYPE: "生产入库",
      QUANTITY: 50,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 1,
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
      RN: 8,
    },
    {
      ID: "813edc3af91541708e8399a443bf2b61",
      ORDER_CODE: "RK2207150007",
      WAREHOUSE_ID: "aac5bfe53af1448a51fa4c248d7765b",
      TYPE: 2,
      DATE: "2022-07-15",
      WAREHOUSECODE: "74785445",
      WAREHOUSE: "半成品仓库",
      INOUTTYPECODE: "RK_SCRK",
      INOUTTYPE: "生产入库",
      QUANTITY: 50,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 1,
      WAREHOUSE_LOCATION_ID: null,
      LOCATION_NAME: null,
      RN: 7,
    },
    {
      ID: "9b0da74f77eb43c480cd7b2a26378d44",
      ORDER_CODE: "RK2207150003",
      WAREHOUSE_ID: "b367f13d871c40f862295e0d66370f9",
      TYPE: 2,
      DATE: "2022-07-15",
      WAREHOUSECODE: "AR-001",
      WAREHOUSE: "中央仓库",
      INOUTTYPECODE: "RK_SCRK",
      INOUTTYPE: "生产入库",
      QUANTITY: 50,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 1,
      WAREHOUSE_LOCATION_ID: null,
      LOCATION_NAME: null,
      RN: 6,
    },
    {
      ID: "358a1820f00f40a0accda6c1584fddd9",
      ORDER_CODE: "RK2207150004",
      WAREHOUSE_ID: "b367f13d871c40f862295e0d66370f9",
      TYPE: 2,
      DATE: "2022-07-15",
      WAREHOUSECODE: "AR-001",
      WAREHOUSE: "中央仓库",
      INOUTTYPECODE: "RK_CGRK",
      INOUTTYPE: "采购入库",
      QUANTITY: 30,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: "9b72647939a34a58b38f35336e0f2775",
      LOCATION_NAME: "中央库位01",
      RN: 5,
    },
    {
      ID: "0c32659e606744868b61ae9cc25a4b97",
      ORDER_CODE: "RK2207140010",
      WAREHOUSE_ID: "aac5bfe53af1448a51fa4c248d7765b",
      TYPE: 2,
      DATE: "2022-07-14",
      WAREHOUSECODE: "74785445",
      WAREHOUSE: "半成品仓库",
      INOUTTYPECODE: "RK_CGRK",
      INOUTTYPE: "采购入库",
      QUANTITY: 60,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: null,
      LOCATION_NAME: null,
      RN: 4,
    },
    {
      ID: "0c24cc053bb747bfabaf539061d32d8e",
      ORDER_CODE: "RK2207140008",
      WAREHOUSE_ID: "b367f13d871c40f862295e0d66370f9",
      TYPE: 2,
      DATE: "2022-07-14",
      WAREHOUSECODE: "AR-001",
      WAREHOUSE: "中央仓库",
      INOUTTYPECODE: "RK_SCRK",
      INOUTTYPE: "生产入库",
      QUANTITY: 100,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 1,
      WAREHOUSE_LOCATION_ID: null,
      LOCATION_NAME: null,
      RN: 3,
    },
    {
      ID: "78a27bb473e74d45acdd05a239e855b9",
      ORDER_CODE: "RK2207130007",
      WAREHOUSE_ID: "0b845bdb1c864e96a0673db32f3532d",
      TYPE: 2,
      DATE: "2022-07-13",
      WAREHOUSECODE: "YCLCK",
      WAREHOUSE: "原材料仓库",
      INOUTTYPECODE: "RK_QTRK",
      INOUTTYPE: "其他入库",
      QUANTITY: 90,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: "f885edfa4e224adbab0ea9c89c1459dc",
      LOCATION_NAME: "原材料库位01",
      RN: 2,
    },
    {
      ID: "8e9a02d0d0c048339080e6957671bd84",
      ORDER_CODE: "RK2207110001",
      WAREHOUSE_ID: "0b845bdb1c864e96a0673db32f3532d",
      TYPE: 2,
      DATE: "2022-07-11",
      WAREHOUSECODE: "YCLCK",
      WAREHOUSE: "原材料仓库",
      INOUTTYPECODE: "RK_CGRK",
      INOUTTYPE: "采购入库",
      QUANTITY: 300,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 2,
      WAREHOUSE_LOCATION_ID: null,
      LOCATION_NAME: null,
      RN: 1,
    },
    {
      ID: "d1ee7d7c49d546d2910d8b6036d217b5",
      ORDER_CODE: "RK2207080006",
      WAREHOUSE_ID: "4c85472ecfb948538242678fcdf820ab",
      TYPE: 2,
      DATE: "2022-07-08",
      WAREHOUSECODE: "CK2206300003",
      WAREHOUSE: "物料追溯",
      INOUTTYPECODE: "RK_SCRK",
      INOUTTYPE: "生产入库",
      QUANTITY: 80,
      STATUS: 1,
      DATA_AUTH: "8712870a0a2348aabb223f20208ee1a6",
      TYPE_COUNT: 1,
      WAREHOUSE_LOCATION_ID: null,
      LOCATION_NAME: null,
      RN: 0,
    },
  ];
  let index = query.RN;
  let pageSize = query.pageSize || [];
  let tempContent = [];
  if (!pageSize.length) {
    tempContent = [];
  }
  if (index === "" || index === 0) {
    tempContent = content.slice(0, pageSize);
  } else {
    let tempIndex = content.findIndex((item) => {
      return item.RN == index;
    });
    if (tempIndex === -1 || content.length - 1 === tempIndex) {
      tempContent = [];
    } else {
      tempContent = content.slice(tempIndex + 1, tempIndex + pageSize * 1);
    }
  }
  let data = {
    code: 1,
    msg: "",
    data: tempContent,
  };
  res.send(data);
});

server.get("/detail", function (req, res) {
  let query = toJSON(req.query);
  let content = [
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "ecd644c67f4e469ca1a569c5b0824853",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "AA原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "88fa150373f54e5d8bad875fee9f5514",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "BB原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "ca372871c7284d62808436f52f225112",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "CC原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "941e290349534c70958212a17d4fffbc",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "DD原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "7a0ea0201fd24d5b9c34ffd2b12788cc",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "EE原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "f16ebd0f06dd4fe18cef7898f1fcb3d9",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "FF原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "813edc3af91541708e8399a443bf2b61",
      CODE: "",
      DETAIL_ID: "f524a77e904646a5bc213ac41c53eb47",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "GG原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "9b0da74f77eb43c480cd7b2a26378d44",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "GG原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "358a1820f00f40a0accda6c1584fddd9",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "HH原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "358a1820f00f40a0accda6c1584fddd9",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "II原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "358a1820f00f40a0accda6c1584fddd9",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "JJ原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "0c32659e606744868b61ae9cc25a4b97",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "KK原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "8e9a02d0d0c048339080e6957671bd84",
      CODE: "",
      DETAIL_ID: "f524a77e904646a5bc213ac41c53eb47",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "LL原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
    {
      PRICE: 14,
      CREATE_USER: "6678ccc9b6c7408d8dc31203e4f07327",
      CODE: "",
      DETAIL_ID: "d1ee7d7c49d546d2910d8b6036d217b5",
      PURCHASE_DETAIL_ID: "",
      ID: "5a514a9ff8d84ddaaf0233866397f69f",
      PRO_CODE: "P2110250001",
      PRO_NAME: "MM原材料",
      PRO_SPEC: "DIP-A",
      PRODUCT_QUANTITY: 10,
      PRO_PRICE: 5,
      PRO_COST: 4,
      PRO_UNIT: "包",
      PRO_UNIT_CODE: "包",
      WAREHOUSE_LOCATION_ID: "f546f42bcb9e4aac881b8f9ff74a3723",
      LOCATION_NAME: "半成品库区01",
    },
  ];
  let id = query.id;
  let tempContent = null;
  content.forEach((item) => {
    if (item.DETAIL_ID === id) {
      tempContent = item;
    }
  });
  let data = {
    code: 1,
    msg: "",
    data: tempContent,
  };
  res.send(data);
});

server.get("/getSelect", function (req, res) {
  let query = toJSON(req.query);
  let pageSize = query.pageSize * 1 || 10;
  let pageNum = query.pageNum * 1 || 1;
  let category = query.category;
  let content = query.content;
  let list = selectList;
  if (category) {
    list = list.filter((item) => item.category.indexOf(category) !== -1);
  } else if (content) {
    list = list.filter((item) => item.content.indexOf(content) !== -1);
  }
  if (pageNum !== -1) {
    list = list.slice((pageNum - 1) * pageSize, pageNum * pageSize);
  }
  let data = {
    code: 1,
    msg: "",
    data: list,
  };
  res.send(data);
});

server.get("/getTypeData", function (req, res) {
  let query = toJSON(req.query);
  let type = query.type;
  let val = "";
  if (!query.hasOwnProperty("type")) {
    // 捕获错误并返回给前端
    res.status(400).json({
      error: "BAD_REQUEST",
      message: "参数错误，请确保提供了必要的参数。",
    });
  } else {
    if (type === "array") {
      val = [];
    } else if (type === "object") {
      val = {};
    } else if (type === "string") {
      val = "";
    } else {
      val = null;
    }
    let data = {
      code: 1,
      msg: "",
      data: val,
    };
    res.send(data);
  }
});
// 图片上传路由
server.post("/upload", upload.single("file"), (req, res) => {
  let result = {};
  if (!req.file) {
    result.code = 300;
    result.msg = "没有文件被上传!";
    result.data = "";
    return res.status(400).send(result);
  }

  result.code = 200;
  result.data = req.file;
  result.data.path = `http://localhost:8580/${req.file.destination}${req.file.filename}`;
  result.msg = "上传成功!";
  res.send(result);
});
// POST route to upload a base64 file
server.post("/upload64", (req, res) => {
  function getExtensionFromBase64(base64) {
    const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,/);
    if (!matches) {
      return null;
    }
    const mimeType = matches[1];
    switch (mimeType) {
      case "image/png":
        return "png";
      case "image/jpeg":
        return "jpg";
      case "image/gif":
        return "gif";
      // 添加更多的 MIME 类型和对应的文件扩展名
      default:
        return null; // 未知或不支持的文件类型
    }
  }

  const { base64 } = req.body;
  if (!base64) {
    return res.status(400).send("Invalid request, missing base64 data");
  }

  // 提取文件扩展名
  const extension = getExtensionFromBase64(base64);
  if (!extension) {
    return res.status(400).send("Unsupported file type");
  }

  // Generate a unique filename with a UUID and the correct extension
  const filename = `${uuidv4()}.${extension}`;

  // Remove Base64 prefix if present
  const base64Data = base64.replace(/^data:([A-Za-z-+\/]+);base64,/, "");

  // Convert base64 to buffer
  const buffer = Buffer.from(base64Data, "base64");

  // Define path to save the file
  const filePath = path.join(__dirname, "static", filename);

  // Ensure the uploads directory exists
  fs.mkdirSync(path.join(__dirname, "static"), { recursive: true });

  // Write the file
  fs.writeFile(filePath, buffer, (err) => {
    if (err) {
      return res.status(500).send("Error saving the file");
    }
    var result = { data: {} };
    result.code = 200;
    result.data.path = `http://localhost:8580/static/${filename}`;
    result.msg = "上传成功!";
    res.send(result);
  });
});
function toJSON(str) {
  try {
    return new Function("return" + str)();
  } catch (e) {
    return str;
  }
}

var selectList = [
  {
    id: 1,
    category: "tech",
    content: "tech item 1",
  },
  {
    id: 2,
    category: "entertainment",
    content: "entertainment item 2",
  },
  {
    id: 3,
    category: "sports",
    content: "sports item 3",
  },
  {
    id: 4,
    category: "sports",
    content: "sports item 4",
  },
  {
    id: 5,
    category: "entertainment",
    content: "entertainment item 5",
  },
  {
    id: 6,
    category: "tech",
    content: "tech item 6",
  },
  {
    id: 7,
    category: "sports",
    content: "sports item 7",
  },
  {
    id: 8,
    category: "sports",
    content: "sports item 8",
  },
  {
    id: 9,
    category: "sports",
    content: "sports item 9",
  },
  {
    id: 10,
    category: "tech",
    content: "tech item 10",
  },
  {
    id: 11,
    category: "sports",
    content: "sports item 11",
  },
  {
    id: 12,
    category: "sports",
    content: "sports item 12",
  },
  {
    id: 13,
    category: "sports",
    content: "sports item 13",
  },
  {
    id: 14,
    category: "entertainment",
    content: "entertainment item 14",
  },
  {
    id: 15,
    category: "sports",
    content: "sports item 15",
  },
  {
    id: 16,
    category: "entertainment",
    content: "entertainment item 16",
  },
  {
    id: 17,
    category: "entertainment",
    content: "entertainment item 17",
  },
  {
    id: 18,
    category: "entertainment",
    content: "entertainment item 18",
  },
  {
    id: 19,
    category: "sports",
    content: "sports item 19",
  },
  {
    id: 20,
    category: "tech",
    content: "tech item 20",
  },
  {
    id: 21,
    category: "entertainment",
    content: "entertainment item 21",
  },
  {
    id: 22,
    category: "sports",
    content: "sports item 22",
  },
  {
    id: 23,
    category: "entertainment",
    content: "entertainment item 23",
  },
  {
    id: 24,
    category: "tech",
    content: "tech item 24",
  },
  {
    id: 25,
    category: "entertainment",
    content: "entertainment item 25",
  },
  {
    id: 26,
    category: "entertainment",
    content: "entertainment item 26",
  },
  {
    id: 27,
    category: "tech",
    content: "tech item 27",
  },
  {
    id: 28,
    category: "tech",
    content: "tech item 28",
  },
  {
    id: 29,
    category: "tech",
    content: "tech item 29",
  },
  {
    id: 30,
    category: "sports",
    content: "sports item 30",
  },
  {
    id: 31,
    category: "entertainment",
    content: "entertainment item 31",
  },
  {
    id: 32,
    category: "sports",
    content: "sports item 32",
  },
  {
    id: 33,
    category: "entertainment",
    content: "entertainment item 33",
  },
  {
    id: 34,
    category: "tech",
    content: "tech item 34",
  },
  {
    id: 35,
    category: "sports",
    content: "sports item 35",
  },
  {
    id: 36,
    category: "sports",
    content: "sports item 36",
  },
  {
    id: 37,
    category: "tech",
    content: "tech item 37",
  },
  {
    id: 38,
    category: "sports",
    content: "sports item 38",
  },
  {
    id: 39,
    category: "tech",
    content: "tech item 39",
  },
  {
    id: 40,
    category: "sports",
    content: "sports item 40",
  },
  {
    id: 41,
    category: "tech",
    content: "tech item 41",
  },
  {
    id: 42,
    category: "sports",
    content: "sports item 42",
  },
  {
    id: 43,
    category: "sports",
    content: "sports item 43",
  },
  {
    id: 44,
    category: "tech",
    content: "tech item 44",
  },
  {
    id: 45,
    category: "entertainment",
    content: "entertainment item 45",
  },
  {
    id: 46,
    category: "entertainment",
    content: "entertainment item 46",
  },
  {
    id: 47,
    category: "sports",
    content: "sports item 47",
  },
  {
    id: 48,
    category: "entertainment",
    content: "entertainment item 48",
  },
  {
    id: 49,
    category: "tech",
    content: "tech item 49",
  },
  {
    id: 50,
    category: "entertainment",
    content: "entertainment item 50",
  },
  {
    id: 51,
    category: "entertainment",
    content: "entertainment item 51",
  },
  {
    id: 52,
    category: "tech",
    content: "tech item 52",
  },
  {
    id: 53,
    category: "entertainment",
    content: "entertainment item 53",
  },
  {
    id: 54,
    category: "tech",
    content: "tech item 54",
  },
  {
    id: 55,
    category: "sports",
    content: "sports item 55",
  },
  {
    id: 56,
    category: "tech",
    content: "tech item 56",
  },
  {
    id: 57,
    category: "sports",
    content: "sports item 57",
  },
  {
    id: 58,
    category: "entertainment",
    content: "entertainment item 58",
  },
  {
    id: 59,
    category: "sports",
    content: "sports item 59",
  },
  {
    id: 60,
    category: "sports",
    content: "sports item 60",
  },
  {
    id: 61,
    category: "entertainment",
    content: "entertainment item 61",
  },
  {
    id: 62,
    category: "entertainment",
    content: "entertainment item 62",
  },
  {
    id: 63,
    category: "sports",
    content: "sports item 63",
  },
  {
    id: 64,
    category: "entertainment",
    content: "entertainment item 64",
  },
  {
    id: 65,
    category: "tech",
    content: "tech item 65",
  },
  {
    id: 66,
    category: "entertainment",
    content: "entertainment item 66",
  },
  {
    id: 67,
    category: "entertainment",
    content: "entertainment item 67",
  },
  {
    id: 68,
    category: "sports",
    content: "sports item 68",
  },
  {
    id: 69,
    category: "tech",
    content: "tech item 69",
  },
  {
    id: 70,
    category: "entertainment",
    content: "entertainment item 70",
  },
  {
    id: 71,
    category: "sports",
    content: "sports item 71",
  },
  {
    id: 72,
    category: "tech",
    content: "tech item 72",
  },
  {
    id: 73,
    category: "tech",
    content: "tech item 73",
  },
  {
    id: 74,
    category: "entertainment",
    content: "entertainment item 74",
  },
  {
    id: 75,
    category: "sports",
    content: "sports item 75",
  },
  {
    id: 76,
    category: "sports",
    content: "sports item 76",
  },
  {
    id: 77,
    category: "sports",
    content: "sports item 77",
  },
  {
    id: 78,
    category: "sports",
    content: "sports item 78",
  },
  {
    id: 79,
    category: "sports",
    content: "sports item 79",
  },
  {
    id: 80,
    category: "tech",
    content: "tech item 80",
  },
  {
    id: 81,
    category: "entertainment",
    content: "entertainment item 81",
  },
  {
    id: 82,
    category: "entertainment",
    content: "entertainment item 82",
  },
  {
    id: 83,
    category: "entertainment",
    content: "entertainment item 83",
  },
  {
    id: 84,
    category: "entertainment",
    content: "entertainment item 84",
  },
  {
    id: 85,
    category: "entertainment",
    content: "entertainment item 85",
  },
  {
    id: 86,
    category: "tech",
    content: "tech item 86",
  },
  {
    id: 87,
    category: "sports",
    content: "sports item 87",
  },
  {
    id: 88,
    category: "entertainment",
    content: "entertainment item 88",
  },
  {
    id: 89,
    category: "tech",
    content: "tech item 89",
  },
  {
    id: 90,
    category: "tech",
    content: "tech item 90",
  },
  {
    id: 91,
    category: "sports",
    content: "sports item 91",
  },
  {
    id: 92,
    category: "sports",
    content: "sports item 92",
  },
  {
    id: 93,
    category: "entertainment",
    content: "entertainment item 93",
  },
  {
    id: 94,
    category: "tech",
    content: "tech item 94",
  },
  {
    id: 95,
    category: "tech",
    content: "tech item 95",
  },
  {
    id: 96,
    category: "tech",
    content: "tech item 96",
  },
  {
    id: 97,
    category: "sports",
    content: "sports item 97",
  },
  {
    id: 98,
    category: "sports",
    content: "sports item 98",
  },
  {
    id: 99,
    category: "sports",
    content: "sports item 99",
  },
  {
    id: 100,
    category: "entertainment",
    content: "entertainment item 100",
  },
  {
    id: 101,
    category: "entertainment",
    content: "entertainment item 101",
  },
  {
    id: 102,
    category: "sports",
    content: "sports item 102",
  },
  {
    id: 103,
    category: "tech",
    content: "tech item 103",
  },
  {
    id: 104,
    category: "sports",
    content: "sports item 104",
  },
  {
    id: 105,
    category: "entertainment",
    content: "entertainment item 105",
  },
  {
    id: 106,
    category: "entertainment",
    content: "entertainment item 106",
  },
  {
    id: 107,
    category: "sports",
    content: "sports item 107",
  },
  {
    id: 108,
    category: "entertainment",
    content: "entertainment item 108",
  },
  {
    id: 109,
    category: "sports",
    content: "sports item 109",
  },
  {
    id: 110,
    category: "sports",
    content: "sports item 110",
  },
  {
    id: 111,
    category: "entertainment",
    content: "entertainment item 111",
  },
  {
    id: 112,
    category: "tech",
    content: "tech item 112",
  },
  {
    id: 113,
    category: "sports",
    content: "sports item 113",
  },
  {
    id: 114,
    category: "tech",
    content: "tech item 114",
  },
  {
    id: 115,
    category: "sports",
    content: "sports item 115",
  },
  {
    id: 116,
    category: "entertainment",
    content: "entertainment item 116",
  },
  {
    id: 117,
    category: "sports",
    content: "sports item 117",
  },
  {
    id: 118,
    category: "tech",
    content: "tech item 118",
  },
  {
    id: 119,
    category: "tech",
    content: "tech item 119",
  },
  {
    id: 120,
    category: "tech",
    content: "tech item 120",
  },
  {
    id: 121,
    category: "tech",
    content: "tech item 121",
  },
  {
    id: 122,
    category: "sports",
    content: "sports item 122",
  },
  {
    id: 123,
    category: "sports",
    content: "sports item 123",
  },
  {
    id: 124,
    category: "entertainment",
    content: "entertainment item 124",
  },
  {
    id: 125,
    category: "sports",
    content: "sports item 125",
  },
  {
    id: 126,
    category: "entertainment",
    content: "entertainment item 126",
  },
  {
    id: 127,
    category: "entertainment",
    content: "entertainment item 127",
  },
  {
    id: 128,
    category: "tech",
    content: "tech item 128",
  },
  {
    id: 129,
    category: "sports",
    content: "sports item 129",
  },
  {
    id: 130,
    category: "tech",
    content: "tech item 130",
  },
  {
    id: 131,
    category: "tech",
    content: "tech item 131",
  },
  {
    id: 132,
    category: "tech",
    content: "tech item 132",
  },
  {
    id: 133,
    category: "tech",
    content: "tech item 133",
  },
  {
    id: 134,
    category: "sports",
    content: "sports item 134",
  },
  {
    id: 135,
    category: "tech",
    content: "tech item 135",
  },
  {
    id: 136,
    category: "entertainment",
    content: "entertainment item 136",
  },
  {
    id: 137,
    category: "entertainment",
    content: "entertainment item 137",
  },
  {
    id: 138,
    category: "entertainment",
    content: "entertainment item 138",
  },
  {
    id: 139,
    category: "entertainment",
    content: "entertainment item 139",
  },
  {
    id: 140,
    category: "entertainment",
    content: "entertainment item 140",
  },
  {
    id: 141,
    category: "sports",
    content: "sports item 141",
  },
  {
    id: 142,
    category: "sports",
    content: "sports item 142",
  },
  {
    id: 143,
    category: "sports",
    content: "sports item 143",
  },
  {
    id: 144,
    category: "tech",
    content: "tech item 144",
  },
  {
    id: 145,
    category: "tech",
    content: "tech item 145",
  },
  {
    id: 146,
    category: "entertainment",
    content: "entertainment item 146",
  },
  {
    id: 147,
    category: "entertainment",
    content: "entertainment item 147",
  },
  {
    id: 148,
    category: "sports",
    content: "sports item 148",
  },
  {
    id: 149,
    category: "tech",
    content: "tech item 149",
  },
  {
    id: 150,
    category: "tech",
    content: "tech item 150",
  },
  {
    id: 151,
    category: "entertainment",
    content: "entertainment item 151",
  },
  {
    id: 152,
    category: "sports",
    content: "sports item 152",
  },
  {
    id: 153,
    category: "entertainment",
    content: "entertainment item 153",
  },
  {
    id: 154,
    category: "tech",
    content: "tech item 154",
  },
  {
    id: 155,
    category: "sports",
    content: "sports item 155",
  },
  {
    id: 156,
    category: "sports",
    content: "sports item 156",
  },
  {
    id: 157,
    category: "tech",
    content: "tech item 157",
  },
  {
    id: 158,
    category: "sports",
    content: "sports item 158",
  },
  {
    id: 159,
    category: "tech",
    content: "tech item 159",
  },
  {
    id: 160,
    category: "tech",
    content: "tech item 160",
  },
  {
    id: 161,
    category: "entertainment",
    content: "entertainment item 161",
  },
  {
    id: 162,
    category: "entertainment",
    content: "entertainment item 162",
  },
  {
    id: 163,
    category: "sports",
    content: "sports item 163",
  },
  {
    id: 164,
    category: "tech",
    content: "tech item 164",
  },
  {
    id: 165,
    category: "tech",
    content: "tech item 165",
  },
  {
    id: 166,
    category: "entertainment",
    content: "entertainment item 166",
  },
  {
    id: 167,
    category: "entertainment",
    content: "entertainment item 167",
  },
  {
    id: 168,
    category: "sports",
    content: "sports item 168",
  },
  {
    id: 169,
    category: "tech",
    content: "tech item 169",
  },
  {
    id: 170,
    category: "sports",
    content: "sports item 170",
  },
  {
    id: 171,
    category: "entertainment",
    content: "entertainment item 171",
  },
  {
    id: 172,
    category: "tech",
    content: "tech item 172",
  },
  {
    id: 173,
    category: "tech",
    content: "tech item 173",
  },
  {
    id: 174,
    category: "entertainment",
    content: "entertainment item 174",
  },
  {
    id: 175,
    category: "sports",
    content: "sports item 175",
  },
  {
    id: 176,
    category: "tech",
    content: "tech item 176",
  },
  {
    id: 177,
    category: "sports",
    content: "sports item 177",
  },
  {
    id: 178,
    category: "tech",
    content: "tech item 178",
  },
  {
    id: 179,
    category: "tech",
    content: "tech item 179",
  },
  {
    id: 180,
    category: "entertainment",
    content: "entertainment item 180",
  },
  {
    id: 181,
    category: "tech",
    content: "tech item 181",
  },
  {
    id: 182,
    category: "entertainment",
    content: "entertainment item 182",
  },
  {
    id: 183,
    category: "sports",
    content: "sports item 183",
  },
  {
    id: 184,
    category: "entertainment",
    content: "entertainment item 184",
  },
  {
    id: 185,
    category: "sports",
    content: "sports item 185",
  },
  {
    id: 186,
    category: "entertainment",
    content: "entertainment item 186",
  },
  {
    id: 187,
    category: "sports",
    content: "sports item 187",
  },
  {
    id: 188,
    category: "entertainment",
    content: "entertainment item 188",
  },
  {
    id: 189,
    category: "entertainment",
    content: "entertainment item 189",
  },
  {
    id: 190,
    category: "sports",
    content: "sports item 190",
  },
  {
    id: 191,
    category: "tech",
    content: "tech item 191",
  },
  {
    id: 192,
    category: "sports",
    content: "sports item 192",
  },
  {
    id: 193,
    category: "tech",
    content: "tech item 193",
  },
  {
    id: 194,
    category: "entertainment",
    content: "entertainment item 194",
  },
  {
    id: 195,
    category: "sports",
    content: "sports item 195",
  },
  {
    id: 196,
    category: "sports",
    content: "sports item 196",
  },
  {
    id: 197,
    category: "entertainment",
    content: "entertainment item 197",
  },
  {
    id: 198,
    category: "sports",
    content: "sports item 198",
  },
  {
    id: 199,
    category: "tech",
    content: "tech item 199",
  },
  {
    id: 200,
    category: "entertainment",
    content: "entertainment item 200",
  },
];

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
// 设置静态文件目录
server.use('/static', express.static(path.join(__dirname, 'static')));

server.use(router);
// 设置静态文件目录
server.listen(8580, () => {
  console.log("JSON Server is running in port 8580");
});

// Export the Server API
module.exports = server;
