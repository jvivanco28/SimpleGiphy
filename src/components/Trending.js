import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingGifs } from "../redux/actions/FetchTrendingAction";
import { Button } from 'reactstrap';

class Trending extends Component {

    componentDidMount = () => {
        if ( !this.props.error && !this.props.loading && this.props.trendingGifs.length === 0 ) {
            this.refresh();
        }
    };

    refresh = () => {
        this.props.refresh();
    };

    getTrendingContentRendered = (trendingList) => {
        return trendingList.map((currGif) => (
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
        } else if (this.props.trendingGifs != null && this.props.trendingGifs.length > 0) {
            return this.getTrendingContentRendered(this.props.trendingGifs);
        } else if ( this.props.error ) {
            return (<h3>Sorry, an error occurred.</h3>)
        }
    };

    render() {
        return (
            <div>
                <h1>Trending</h1>
                <Button color="primary" onClick={this.refresh}>Refresh</Button>
                {this.getContent()}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        trendingGifs: state.trendingReducer.trendingGifs,
        error: state.trendingReducer.error,
        loading: state.trendingReducer.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        refresh: () => dispatch(fetchTrendingGifs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);