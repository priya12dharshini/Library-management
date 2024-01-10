import React from 'react'
import './modal.css'

const Modal = ({show,item,onClose}) => {
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    /*let sale=item.saleInfo.buyLink && item.saleInfo.buyLink.sale;*/
  return (
    <>
    <div className='overlay'>
        <div className='overlay-inner'>
            <button className='close' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
            <div className='inner-box'>
                <img src={thumbnail} alt="" />
                <div className='info'>
                    <h1>{item.volumeInfo.title}</h1>
                    <h3>{item.volumeInfo.authors}</h3><br/>
                    <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                    <a href={item.volumeInfo.previewLink}><button>More</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a  href={item.saleInfo.buyLink}><button>Add to cart</button></a>
                </div>
            </div>
            <h4 className='description'>{item.volumeInfo.description}
            </h4>
        </div>
    </div>
    </>
  )
}

export default Modal
