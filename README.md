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
