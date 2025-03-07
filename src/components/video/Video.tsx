import './Video.css'
import news from "../../assets/video/news1.mp4"

function Video(){
    return (
        <>
            <div className="video">
                <video controls width="100%">
                    <source src={news} type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div>
        </>
    )
}

export default Video;