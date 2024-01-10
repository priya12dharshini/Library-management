import React ,{useState} from 'react'
import Modal from '../modal/Modal'
import './card.css'

const Card = ({ book }) => {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    /*let sale=item.saleInfo.buyLink && item.saleInfo.buyLink.sale;*/
                    if(thumbnail!= undefined && amount!= undefined)
                    {
                        return (
                            <>
                            <div className='card' onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className='bottom'>
                                    <h3 className='title'>{item.volumeInfo.title}</h3>
                                    <p className='amount'>&#8377;{amount}</p>
                                    <p className='amount'>{item.saleInfo.sale}</p>
                                </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)} />
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Card
