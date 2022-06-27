import React from 'react'

export default function Slider() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> 
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner" style={{ height: "90vh" }}>
                    <div class="carousel-item active">
                        <img src="https://i.pinimg.com/originals/d8/45/84/d84584e64ab8d30cbcbcd19269bd98c7.jpg" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Full-HD-Images.jpg" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Full-HD-Images-For-Desktop.jpg" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://wallpapercave.com/wp/aUdwg3C.jpg" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://wallpapercave.com/wp/5ICcxhE.jpg" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://wallpapercave.com/wp/bo4ZZub.jpg" class="d-block w-100" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
