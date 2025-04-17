const Modal = ({ setOpen }) => {
    return <div className="position-fixed vh-100 vw-100 bg-opacity-50 bg-light d-flex justify-content-center align-items-center">
        <button className="btn btn-danger" onClick={() => setOpen(false)}>Close</button>
        <div className="bg-dark" style={{ width: "400px", height: "400px" }}>Modal</div>
    </div>
}

export default Modal