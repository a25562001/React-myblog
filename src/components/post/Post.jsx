import React from 'react'
import './post.css'
import PostImg from '../../images/pexels-photo-443446.jpeg'

export default function post() {
    return (
        <div className="post">
            <img className="postImg" src={PostImg} alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente recusandae dignissimos laudantium, facere distinctio totam dolorem hic? Consequatur tempora quod saepe cupiditate distinctio dicta fugit omnis sit sed explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente recusandae dignissimos laudantium, facere distinctio totam dolorem hic? Consequatur tempora quod saepe cupiditate distinctio dicta fugit omnis sit sed explicabo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente recusandae dignissimos laudantium, facere distinctio totam dolorem hic? Consequatur tempora quod saepe cupiditate distinctio dicta fugit omnis sit sed explicabo?
            </p>
        </div>
    )
}
