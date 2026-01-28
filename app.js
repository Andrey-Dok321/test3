'use strict';

fetch('file:///C:/frontend/JS/проект/index.html')
.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        console.log("Произошла ошибка", response.status);
    }
})