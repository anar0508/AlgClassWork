import React, { Component } from 'react';
import PropType from 'prop-types';
import Email from './email';
import Name from './name';
import Address from './address';
import Card from './card';
import './style.css';




class Profile extends Component {

    static propTypes = {
        profile: PropType.shape({
            email: PropType.string.isRequired,
            name: PropType.arrayOf(PropType.string).isRequired,
            address: PropType.shape({
                index: PropType.string.isRequired,
                nummer: PropType.string.isRequired,
                street: PropType.string.isRequired,
                city: PropType.string.isRequired,
                country: PropType.string.isRequired
            }),
            card: PropType.shape({
                title: PropType.string.isRequired,
                description: PropType.string,
                number: PropType.number.isRequired,
                term: PropType.number.isRequired,
                type: PropType.oneOf(['Debit', 'Credit'])
            })
        })
    }

 

    render() {
            const { email, name, address, card } = this.props.profile;

            return (
                <main >
                    <section className='user'>
                        <img className='foto' src="https://cdn0.iconfinder.com/data/icons/people-12/24/Anonymous-1-512.png" alt="Profile Foto" />
                        <div>
                            <Name name={name} />
                            <Email email={email} />
                            <Address address={address} />
                        </div>
                    </section>
                    <hr />
                    <section className='card'>
                        <h2>Card info</h2>
                        <Card card={card} />
                        <Card />
                    </section>
                </main>
            );
        }
    }
    export default Profile;