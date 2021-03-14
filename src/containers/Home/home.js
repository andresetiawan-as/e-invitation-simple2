import React, { useEffect, useState, createRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Home/action'
import './home.scss'
import data from '../../data/data.json'
import { Fade, Zoom } from 'react-reveal';
import HeadShake from 'react-reveal/HeadShake';

import {
    foto1, foto2, foto3, foto4, foto5
} from '../../asset'

const Mockup2 = (props) => {
    const [showVideo, setShowVideo] = useState(false);
    const container = createRef();

    const onVideoIntersection = (entries) => {
        if (!entries || entries.length <= 0) {
            return;
        }

        if (entries[0].isIntersecting) {
            setShowVideo(true);
            videoObserver.disconnect();
        }
    }

    const videoObserver = new IntersectionObserver(onVideoIntersection, {
        rootMargin: '200px 0px',
        threshold: 0.25
    });

    useEffect(() => {
        if (window && 'IntersectionObserver' in window) {
            if (container && container.current) {
                videoObserver.observe(container.current);
            }
        } else {
            setShowVideo(true);
        }

        return () => {

        }
    }, [container])

    return (
        <div>
            <div className="container font-a-b-i">
                <h1>{data.header.title}</h1>
            </div>
            <div className="banner">
                <img
                    className="image"
                    src={foto1}
                    loading="lazy"
                    alt="Legend and Renata"
                />
            </div>
            <div className="couple">
                <div className="bride-groom font-a-b">
                    <Fade left>
                        <h1>{data.couple.groomName}</h1>
                        <section>
                            <h3 className="font-m-r">{data.couple.groom}</h3>
                        </section>
                    </Fade>
                </div>
                <Zoom><h3 className="sign font-a-b">&</h3></Zoom>
                <div className="bride-groom font-a-b">
                    <Fade right>
                        <h1>{data.couple.brideName}</h1>
                        <section>
                            <h3 className="font-m-r">{data.couple.bride}</h3>
                        </section>
                    </Fade>
                </div>
            </div>
            <div className="container-content font-m-r">
                <Fade top>
                    <h3>{data.couple.desription}</h3>
                    <h1 className="font-m-b">{data.moment.holyMatrimonyDate}</h1>
                    <section>
                        <h3>{data.moment.holyMatrimonyTime} for Holy Matrimony & {data.moment.receptionTime} for Reception</h3>
                    </section>
                </Fade>
            </div>
            <div className="container-content font-m-r">
                <h1>Our Gallery</h1>
            </div>
                <div className="image-content-container">
            <Zoom>
                    <div className="image-container-gallery">
                        <div className="image-content-1">
                            <img
                                className="image"
                                src={foto2}
                                loading="lazy"
                                alt="Legend and Renata"
                            />
                        </div>
                        <div className="image-content-2">
                            <img
                                className="image"
                                src={foto3}
                                loading="lazy"
                                alt="Legend and Renata"
                            />
                        </div>
                    </div>
                    <div className="image-content">
                        <img
                            className="image"
                            src={foto4}
                            loading="lazy"
                            alt="Legend and Renata"
                        />
                    </div>
                    <div className="image-container-gallery">
                        <div className="image-content-3">
                            <img
                                className="image"
                                src={foto5}
                                loading="lazy"
                                alt="Legend and Renata"
                            />
                        </div>
                        <div className="image-content-4">
                            <img
                                className="image"
                                src={foto2}
                                loading="lazy"
                                alt="Legend and Renata"
                            />
                        </div>
                    </div>
                    <div className="image-container-gallery">
                        <div className="image-content-5">
                            <img
                                className="image"
                                src={foto3}
                                loading="lazy"
                                alt="Legend and Renata"
                            />
                        </div>
                        <div className="image-content-6">
                            <img
                                className="image"
                                src={foto4}
                                loading="lazy"
                                alt="Legend and Renata"
                            />
                        </div>
                    </div>
            </Zoom>
                </div>
            <div className="container-content font-m-r">
                <Fade top><h1>Live Streaming</h1></Fade>
            </div>
            <div ref={container} className="cotainer-video">
                {
                    showVideo ?
                        <iframe
                            title="Legend and Renata"
                            className="video"
                            src="https://www.youtube.com/embed/KM1jkox1QSI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="allowFullScreen">
                        </iframe>
                        : null
                }
            </div>
            <div className="container-quote font-m-m">
                <HeadShake  >
                    <h1>{data.couple.quotation1}</h1>
                </HeadShake>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    Home: state.Home
})
const mapDispatchToProps = {
    ...actions
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mockup2);