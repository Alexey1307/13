import React, { Component } from "react";

class TestTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: [] // добавляем в стейт пустой массив данных
        };

        // Синтаксис bind: let boundFunc = func.bind(context), context = this.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Свойство event.target содержит элемент, на котором сработало событие.
    //Тоесть тут -> {event.target.value} сказано:
    //Событие-event(.точка)элемент на котором произошло событие-target(.точка)значение элемента-value.

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault(); // Отключаем стандартное поведение submit html
        const { items, value } = this.state // берем текущий массив (items: []), и  value - значение инпута
        let newItems = [...items, value] // добавляем значение инпута в конец массива
        this.setState({
            items: newItems, // обновляем state массива
            value: `` // Очищаем инпут, так как нам больше не нужно то, что там введено
        });
    }

    render() {

        const { items } = this.state // Получаем список значений
        let items_list

        //Создаем из этого списка компоненты
        // Краткий вариант:
        items_list = items.map((item, index) =>
            <li key={index}>{item}</li>)

        //Подробный вариант (код идентичен краткому варианту):
        // items_list = []
        // items.forEach(function (item, index) {
        //     items_list.push(
        //         <li key={index}>{item}</li>
        //     )
        // })

        return (
            <div>
                <header>Todo list</header>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value}
                        onChange={this.handleChange} />
                    <button type='submit'>Отправить</button>
                </form>
                <ul>
                    {items_list}
                </ul>
            </div>

        )
    }
}


export default TestTodo;