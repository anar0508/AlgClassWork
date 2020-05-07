import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [
                'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1587567132533-50ab056caa59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1587528085017-f961fbd71b3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1562887245-f2d5024f6134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1587560436460-a3b4b704185d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            picture: 'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            active: '0'
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeypress);
    }

    showPreviousPicture = () => {
        const link = this.state.picture;
        const index = this.state.pictures.findIndex(pic => pic === link);
        if (index === 0) {
            this.setState({ picture: this.state.pictures[0], active: '0'})
        } else {
            this.setState({ picture: this.state.pictures[index - 1], active: index-1 })
        }
    }

    showNextPicture = () => {
        const link = this.state.picture;
        const index = this.state.pictures.findIndex(pic => pic === link);

        if (index === this.state.pictures.length - 1) {
            this.setState({ picture: this.state.pictures[this.state.pictures.length - 1], active: (this.state.pictures.length - 1).toString() })
        } else {

            this.setState({ picture: this.state.pictures[index + 1], active: index+1 })
        }
    }

    showCurrentPicture = (e) => {
        const index = e.target.innerText-1;
        this.setState({ picture: this.state.pictures[index], active: index });
    }

    handleKeypress = (e) => {
        if (e.keyCode === 37) {
            this.showPreviousPicture();
        }
        else if (e.keyCode === 39) {
            this.showNextPicture();
        }
    }

    componentWillUnmount = () => {
        window.removeEventListener('keypress', this.handleKeypress);
    }

    render() {
        return (
            <div className="container">
                <div className='image'>
                    <img src={this.state.picture} alt="Picture" />
                    <p> </p>
                </div>
                <div className="buttons">
                    <button onClick={this.showPreviousPicture}>Previous</button>
                    <button className={this.state.active == "0" ? "active" : null} onClick={this.showCurrentPicture}>1</button>
                    <button className={this.state.active == "1" ? "active" : null} onClick={this.showCurrentPicture}>2</button>
                    <button className={this.state.active == "2" ? "active" : null} onClick={this.showCurrentPicture}>3</button>
                    <button className={this.state.active == "3" ? "active" : null} onClick={this.showCurrentPicture}>4</button>
                    <button className={this.state.active == "4" ? "active" : null} onClick={this.showCurrentPicture}>5</button>
                    <button onClick={this.showNextPicture}>Next</button>
                </div>
            </div>
        );
    }
}

export default Slider;
