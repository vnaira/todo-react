import React, { Component } from 'react';
import styles from './todo.module.css';
import { Container, Row, Col, Button, FormControl, InputGroup } from 'react-bootstrap';
import idGenerator from '../../helpers/idGenerator';
import Task from '../Task/Task';

class ToDo extends Component {
    state = {
        inputValue: '',
        tasks: [],
        selectedTasks: new Set()
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    addTask = () => {
        const inputValue = this.state.inputValue.trim();

        if (!inputValue) {
            return;
        }

        const newTask = {
            _id: idGenerator(),
            title: inputValue
        };


        const tasks = [...this.state.tasks, newTask];


        this.setState({
            tasks,
            inputValue: ''
        });
    };

    deleteTask = (taskId) => {
        const newTasks = this.state.tasks.filter((task) => taskId !== task._id);

        this.setState({
            tasks: newTasks
        });
    };

    toggleTask = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks);
        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId);
        }
        else {
            selectedTasks.add(taskId);
        }

        this.setState({
            selectedTasks
        });
    };


    removeSelected = () => {
        const { selectedTasks, tasks } = this.state;

        const newTasks = tasks.filter((task) => {
            if (selectedTasks.has(task._id)) {
                return false;
            }
            return true;
        });

        this.setState({
            tasks: newTasks,
            selectedTasks: new Set()
        });

    };

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addTask();
        }
    };

    render() {

        const { tasks, inputValue, selectedTasks } = this.state;

        const taskComponents = tasks.map((task) => {

            return (
                <Col
                    key={task._id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <Task 
                    data={task}
                    onToggle = {this.toggleTask}
                    disabled = {!!selectedTasks.size}
                    onDelete = {this.deleteTask}
                    />
                </Col>
            )
        });

        return (
            <div>
                <h2>ToDo List</h2>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={10}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Input your task"
                                    value={inputValue}
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown}
                                    disabled={!!selectedTasks.size}
                                />
                                <InputGroup.Append>
                                    <Button
                                        variant="outline-primary"
                                        onClick={this.addTask}
                                        disabled={!!selectedTasks.size}
                                    >
                                        Add
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Button
                            variant="danger"
                            onClick={this.removeSelected}
                            disabled={!selectedTasks.size}
                        >
                            Delete selected
                        </Button>

                    </Row>

                    <Row>
                        {taskComponents}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ToDo;