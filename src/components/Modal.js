import React, {Component} from 'react';

class Modal extends Component {

    componentWillUnmount() {
        this.props.clear()
    }

    fromInput = (event) => {
        this.props.fromInput(event)
    }

    saveUser = () => {
        this.props.saveUser()
    }

    cancelClicked = () => {
        this.props.cancelClicked()
    }

    render() {
        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-md-12 px-5 my-5">
                        <div className="card mt-3">
                            <div className="card-header text-center">
                                <h3>Add User</h3>
                            </div>
                            <div className="card-body">
                                <div className={'form-group'}>
                                    <input type="text" className={'form-control mb-3'} placeholder={'First name'}
                                           name={'firstname'} onChange={this.fromInput}/>
                                    <input type="text" className={'form-control mb-3'} placeholder={'Last name'}
                                           name={'lastname'} onChange={this.fromInput}/>
                                    <input type="number" className={'form-control mb-3'} placeholder={'Age'}
                                           name={'age'} onChange={this.fromInput}/>
                                    <input type="email" className={'form-control mb-3'} placeholder={'E-mail'}
                                           name={'mail'} onChange={this.fromInput}/>
                                </div>
                            </div>
                            <div className="card-footer px-5">
                                <button className={'btn btn-info'} onClick={this.saveUser}>Save</button>
                                <button className={'btn btn-warning float-end'} onClick={this.cancelClicked}>Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;