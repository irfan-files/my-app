import React from 'react'
import './css/Blog.css';

const Blog = (props) => {

return <div className="blog-wrap">

<img src="https://placeimg.com/640/480/nature" alt=""/>
<p>{props.Tanggal}</p>
<h2>{props.Judul}</h2>
<p>{props.Summary}</p>

</div>

}

export default Blog;