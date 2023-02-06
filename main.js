'use strict'

{
    const text = document.getElementsByClassName('text')[0];
    const btn = document.getElementsByClassName('btn')[0];
    const list = document.getElementsByClassName('list')[0];

    // 追加ボタン
    const addtasks = (task) => {
        // 追加処理
        const listItem = document.createElement('li');
        const showItem = list.appendChild(listItem);
        showItem.innerHTML = task;

        // 消去ボタンを付与
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '消去';
        listItem.appendChild(deleteButton);

        // 消去処理を実行
        deleteButton.addEventListener('click', evt => {
            evt.preventDefault();
            deleteTasks(deleteButton);
        });
    };

        // 消去ボタンに機能を付与
        const deleteTasks = (deleteButton) => {
            const chosenTask = deleteButton.closest('li');
            list.removeChild(chosenTask);
        };

        // 追加ボタンに機能を付与
        btn.addEventListener('click', evt => {
            evt.preventDefault();
            const task = text.value;
            addtasks(task);
            text.value = '';
        });
}