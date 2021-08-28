import React from 'react'
import './singlePost.css'
import SinglePostImg from '../../images/pexels-photo-268533.jpeg'

export default function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={SinglePostImg} alt=""/>
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i class="singlePostIcon far fa-edit"></i>
                    <i class="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>John</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tempora nemo expedita eius provident suscipit temporibus, adipisci quibusdam ab maxime quae vero ut pariatur sequi molestiae dolores ducimus, nam explicabo aperiam dolor dolorum? Exercitationem minima tenetur, earum distinctio nobis nam incidunt temporibus at consequuntur. Facere tempora quis deleniti reprehenderit adipisci!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tempora nemo expedita eius provident suscipit temporibus, adipisci quibusdam ab maxime quae vero ut pariatur sequi molestiae dolores ducimus, nam explicabo aperiam dolor dolorum? Exercitationem minima tenetur, earum distinctio nobis nam incidunt temporibus at consequuntur. Facere tempora quis deleniti reprehenderit adipisci!
            </p>
        </div>
    )
}
