# -Hexschool-2024-React-homework-w2

【六角學院】2024 React 直播冬季班 第二週作業-RESTful API 串接
<br><br>

<hr>

## 透過 vite 建立 React 專案

```
npm create vite@latest
```

```
npm install
npm run dev
```

<br>

## 安裝 Bootstrap、axios

```
npm i bootstrap@5.3.3 axios
```

<br>

### 在進入點引入 Bootstrap

```
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 CSS
```

<br>
<hr>
<br>

### 設定表單狀態

登入 API 需要帶兩個欄位 username 以及 password

```
{
  username: "example@test.com",
  password: "example"
}
```

1. 設定一個 account 狀態
2. 綁定 value
3. 在 input 監聽 onChange 事件
4. 撰寫當 input 值發生改變時要觸發的函式
   (透過在 input 設定 name 屬性，用以更改相對應欄位的狀態)

<br>
<hr>
<br>

### 監聽表單提交

1. 對 form 標籤監聽 onSubmit 事件
2. 撰寫 onSubmit 要觸發的函式（拿到 account 並戳登入 API）

NOTE：透過表單觸發 submit 事件要記得使用 `event.preventDefault()` 取消 form 表單的預設行為

<br>
<hr>
<br>

## 串 API 前置作業

### 在 .env 檔設定環境變數

1. 在根目錄下新增 .env
2. 設定兩個環境變數：

- VITE_BASE_URL
- VITE_API_PATH

```
VITE_BASE_URL=https://ec-course-api.hexschool.io
```

NOTE：Vite 環境變數需以 VITE\_ 開頭命名

### 在專案中使用環境變數

```
import.meta.env.VITE_BASE_URL
```

<br>
<hr>
<br>

### 登入頁面

串接 API - 登入

1. 將表單資料發送到後端（戳登入 API）
2. 若登入成功，將 token 存進 cookie。若失敗則提示使用者登入失敗
3. 登入成功後跳轉到後台（使用三元運算子切換）

**如何將 token 存進 cookie？**

```
document.cookie = `hexToken=xxxxxx; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
```

<br>
<hr>
<br>

## 產品頁面（後台）

### 串接 API - 取得產品資料

1. 進到頁面後就戳 API
2. 整合第一週的模板

**token 怎麼帶？**

```
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```
