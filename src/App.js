import React, {Component} from 'react';
import Modal from "./components/Modal";
import SearchResult from "./components/SearchResult";

class App extends Component {
    state = {
        users: [
            {firstName: 'Akbarjon', lastName: 'Ahmadjonov', age: 21, mail: 'fotismenos007@mail.ru'},
            {firstName: 'Ahmadjon', lastName: 'Rahmonov', age: 50, mail: 'ahmadjon@inbox.uz'},
            {firstName: 'Akramjon', lastName: 'Rahimov', age: 42, mail: 'rakurs@gmail.com'},
            {firstName: 'Abrorbek', lastName: 'Malikov', age: 18, mail: 'abrorbek@mail.ru'},
            {firstName: 'Azizbek', lastName: 'Nurmuhammadov', age: 9, mail: 'neo@mail.ru'}
        ],
        modalStatus: false,
        firstName: '',
        lastName: '',
        age: 0,
        mail: '',
        searchStatus: false,
        byName: [],
        clear: ''
    }

    removeUser = (index) => {
        let users1 = this.state.users;
        users1.splice(index, 1)
        this.setState({
            users: users1
        })
    }

    openModal = () => {
        this.setState({modalStatus: true})
    }

    fromInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    saveUser = () => {
        const {users, firstname, lastname, age, mail} = this.state
        let temp = {firstName: firstname, lastName: lastname, age: age, mail: mail}
        users.push(temp)
        this.setState({users, modalStatus: false})
    }

    cancelClicked = () => {
        this.setState({modalStatus: false, firstName: '', lastName: '', age: 0, mail: ''})
    }

    clearStart = () => {
        this.setState({firstName: '', lastName: '', age: 0, mail: ''})
    }

    onSearch = (event) => {
        const nameList = this.state.users.filter(item => {
            return (item.firstName.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0 ||
                item.lastName.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0)
        })
        this.setState({byName: nameList, searchStatus: true, clear: event.target.value})
    }

    closeSearch = () => {
        this.setState({searchStatus: false, byName: [], clear: ''})
    }

    render() {
        return (
            <div>
                <div className="conatainer">
                    {this.state.modalStatus ?
                        <Modal fromInput={this.fromInput} saveUser={this.saveUser}
                               cancelClicked={this.cancelClicked} clear={this.clearStart}/> : ''}
                    <div className="row mt-5 px-5">
                        <div className="col-md-6">
                            <input type="text" placeholder={'Search by firstname or lastname'}
                                   className={'form-control'} onChange={this.onSearch} value={this.state.clear}/>
                        </div>
                        <div className="col-md-6">
                            <button className={'btn btn-success float-end'} onClick={this.openModal}>Add user</button>
                        </div>
                    </div>
                    {this.state.searchStatus ?
                        <SearchResult name={this.state.byName} closeSearch={this.closeSearch}/> : ''}
                    <div className="row mt-3 px-5">
                        <div className="col-md-12">
                            <table className={'table table-dark table-striped table-bordered table-hover text-center'}>
                                <thead className={'text-warning'}>
                                <tr>
                                    <th>N</th>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Age</th>
                                    <th>E-Mail</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.users.map((item, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.mail}</td>
                                        <td>
                                            <button className={'btn btn-danger'}
                                                    onClick={() => this.removeUser(index)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;