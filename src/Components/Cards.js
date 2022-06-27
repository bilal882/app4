import React from 'react';

export default function Cards() {
    return (
        <div>
            <div className="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card m-3 shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title text-shadow">Special title treatment</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad molestias, odio, velit animi quos repellendus pariatur earum debitis harum laboriosam a inventore suscipit iure voluptatem maxime, quia tempora nam?</p>
                                <button class="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card m-3 shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus minus numquam esse corporis. Iusto magni optio delectus quisquam veniam libero adipisci eos officia ipsum quam impedit vero, labore beatae!</p>
                                <button class="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
