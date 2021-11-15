import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

// import SongList from './SongList';
// import SongDetail from './SongDetail';
import '../App.css';
class Gallery extends Component {
    style = {
        color: 'teal',
        padding: 10,


    }
    imageURL = {
        image1: "https://picsum.photos/200/200?random=1",
        image2: "https://picsum.photos/200/200?random=2",
        image3: "https://picsum.photos/200/200?random=3",
        image4: "https://picsum.photos/200/200?random=4",
        image5: "https://picsum.photos/200/200?random=5",
        image6: "https://picsum.photos/1600/400?random=6",
        image7: "https://picsum.photos/1600/400?random=7",
        image8: "https://picsum.photos/1600/400?random=8",
        image9: "https://picsum.photos/200/200?random=9",
        image10: "https://picsum.photos/200/200?random=10",
        image11: "https://picsum.photos/200/200?random=11",
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img src={this.imageURL.image6}></img>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src={this.imageURL.image7}></img>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={this.imageURL.image8}></img>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h2 className="tech-preview" >Get In Touch With Us!</h2>
                <div style={this.style} className="navbar">
                    <img src={this.imageURL.image1}></img>
                    <img src={this.imageURL.image2}></img>
                    <img src={this.imageURL.image3}></img>
                    <img src={this.imageURL.image4}></img>
                    <img src={this.imageURL.image5}></img>
                    <img src={this.imageURL.image9}></img>
                    <img src={this.imageURL.image10}></img>
                    <img src={this.imageURL.image11}></img>
                </div>

            </div>

        );
    }
}
export default Gallery;