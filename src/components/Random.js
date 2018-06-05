import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';
import { fetchRandom } from "../redux/actions/FetchRandomAction";
import { connect } from "react-redux";

class Random extends Component {

    componentDidMount = () => {
        console.log(this.props);

        if (!this.props.error && !this.props.loading && !this.props.gif) {
            this.refresh();
        }
    };

    refresh = () => {
        console.log('refreshing!');
        this.props.refresh();
    };

    getGifContent = () => {
        if (this.props.loading) {
            return (<div><h3>Loading...</h3></div>)
        } else if (this.props.gif) {
            return (
                <div key={this.props.gif.id}>
                    <iframe
                        title={this.props.gif.title}
                        src={this.props.gif.embed_url}
                        width="480"
                        height="270"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen/>
                </div>
            )
        } else if (this.props.error) {
            return (<h3>Sorry, an error occurred.</h3>)
        }
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Random Gif</h1>

                    {this.getGifContent()}

                    <p className="lead">
                        <Button color="primary" onClick={this.refresh}>Show Me Another</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gif: state.randomReducer.gif,
        error: state.randomReducer.error,
        loading: state.randomReducer.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        refresh: () => dispatch(fetchRandom())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
