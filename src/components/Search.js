import React, { Component } from 'react';
import { Button, Jumbotron, Input, InputGroupAddon, InputGroup } from 'reactstrap';
import { connect } from "react-redux";
import { searchGifs } from "../redux/actions/SearchAction";

class Search extends Component {

    state = {
        searchInput: ''
    };

    search = () => {
        this.props.search(this.state.searchInput);
    };

    getSearchContentRendered = (searchResults) => {
        return searchResults.map((currGif) => (
            <div key={currGif.id}>
                <iframe
                    title={currGif.title}
                    src={currGif.embed_url}
                    width="480"
                    height="270"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen/>
            </div>
        ))
    };

    getContent = () => {
        if (this.props.loading) {
            return (<h3>Loading...</h3>)
        } else if (this.props.searchResults != null && this.props.searchResults.length > 0) {
            return this.getSearchContentRendered(this.props.searchResults);
        } else if ( this.props.error ) {
            return (<h3>Sorry, an error occurred.</h3>)
        }
    };

    inputChangedHandler = (event, inputIdentifier) => {
        this.setState({searchInput: event.target.value,});
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Search Gifs</h1>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <Button color="primary" onClick={this.search}>Search</Button>
                        </InputGroupAddon>
                        <Input
                            placeholder="Search Gifs"
                            type="text"
                            value={this.state.searchInput}
                            onChange={this.inputChangedHandler}
                        />
                    </InputGroup>

                    {this.getContent()}

                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchReducer.searchResults,
        error: state.randomReducer.error,
        loading: state.randomReducer.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        search: (queryString) => dispatch(searchGifs(queryString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
