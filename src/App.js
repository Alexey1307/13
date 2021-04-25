import React, { Component } from "react";

class TestTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleStrikeOut = this.handleStrikeOut.bind(this);
    }

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

    handleRemove(event) {
        const { items } = this.state // берем текущий массив (items: [])
        items.splice(-1); // удаляем элемент
        this.setState({
            items: items, // обновляем state массива
        });
    
    }

    handleStrikeOut(event) {
        event.preventDefault();
        const element = event.target;
        element.classList.toggle("crossed-line");
    }

   
    


    render() {
        
        const { items } = this.state // Получаем список значений

        //Выбираем из списка только те в которых нет чисел
        const items_list_filtered = items.filter(el => !/\d/g.test(el))

        //Создаем из этого списка компоненты
        const items_list = items_list_filtered.map((item, index) =>
            <form onSubmit={this.handleStrikeOut}>
            {/* <li key={index}>{item}</li> */}
                <li key={index}>{item}
                <button type='submit'>Выполнено</button>
                </li>
            
        </form>
        );

        return (
            <div>
                <header>Todo list</header>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value}
                        onChange={this.handleChange} />
                    <button type='submit'>Отправить</button>
                </form>
                <button type='button' onClick={this.handleRemove}>Удалить</button>
                <ul>
                    {items_list}
                </ul>
            </div>

        )
    }
}


export default TestTodo;
