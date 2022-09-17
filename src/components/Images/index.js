import { forwardRef, useState } from 'react'
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.Image, ...prop }, ref) => {

    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(customFallback)
    }
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={fallBack || src} alt={alt} {...prop} onError={handleError} />
})

export default Image;