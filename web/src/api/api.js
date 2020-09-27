import httpUtil from "../utils/httpUtil";

export function getArticleList() {
  return httpUtil({
    method: "get",
    url: "/getArticleList"
  });
}

export function getArticleInfo(params) {
  return httpUtil({
    method: "get",
    url: "/getArticleInfo",
    params
  });
}

export function getTagList() {
  return httpUtil({
    method: "get",
    url: "/getTagList"
  });
}

export function getTagArticle(params) {
  return httpUtil({
    method: "get",
    url: "/getTagArticle",
    params
  });
}