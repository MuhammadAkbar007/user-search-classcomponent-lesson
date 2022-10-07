import React, {Component} from 'react';

class SearchResult extends Component {

    closeSearch = () => {
        this.props.closeSearch()
    }

    render() {
        return (
            <div>
                <div className="row my-5 px-5">
                    <div className="col-md-12 text-center">
                        <div className="card">
                            <div className="card-header">
                                <h3>Your Search Result</h3>
                            </div>
                            <div className="card-body">
                                {this.props.name.map((item, index) =>
                                    <div key={index}>
                                        <hr/>
                                        <p>First name : <span className={'text-danger'}> { item.firstName } </span></p>
                                        <p>Last name : <span className={'text-danger'}> { item.lastName } </span></p>
                                        <p>Age : <span className={'text-danger'}> { item.age } </span></p>
                                        <p>E-mail : <span className={'text-danger'}> { item.mail } </span></p>
                                        <hr/>
                                    </div>
                                )}
                            </div>
                            <div className="card-footer">
                                <button className={'btn btn-dark'} onClick={this.closeSearch}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResult;