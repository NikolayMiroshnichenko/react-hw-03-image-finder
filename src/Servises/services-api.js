import React from "react";

const baseUrl = "https://pixabay.com/api/?key=";
const key = "15017086-40d983aabf64e9bce54bf4312&q=";

export const fearchArticle = (qvery = "cat", page = "1") =>
  fetch(baseUrl + key + qvery + "&page=" + page);
