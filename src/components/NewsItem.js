import React from 'react'

export default function NewsItem(props) {

    let {title, content, imageUrl, readMoreUrl, date} = props;

    return (
        <div>
            
                <div class="card text-bg-dark my-1">
                    <div class="overlay" style={{
                        background: " linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 69%), url(" + imageUrl + ')',
                        color: "white",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        paddingTop: "40%;"
                    }}>
                        <h5 class="mx-3">{title}</h5>
                        <em className='mx-3 d-block my-2'>{date.split(",")[1] + ", "+ date.split(",")[0]}</em>
                        {/* <small className='mx-3 diabled'>{date}</small> */}
                        <p class="mx-3 lh-sm">{content.substring(0, 129) + "..."}</p>
                        <a href={readMoreUrl} target="-_blank" className="btn mx-3 mb-3 btn-sm btn-outline-light">Read More</a>
                    </div>
                </div>
            </div>
    )
}
