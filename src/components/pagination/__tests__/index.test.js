import React from 'react'
import ReactDOM from 'react-dom';
import Pagination from '../index';
import {  cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders Pagination OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination allRecipes ={
        [{
            "likes": [],
            "comments": [],
            "_id": "60395558ace4ec013995d271",
            "recipeName": "234234",
            "ingredients": "[{\"ingredientName\":\"Mushroom\",\"quantity\":\"4\",\"type\":\"grams\"}]",
            "prepTime": "23",
            "cookTime": "33",
            "directions": "[{\"stepData\":\"wewewewewewe\"}]",
            "difficulty": "6",
            "creatorId": "600f09419be07a2598dc4f21",
            "category": "sandwiches",
            "description": "fsdkf ;lskdf ;lskdf ;lskdf ;lskdf;ldskf ;lskdls dk;lf",
            "image": "https://res.cloudinary.com/recepsbg/image/upload/v1614370135/recipes/image-1614370133901.gif.gif",
            "__v": 0
        }]
    }/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
    const three = renderer.create(<Pagination allRecipes={
        [{
            "likes": [],
            "comments": [],
            "_id": "60395558ace4ec013995d271",
            "recipeName": "234234",
            "ingredients": "[{\"ingredientName\":\"Mushroom\",\"quantity\":\"4\",\"type\":\"grams\"}]",
            "prepTime": "23",
            "cookTime": "33",
            "directions": "[{\"stepData\":\"wewewewewewe\"}]",
            "difficulty": "6",
            "creatorId": "600f09419be07a2598dc4f21",
            "category": "sandwiches",
            "description": "fsdkf ;lskdf ;lskdf ;lskdf ;lskdf;ldskf ;lskdls dk;lf",
            "image": "https://res.cloudinary.com/recepsbg/image/upload/v1614370135/recipes/image-1614370133901.gif.gif",
            "__v": 0
        }]
    }/>).toJSON();
    expect(three).toMatchSnapshot()
});