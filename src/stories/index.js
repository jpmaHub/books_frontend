import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../App';
import Title from '../components/Title';
import Header from '../components/Header';

storiesOf('App', module).add('to Storybook', () => <App/>);

storiesOf('Title', module).add('text', () => <Title/>);

storiesOf('Header', module).add('text', () => <Header/>);