import './Complaint.css'
import Book from '/src/assets/img/book.png'

function ComplaintBook() {
    return (
        <>
            <div className="title">
                <img src={Book} alt="Book" />
                <h1>Libro de Reclamaciones</h1>
            </div>
        </>
    )
}

export default ComplaintBook;