import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {fetchIndexData} from '../modules/index'

export const Index = ({
    onClickPost,
    changeContentId,
}) => {
    // const info = localStorage.getItem("info");
    // const localInput = info ? JSON.parse(info) : console.log("error: localstrage is null");

    // const apiUrl = `https://jirei-seido-api.mirasapo-plus.go.jp/supports?limit=100&stage_category=${localInput.stage.id}&industry_category=${localInput.industry.id}&prefecture.name=${localInput.prefecture.name}`;

    // const [posts, setPosts] = useState([])
    // const initialPosts = [];
    // let postJson = {};

    // useEffect(() => {
    //     axios.get(apiUrl)
    //     .then(res => {
    //         res.data.items.forEach((result) => {
    //             postJson = {id: result.id, title: result.title, authority: result.competent_authorities[0].name};
    //             initialPosts.push(postJson);
    //         })
    //         // const response = res.data.title;
    //         // console.log(response);
    //         setPosts(initialPosts)
    //     });
    // }, []);

    useEffect(() => {
        fetchIndexData()
    }, [])

    const state = useSelector(state => state)

    return (
        <div className="index-container">
            {state.loading ? (
                    <a>loading... .... ..... ...</a>
                ) : (
                    state.post.map(post => (
                        <div
                        className="posts-index-item"
                        onClick={() => {changeContentId(post.id); onClickPost();}}
                        >
                            <a className="post-title">{post.title}</a> <br></br>
                            <div className="post-footer">
                                <p className="post-letter">{post.authority}</p>
                                <ArrowForwardIcon
                                className="post-icon"></ArrowForwardIcon>
                            </div>
                        </div>
                        )
                        )
                )
            }
        </div>
    );
}