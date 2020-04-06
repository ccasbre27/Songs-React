import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={ song.id }>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () => this.props.selectSong(song) }>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        { song.title }
                    </div>
                </div>
            );
        });
    }

    render() {
        // en un punto en el futuro this.props será igual a lo que devuelve mapStateToProps
        return(
            <div className="ui divided list">
                { this.renderList() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);