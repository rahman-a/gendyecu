import React, {useEffect, useState} from 'react';
import style from './style.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Copy, Check, Upload} from '../../icons'
import {Loader, SideAlert, BackButton} from '../../components'
import actions from '../../actions';
import constants from '../../constants';
import ProductData from './ProductData';
import ProductOptions from './ProductOptions'

const Product = () => {
    const [isCopied, setIsCopied] = useState(false)
    const dispatch = useDispatch()
    const {loading, error, product} = useSelector(state => state.getProduct)
    const {loading:image_loading, error:image_error, message} = useSelector(state => state.editProductImage)

    const {id} = useParams()
    
    const dateOptions = {
        month:'long',
        year:'numeric',
        day:'numeric'
    }

    const changeImageHandler = e => {
        
        if(e.target.files[0]) {
            const data = new FormData()
            data.append('image', e.target.files[0])
            dispatch(actions.products.updateProductImage(product._id, data))
        }
    }
    
    const onCopyHandler = _ => {
        setIsCopied(true) 
        setTimeout(() => {
        setIsCopied(false)
        },500)
    }
 
    useEffect(() => {
        id && dispatch(actions.products.getOneProduct(id))
        return () => {
            dispatch({type: constants.products.EDIT_IMAGE_RESET})
            dispatch({type: constants.products.EDIT_PRODUCT_RESET})
            dispatch({type: constants.products.DELETE_PRODUCT_RESET})
        }
    },[id])
    
    return <div className={style.product}>
        
        <BackButton page='products' title='products'/>


        <SideAlert
            type='danger'
            text={error}
            isOn={error ? true : false} 
        />

        <SideAlert
            type='danger'
            text={image_error}
            isOn={image_error ? true : false} 
        />

        <SideAlert
            type='success'
            text={message}
            isOn={message ? true : false} 
        />
        
        <div className="container">
            <div className={style.product__wrapper}>
                {
                    loading 
                    ? <Loader size='8' center options={{animation:'border'}}/>
                    : product && 
                    <>  
                        <div className={style.product__header}> 
                            <h1> {product.name} </h1>
                            <p> <strong> product id: </strong> 
                                {product._id}
                                <CopyToClipboard text={product._id}
                                onCopy={onCopyHandler}>
                                    <span className={style.product__header_copy}>
                                        {
                                            isCopied 
                                            ? <Check/>  
                                            : <Copy/> 
                                        }
                                        
                                    </span>
                                </CopyToClipboard>
                            </p>
                            <span  className={style.product__header_date}> 
                                created At: {new Date(product.createdAt).toLocaleDateString('en-US', dateOptions)} 
                            </span>
                        </div>

                        <div className={style.product__body}> 
                            <div className={style.product__content}>
                                <ProductData data={product}/>
                                <ProductOptions data={product}/>
                            </div>
                            <figure className={style.product__image}>
                                <div className={style.product__image_backdrop}
                                style={{display: image_loading && 'block'}}>
                                    
                                    <label htmlFor="product-image">
                                       {
                                           image_loading 
                                           ? <Loader size='5' center options={{animation:'border'}}/>
                                           : 
                                           <>
                                             <span> <Upload/> </span>
                                             <span> upload a new image </span>
                                           </>
                                       } 
                                        
                                    </label>

                                    <input 
                                    type="file" 
                                    id='product-image' 
                                    onChange={changeImageHandler}
                                    style={{display:'none'}}/>

                                </div>
                                <img src={`/api/images/${product.image}`} alt={product.name} />
                            </figure>
                        </div>
                    </>
                }
                
            </div>
        </div>
    </div>;
};

export default Product;
