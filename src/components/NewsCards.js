import '../styles/NewsCards.css'
import React from 'react';
export default class NewsCards extends React.Component {
    render() {
        return (
            <div className='cardsNews' id='news'>
                <div className="container">
                    <div className="card">
                        <div className="card__header">
                            <img src="../images/iron-man-mark-xlvii_marvel_silo.png" alt="card__image" className="card__image" width="600" />
                        </div>
                        <div className="card__body">
                            <h4>ABOUT THIS SIXTH SCALE FIGURE</h4>
                            <p>Taking design inspiration toward the futuristic and aerodynamic aesthetic, Hot Toys’ Neon Tech series has skillfully recreated the signature and breathtaking armors that appear in MCU and merged them with glowing neon works. Sideshow and Hot Toys present the exciting Neon Tech Iron Man 4.0 Sixth Scale Collectible Figure as Hot Toys 2021 Toy Fair Exclusive item!</p>
                        </div>
                        <div className="card__footer">
                            <div className="user">
                                <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                                <div className="user__info">
                                    <h5>Jane Doe</h5>
                                    <small>2h ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src="../images/iron-man-neon-tech-40__silo.png" alt="card__image" className="card__image" width="600" />
                        </div>
                        <div className="card__body">
                            <h4>ABOUT THIS SIXTH SCALE FIGURE</h4>
                            <p>With remarkable movie-accuracy, the sixth scale diecast figure standing approximately 32cm tall features the streamlined armor painted in metallic red and gold colors with a distinctive two-toned silver color around the mid-section. This figure includes LED light-up functions scattered throughout the armor, a newly painted Tony Stark head sculpt, an interchangeable LED light-up helmeted head, an interchangeable empty helmet emulating the suit in remote control mode, highly detailed accessories including a pair of glasses wearable on Tony’s head sculpt, mini-repulsors deployer with two articulated mini-repulsors, thrust fire effect parts, and a specially designed figure stand.</p>
                        </div>
                        <div className="card__footer">
                            <div className="user">
                                <img src="https://i.pravatar.cc/40?img=2" alt="user__image" className="user__image" />
                                <div className="user__info">
                                    <h5>Jony Doe</h5>
                                    <small>Yesterday</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__header">
                            <img src="../images/neon-tech-iron-man-20-sixth-scale-figure_marvel_silo.png" alt="card__image" className="card__image" width="600" />
                        </div>
                        <div className="card__body">
                            <h4>ABOUT THIS SIXTH SCALE FIGURE</h4>
                            <p>With a continuous and steady glow, neon provides a mixture of kinetic feel and seductive allure that inspires contemporary artworks. To examine the fascinating phenomenon of fluorescent shade from diverse perspectives, Hot Toys uses imagination to deliberately explore new possibilities of creativity. </p>
                        </div>
                        <div className="card__footer">
                            <div className="user">
                                <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className="user__image" />
                                <div className="user__info">
                                    <h5>John Doe</h5>
                                    <small>2d ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
