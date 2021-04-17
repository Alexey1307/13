import React, { Component } from "react";

class TestTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
        console.log(this.state.value); //Здесь надо создавать функцию callback для вывода li.
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <header>Todo list</header>
                <br></br>
                <li className='item' onChange={this.handleChange}>{this.state.value}</li>
                <input type='checkbox' />
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value}
                        onChange={this.handleChange} />
                    <input type='submit' value='Отправить'></input>
                </form>
            </div>

        )
    }
}


export default TestTodo;